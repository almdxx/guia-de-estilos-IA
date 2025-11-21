# 👾 PixelPrompt_ | Guia de Estilos para IA

![Project Status](https://img.shields.io/badge/Status-Concluído-success) ![Event](https://img.shields.io/badge/Event-Imersão_Alura-blue)

> **O seu grimório de estilos para criar Pixel Art com Inteligência Artificial.**

Desenvolvido durante a **Imersão Dev com Google Gemini** da Alura, este projeto é uma ferramenta interativa para ajudar artistas e desenvolvedores a encontrarem os melhores *prompts* para gerar imagens em Pixel Art.

🔗 **[Acesse o projeto online aqui](https://almdxx.github.io/guia-de-estilos-IA/)**

---

## 📸 Preview

*Uma interface imersiva com estética Cyberpunk/Retro, focada na experiência do usuário.*

![Preview do Projeto](https://github.com/user-attachments/assets/placeholder)
*(O projeto conta com efeito visual de Scanline (monitor antigo) e cores Neon)*

---

## 🚀 Funcionalidades

O projeto vai além de uma simples lista, implementando funcionalidades de UX (User Experience) avançadas:

- **🔍 Busca Inteligente:** Pesquise por títulos, descrições ou tags ocultas.
- **🏷️ Tags Interativas:** Botões de atalho (Chips) para filtragem rápida de categorias (Cyberpunk, Retro, Terror, etc.).
- **📋 Copy-to-Clipboard:** Botão dedicado para copiar o *prompt* com um clique.
- **🍞 Toast Notification:** Feedback visual elegante ("Copiado!") sem interromper a navegação (substituindo o `alert` padrão).
- **📱 Vitrine Automática:** O conteúdo carrega automaticamente ao abrir a página, evitando a "tela vazia".
- **♿ Acessibilidade:** Botões com atributos `aria-label` para leitores de tela.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído com **HTML5**, **CSS3** e **JavaScript** puro (Vanilla JS), focado em performance e sem dependência de frameworks pesados.

* **CSS Moderno:** Uso de Variáveis (`:root`), Flexbox, Animações (`keyframes`) e Pseudo-elementos (`::before` para o efeito CRT/Scanline).
* **JavaScript:** Manipulação do DOM, Lógica de busca em Arrays e Objetos, API de Clipboard (`navigator.clipboard`).
* **Assets:**
    * Fontes: *Press Start 2P* e *Chakra Petch* (Google Fonts).
    * Ícones: FontAwesome 6.

---

## 📂 Estrutura de Dados

Os dados são carregados de um arquivo local (`dados.js`), simulando uma API JSON com a seguinte estrutura:

```javascript
{
    titulo: "Cyberpunk Neon",
    descricao: "Estilo futurista distópico...",
    tags: ["futurista", "neon", "scifi"],
    prompt: "Pixel art style, cyberpunk city street..."
}

👨‍💻 Autor
Desenvolvido com 💚 por Carlos Eduardo na Imersão Dev 2025.

LinkedIn: Carlos Eduardo

GitHub: @almdxx

Instagram: @c_almeidax
