# luigi-cuansing-site

Personal site and link hub for Luigi Cuansing — embedded systems, PCB design and board bring-up.
Plain static HTML/CSS: no build step, no dependencies.

## Deploy on Vercel

1. Push this repo to GitHub.
2. In Vercel: **Add New → Project → Import** this repo.
3. Framework preset: **Other**. Leave Build Command and Output Directory empty.
4. Deploy.

## Local preview

```bash
npx serve .
# or
python3 -m http.server 8000
```

## How it's built

Each `<section class="slide">` is one 1920×1080 slide from the Canva deck "Cuansing Portfolio".
Every element sits at its exact Canva position (`--l`, `--t`, `--w`, `--h` in slide pixels) and
scales with the browser width. On phones (under 760 px) the same content stacks vertically.

Images in `images/` were cut from the Canva slide exports at those same positions.

## Editing links

GitHub, LinkedIn, email and phone links are on the first slide in `index.html`.
