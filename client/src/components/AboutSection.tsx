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
                Sou Guilherme Ribeiro Silva, um Data Scientist e AI Engineer apaixonado por transformar dados complexos em soluções inteligentes que geram impacto real nos negócios.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Começei minha carreira em 2017 na FATEC Rio Preto, onde estudei Tecnologia em Informática para Negócios. Desde então, acumulei mais de 5 anos de experiência com foco em:
              </p>

              <ul className="space-y-3 mt-4">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground"><strong>IA Generativa & LLMs:</strong> Construindo agentes inteligentes e sistemas RAG para automação de processos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground"><strong>Machine Learning em Produção:</strong> Desenvolvendo modelos preditivos de alto impacto com monitoramento contínuo</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground"><strong>Engenharia de Dados:</strong> Construindo pipelines robusto em ambientes corporativos (Databricks, GCP, Azure)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground"><strong>MLOps & Observabilidade:</strong> Implementando arquiteturas escaláveis com automação e monitoramento</span>
                </li>
              </ul>

              <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                Atualmente, trabalho em múltiplas posições estratégicas: como Data Scientist Pleno na Casas Bahia (modelos de risco de crédito), como Data Science Researcher na Ford Motor Company (AI Agents), e como estudante de AI Engineer na UNIPDS.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                O que me motiva é resolver problemas complexos através de dados e IA, transformando insights em ações que geram valor real para os negócios e para a sociedade.
              </p>
            </div>
          </div>

          {/* Right: Key Stats */}
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="bg-secondary rounded-lg border border-border p-6">
              <div className="space-y-6">
                <div>
                  <p className="text-4xl font-bold text-accent mb-2">5+</p>
                  <p className="text-sm text-muted-foreground">Anos de Experiência em Data Science</p>
                </div>
                <div className="border-t border-border pt-6">
                  <p className="text-3xl font-bold text-accent mb-2">10+</p>
                  <p className="text-sm text-muted-foreground">Certificações Profissionais</p>
                </div>
                <div className="border-t border-border pt-6">
                  <p className="text-3xl font-bold text-accent mb-2">3</p>
                  <p className="text-sm text-muted-foreground">Posições Atuais</p>
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
