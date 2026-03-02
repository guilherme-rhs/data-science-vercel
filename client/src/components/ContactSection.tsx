import { Mail, Linkedin, Github, MessageSquare, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

/**
 * Contact Section - Modern Data Minimalism
 * Simple contact form and social links with minimal visual design.
 * Focus on clear call-to-action and accessibility.
 */
export default function ContactSection() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitted(true);
      setTimeout(() => {
        setFormState({ name: '', email: '', message: '' });
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Erro ao enviar mensagem. Tente novamente.');
    }
  };

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/guilhermeribeirosilva', color: 'hover:text-blue-600' },
    { icon: Github, label: 'GitHub', href: 'https://github.com', color: 'hover:text-gray-800' },
    { icon: Mail, label: 'Email', href: 'mailto:guilhermeribeiro111@gmail.com', color: 'hover:text-accent' },
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Vamos Conversar?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estou sempre aberto a novas oportunidades, colaborações e discussões sobre IA, Machine Learning e impacto de negócio.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="bg-secondary rounded-lg border border-border p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <MessageSquare size={24} className="text-accent" />
              Envie uma Mensagem
            </h3>

            {submitted ? (
              <div className="p-6 bg-background rounded border border-accent text-center">
                <p className="text-accent font-semibold mb-2">Mensagem enviada com sucesso!</p>
                <p className="text-muted-foreground text-sm">Responderei em breve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Nome
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-2 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Seu nome"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-2 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="seu.email@example.com"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-2 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    placeholder="Conte-me sobre seu projeto..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-md hover:opacity-90 transition-opacity"
                >
                  Enviar Mensagem
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Quick Info */}
            <div className="bg-secondary rounded-lg border border-border p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail size={20} className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <a
                      href="mailto:guilhermeribeiro111@gmail.com"
                      className="text-accent font-semibold hover:opacity-70 transition-opacity"
                    >
                      guilhermeribeiro111@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone size={20} className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Telefone</p>
                    <a
                      href="tel:+5517997155904"
                      className="text-accent font-semibold hover:opacity-70 transition-opacity"
                    >
                      +55 17 99715-5904
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin size={20} className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Localização</p>
                    <p className="text-foreground font-semibold">São José do Rio Preto, SP, Brasil</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-secondary rounded-lg border border-border p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Redes Sociais</h3>
              <div className="flex gap-4">
                {socialLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 bg-background border border-border rounded-lg text-foreground transition-all hover:border-accent ${link.color}`}
                      aria-label={link.label}
                    >
                      <IconComponent size={24} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-accent rounded-lg p-8 text-accent-foreground">
              <h3 className="text-xl font-bold mb-3">Pronto para colaborar?</h3>
              <p className="mb-4 text-sm opacity-90">
                Vamos transformar dados em decisões inteligentes e soluções de IA que geram impacto real no seu negócio.
              </p>
              <a
                href="mailto:guilhermeribeiro111@gmail.com"
                className="inline-block px-6 py-2 bg-accent-foreground text-accent font-semibold rounded-md hover:opacity-90 transition-opacity"
              >
                Iniciar Conversa
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-b border-border mt-16 lg:mt-24" />
      </div>
    </section>
  );
}
