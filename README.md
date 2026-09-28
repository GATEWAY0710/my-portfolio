# my-portfolio

Personal portfolio and résumé site for **Muhammed Nurudeen Olalekan** — Python Backend Engineer and AI/ML Engineer.

**Live site:** https://melodic-zuccutto-103f65.netlify.app/

Built with React 19 and Vite, deployed to Netlify.

---

## What this site covers

| Section | Contents |
| --- | --- |
| Hero | Positioning, primary CTAs, and a downloadable ATS-friendly CV |
| Experience | Sysbeams, Jupiter AI Labs, and freelance engagements |
| Projects | Agentic AI assistant, garment segmentation, crypto data pipeline, GatewayStore, and data tooling |
| Skills | Backend, AI/ML, data & databases, cloud & testing, frontend |
| Contact | Email, WhatsApp, and a Netlify-backed contact form |

## Featured work

- **University Student Portal AI Agent** — a FastAPI agent that answers student questions over an
  authenticated portal session, streaming replies from an Ollama-hosted model through tool calling.
  [`student-support-ai-chatbox`](https://github.com/GATEWAY0710/student-support-ai-chatbox)
- **Garment Panel Segmentation Pipeline** — a PyTorch U-Net with a MobileNetV3-Small encoder trained
  on Fashionpedia. [`ML-ENGINEER-ASSESSMENT`](https://github.com/GATEWAY0710/ML-ENGINEER-ASSESSMENT)
- **Crypto Data Engineering & Backtesting Pipeline** — ingestion, signal generation, backtesting,
  metrics and export as independent modules.
  [`ARK take-home`](https://github.com/GATEWAY0710/Muhammed_Nurudeen_-ARK-Data-engineer-Take-home)

## Contact form

Submissions are handled by [Netlify Forms](https://docs.netlify.com/forms/setup/).

Netlify registers forms by scanning the **built** `index.html`, and this form is rendered
client-side, so a static hidden copy of the form is declared in `index.html`. `Contact.jsx` then
posts to `/` with `form-name=contact`. Submissions appear under **Forms** in the Netlify dashboard
and are emailed to the site owner.

To change the recipient, update the form notification settings in the Netlify dashboard — the
address is not hardcoded in the app.

## Local development

```bash
npm install
npm run dev        # start the dev server
npm run build      # production build into dist/
npm run preview    # preview the production build locally
npm run lint       # oxlint
```

The repo uses a `public/` directory for static assets. Anything in `public/` is served from the
site root, so `public/Muhammed_Nurudeen_CV.pdf` is reachable at `/Muhammed_Nurudeen_CV.pdf`.

## Sharing

`public/og-image.jpg` is the 1200×630 social share card referenced by the Open Graph and Twitter
card tags in `index.html`. If the positioning or contact details change, update the `<title>`,
`og:title`, and the share card together so link previews stay consistent.

## Stack

React 19 · Vite 8 · Framer Motion · Lucide React · Netlify

## Licence

© Muhammed Nurudeen Olalekan. All rights reserved.
