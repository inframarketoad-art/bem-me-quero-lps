# Bem-me-quero Studio Beauty — 2 landing pages

Site estático, sem build. Duas páginas com o mesmo `styles.css` e `script.js`:

| Página | Arquivo | Público | Conversão |
|---|---|---|---|
| Serviços | `index.html` | cliente final | WhatsApp (mensagem pronta por serviço) |
| Cursos | `cursos.html` (vira `/cursos` na Vercel) | alunas | link de inscrição ou WhatsApp |

As páginas se cruzam: serviços tem uma faixa "Conhecer os cursos" e o rodapé de cursos volta para os serviços.

## Pendências (tudo marcado com `TODO` no HTML e com fundo dourado na tela)

| # | O que falta | Onde |
|---|---|---|
| 1 | **Número do WhatsApp** | `script.js` → `const WHATSAPP` |
| 2 | Link de checkout dos cursos (Kiwify/Hotmart/Sympla) — opcional | `script.js` → `const INSCRICAO_URL` (vazio = WhatsApp) |
| 3 | Nome da profissional, anos de experiência, certificações | `#sobre` e `#instrutora` |
| 4 | Endereço, horário e @ do Instagram | CTA final de `index.html` + botão "Ver mais no Instagram" |
| 5 | Valores dos serviços e durações (confirmar) | cards de `#servicos` |
| 6 | Cursos: carga horária, preço, parcelamento, datas, vagas, kit | `#cursos`, `#inscricao` |
| 7 | Grade real do curso | `#conteudo` |
| 8 | FAQ de cursos: modelo, pagamento, remarcação | `cursos.html#duvidas` |
| 9 | **Fotos reais** (olhares, antes/depois, aulas, retratos) | todo `.ph` — trocar por `<img>` dentro do `.ph` |
| 10 | Depoimentos reais (clientes e alunas, com autorização) | `.quote` |

Para usar uma foto: `<div class="ph"><img src="assets/fotos/x.jpg" alt="..."></div>` — o placeholder some sozinho sob a imagem.

## Marca
`assets/brand/` tem logo, wordmark, flor e selo em PNG transparente (bordô, rosa, rosa-forte e flor dourada),
gerados a partir dos arquivos enviados (em `assets/brand/originais/`). Cores em `:root` do `styles.css`:
bordô `#750616`, rosa `#E18D8D`, rosa-claro `#F4CFCB`, blush `#FBF5F1`, dourado `#6B3A10 → #E4BE84`.
Tipos: Cormorant Garamond (títulos) e Montserrat (texto, mesmo do "STUDIO BEAUTY" da logo).
