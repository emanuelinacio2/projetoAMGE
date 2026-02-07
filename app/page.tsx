import Link from "next/link";

export default function Home() {
  const sections = [
    {
      slug: "escopo",
      title: "TAP e escopo",
      description:
        "Termo de abertura, restrições e requisitos do MVP.",
      tags: ["Iniciação", "Escopo", "Requisitos"],
    },
    {
      slug: "sprints",
      title: "Competências",
      description:
        "Ações do gestor para planejamento e alinhamento estratégico.",
      tags: ["PMI", "Gestão", "Planejamento"],
    },
    {
      slug: "processos",
      title: "Controle",
      description:
        "Tratamento de problemas e comunicação com patrocinador.",
      tags: ["Risco", "Ação", "Monitoramento"],
    },
    {
      slug: "trabalhos",
      title: "Considerações",
      description:
        "Impacto da metodologia ágil no sucesso do MVP.",
      tags: ["Ágil", "Flexibilidade", "Valor"],
    },
    {
      slug: "projetos",
      title: "Contexto",
      description:
        "Principais pontos e justificativa do aplicativo AMGE.",
      tags: ["Objetivo", "Mercado", "MVP"],
    },
  ];

  return (
    <div className="space-y-24">
      <section className="hero reveal">
        <span className="eyebrow">Projeto de Software</span>
        <h1 className="hero-title">
          AMGE - Aplicativo Móvel de Gestão de Eventos.
        </h1>
        <p className="hero-lead">
          Unidade 1 - Introdução ao Projeto de Software. Prática em Gestão de
          Projetos com foco em um MVP de 5 meses e orçamento aprovado de
          US$ 150.000,00.
        </p>
        <div className="hero-actions">
          <Link className="btn-primary" href="/escopo">
            Ver TAP
          </Link>
          <Link className="btn-ghost" href="/processos">
            Ver controle
          </Link>
        </div>
        <p className="callout">
          Gestor: Emanuel Inácio · Patrocinador: CEO da Startup de Eventos.
        </p>
      </section>

      <section className="section" id="mapa">
        <div className="section-header">
          <div>
            <h2 className="section-title">Mapa da apresentação</h2>
            <p className="section-subtitle">
              Estrutura organizada para apresentar iniciação, planejamento,
              controle e considerações finais do projeto AMGE.
            </p>
          </div>
          <span className="eyebrow">Rotas principais</span>
        </div>
        <div className="section-grid">
          {sections.map((section) => (
            <Link
              key={section.slug}
              className="card"
              href={`/${section.slug}`}
            >
              <div className="tag-row">
                {section.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div>
                <h3>{section.title}</h3>
                <p className="section-subtitle">{section.description}</p>
              </div>
              <span className="eyebrow">Abrir guia</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <div>
            <h2 className="section-title">Roteiro da apresentação</h2>
            <p className="section-subtitle">
              Sequência para explicar o projeto do TAP até as considerações.
            </p>
          </div>
          <span className="eyebrow">Fluxo</span>
        </div>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-marker">01</div>
            <div>
              <h3>Termo de abertura (TAP)</h3>
              <p className="section-subtitle">
                Nome do projeto, gestor, patrocinador, prazo e orçamento.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker">02</div>
            <div>
              <h3>Competências do gestor</h3>
              <p className="section-subtitle">
                Alinhamento com patrocinador e priorização por valor.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker">03</div>
            <div>
              <h3>Controle de problemas</h3>
              <p className="section-subtitle">
                Ação corretiva para atrasos e comunicação com stakeholders.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker">04</div>
            <div>
              <h3>Considerações finais</h3>
              <p className="section-subtitle">
                Benefícios da metodologia ágil e impacto no MVP.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
