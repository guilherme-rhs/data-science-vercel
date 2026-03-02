import { Briefcase, Calendar } from 'lucide-react';

/**
 * Experience Section - Modern Data Minimalism
 * Timeline-style layout with role descriptions and key achievements.
 * Vertical layout with minimal visual elements emphasizing content.
 */
export default function ExperienceSection() {
  const experiences = [
    {
      role: 'Data Science Researcher',
      company: 'Ford Motor Company',
      period: '06/2025 - Atual',
      duration: 'Atual',
      achievements: [
        'Construção de AI Agents e soluções baseadas em LLMs para automação e apoio à tomada de decisão',
        'Desenvolvimento de modelos preditivos e soluções de Machine Learning aplicadas a problemas de negócio',
        'Experimentação, validação e avaliação de modelos em ambientes corporativos',
      ],
    },
    {
      role: 'Data Scientist (Pleno)',
      company: 'Grupo Casas Bahia',
      period: '10/2024 - Atual',
      duration: 'Atual',
      achievements: [
        'Aplicação de modelos de risco de crédito e score de crédito para suporte às decisões estratégicas',
        'Construção e manutenção de bases analíticas (credit books) a partir de múltiplas fontes de dados',
        'Desenvolvimento de pipelines e automações de jobs no Databricks utilizando Python, PySpark e SQL',
        'Implementação de monitoramento de modelos com métricas como PSI, KS e ROC',
        'Automação de processos de Machine Learning, incluindo AutoML, treinamento e reprocessamento',
      ],
    },
    {
      role: 'Data Scientist',
      company: 'Unimed Rio Preto',
      period: '11/2023 - 10/2024',
      duration: '1 ano',
      achievements: [
        'Desenvolvimento de modelos preditivos aplicados à área de healthcare com foco em predição de índices de saúde',
        'Análise e modelagem de dados clínicos para suporte à tomada de decisão em saúde',
        'Criação de dashboards e soluções de BI para acompanhamento contínuo de indicadores',
        'Integração de dados e automação de processos analíticos para monitoramento recorrente',
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 lg:py-32 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Experiência Profissional
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Trajetória consolidada em Ciência de Dados com foco em IA Generativa, Machine Learning e impacto de negócio em ambientes corporativos.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={exp.role} className="relative">
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-24 bg-border" />
              )}

              {/* Timeline Item */}
              <div className="flex gap-6 lg:gap-12">
                {/* Timeline Dot */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center border-4 border-background">
                    <Briefcase size={20} className="text-accent-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow pb-8 lg:pb-12">
                  <div className="bg-secondary rounded-lg border border-border p-8">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">{exp.role}</h3>
                        <p className="text-accent font-semibold">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                        <span className="text-accent font-mono">({exp.duration})</span>
                      </div>
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement) => (
                        <li key={achievement} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-16 lg:mt-24 p-8 bg-secondary rounded-lg border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-6">Formação Acadêmica</h3>
          <div className="space-y-4">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 pb-4 border-b border-border">
              <div>
                <p className="font-bold text-foreground">AI Engineer - Engenharia de Inteligência Artificial Aplicada</p>
                <p className="text-accent">UNIPDS | Brasil</p>
                <p className="text-sm text-muted-foreground mt-2">LLMs, Prompt Engineering, RAG, AI Agents, MLOps, LLMOps, Observabilidade de IA</p>
              </div>
              <span className="text-sm text-muted-foreground font-mono whitespace-nowrap">01/2026 - 01/2027</span>
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 pb-4 border-b border-border">
              <div>
                <p className="font-bold text-foreground">MBA em Data Science e Analytics - Inteligência Artificial</p>
                <p className="text-accent">USP / ESALQ | Brasil</p>
                <p className="text-sm text-muted-foreground mt-2">Machine Learning, Deep Learning, Analytics Avançado, Modelos Preditivos, Estatística Aplicada</p>
              </div>
              <span className="text-sm text-muted-foreground font-mono whitespace-nowrap">05/2024 - 12/2025</span>
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
              <div>
                <p className="font-bold text-foreground">Tecnologia em Informática para Negócios</p>
                <p className="text-accent">FATEC Rio Preto | São José do Rio Preto, SP</p>
                <p className="text-sm text-muted-foreground mt-2">Banco de Dados, BI, ETL, Segurança de Sistemas, Análise de Sistemas</p>
              </div>
              <span className="text-sm text-muted-foreground font-mono whitespace-nowrap">05/2017 - 05/2020</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-b border-border mt-16 lg:mt-24" />
      </div>
    </section>
  );
}
