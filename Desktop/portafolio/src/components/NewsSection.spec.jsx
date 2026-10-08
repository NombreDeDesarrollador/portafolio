import NewsSection from './NewsSection';
import { mount } from '../testUtils';

describe('NewsSection', () => {
  const news = [{ id: 1, title: 'N1', date: '2024-01-01', content: 'c1' }, { id: 2, title: 'N2', date: '2024-01-02', content: 'c2' }];

  it('muestra estado de carga inicial', async () => {
    const pending = new Promise(() => {});
    const v = await mount(<NewsSection id="n" title="T" source="n.json" fetcher={() => pending} />);
    expect(v.container.querySelector('[role="status"]')).not.toBeNull();
    await v.unmount();
  });
  it('renderiza título de sección y noticias del JSON', async () => {
    const v = await mount(<NewsSection id="n" title="Mis noticias" source="n.json" fetcher={() => Promise.resolve(news)} />);
    expect(v.container.querySelector('h2').textContent).toBe('Mis noticias');
    expect(v.container.querySelectorAll('[data-testid="news-item"]').length).toBe(2);
    expect(v.container.querySelector('time').getAttribute('datetime')).toBe('2024-01-01');
    await v.unmount();
  });
  it('muestra error si el JSON falla', async () => {
    const v = await mount(<NewsSection id="n" title="T" source="n.json" fetcher={() => Promise.reject(new Error('x'))} />);
    expect(v.container.querySelector('.alert-danger')).not.toBeNull();
    await v.unmount();
  });
});
