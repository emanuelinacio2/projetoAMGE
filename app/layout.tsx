import type { Metadata } from "next";
import Link from "next/link";
import { Cormorant_Garamond, Space_Grotesk } from "next/font/google";
import "./globals.css";

const displaySerif = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bodySans = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Projeto AMGE",
  description:
    "Projeto AMGE: documentação do aplicativo móvel de gestão de eventos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${displaySerif.variable} ${bodySans.variable}`}>
        <div className="page-bg">
          <header className="site-header">
            <div className="container nav-row">
              <Link href="/" className="brand" aria-label="Voltar ao inicio">
                <span className="brand-mark" aria-hidden="true" />
                <div className="brand-text">
                  <span className="brand-kicker">ADS</span>
                  <span className="brand-title">Projeto AMGE</span>
                </div>
              </Link>
              <nav className="nav">
                <Link href="/escopo">Escopo</Link>
                <Link href="/sprints">Sprints</Link>
                <Link href="/processos">Processos</Link>
                <Link href="/trabalhos">Trabalhos</Link>
                <Link href="/projetos">Projetos</Link>
              </nav>
            </div>
          </header>
          <main className="container content">{children}</main>
          <footer className="site-footer">
            <div className="container footer-grid">
              <div>
                <h3>Faculdade</h3>
                <p>Anhanguera</p>
                <p>Polo: Ribeirão das Neves</p>
              </div>
              <div>
                <h4>Matéria</h4>
                <p>Projeto e Software</p>
                <p>Primeiro Semestre</p>
                <p>Prof. Me. Marco Iukuro Hisatomi</p>
              </div>
              <div>
                <h4>Aluno</h4>
                <p>Emanuel Inácio Pereira</p>
                <p>Análise e Desenvolvimento de Software</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
