/** Card de Bootstrap para un proyecto. Props: project {title, description, image, technologies, url} */
export default function ProjectCard({ project }) {
  const { title, description, image, technologies = [], url } = project;
  return (
    <div className="card h-100 shadow-sm" data-testid="project-card">
      <img src={image} className="card-img-top" alt={`Captura del proyecto ${title}`} loading="lazy" />
      <div className="card-body d-flex flex-column">
        <h3 className="card-title h5">{title}</h3>
        <p className="card-text">{description}</p>
        <p>{technologies.map((t) => <span key={t} className="badge bg-primary me-1">{t}</span>)}</p>
        <a href={url} className="btn btn-primary mt-auto" target="_blank" rel="noreferrer">Ver proyecto</a>
      </div>
    </div>
  );
}
