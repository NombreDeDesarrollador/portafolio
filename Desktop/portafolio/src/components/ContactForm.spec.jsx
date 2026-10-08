import ContactForm from './ContactForm';
import { mount, change, submit } from '../testUtils';

describe('ContactForm', () => {
  it('muestra errores de validación con campos vacíos', async () => {
    const v = await mount(<ContactForm />);
    await submit(v.container.querySelector('form'));
    expect(v.container.querySelectorAll('.invalid-feedback').length).toBe(3);
    expect(v.container.querySelector('.alert-success')).toBeNull();
    await v.unmount();
  });
  it('rechaza correo inválido', async () => {
    const v = await mount(<ContactForm />);
    await change(v.container.querySelector('#name'), 'Ana');
    await change(v.container.querySelector('#email'), 'malo');
    await change(v.container.querySelector('#message'), 'Hola');
    await submit(v.container.querySelector('form'));
    expect(v.container.querySelector('#email').classList.contains('is-invalid')).toBeTrue();
    await v.unmount();
  });
  it('envía datos válidos y llama al callback', async () => {
    const spy = jasmine.createSpy('onSubmit');
    const v = await mount(<ContactForm onSubmit={spy} />);
    await change(v.container.querySelector('#name'), 'Ana');
    await change(v.container.querySelector('#email'), 'ana@correo.cl');
    await change(v.container.querySelector('#message'), 'Hola');
    await submit(v.container.querySelector('form'));
    expect(spy).toHaveBeenCalledWith({ name: 'Ana', email: 'ana@correo.cl', message: 'Hola' });
    expect(v.container.querySelector('.alert-success')).not.toBeNull();
    await v.unmount();
  });
});
