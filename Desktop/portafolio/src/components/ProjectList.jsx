import { useState } from 'react';
import useJson from '../hooks/useJson';
import ProjectCard from './ProjectCard';

/** Lista de proyectos cargada desde JSON, con filtro por tecnología (state + eventos). */
export default function ProjectList({ source = 'data/projects.json', fetcher }) {
  const { data, loading, error } = useJson(source, fetcher);
  const [tech, setTech] = useState('Todas');

  return (
    <section id="proyectos" className="container py-5">
      <h2 className="mb-4">Proyectos</h2>
      {loading && <p role="status">Cargando proyectos...</p>}
      {error && <div className="alert alert-danger" role="alert">No se pudieron cargar los proyectos</div>}
      {data && (() => {
        const techs = ['Todas', ...new Set(data.flatMap((p) => p.technologies))];
        const shown = tech === 'Todas' ? data : data.filter((p) => p.technologies.includes(tech));
        return (
          <>
            <div className="mb-3 col-12 col-md-4">
              <label htmlFor="filtro-tech" className="form-label">Filtrar por tecnología</label>
              <select id="filtro-tech" className="form-select" value={tech} onChange={(e) => setTech(e.target.value)}>
                {techs.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div className="row g-4">
              {shown.map((p) => (
                <div className="col-12 col-md-6 col-lg-4" key={p.id}><ProjectCard project={p} /></div>
              ))}
            </div>
          </>
        );
      })()}
    </section>
  );
}
