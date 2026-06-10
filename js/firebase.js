import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";

import {
    getFirestore,
    collection,
    addDoc,
    serverTimestamp,
    query,
    where,
    getDocs
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyARmEdekRrYz48-iKjKALWsHoTZVeVMOAA",
    authDomain: "convite-aniversario-9398f.firebaseapp.com",
    projectId: "convite-aniversario-9398f",
    storageBucket: "convite-aniversario-9398f.firebasestorage.app",
    messagingSenderId: "697178657589",
    appId: "1:697178657589:web:65a3ed09e68c7d3e8af27c",
    measurementId: "G-CB7J1G9XR2"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export async function salvarConfirmacao(
    nome,
    telefone,
    presenca,
    acompanhantes
) {

    try {

        const confirmacoesRef =
            collection(
                db,
                "confirmacoes"
            );

        const consulta =
            query(
                confirmacoesRef,
                where(
                    "telefone",
                    "==",
                    telefone
                )
            );

        const resultado =
            await getDocs(
                consulta
            );

        if (
            !resultado.empty
        ) {

            alert(
                "Este telefone já confirmou presença."
            );

            return;
        }

        await addDoc(
            confirmacoesRef,
            {
                nome,
                telefone,
                presenca,
                acompanhantes,
                criadoEm:
                    serverTimestamp()
            }
        );

        alert(
            "Presença confirmada com sucesso! 🎉"
        );
    } catch (error) {

        console.error(error);

        alert(error.message);
    }

}

