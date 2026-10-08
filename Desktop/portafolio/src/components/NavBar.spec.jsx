import NavBar from './NavBar';
import { mount } from '../testUtils';

describe('NavBar', () => {
  it('renderiza marca y enlaces', async () => {
    const v = await mount(<NavBar brand="Marca" links={[{ label: 'A', href: '#a' }, { label: 'B', href: '#b' }]} />);
    expect(v.container.querySelector('.navbar-brand').textContent).toBe('Marca');
    expect(v.container.querySelectorAll('.nav-link').length).toBe(2);
    expect(v.container.querySelector('button').getAttribute('aria-label')).toBe('Abrir menú');
    await v.unmount();
  });
});
