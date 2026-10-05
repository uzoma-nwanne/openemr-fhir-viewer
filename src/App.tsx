function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div>
          <h1>OpenEMR FHIR Patient Viewer</h1>
          <p>FHIR-powered clinical data viewer</p>
        </div>

        <div className="connection-status">
          <span className="status-indicator" />
          Not connected
        </div>
      </header>

      <main className="app-content">
        <section className="search-section">
          <h2>Patient Search</h2>

          <div className="search-form">
            <input
              type="text"
              placeholder="Search by name or identifier"
            />

            <button type="button">
              Search
            </button>
          </div>
        </section>

        <section className="patient-section">
          <h2>Patient</h2>

          <div className="empty-state">
            <p>No patient selected.</p>
            <p>
              Search for a patient to view their clinical information.
            </p>
          </div>
        </section>

        <section className="clinical-section">
          <h2>Clinical Summary</h2>

          <div className="clinical-grid">
            <article className="clinical-card">
              <h3>Observations</h3>
              <p>—</p>
            </article>

            <article className="clinical-card">
              <h3>Conditions</h3>
              <p>—</p>
            </article>

            <article className="clinical-card">
              <h3>Encounters</h3>
              <p>—</p>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;