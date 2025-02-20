document.addEventListener("DOMContentLoaded", function() {
    console.log("🔄 DOM carregado!");

    const openBtn = document.getElementById("openBtn");
    const closeBtn = document.getElementById("closeBtn");
    const popup = document.getElementById("popup");

    console.log("🔍 openBtn encontrado?", openBtn !== null);
    console.log("🔍 closeBtn encontrado?", closeBtn !== null);
    console.log("🔍 popup encontrado?", popup !== null);

    if (!openBtn || !closeBtn || !popup) {
        console.error("❌ Um dos elementos está faltando no HTML!");
        return;
    }

    openBtn.addEventListener("click", function() {
        console.log("✅ Botão de abrir clicado!");
        popup.classList.remove("hidden"); 
    });

    closeBtn.addEventListener("click", function() {
        console.log("✅ Botão de fechar clicado!");
        popup.classList.add("hidden"); 
    });
});
