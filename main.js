document.addEventListener("DOMContentLoaded", () => {
    const junc = document.getElementById("jung");
    if (junc) {
        junc.addEventListener("click", () => {
            window.location.href = "carlJung.html";
        });
    }

    const frec = document.getElementById("freud");
    if (frec) {
        frec.addEventListener("click", () => {
            window.location.href = "sigmundFreud.html";
        });
    }

    const homeb = document.getElementById("homeb");
    if (homeb) {
        homeb.addEventListener("click", () => {
            window.location.href = "index.html";
        });
    }
});
