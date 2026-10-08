import ProjectCard from './ProjectCard';
import { mount } from '../testUtils';

describe('ProjectCard', () => {
  const project = { title: 'Tienda', description: 'Desc', image: 'i.png', technologies: ['React', 'CSS'], url: 'https://x.com' };
  it('muestra título, descripción, tecnologías y enlace', async () => {
    const v = await mount(<ProjectCard project={project} />);
    expect(v.container.querySelector('.card-title').textContent).toBe('Tienda');
    expect(v.container.querySelector('.card-text').textContent).toBe('Desc');
    expect(v.container.querySelectorAll('.badge').length).toBe(2);
    expect(v.container.querySelector('a.btn').getAttribute('href')).toBe('https://x.com');
    expect(v.container.querySelector('img').alt).toContain('Tienda');
    await v.unmount();
  });
  it('usa clases de Bootstrap Card', async () => {
    const v = await mount(<ProjectCard project={project} />);
    expect(v.container.querySelector('.card .card-body')).not.toBeNull();
    await v.unmount();
  });
});
