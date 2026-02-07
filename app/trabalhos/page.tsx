export default function TrabalhosPage() {
  return (
    <div className="space-y-16">
      <section className="hero reveal">
        <span className="eyebrow">Considerações finais</span>
        <h1 className="hero-title">Metodologia ágil aplicada ao AMGE.</h1>
        <p className="hero-lead">
          A abordagem ágil permite flexibilidade, entrega de valor contínuo e
          adaptação às necessidades do negócio.
        </p>
        <p className="callout">
          O gestor equilibra prazos, custos e qualidade para garantir o MVP.
        </p>
      </section>

      <section className="section">
        <div className="section-header">
          <div>
            <h2 className="section-title">Benefícios da abordagem ágil</h2>
            <p className="section-subtitle">
              Ganhos diretos no contexto de eventos e tecnologia móvel.
            </p>
          </div>
        </div>
        <div className="section-grid">
          <div className="card">
            <h3>Flexibilidade</h3>
            <p className="section-subtitle">
              Ajustes rápidos conforme feedback do mercado de eventos.
            </p>
          </div>
          <div className="card">
            <h3>Valor contínuo</h3>
            <p className="section-subtitle">
              Entregas incrementais aumentam engajamento dos participantes.
            </p>
          </div>
          <div className="card">
            <h3>Transparência</h3>
            <p className="section-subtitle">
              Monitoramento constante e comunicação clara com stakeholders.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <div>
            <h2 className="section-title">Papel do gestor de projetos</h2>
            <p className="section-subtitle">
              Equilibrar prazo, custo e qualidade para garantir sucesso.
            </p>
          </div>
          <span className="eyebrow">Gestão</span>
        </div>
        <div className="section-grid">
          <div className="card">
            <h3>Planejar e alinhar</h3>
            <p className="section-subtitle">
              Garantir que o MVP esteja ligado aos objetivos do negócio.
            </p>
          </div>
          <div className="card">
            <h3>Gerir riscos</h3>
            <p className="section-subtitle">
              Antecipar atrasos e agir com rapidez.
            </p>
          </div>
          <div className="card">
            <h3>Assegurar qualidade</h3>
            <p className="section-subtitle">
              Validar requisitos e satisfação dos participantes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
