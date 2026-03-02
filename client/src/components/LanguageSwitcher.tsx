import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/i18n/translations';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; name: string; flag: string; label: string }[] = [
    { code: 'pt', name: 'PT-BR', flag: '🇧🇷', label: 'Brasil' },
    { code: 'en', name: 'EN', flag: '🇺🇸', label: 'EUA' },
    { code: 'es', name: 'ES', flag: '🇪🇸', label: 'Espanha' },
  ];

  return (
    <div className="fixed top-6 right-6 z-50 flex gap-2 bg-background border border-border rounded-lg p-2 shadow-lg lg:flex hidden">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`px-4 py-3 rounded-md transition-all flex items-center gap-2 text-sm font-medium ${
            language === lang.code
              ? 'bg-accent text-accent-foreground shadow-sm'
              : 'hover:bg-secondary text-foreground hover:shadow-sm'
          }`}
          title={lang.label}
        >
          <span className="text-lg">{lang.flag}</span>
          <div className="flex flex-col items-start">
            <span className="text-xs uppercase tracking-widest font-semibold">{lang.name}</span>
            <span className="text-xs opacity-75">{lang.label}</span>
          </div>
        </button>
      ))}
    </div>
  );
}
