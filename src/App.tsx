// Placeholder shell. The inbox, board and drawer replace this.
export const App = () => (
  <main className="shell">
    <header className="shell__header">
      <h1>Job search tracker</h1>
      <div className="shell__blocks" aria-hidden="true">
        <span className="block block--red" />
        <span className="block block--yellow" />
        <span className="block block--blue" />
      </div>
    </header>
    <p className="shell__empty">Nothing tracked yet. The inbox lands here first.</p>
  </main>
)
