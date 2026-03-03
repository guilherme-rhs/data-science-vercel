import { Mail, Linkedin, Github, Phone, MapPin, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * Contact Section - Modern Data Minimalism
 * Social links and contact information with minimal visual design.
 * Focus on clear call-to-action and accessibility.
 */
export default function ContactSection() {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/guilhermeribeirosilva', color: 'hover:text-blue-600' },
    { icon: Github, label: 'GitHub', href: 'https://github.com', color: 'hover:text-gray-800' },
    { icon: Mail, label: 'Email', href: 'mailto:guilhermeribeiro111@gmail.com', color: 'hover:text-red-500' },
    { icon: MessageCircle, label: 'WhatsApp', href: 'https://api.whatsapp.com/send?phone=5517997155904&text=Encontrei+você+no+seu+portifólio%2C+gostaria+de+conversar%21', color: 'hover:text-green-500' },
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-4xl mx-auto">
          {/* Contact Info */}
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
            <h3 className="text-2xl font-bold text-foreground mb-6">Conecte-se Comigo</h3>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 bg-background border border-border rounded-lg text-foreground transition-all hover:border-accent flex flex-col items-center gap-2 ${link.color}`}
                    aria-label={link.label}
                  >
                    <IconComponent size={24} />
                    <span className="text-xs font-semibold text-center">{link.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-accent rounded-lg p-8 text-accent-foreground mt-12 text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-3">Pronto para colaborar?</h3>
          <p className="mb-6 text-sm opacity-90">
            Vamos transformar dados em decisões inteligentes e soluções de IA que geram impacto real no seu negócio.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=5517997155904&text=Encontrei+você+no+seu+portifólio%2C+gostaria+de+conversar%21"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-accent-foreground text-accent font-semibold rounded-md hover:opacity-90 transition-opacity"
          >
            Envie uma Mensagem via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
