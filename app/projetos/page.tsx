export default function ProjetosPage() {
  return (
    <div className="space-y-16">
      <section className="hero reveal">
        <span className="eyebrow">Contexto</span>
        <h1 className="hero-title">
          Projeto AMGE focado em eventos de médio e grande porte.
        </h1>
        <p className="hero-lead">
          O objetivo é melhorar a experiência dos participantes e otimizar os
          processos organizacionais do evento com um MVP.
        </p>
        <p className="callout">
          MVP com funcionalidades essenciais para gerar valor imediato.
        </p>
      </section>

      <section className="section">
        <div className="section-header">
          <div>
            <h2 className="section-title">Principais pontos</h2>
            <p className="section-subtitle">
              Benefícios esperados para organizadores e participantes.
            </p>
          </div>
        </div>
        <div className="section-grid">
          <div className="card">
            <h3>Gestão eficiente</h3>
            <p className="section-subtitle">
              Controle de participantes e organização da agenda do evento.
            </p>
          </div>
          <div className="card">
            <h3>Experiência do participante</h3>
            <p className="section-subtitle">
              Comunicação em tempo real e recursos de autoatendimento.
            </p>
          </div>
          <div className="card">
            <h3>Valor imediato</h3>
            <p className="section-subtitle">
              MVP prioriza funções essenciais para retorno rápido.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <div>
            <h2 className="section-title">Justificativa</h2>
            <p className="section-subtitle">
              Necessidade do mercado por soluções digitais para eventos.
            </p>
          </div>
          <span className="eyebrow">Mercado</span>
        </div>
        <div className="section-grid">
          <div className="card">
            <h3>Controle e comunicação</h3>
            <p className="section-subtitle">
              Facilita check-in, agenda e mensagens para o público.
            </p>
          </div>
          <div className="card">
            <h3>Engajamento e satisfação</h3>
            <p className="section-subtitle">
              Melhor experiência do participante aumenta a adoção.
            </p>
          </div>
          <div className="card">
            <h3>Retorno financeiro</h3>
            <p className="section-subtitle">
              Plataforma escalável para uso em diferentes eventos.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
