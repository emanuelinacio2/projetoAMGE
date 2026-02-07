export default function SprintsPage() {
  return (
    <div className="space-y-16">
      <section className="hero reveal">
        <span className="eyebrow">Competências do gestor</span>
        <h1 className="hero-title">
          Gestão estratégica e negócios no projeto AMGE.
        </h1>
        <p className="hero-lead">
          Ações práticas para garantir alinhamento com o patrocinador e foco no
          valor entregue ao negócio.
        </p>
        <p className="callout">
          Baseado no Triângulo de Talentos do PMI.
        </p>
      </section>

      <section className="section">
        <div className="section-header">
          <div>
            <h2 className="section-title">Ações do gestor</h2>
            <p className="section-subtitle">
              Competências aplicadas na prática em gestão de projetos.
            </p>
          </div>
        </div>
        <div className="section-grid">
          <div className="card">
            <h3>Alinhamento contínuo com patrocinador</h3>
            <p className="section-subtitle">
              Reuniões periódicas com o CEO para validar prioridades do MVP e
              manter o foco no retorno esperado.
            </p>
          </div>
          <div className="card">
            <h3>Priorização orientada a valor</h3>
            <p className="section-subtitle">
              Organizar backlog com foco nas funções que entregam maior valor
              ao usuário e ao negócio.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <div>
            <h2 className="section-title">Impacto no planejamento</h2>
            <p className="section-subtitle">
              Como essas competências sustentam o cronograma do MVP.
            </p>
          </div>
          <span className="eyebrow">Planejamento</span>
        </div>
        <div className="section-grid">
          <div className="card">
            <h3>Foco no essencial</h3>
            <p className="section-subtitle">
              MVP com funcionalidades essenciais: check-in, agenda e mapa.
            </p>
          </div>
          <div className="card">
            <h3>Uso eficiente de recursos</h3>
            <p className="section-subtitle">
              Equipe enxuta trabalhando no que gera retorno imediato.
            </p>
          </div>
          <div className="card">
            <h3>Metas claras por etapa</h3>
            <p className="section-subtitle">
              Acompanhamento contínuo de entregas parciais.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
