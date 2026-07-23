const SUPABASE_URL =
    "https://otuhklirupbobenapyhc.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_sCtyxeGHVbXiAjdVd2Gp8A_yYCLh5Yf";

const diawlalSupabase =
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_PUBLISHABLE_KEY
    );

window.diawlalSupabase = diawlalSupabase;


/*
=========================================
BOUTON DÉCONNEXION AUTOMATIQUE
=========================================
*/

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const pageActuelle =
            window.location.pathname
                .split("/")
                .pop()
            || "index.html";

        const pagesPubliques = [
            "index.html",
            "connexion.html",
            "inscription.html",
            "contact.html",
            "services.html"
        ];

        if (
            pagesPubliques.includes(
                pageActuelle
            )
        ) {
            return;
        }

        const menu =
            document.querySelector(".menu");

        if (!menu) {
            return;
        }

        if (
            menu.querySelector(
                ".deconnexion"
            )
        ) {
            return;
        }

        const bouton =
            document.createElement(
                "button"
            );

        bouton.type = "button";
        bouton.className =
            "deconnexion";
        bouton.textContent =
            "Déconnexion";

        bouton.style.padding =
            "9px 10px";

        bouton.style.color =
            "white";

        bouton.style.background =
            "transparent";

        bouton.style.border =
            "none";

        bouton.style.borderRadius =
            "8px";

        bouton.style.fontSize =
            "15px";

        bouton.style.fontWeight =
            "700";

        bouton.style.cursor =
            "pointer";

        bouton.addEventListener(
            "click",
            async function () {

                bouton.disabled = true;

                bouton.textContent =
                    "Déconnexion...";

                const {
                    error
                } =
                    await window
                        .diawlalSupabase
                        .auth
                        .signOut();

                if (error) {

                    bouton.disabled =
                        false;

                    bouton.textContent =
                        "Déconnexion";

                    alert(
                        "Erreur : "
                        + error.message
                    );

                    return;
                }

                window.location.href =
                    "connexion.html";
            }
        );

        menu.appendChild(bouton);
    }
);