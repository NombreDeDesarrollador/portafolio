import ProjectList from './ProjectList';
import { mount, change } from '../testUtils';

describe('ProjectList', () => {
  const data = [
    { id: 1, title: 'A', description: 'a', image: 'a.png', technologies: ['React'], url: '#' },
    { id: 2, title: 'B', description: 'b', image: 'b.png', technologies: ['Node'], url: '#' },
    { id: 3, title: 'C', description: 'c', image: 'c.png', technologies: ['React', 'CSS'], url: '#' },
  ];

  it('muestra "cargando" y luego las tarjetas (mock de fetcher)', async () => {
    const fetcher = jasmine.createSpy('fetcher').and.returnValue(Promise.resolve(data));
    const v = await mount(<ProjectList source="x.json" fetcher={fetcher} />);
    expect(fetcher).toHaveBeenCalledWith('x.json');
    expect(v.container.querySelectorAll('[data-testid="project-card"]').length).toBe(3);
    await v.unmount();
  });
  it('filtra por tecnología al cambiar el select (evento + estado)', async () => {
    const fetcher = jasmine.createSpy().and.returnValue(Promise.resolve(data));
    const v = await mount(<ProjectList source="x.json" fetcher={fetcher} />);
    await change(v.container.querySelector('select'), 'Node');
    expect(v.container.querySelectorAll('[data-testid="project-card"]').length).toBe(1);
    await change(v.container.querySelector('select'), 'React');
    expect(v.container.querySelectorAll('[data-testid="project-card"]').length).toBe(2);
    await v.unmount();
  });
  it('muestra alerta si falla la carga', async () => {
    const fetcher = jasmine.createSpy().and.returnValue(Promise.reject(new Error('boom')));
    const v = await mount(<ProjectList source="x.json" fetcher={fetcher} />);
    expect(v.container.querySelector('[role="alert"]')).not.toBeNull();
    await v.unmount();
  });
});
