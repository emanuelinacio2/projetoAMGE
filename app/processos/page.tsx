export default function ProcessosPage() {
  return (
    <div className="space-y-16">
      <section className="hero reveal">
        <span className="eyebrow">Controle</span>
        <h1 className="hero-title">Tratamento de problemas no AMGE.</h1>
        <p className="hero-lead">
          Durante a execução, um atraso no módulo de check-in exige resposta
          rápida e transparente.
        </p>
        <p className="callout">
          Desenvolvedor envolvido: Carlos Medeiros. Atraso potencial: 2 semanas.
        </p>
      </section>

      <section className="section">
        <div className="section-header">
          <div>
            <h2 className="section-title">Sequência de ações</h2>
            <p className="section-subtitle">
              Passos para manter o prazo do MVP e minimizar impactos.
            </p>
          </div>
        </div>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-marker">01</div>
            <div>
              <h3>Identificação e análise</h3>
              <p className="section-subtitle">
                Entender a causa do problema e o impacto no cronograma.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker">02</div>
            <div>
              <h3>Discussão com a equipe</h3>
              <p className="section-subtitle">
                Avaliar alternativas como redistribuição de tarefas.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker">03</div>
            <div>
              <h3>Definição da ação corretiva</h3>
              <p className="section-subtitle">
                Escolher a solução mais viável e ajustar funcionalidades.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker">04</div>
            <div>
              <h3>Monitoramento e comunicação</h3>
              <p className="section-subtitle">
                Acompanhar a execução e manter o patrocinador informado.
              </p>
            </div>
          </div>
        </div>
       </section>

      <section className="section">
        <div className="section-header">
          <div>
            <h2 className="section-title">Foco da decisão</h2>
            <p className="section-subtitle">
              Priorizar a entrega do MVP sem perder transparência.
            </p>
          </div>
          <span className="eyebrow">Gate</span>
        </div>
        <div className="section-grid">
          <div className="card">
            <h3>Manter o prazo</h3>
            <p className="section-subtitle">
              Ajustar o escopo se necessário para garantir o MVP.
            </p>
          </div>
          <div className="card">
            <h3>Comunicar riscos</h3>
            <p className="section-subtitle">
              Transparência com patrocinador e stakeholders.
            </p>
          </div>
          <div className="card">
            <h3>Registrar aprendizado</h3>
            <p className="section-subtitle">
              Evidenciar o que funcionou e o que pode melhorar.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
