import Intro from './Intro';
import { mount } from '../testUtils';

describe('Intro', () => {
  const props = { name: 'Ana', role: 'Dev', bio: 'Hola', photo: 'a.png', links: [{ label: 'GitHub', url: 'https://g.com' }] };
  let view;
  beforeEach(async () => { view = await mount(<Intro {...props} />); });
  afterEach(() => view.unmount());

  it('renderiza nombre, rol y biografía', () => {
    expect(view.container.querySelector('h1').textContent).toBe('Ana');
    expect(view.container.textContent).toContain('Dev');
    expect(view.container.textContent).toContain('Hola');
  });
  it('la foto tiene atributo alt (accesibilidad)', () => {
    expect(view.container.querySelector('img').getAttribute('alt')).toBe('Foto de Ana');
  });
  it('renderiza los enlaces recibidos por props', () => {
    const a = view.container.querySelector('a');
    expect(a.getAttribute('href')).toBe('https://g.com');
  });
});
