import { ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * Projects Section - Modern Data Minimalism
 * Grid layout showcasing key projects with technology tags and links.
 * Minimal visual hierarchy with accent color for interactions.
 */
export default function ProjectsSection() {
  const { t } = useLanguage();

  const projects = [
    {
      title: t('projects.creditRisk'),
      description: 'Desenvolvimento e manutencao de modelos de risco de credito e credit scoring em ambiente Databricks. Construcao de credit books a partir de multiplas fontes de dados com monitoramento continuo.',
      technologies: ['Python', 'PySpark', 'SQL', 'Databricks', 'AutoML'],
      impact: 'Suporte estrategico em decisoes de credito em escala',
      link: 'https://github.com/guilherme-rhs/modelos-risco-credito',
      repoPath: '../../../projects/modelos-risco-credito',
    },
  ];

  return (
    <section id="projects" className="py-24 lg:py-32 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="p-6 bg-secondary rounded-lg border border-border hover:border-accent transition-all duration-300 group flex flex-col"
            >
              {/* Project Header */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-4 flex-grow">
                {project.description}
              </p>

              {/* Impact */}
              <div className="mb-4 p-3 bg-background rounded border border-border">
                <p className="text-sm font-semibold text-accent">
                  {project.impact}
                </p>
              </div>

              {/* Technologies */}
              <div className="mb-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs font-mono bg-background text-foreground rounded border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-4 border-t border-border">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent hover:opacity-70 transition-opacity text-sm font-semibold"
                >
                  <ExternalLink size={16} />
                  GitHub
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  <Github size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Data Pipeline Visualization */}
        <div className="mt-16 lg:mt-24 p-8 bg-secondary rounded-lg border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-8">Pipeline de Dados Tipico</h3>
          <div className="relative h-48 rounded-lg overflow-hidden bg-background flex items-center justify-center">
            <img
              src="https://private-us-east-1.manuscdn.com/sessionFile/FdZsV706rycPSdH3zSSr9f/sandbox/h9oxJ0Fjt2p0JvwlMkp46b-img-4_1771949342000_na1fn_ZGF0YS1waXBlbGluZS1mbG93.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80"
              alt="Data Pipeline Flow"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="border-b border-border mt-16 lg:mt-24" />
      </div>
    </section>
  );
}
