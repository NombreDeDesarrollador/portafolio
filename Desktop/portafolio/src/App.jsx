import NavBar from './components/NavBar';
import Intro from './components/Intro';
import ProjectList from './components/ProjectList';
import NewsSection from './components/NewsSection';
import ContactForm from './components/ContactForm';

const links = [
  { label: 'Introducción', href: '#introduccion' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Noticias', href: '#noticias-tech' },
  { label: 'Contacto', href: '#contacto' },
];

export default function App() {
  return (
    <>
      <NavBar brand="Mi Portafolio" links={links} />
      <main id="contenido">
        <Intro
          name="Tu Nombre"
          role="Estudiante de Informática Duoc UC | Entusiasta de la tecnología"
          bio="Bienvenido a mi portafolio. Aquí comparto mis proyectos y noticias recientes."
          photo="img/profile.svg"
          links={[{ label: 'GitHub', url: 'https://github.com/tu-usuario' }]}
        />
        <ProjectList />
        <NewsSection id="noticias-tech" title="Noticias de tecnología" source="data/news-tech.json" />
        <NewsSection id="noticias-campus" title="Noticias de la carrera" source="data/news-campus.json" />
        <ContactForm />
      </main>
      <footer className="bg-dark text-white text-center py-3">© 2024 Mi Portafolio</footer>
    </>
  );
}
