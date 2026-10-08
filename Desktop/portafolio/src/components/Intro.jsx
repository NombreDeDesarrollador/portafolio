/** Sección "Sobre mí". Props: name, role, bio, photo, links [{label, url}] */
export default function Intro({ name, role, bio, photo, links = [] }) {
  return (
    <section id="introduccion" className="hero text-center text-white py-5">
      <div className="container">
        <img src={photo} alt={`Foto de ${name}`} width="140" height="140"
          className="rounded-circle border border-3 border-white mb-3" />
        <h1 className="display-5 fw-bold">{name}</h1>
        <p className="lead">{role}</p>
        <p className="mx-auto intro-bio">{bio}</p>
        <div>
          {links.map((l) => (
            <a key={l.label} className="btn btn-outline-light btn-sm m-1" href={l.url} target="_blank" rel="noreferrer">{l.label}</a>
          ))}
        </div>
      </div>
    </section>
  );
}
