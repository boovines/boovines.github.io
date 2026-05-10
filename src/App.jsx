import { useMemo, useState } from 'react'
import { siteData } from './data'

const PROJECTS_INITIAL_COUNT = 4

function App() {
  const [expanded, setExpanded] = useState(false)
  const visibleProjects = useMemo(
    () => (expanded ? siteData.projects : siteData.projects.slice(0, PROJECTS_INITIAL_COUNT)),
    [expanded],
  )
  const remaining = siteData.projects.length - PROJECTS_INITIAL_COUNT

  return (
    <div className="site">
      <main className="va">
        <header className="va-header">
          <div className="va-headcol">
            <h1 className="display va-name">{siteData.name}</h1>
            <p className="va-tag">{siteData.tagline}</p>
            <div className="va-toplinks">
              {siteData.links.map((link) => (
                <a key={link.label} href={link.href} className="mono va-toplink" target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="va-stamp">
            <img src={siteData.photo} alt={siteData.name} />
            <div className="va-stamp-perfs" aria-hidden="true" />
          </div>
        </header>

        <div className="va-rule" />

        <section className="va-section">
          {siteData.about.map((paragraph) => (
            <p key={paragraph} className="va-prose">
              {paragraph}
            </p>
          ))}
        </section>

        <section className="va-section">
          <div className="va-label">Currently</div>
          <ul className="va-list">
            {siteData.currently.map((entry) => (
              <li key={entry.label}>
                <span className="va-roleflag">{entry.label}</span>
                <span className="va-roletext">{entry.detail}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="va-section">
          <div className="va-label">Previously</div>
          <ul className="va-list">
            {siteData.previously.map((entry) => (
              <li key={`${entry.year}-${entry.text}`} className="va-prev-row">
                <span className="mono va-year">{entry.year}</span>
                <span className="va-prev-text">{entry.text}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="va-section">
          <div className="va-label">Selected work</div>
          <div className="va-projects">
            {visibleProjects.map((project) => (
              <a key={project.name} href={project.href} className="va-project" target="_blank" rel="noreferrer">
                <div className="va-proj-head">
                  <span className="va-proj-name">{project.name}</span>
                  <span className="mono va-proj-year">{project.year}</span>
                </div>
                <div className="va-proj-blurb">{project.blurb}</div>
              </a>
            ))}
          </div>
          {remaining > 0 ? (
            <button type="button" className="va-more mono" onClick={() => setExpanded((prev) => !prev)}>
              {expanded ? '- show less' : `+ show ${remaining} more`}
            </button>
          ) : null}
        </section>

        <section className="va-section">
          <div className="va-label">Off-hours</div>
          <div className="va-also">
            {siteData.also.map((entry) => (
              <div key={entry.tag} className="va-also-row">
                <span className="mono va-also-tag">{entry.tag}</span>
                <span className="va-also-text">{entry.text}</span>
              </div>
            ))}
          </div>
        </section>

        <footer className="va-footer">
          <div className="mono va-foot-meta">- say hi -</div>
          <div className="va-links">
            {siteData.links.map((link) => (
              <a key={`${link.label}-footer`} href={link.href} className="link" target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
