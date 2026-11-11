# personal-website

Luigi Cuansing's portfolio — the Canva deck "Cuansing Portfolio" rebuilt as a Next.js site.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
```

Pushing to `main` deploys to Vercel automatically.

## Layout

- `app/page.tsx` — the four slides. Every element uses its exact Canva box
  (`[left, top, width, height]` in 1920×1080 slide pixels) and scales with the window width.
  On phones (under 760 px) the content stacks into one column.
- `app/globals.css` — slide scaling, type sizes and colours from Canva.
- `public/images/` — photos cut from the Canva PNG export at those same boxes.

## KiCad viewer

`components/KiCadViewer.tsx` embeds [KiCanvas](https://kicanvas.org), an interactive viewer for
KiCad schematics and boards (pan, zoom, select parts, toggle layers).

1. Copy your files into `public/kicad/` (for example `foc.kicad_pcb`, `foc.kicad_sch`, `foc.kicad_pro`).
2. Use the component in any page:

```tsx
import KiCadViewer from "@/components/KiCadViewer";

// one file
<KiCadViewer src="/kicad/foc.kicad_pcb" />

// a whole project, with layer and parts panels
<div style={{ height: 600 }}>
  <KiCadViewer files={["/kicad/foc.kicad_pro", "/kicad/foc.kicad_sch", "/kicad/foc.kicad_pcb"]} controls="full" />
</div>
```

New pages go in `app/<name>/page.tsx` — e.g. `app/foc/page.tsx` becomes `/foc`.

KiCanvas is still in alpha and loads from kicanvas.org by default. To pin a version, download
`https://kicanvas.org/kicanvas/kicanvas.js` to `public/kicanvas.js` and set the environment variable
`NEXT_PUBLIC_KICANVAS_SRC=/kicanvas.js` in Vercel.
