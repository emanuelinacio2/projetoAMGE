export default function EscopoPage() {
  return (
    <div className="space-y-16">
      <section className="hero reveal">
        <span className="eyebrow">Processo de Iniciação</span>
        <h1 className="hero-title">
          Termo de Abertura do Projeto (TAP) - AMGE.
        </h1>
        <p className="hero-lead">
          Documento base para aprovar o aplicativo móvel de gestão de eventos,
          com foco em um MVP funcional.
        </p>
        <p className="callout">
          Prazo estimado: 5 meses · Orçamento aprovado: US$ 150.000,00.
        </p>
      </section>

      <section className="section">
        <div className="section-header">
          <div>
            <h2 className="section-title">Dados do TAP</h2>
            <p className="section-subtitle">
              Informações obrigatórias para abertura do projeto.
            </p>
          </div>
          <span className="eyebrow">Base</span>
        </div>
        <div className="section-grid">
          <div className="card">
            <h3>Nome do projeto</h3>
            <p className="section-subtitle">
              AMGE - Aplicativo Móvel de Gestão de Eventos.
            </p>
          </div>
          <div className="card">
            <h3>Gestor do projeto</h3>
            <p className="section-subtitle">Emanuel Inácio.</p>
          </div>
          <div className="card">
            <h3>Patrocinador</h3>
            <p className="section-subtitle">CEO da Startup de Eventos.</p>
          </div>
          <div className="card">
            <h3>Prazo estimado</h3>
            <p className="section-subtitle">5 meses.</p>
          </div>
          <div className="card">
            <h3>Orçamento aprovado</h3>
            <p className="section-subtitle">US$ 150.000,00.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <div>
            <h2 className="section-title">Restrições e premissas</h2>
            <p className="section-subtitle">
              Limites e condições que orientam o MVP.
            </p>
          </div>
        </div>
        <div className="section-grid">
          <div className="card">
            <h3>Prazo e orçamento</h3>
            <ul className="list">
              <li>Prazo máximo de 5 meses para o MVP.</li>
              <li>Orçamento limitado a US$ 150.000,00.</li>
            </ul>
          </div>
          <div className="card">
            <h3>Equipe e tecnologia</h3>
            <ul className="list">
              <li>Equipe inicial reduzida, com prioridade clara.</li>
              <li>Usuários com smartphone e acesso à internet.</li>
            </ul>
          </div>
          <div className="card">
            <h3>Método</h3>
            <ul className="list">
              <li>Uso de metodologia ágil para adaptações.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <div>
            <h2 className="section-title">Escopo e requisitos</h2>
            <p className="section-subtitle">
              O que deve ser entregue no MVP e os critérios de qualidade.
            </p>
          </div>
          <span className="eyebrow">Requisitos</span>
        </div>
        <div className="section-grid">
          <div className="card">
            <h3>Requisitos funcionais</h3>
            <ul className="list">
              <li>Registro e check-in digital via QR Code.</li>
              <li>Agenda personalizada de palestras e atividades.</li>
              <li>Mapa interativo do local do evento.</li>
              <li>Módulo de feedback e avaliação.</li>
              <li>Notificações push para lembretes e alterações.</li>
            </ul>
          </div>
          <div className="card">
            <h3>Requisitos não funcionais</h3>
            <ul className="list">
              <li>Interface intuitiva e fácil de usar.</li>
              <li>Desempenho rápido e estável com muitos usuários.</li>
              <li>Segurança das informações dos participantes.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
