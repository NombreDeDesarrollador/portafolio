import { useState } from 'react';

/** Formulario de contacto con validación. Props: onSubmit(datos) opcional. */
export default function ContactForm({ onSubmit }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim()) errs.name = 'El nombre es obligatorio';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'Correo inválido';
    if (!form.message.trim()) errs.message = 'Escribe un mensaje';
    setErrors(errs);
    const ok = Object.keys(errs).length === 0;
    setSent(ok);
    if (ok && onSubmit) onSubmit(form);
  };

  const field = (name, label, type = 'text', Tag = 'input') => (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">{label}</label>
      <Tag id={name} name={name} type={Tag === 'input' ? type : undefined} rows={Tag === 'textarea' ? 4 : undefined}
        className={`form-control${errors[name] ? ' is-invalid' : ''}`} value={form[name]} onChange={update} />
      {errors[name] && <div className="invalid-feedback">{errors[name]}</div>}
    </div>
  );

  return (
    <section id="contacto" className="container py-5">
      <h2 className="mb-4">Contacto</h2>
      <form onSubmit={handleSubmit} noValidate className="col-12 col-md-8 col-lg-6">
        {field('name', 'Nombre')}
        {field('email', 'Correo', 'email')}
        {field('message', 'Mensaje', 'text', 'textarea')}
        <button type="submit" className="btn btn-primary">Enviar</button>
        {sent && <div className="alert alert-success mt-3" role="status">¡Mensaje enviado!</div>}
      </form>
    </section>
  );
}
