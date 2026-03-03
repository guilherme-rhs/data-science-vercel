import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/i18n/translations';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; name: string; flagImage: string }[] = [
    { code: 'pt', name: 'PT', flagImage: '/images/flags/br.svg' },
    { code: 'en', name: 'EN', flagImage: '/images/flags/us.svg' },
    { code: 'es', name: 'ES', flagImage: '/images/flags/es.svg' },
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
        >
          <img 
            src={lang.flagImage} 
            alt={lang.name} 
            className="w-5 h-5 rounded-sm"
          />
          <span className="text-xs uppercase tracking-widest font-semibold">{lang.name}</span>
        </button>
      ))}
    </div>
  );
}
