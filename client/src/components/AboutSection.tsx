import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * About Section - Modern Data Minimalism
 * Personal narrative with timeline and key milestones.
 */
export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('about.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-16 lg:mb-24">
          {/* Left: Story */}
          <div className="lg:col-span-2 space-y-6">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about.intro')}
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                {t('about.paragraph1')}
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                {t('about.intro2')}
              </p>

              <ul className="space-y-3 mt-4">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground whitespace-pre-line">{t('about.skillsIntro')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground whitespace-pre-line">{t('about.machineLearning')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground whitespace-pre-line">{t('about.dataEngineering')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground whitespace-pre-line">{t('about.mlops')}</span>
                </li>
              </ul>

              <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                {t('about.paragraph2')}
              </p>

              <ul className="space-y-3 mt-4">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{t('about.role1')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{t('about.role2')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{t('about.role3')}</span>
                </li>
              </ul>

              <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                {t('about.paragraph3')}
              </p>
            </div>
          </div>

          {/* Right: Key Stats */}
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="bg-secondary rounded-lg border border-border p-6">
              <h4 className="font-bold text-foreground mb-6">{t('about.statsTitle')}</h4>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-muted-foreground">{t('about.stats1')}</p>
                </div>
                <div className="border-t border-border pt-6">
                  <p className="text-sm text-muted-foreground">{t('about.stats2')}</p>
                </div>
                <div className="border-t border-border pt-6">
                  <p className="text-sm text-muted-foreground">{t('about.stats3')}</p>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="bg-secondary rounded-lg border border-border p-6">
              <h4 className="font-bold text-foreground mb-4">{t('about.techStack')}</h4>
              <div className="flex flex-wrap gap-2">
                {['Python', 'PySpark', 'SQL', 'LLMs', 'MLflow', 'Databricks', 'GCP', 'Azure', 'React', 'Node.js'].map((tech) => (
                  <Badge key={tech} variant="secondary" className="font-mono text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-secondary rounded-lg border border-border p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-foreground mb-8">{t('about.milestones')}</h3>
          <div className="space-y-6">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-accent-foreground font-bold">2017</span>
                </div>
              </div>
              <div className="flex-grow">
                <h4 className="font-bold text-foreground mb-1">{t('about.milestone2017')}</h4>
                <p className="text-muted-foreground text-sm whitespace-pre-line">{t('about.milestone2017Desc')}</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-accent-foreground font-bold">2019</span>
                </div>
              </div>
              <div className="flex-grow">
                <h4 className="font-bold text-foreground mb-1">{t('about.milestone2019')}</h4>
                <p className="text-muted-foreground text-sm whitespace-pre-line">{t('about.milestone2019Desc')}</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-accent-foreground font-bold">2023</span>
                </div>
              </div>
              <div className="flex-grow">
                <h4 className="font-bold text-foreground mb-1">{t('about.milestone2023')}</h4>
                <p className="text-muted-foreground text-sm whitespace-pre-line">{t('about.milestone2023Desc')}</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-accent-foreground font-bold">2025</span>
                </div>
              </div>
              <div className="flex-grow">
                <h4 className="font-bold text-foreground mb-1">{t('about.milestone2025')}</h4>
                <p className="text-muted-foreground text-sm whitespace-pre-line">{t('about.milestone2025Desc')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-b border-border mt-16 lg:mt-24" />
      </div>
    </section>
  );
}
