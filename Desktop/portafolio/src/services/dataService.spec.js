import { fetchJson } from './dataService';

describe('dataService.fetchJson', () => {
  it('devuelve el JSON cuando la respuesta es OK', async () => {
    spyOn(window, 'fetch').and.returnValue(Promise.resolve({ ok: true, json: () => Promise.resolve([1, 2]) }));
    expect(await fetchJson('a.json')).toEqual([1, 2]);
    expect(window.fetch).toHaveBeenCalledWith('a.json');
  });
  it('lanza error cuando la respuesta no es OK', async () => {
    spyOn(window, 'fetch').and.returnValue(Promise.resolve({ ok: false, status: 404 }));
    await expectAsync(fetchJson('x.json')).toBeRejectedWithError('HTTP 404');
  });
});
