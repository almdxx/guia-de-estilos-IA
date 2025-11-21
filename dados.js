let dados = [
    {
        titulo: "Cyberpunk Neon",
        descricao: "Estilo futurista distópico. Foco em alta tecnologia, baixa qualidade de vida, chuva, luzes de neon (rosa/ciano) e reflexos em poças d'água.",
        link: "https://pt.wikipedia.org/wiki/Cyberpunk",
        tags: ["futurista", "neon", "scifi", "cidade", "noite"],
        prompt: "Pixel art style, cyberpunk city street at night, raining, neon lights reflecting on puddles, pink and cyan color palette, detailed high resolution, cinematic lighting --v 6.0"
    },
    {
        titulo: "Fantasy RPG 16-bit",
        descricao: "Clássico da Era de Ouro dos RPGs (SNES). Cores vibrantes, vista superior (top-down), castelos e florestas. Estilo Final Fantasy ou Zelda.",
        link: "https://pt.wikipedia.org/wiki/RPG_eletrônico",
        tags: ["medieval", "rpg", "snes", "fantasia", "colorido"],
        prompt: "Pixel art style, 16-bit game asset, medieval fantasy world, green grass, blue sky, bright colors, clean lines, super nintendo style, cute aesthetics"
    },
    {
        titulo: "Game Boy Nostalgia",
        descricao: "Estilo monocromático limitante. Utiliza apenas 4 tons de verde-oliva. Minimalista, perfeito para criar uma estética retrô portátil.",
        link: "https://pt.wikipedia.org/wiki/Game_Boy",
        tags: ["gameboy", "verde", "nintendo", "retro", "monocromatico"],
        prompt: "Pixel art style, gameboy screen aesthetic, 4 shades of green palette limitation, retro handheld console graphic, simple shapes, dithering shading"
    },
    {
        titulo: "Isometric Voxel",
        descricao: "Simulação de 3D em 2D. Ângulo isométrico usado em jogos de construção de cidades (SimCity). Ótimo para arquitetura e objetos detalhados.",
        link: "https://pt.wikipedia.org/wiki/Perspectiva_isométrica",
        tags: ["3d", "cubo", "construcao", "cidade", "arquitetura", "isometrico"],
        prompt: "Pixel art style, isometric view, cute little house with a garden, voxel style, 3d illusion, soft lighting, pastel colors, detailed textures, white background"
    },
    {
        titulo: "Cosmic Horror",
        descricao: "Baseado em H.P. Lovecraft. Cores escuras (roxo, preto), criaturas indescritíveis e falhas digitais (glitch) para causar desconforto.",
        link: "https://pt.wikipedia.org/wiki/Terror_cósmico",
        tags: ["terror", "medo", "espaco", "alien", "glitch"],
        prompt: "Pixel art style, cosmic horror atmosphere, dark void space background, purple and dark red colors, scary monster silhouette, glitch effects, mysterious"
    },
    {
        titulo: "Steampunk Brass",
        descricao: "Retrofuturismo vitoriano. Muita engrenagem, vapor, cobre, latão e óculos de aviador. Tecnologia movida a vapor.",
        link: "https://pt.wikipedia.org/wiki/Steampunk",
        tags: ["vapor", "vitoriano", "maquina", "cobre", "retro"],
        prompt: "Pixel art style, steampunk machinery, brass gears, steam pipes, victorian era aesthetic, brown and gold color palette, detailed mechanical parts"
    },
    {
        titulo: "Solarpunk Nature",
        descricao: "O oposto do Cyberpunk. Futuro brilhante onde tecnologia e natureza convivem. Muito verde, painéis solares e arquitetura orgânica.",
        link: "https://pt.wikipedia.org/wiki/Solarpunk",
        tags: ["natureza", "futuro", "sol", "verde", "otimista"],
        prompt: "Pixel art style, solarpunk city, nature overgrowing technology, sunny day, bright colors, white buildings with plants, futuristic utopian aesthetic"
    },
    {
        titulo: "Noir Detective",
        descricao: "Estilo de filme policial dos anos 40. Preto e branco (ou sépia), alto contraste, sombras longas, chuva e mistério.",
        link: "https://pt.wikipedia.org/wiki/Film_noir",
        tags: ["detetive", "preto-e-branco", "crime", "sombra", "chuva"],
        prompt: "Pixel art style, film noir aesthetic, detective standing under a street lamp, black and white high contrast, rainy night, mysterious atmosphere"
    },
    {
        titulo: "Atari 2600 Blocky",
        descricao: "O início de tudo. Pixels gigantes, fundos pretos e cores primárias muito simples. Abstrato e histórico.",
        link: "https://pt.wikipedia.org/wiki/Atari_2600",
        tags: ["atari", "antigo", "blocos", "simples", "1980"],
        prompt: "Pixel art style, atari 2600 graphics, black background, simple blocky sprites, primary colors, retro arcade game aesthetic, low detail"
    },
    {
        titulo: "Metroidvania Dark",
        descricao: "Estilo focado em exploração de mapas subterrâneos. Ambientes cavernosos, alienígenas e tons frios (azul escuro, cinza).",
        link: "https://pt.wikipedia.org/wiki/Metroidvania",
        tags: ["caverna", "alien", "mapa", "escuro", "exploracao"],
        prompt: "Pixel art style, metroidvania game screenshot, dark underground cavern, alien ruins, blue and grey glowing lights, mysterious atmosphere, side scroller"
    },
    {
        titulo: "Cozy Farm Sim",
        descricao: "Estilo relaxante tipo Stardew Valley. Tons pastéis, estações do ano bem definidas, plantações e animais fofinhos.",
        link: "https://pt.wikipedia.org/wiki/Stardew_Valley",
        tags: ["fazenda", "fofo", "relaxante", "pastel", "animais"],
        prompt: "Pixel art style, cozy farm simulation game, cute vegetables, wooden fence, pastel colors, spring season, relaxing atmosphere, stardew valley vibes"
    },
    {
        titulo: "Fighting Game 90s",
        descricao: "Sprites grandes e detalhados de personagens lutadores, estilo Street Fighter ou King of Fighters. Foco em anatomia muscular exagerada.",
        link: "https://pt.wikipedia.org/wiki/Jogo_eletrônico_de_luta",
        tags: ["luta", "arcade", "personagem", "musculo", "anime"],
        prompt: "Pixel art style, 90s fighting game character sprite, martial arts pose, big muscles, detailed shading, arcade background, street fighter style"
    },
    {
        titulo: "Glitch Art",
        descricao: "Arte do erro. Pixels corrompidos, ruído visual (noise), cores invertidas e estética de 'sistema quebrado'.",
        link: "https://pt.wikipedia.org/wiki/Glitch_art",
        tags: ["erro", "bug", "ruido", "digital", "caos"],
        prompt: "Pixel art style, glitch art, corrupted data visual, rgb shift, visual noise, distorted image, chaotic patterns, digital error aesthetic"
    },
    {
        titulo: "Text Adventure UI",
        descricao: "Foco em interfaces de texto antigas, terminais verdes ou âmbar, fontes monoespaçadas e cursores piscando.",
        link: "https://pt.wikipedia.org/wiki/MUD",
        tags: ["texto", "terminal", "hacker", "interface", "codigo"],
        prompt: "Pixel art style, old computer terminal screen, green text on black background, command prompt interface, retro hacking visuals, monospace font"
    },
    {
        titulo: "Vaporwave Aesthetic",
        descricao: "Nostalgia dos anos 80/90 misturada com surrealismo. Estátuas gregas, golfinhos, palmeiras e degradês rosa/roxo.",
        link: "https://pt.wikipedia.org/wiki/Vaporwave",
        tags: ["anos80", "estatua", "surreal", "rosa", "nostalgia"],
        prompt: "Pixel art style, vaporwave aesthetic, greek statue bust, palm trees, pink and purple gradient background, glitch effects, 90s computer graphics"
    }
];