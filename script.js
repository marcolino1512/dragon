// ===== 🎠 DRAGON CAROUSEL — Lógica de navegação =====

// 🎯 Seleciona os elementos do DOM
const listInfo = document.querySelector('.list-info'); // bloco de textos
const listImg  = document.querySelector('.list-img');  // bloco de imagens
const nextBtn  = document.querySelector('.next-btn');  // botão próximo ➡️
const prevBtn  = document.querySelector('.prev-btn');  // botão anterior ⬅️
const bgs      = document.querySelectorAll('.bg');     // camadas de fundo 🎨

// 📊 Índice atual e total de slides (derivado do DOM)
let index = 0;
const TOTAL = bgs.length - 1; // 0 até 3

// 🔄 Aplica a posição correta no carrossel conforme o índice atual
function moverCarrossel() {
    // Cada info tem 25% do list-info; cada img tem 100% do list-img
    listInfo.style.transform = `translateY(${index * -25}%)`;
    listImg.style.transform  = `translateY(${index * -100}%)`;
}

// ➡️ Avança para o próximo slide
nextBtn.addEventListener('click', () => {
    if (index >= TOTAL) return; // 🚫 já está no último slide
    index++;
    bgs[index].classList.add('active'); // 🎨 expande o novo fundo
    moverCarrossel();
});

// ⬅️ Volta para o slide anterior
prevBtn.addEventListener('click', () => {
    if (index <= 0) return; // 🚫 já está no primeiro slide
    bgs[index].classList.remove('active'); // 🎨 recolhe o fundo atual
    index--;
    moverCarrossel();
});
