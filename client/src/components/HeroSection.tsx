/**
 * Hero Section - Modern Data Minimalism
 * Asymmetric layout with generated hero image and bold typography.
 * Light background with electric blue accent for CTAs.
 */
import { useLanguage } from '@/contexts/LanguageContext';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section id="home" className="pt-32 pb-24 lg:pt-40 lg:pb-32 bg-background">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              {t('hero.title')}
              <span className="text-accent"> {t('hero.titleHighlight')}</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('hero.description')}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-md hover:opacity-90 transition-opacity text-center"
            >
              {t('hero.viewProjects')}
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-accent text-accent font-semibold rounded-md hover:bg-accent hover:text-accent-foreground transition-colors text-center"
            >
              {t('hero.contact')}
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
            <div>
              <p className="text-3xl font-bold text-accent">5+</p>
              <p className="text-sm text-muted-foreground">{t('hero.experience')}</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accent">10+</p>
              <p className="text-sm text-muted-foreground">{t('hero.certifications')}</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accent">3</p>
              <p className="text-sm text-muted-foreground">{t('hero.positions')}</p>
            </div>
          </div>
        </div>

        {/* Right: Hero Image */}
        <div className="relative h-96 lg:h-full min-h-96 rounded-lg overflow-hidden bg-secondary">
          <img
            src="/images/foto_gui.jpg"
            alt="Guilherme Ribeiro Silva"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-b border-border mt-16 lg:mt-24" />
    </section>
  );
}
