import { initializeApp }
    from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";

import {
    getAuth,
    onAuthStateChanged,
    signOut
}
    from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

import {
    getFirestore,
    collection,
    onSnapshot,
    deleteDoc,
    doc
}
    from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

const firebaseConfig = {

    apiKey: "AIzaSyARmEdekRrYz48-iKjKALWsHoTZVeVMOAA",

    authDomain:
        "convite-aniversario-9398f.firebaseapp.com",

    projectId:
        "convite-aniversario-9398f",

    storageBucket:
        "convite-aniversario-9398f.firebasestorage.app",

    messagingSenderId:
        "697178657589",

    appId:
        "1:697178657589:web:65a3ed09e68c7d3e8af27c"

};

const app =
    initializeApp(firebaseConfig);

const auth =
    getAuth(app);

const db =
    getFirestore(app);

onAuthStateChanged(
    auth,
    (user) => {

        if (!user) {

            window.location.href =
                "../login.html";

        }

    }
);

const guestList =
    document.getElementById(
        "guest-list"
    );

const searchInput =
    document.getElementById(
        "search"
    );

const exportButton =
    document.getElementById(
        "export-btn"
    );

const logoutButton =
    document.getElementById(
        "logout-btn"
    );

const totalConfirmados =
    document.getElementById(
        "total-confirmados"
    );

const totalAcompanhantes =
    document.getElementById(
        "total-acompanhantes"
    );

const totalGeral =
    document.getElementById(
        "total-geral"
    );

const taxaPresenca =
    document.getElementById(
        "taxa-presenca"
    );

const chartCanvas =
    document.getElementById(
        "presencaChart"
    );

let convidadosCSV = [];

let presencaChart = null;

onSnapshot(
    collection(db, "confirmacoes"),

    (snapshot) => {

        guestList.innerHTML = "";

        convidadosCSV = [];

        let convidados = 0;

        let acompanhantes = 0;

        let confirmados = 0;

        let naoComparecerao = 0;

        snapshot.forEach((documento) => {

            const dados =
                documento.data();

            if (dados.presenca) {
                confirmados++;
            }

            else {
                naoComparecerao++;
            }

            const dataFormatada =
                dados.criadoEm
                    ? dados.criadoEm
                        .toDate()
                        .toLocaleDateString("pt-BR") +
                    " às " +
                    dados.criadoEm
                        .toDate()
                        .toLocaleTimeString(
                            "pt-BR",
                            {
                                hour: "2-digit",
                                minute: "2-digit"
                            }
                        )
                    : "Data indisponível";

            convidadosCSV.push({
                nome: dados.nome,
                telefone: dados.telefone,
                presenca: dados.presenca,
                acompanhantes:
                    (dados.acompanhantes || [])
                        .join(" | ")
            });

            const acompanhantesLista =
                (dados.acompanhantes || [])
                    .map(nome => `• ${nome}`)
                    .join("<br>");

            convidados++;

            acompanhantes += (dados.acompanhantes || []).length;

            const item =
                document.createElement("div");

            item.classList.add(
                "guest-card"
            );

            item.innerHTML = `
    <h3>${dados.nome}</h3>

    <p>
        📞 ${dados.telefone}
    </p>

    <p>
    📅 ${dataFormatada}
    </p>

    <p>
        ${dados.presenca
                    ? "✅ Confirmado"
                    : "❌ Não comparecerá"
                }
    </p>

   <p>
    👥 ${(dados.acompanhantes || []).length}
    acompanhante(s)
</p>



${acompanhantesLista ? `
    <div class="companions-list">
        <strong>Acompanhantes</strong>
        <p>${acompanhantesLista}</p>
    </div>
` : ""}

<button
    class="delete-btn"
    data-id="${documento.id}"
>
    🗑 Excluir
</button>
`;

            const filtro =
                searchInput.value
                    .toLowerCase();

            const nome =
                dados.nome
                    .toLowerCase();

            if (
                !nome.includes(filtro)
            ) {
                return;
            }

            guestList.appendChild(item);

            const deleteButton =
                item.querySelector(
                    ".delete-btn"
                );

            deleteButton.addEventListener(
                "click",
                async () => {

                    const confirmar =
                        confirm(
                            `Deseja excluir ${dados.nome}?`
                        );

                    if (!confirmar) {

                        return;

                    }

                    try {

                        await deleteDoc(
                            doc(
                                db,
                                "confirmacoes",
                                documento.id
                            )
                        );

                        alert(
                            "Convidado removido com sucesso!"
                        );

                    } catch (erro) {

                        console.error(erro);

                        alert(
                            "Erro ao excluir convidado."
                        );

                    }

                }
            );

        });

        totalConfirmados.textContent =
            convidados;

        totalAcompanhantes.textContent =
            acompanhantes;

        totalGeral.textContent =
            convidados + acompanhantes;

        const percentual =
            convidados > 0
                ? Math.round(
                    (confirmados / convidados) * 100
                )
                : 0;

        taxaPresenca.textContent =
            `${percentual}%`;

        if (presencaChart) {

            presencaChart.destroy();

        }

        presencaChart =
            new Chart(
                chartCanvas,
                {
                    type: "doughnut",

                    data: {

                        labels: [
                            "Confirmados",
                            "Não Comparecerão",
                            "Acompanhantes"
                        ],

                        datasets: [
                            {
                                data: [
                                    confirmados,
                                    naoComparecerao,
                                    acompanhantes
                                ]
                            }
                        ]
                    },

                    options: {

                        responsive: true,

                        plugins: {

                            legend: {
                                position: "bottom"
                            }

                        }

                    }

                }
            );

    }
);

searchInput.addEventListener(
    "input",
    () => {

        const cards =
            document.querySelectorAll(
                ".guest-card"
            );

        const filtro =
            searchInput.value
                .toLowerCase();

        cards.forEach(card => {

            const texto =
                card.textContent
                    .toLowerCase();

            card.style.display =
                texto.includes(filtro)
                    ? "block"
                    : "none";

        });

    }
);

exportButton.addEventListener(
    "click",
    () => {

        let csv =
            "Nome;Telefone;Presenca;Acompanhantes\n";

        convidadosCSV.forEach(
            convidado => {

                csv +=
                    `"${convidado.nome}";` +
                    `"${convidado.telefone}";` +
                    `"${convidado.presenca ? "Sim" : "Nao"}";` +
                    `"${convidado.acompanhantes}"\n`;

            }
        );

        const blob =
            new Blob(
                [csv],
                {
                    type:
                        "text/csv;charset=utf-8;"
                }
            );

        const url =
            URL.createObjectURL(
                blob
            );

        const link =
            document.createElement(
                "a"
            );

        link.href = url;

        const agora =
            new Date();

        const dia =
            String(agora.getDate())
                .padStart(2, "0");

        const mes =
            String(agora.getMonth() + 1)
                .padStart(2, "0");

        const ano =
            agora.getFullYear();

        const hora =
            String(agora.getHours())
                .padStart(2, "0");

        const minuto =
            String(agora.getMinutes())
                .padStart(2, "0");

        const segundo =
            String(agora.getSeconds())
                .padStart(2, "0");

        link.download =
            `lista-de-presencas-vicenzo-${dia}-${mes}-${ano}_${hora}-${minuto}-${segundo}.csv`;

        link.click();

    }
);

logoutButton.addEventListener(
    "click",

    async () => {

        await signOut(auth);

        window.location.href =
            "../login.html";

    }
);