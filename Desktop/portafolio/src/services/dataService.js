/** Lee un archivo JSON y devuelve su contenido. Lanza error si la respuesta no es OK. */
export async function fetchJson(path) {
  const response = await fetch(path);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
}
