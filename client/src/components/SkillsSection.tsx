import { Code2, Brain, Database, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * Skills Section - Modern Data Minimalism
 * Organized competencies with icon accents and hierarchical typography.
 * Data-centric presentation with minimal visual noise.
 */
export default function SkillsSection() {
  const { t } = useLanguage();
  const skillCategories = [
    {
      icon: Brain,
      title: 'IA Generativa & LLMs',
      skills: [
        'Large Language Models (LLMs) - Intermediário',
        'Retrieval-Augmented Generation (RAG)',
        'AI Agents e Multi-Agent Systems',
        'Prompt Engineering - Iniciante',
        'Fine-Tuning (LoRA, PEFT)',
        'LangChain e Vector Databases',
      ],
    },
    {
      icon: Code2,
      title: 'Machine Learning & Data Science',
      skills: [
        'Modelos Preditivos - Avançado',
        'Risco de Crédito e Credit Scoring',
        'AutoML e MLOps',
        'Model Monitoring (PSI, KS, ROC)',
        'Healthcare Analytics',
        'Deep Learning e Estatística Aplicada',
      ],
    },
    {
      icon: Database,
      title: 'Engenharia de Dados & Infraestrutura',
      skills: [
        'Python - Avançado',
        'PySpark e Databricks - Avançado',
        'SQL - Avançado',
        'ETL e Data Pipelines',
        'MLflow e Unity Catalog',
        'Azure Synapse e GCP',
      ],
    },
    {
      icon: Zap,
      title: 'DevOps & Deployment',
      skills: [
        'APIs REST - Avançado',
        'MLOps e LLMOps',
        'Model Context Protocol (MCP)',
        'Observabilidade de IA',
        'Governança e Segurança em IA',
        'Arquitetura de Sistemas AI-First',
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 lg:py-32 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('skills.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Expertise consolidada em IA Generativa, Machine Learning, Engenharia de Dados e MLOps com foco em escalabilidade e impacto de negócio.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className="p-8 bg-secondary rounded-lg border border-border hover:border-accent transition-colors group"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-accent rounded-md group-hover:scale-110 transition-transform">
                    <IconComponent size={24} className="text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>

                {/* Skills List */}
                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* ML Algorithms Visualization */}
        <div className="mt-16 lg:mt-24 p-8 bg-secondary rounded-lg border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-8">Arquitetura de Algoritmos</h3>
          <div className="relative h-96 rounded-lg overflow-hidden bg-background flex items-center justify-center">
            <img
              src="https://private-us-east-1.manuscdn.com/sessionFile/FdZsV706rycPSdH3zSSr9f/sandbox/h9oxJ0Fjt2p0JvwlMkp46b-img-2_1771949345000_na1fn_bWwtYWxnb3JpdGhtcy12aXN1YWw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80"
              alt="Machine Learning Algorithms Hierarchy"
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
