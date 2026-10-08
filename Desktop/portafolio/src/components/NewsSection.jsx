import useJson from '../hooks/useJson';

/** Sección de noticias reutilizable. Props: id, title, source (ruta JSON), fetcher (opcional, para mocks) */
export default function NewsSection({ id, title, source, fetcher }) {
  const { data, loading, error } = useJson(source, fetcher);
  return (
    <section id={id} className="container py-4">
      <h2 className="mb-3">{title}</h2>
      {loading && <p role="status">Cargando noticias...</p>}
      {error && <div className="alert alert-danger" role="alert">No se pudieron cargar las noticias</div>}
      {data && (
        <div className="row g-3">
          {data.map((n) => (
            <div className="col-12 col-md-6 col-lg-4" key={n.id}>
              <article className="card h-100" data-testid="news-item">
                <div className="card-body">
                  <h3 className="h6 card-title">{n.title}</h3>
                  <p className="text-muted small"><time dateTime={n.date}>{n.date}</time></p>
                  <p className="card-text">{n.content}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
