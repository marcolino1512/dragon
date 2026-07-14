# 🐉 Dragon Carousel

Carrossel interativo com 4 dragões, transições suaves e fundos animados com efeito de círculo expansivo. Desenvolvido em HTML, CSS e JavaScript puro.

---

## ✨ Funcionalidades

- 🎠 Navegação por botões anterior/próximo
- 🎨 Fundo animado com `clip-path` circular por slide
- 🌊 Transições suaves com `cubic-bezier`
- 📱 Design responsivo (mobile, tablet, desktop)
- ♿ Atributos `alt` nas imagens para acessibilidade

---

## 🗂️ Estrutura do Projeto

```
Html-teste-11/
├── img/
│   ├── img1.png   🟢 Green Dragon
│   ├── img2.png   🔴 Red Dragon
│   ├── img3.png   🟡 Yellow Dragon
│   └── img4.png   🩷 Pink Dragon
├── index.html     Estrutura da página
├── style.css      Estilos e responsividade
├── script.js      Lógica do carrossel
└── README.md      Este arquivo
```

---

## 🚀 Como Usar

1. Clone ou baixe o repositório
2. Abra `index.html` diretamente no navegador
3. Use os botões **◀** e **▶** para navegar entre os dragões

> Não requer servidor ou dependências locais — funciona direto no browser!

---

## 📱 Breakpoints Responsivos

| Dispositivo | Largura        | Ajustes                              |
|-------------|----------------|--------------------------------------|
| 🖥️ Desktop  | > 1024px       | Layout completo, fonte 50px          |
| 💻 Tablet   | até 1024px     | Fonte 38px, imagem menor             |
| 📱 Mobile   | até 768px      | Texto no rodapé, imagem semitransparente |
| 📱 Mini     | até 390px      | Fonte 22px, botão compacto           |

---

## 🛠️ Tecnologias

- **HTML5** — estrutura semântica
- **CSS3** — `clip-path`, `transition`, `flexbox`, `min()`, media queries
- **JavaScript (ES6+)** — `querySelector`, eventos, template literals
- [Boxicons](https://boxicons.com/) — ícones dos botões ⬅️➡️
- [Google Fonts](https://fonts.google.com/) — tipografia Montserrat

---

## ⚙️ Como Funciona o JS

```
index (0–3)
  │
  ├── nextBtn click → index++ → bg[index].add('active') → moverCarrossel()
  └── prevBtn click → bg[index].remove('active') → index-- → moverCarrossel()

moverCarrossel()
  ├── listInfo.translateY = index * -25%   (cada info ocupa 25% do bloco)
  └── listImg.translateY  = index * -100%  (cada imagem ocupa 100vh)
```

---

## 🖼️ Preview dos Slides

| # | Dragão         | Cor do Fundo              |
|---|----------------|---------------------------|
| 1 | 🟢 Green Dragon | Verde escuro → Verde limão |
| 2 | 🔴 Red Dragon   | Vinho → Vermelho vivo      |
| 3 | 🟡 Yellow Dragon| Oliva → Amarelo neon       |
| 4 | 🩷 Pink Dragon  | Bordô → Rosa claro         |
