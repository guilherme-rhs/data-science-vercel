import { useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/i18n/translations';

/**
 * Navigation Component - Modern Data Minimalism
 * Fixed sidebar navigation with clean typography and minimal visual elements.
 * Accent color (electric blue #0066ff) used only for active states and CTAs.
 */
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const languages: { code: Language; name: string; flagImage: string }[] = [
    { code: 'pt', name: 'PT', flagImage: '/images/flags/br.png' },
    { code: 'en', name: 'EN', flagImage: '/images/flags/us.png' },
    { code: 'es', name: 'ES', flagImage: '/images/flags/es.png' },
  ];

  const navItems = [
    { label: t('navigation.home'), href: '#home' },
    { label: t('navigation.about'), href: '#about' },
    { label: t('navigation.skills'), href: '#skills' },
    { label: t('navigation.projects'), href: '#projects' },
    { label: t('navigation.experience'), href: '#experience' },
    { label: t('navigation.contact'), href: '#contact' },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 lg:hidden p-2 hover:bg-secondary rounded-md transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Navigation Sidebar */}
      <nav
        className={`fixed left-0 top-0 h-screen w-64 bg-background border-r border-border transition-transform duration-300 z-40 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Logo/Title */}
        <div className="p-8 border-b border-border">
          <h1 className="text-2xl font-bold text-foreground">
            <span className="text-accent">G</span>uilherme
          </h1>
          <p className="text-sm text-muted-foreground mt-2">AI Engineer & Data Scientist</p>
        </div>

        {/* Navigation Links */}
        <ul className="py-8 space-y-1">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-6 py-3 text-foreground hover:bg-secondary transition-colors relative group"
              >
                {item.label}
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </li>
          ))}
        </ul>

        {/* Divider */}
        <div className="border-t border-border mx-6" />

        {/* Footer Info */}
        <div className="absolute bottom-8 left-6 right-6 text-xs text-muted-foreground space-y-4">
          <div className="space-y-2">
            <p>5+ anos em IA, ML e Engenharia de Dados</p>
            <p className="text-accent font-mono">guilhermeribeiro111@gmail.com</p>
          </div>

          {/* Theme Toggle */}
          {toggleTheme && (
            <button
              onClick={toggleTheme}
              className="w-full px-4 py-2 flex items-center justify-center gap-2 bg-secondary border border-border rounded-md hover:bg-secondary/80 transition-colors text-foreground"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <>
                  <Moon size={16} />
                  <span className="text-xs font-semibold">Dark Mode</span>
                </>
              ) : (
                <>
                  <Sun size={16} />
                  <span className="text-xs font-semibold">Light Mode</span>
                </>
              )}
            </button>
          )}

          {/* Language Switcher */}
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">Idioma</p>
            <div className="flex gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`flex-1 px-3 py-2 rounded-md transition-all flex items-center justify-center gap-1 text-xs font-medium ${
                    language === lang.code
                      ? 'bg-accent text-accent-foreground shadow-sm'
                      : 'bg-secondary hover:bg-secondary/80 text-foreground'
                  }`}
                  aria-label={lang.name}
                >
                  <img 
                    src={lang.flagImage} 
                    alt={lang.name} 
                    className="w-4 h-4 rounded-sm"
                  />
                  <span>{lang.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
