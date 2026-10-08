# Mi Portafolio (React + Bootstrap)

Portafolio personal con React, Bootstrap, datos desde JSON y pruebas con Jasmine + Karma.
Evaluación Formativa 2 – DSY1104 Desarrollo Fullstack II.

> 📸 Agrega aquí capturas de pantalla (`docs/captura-escritorio.png`, `docs/captura-movil.png`).

## Estructura
```
public/data/   -> projects.json, news-tech.json, news-campus.json
src/components -> NavBar, Intro, ProjectCard, ProjectList, NewsSection, ContactForm (+ .spec.jsx)
src/hooks      -> useJson (carga JSON y maneja estado)
src/services   -> dataService (fetchJson)
```

## Instalar y ejecutar
```bash
npm install
npm run dev        # http://localhost:5173
```

## Probar
```bash
npm test           # Karma + Jasmine (Chrome headless) y cobertura
npm run test:all   # Chrome + Firefox
```
El informe de cobertura queda en `coverage/html/index.html`. Plan de pruebas: [TEST_PLAN.md](TEST_PLAN.md).

## Publicar en GitHub Pages
```bash
git init && git add . && git commit -m "feat: portafolio inicial"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
git push -u origin main
npm run deploy     # publica la carpeta dist en la rama gh-pages
```
Luego en GitHub: *Settings → Pages → Branch: gh-pages*.

## Personalizar
Edita `src/App.jsx` (nombre, bio, enlaces), los JSON de `public/data/` y reemplaza las imágenes de `public/img/` (usa imágenes livianas y con texto `alt`).

## Accesibilidad y rendimiento
`alt` en imágenes, enlace "saltar al contenido", etiquetas `label` en formularios, navbar con `aria-label`, `loading="lazy"` y build minificado con Vite.
