# Plan de pruebas

Herramientas: **Jasmine** (pruebas) + **Karma** (ejecución en navegador real) + **karma-coverage** (cobertura).

| ID | Componente | Caso de prueba | Resultado esperado |
|----|-----------|----------------|--------------------|
| T01 | Intro | Renderizar con props | Muestra nombre (h1), rol y biografía |
| T02 | Intro | Foto | `img` con atributo `alt` |
| T03 | Intro | Enlaces | Cada link usa el `href` recibido |
| T04 | ProjectCard | Renderizar proyecto | Título, descripción, badges de tecnologías y enlace |
| T05 | ProjectCard | Estructura Bootstrap | Existe `.card` y `.card-body` |
| T06 | ProjectList | Carga desde JSON (mock) | Se llama al fetcher y se muestran 3 tarjetas |
| T07 | ProjectList | Cambiar filtro (evento/estado) | Se muestran solo proyectos de esa tecnología |
| T08 | ProjectList | Error de carga | Aparece alerta `role="alert"` |
| T09 | NewsSection | Estado inicial | Muestra "Cargando" |
| T10 | NewsSection | Carga correcta | Título de sección y N noticias con fecha |
| T11 | NewsSection | Error de carga | Aparece `.alert-danger` |
| T12 | ContactForm | Enviar vacío | 3 mensajes de validación, sin éxito |
| T13 | ContactForm | Correo inválido | Campo email con `is-invalid` |
| T14 | ContactForm | Datos válidos | Se llama `onSubmit` con los datos y aparece mensaje de éxito |
| T15 | NavBar | Renderizar | Marca, enlaces y botón con `aria-label` |
| T16 | dataService | Respuesta OK | Devuelve el JSON |
| T17 | dataService | Respuesta no OK | Lanza `HTTP 404` |

**Mocks usados:** `jasmine.createSpy` (fetcher inyectado) y `spyOn(window, 'fetch')`.

Informe de cobertura: `npm test` genera `coverage/html/index.html`. Pega aquí tu resultado y su análisis (meta sugerida: ≥ 80 %).
