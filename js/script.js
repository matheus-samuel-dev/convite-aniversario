import { salvarConfirmacao } from "./firebase.js";

const form =
    document.getElementById("rsvp-form");

const addBtn =
    document.getElementById("add-companion");

const container =
    document.getElementById(
        "companions-container"
    );

let acompanhantes = [];

addBtn.addEventListener("click", () => {

    const wrapper =
        document.createElement("div");

    wrapper.classList.add(
        "companion-wrapper"
    );

    const input =
        document.createElement("input");

    input.type = "text";

    input.placeholder =
        "Nome do acompanhante";

    input.classList.add(
        "companion-input"
    );

    const removeBtn =
        document.createElement("button");

    removeBtn.type = "button";

    removeBtn.textContent =
        "❌";

    removeBtn.classList.add(
        "remove-companion"
    );

    removeBtn.addEventListener(
        "click",
        () => {

            wrapper.remove();

        }
    );

    wrapper.appendChild(input);

    wrapper.appendChild(removeBtn);

    container.appendChild(wrapper);

});

form.addEventListener(
    "submit",
    async (e) => {

        e.preventDefault();

        const nome =
            document.getElementById("nome").value;

        const telefone =
            document.getElementById("telefone").value;

        const presenca =
            document.querySelector(
                'input[name="presenca"]:checked'
            ).value === "sim";

        acompanhantes = [];

        document
            .querySelectorAll(
                ".companion-input"
            )
            .forEach(input => {

                if (
                    input.value.trim()
                ) {

                    acompanhantes.push(
                        input.value.trim()
                    );
                }
            });

        try {

            await salvarConfirmacao(
                nome,
                telefone,
                presenca,
                acompanhantes
            );

            form.reset();

            container.innerHTML =
                "<h3>Acompanhantes</h3>";

            document
                .getElementById(
                    "success-message"
                )
                .style.display =
                "block";

        } catch (error) {

            console.error(error);

            alert(
                "Erro ao salvar confirmação."
            );
        }
    }
);

const shareBtn =
    document.getElementById(
        "share-btn"
    );

shareBtn.addEventListener(
    "click",
    async () => {

        const mensagem = `🎉 Você está convidado!

Venha comemorar o aniversário de 2 anos do Vicenzo 🐮🐷🐔

📅 Data: 25 de julho de 2026
🕐 Horário: 12h
📍 Churrasqueira Condomínio Torre Blanca
📍 Avenida Braz Leme, 2241 – São Paulo/SP

✅ Confirme sua presença através do convite digital.

Será uma alegria celebrar esse momento especial com você! ❤️`;

        try {

            if (navigator.share) {

                await navigator.share({

                    title:
                        "Aniversário do Vicenzo",

                    text:
                        mensagem,

                    url:
                        "https://convite-aniversario-9398f.web.app"

                });

            } else {

                const whatsappUrl =
                    `https://wa.me/?text=${encodeURIComponent(mensagem)}`;

                window.open(
                    whatsappUrl,
                    "_blank"
                );
            }

        } catch (error) {

            console.error(
                "Erro ao compartilhar:",
                error
            );

            const whatsappUrl =
                `https://wa.me/?text=${encodeURIComponent(mensagem)}`;

            window.open(
                whatsappUrl,
                "_blank"
            );
        }
    }
);