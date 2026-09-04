import '@fortawesome/fontawesome-free/css/all.min.css';
import formatDistance from 'date-fns/formatDistance';
import * as React from 'react';
import {Helmet} from 'react-helmet';
import {ThemeProvider} from 'styled-components';
import 'typeface-domine';

import {CodePlayground, SocialLinks, ThemeToggle} from '../components/index';
import {useLocalStorage} from '../hooks/useLocalStorage';
import {themes} from '../styles/index';

import '../styles/main.css';

const capabilities = [
  {
    number: '01',
    title: 'Backend services',
    description: 'Designing reliable services and APIs that keep complex products understandable as they grow.',
  },
  {
    number: '02',
    title: 'Software design',
    description: 'Turning ambiguous requirements into clear boundaries, pragmatic architecture and maintainable code.',
  },
  {
    number: '03',
    title: 'Product engineering',
    description: 'Bringing a full-product perspective shaped by hands-on experience across backend, web and mobile.',
  },
];

const stack = [
  ['Languages', 'Java · JavaScript · TypeScript · Python'],
  ['Web', 'React · Angular · HTML · CSS'],
  ['Mobile', 'Flutter'],
  ['Exploring', 'Elixir · BEAM · distributed systems'],
];

const IndexPage = () => {
  const [theme, setTheme] = useLocalStorage('mattmusc:theme', 'light');
  const experience = formatDistance(new Date(2016, 11, 16), new Date());

  return (
    <ThemeProvider theme={themes[theme]}>
      <Helmet htmlAttributes={{lang: 'en'}}>
        <title>Matteo Muscella — Backend engineer</title>
        <meta
          name="description"
          content="Matteo Muscella is a backend engineer focused on reliable services, maintainable software and thoughtful product engineering."
        />
        <style type="text/css">{`
          :root {
            --bg: ${themes[theme].bg};
            --grey: ${themes[theme].grey};
            --light-grey: ${themes[theme].lightGrey};
            --blue: ${themes[theme].blue};
            --orange: ${themes[theme].orange};
            --red: ${themes[theme].red};
            --green: ${themes[theme].green};
          }
          body { background-color: var(--bg); }
        `}</style>
      </Helmet>

      <header className="site-header">
        <a className="logo" href="#top" aria-label="Matteo Muscella">m</a>
        <ThemeToggle theme={theme} setTheme={setTheme}/>
      </header>

      <main id="top" className="site-main">
        <section className="hero" aria-labelledby="intro-title">
          <div className="hero-copy">
            <p className="eyebrow orange">#about me</p>
            <h1 id="intro-title">Hi, I’m Matteo.<br/>I build reliable software.</h1>
            <p className="lede">
              I’m a backend engineer with {experience} of experience designing services and
              turning complex requirements into software that is built to last.
            </p>
            <div className="hero-actions">
              <a className="primary-link" href="https://www.linkedin.com/in/matteomuscella/?locale=en_US" rel="noreferrer" target="_blank">
                Let’s connect <span aria-hidden="true">↗</span>
              </a>
              <SocialLinks/>
            </div>
          </div>

          <CodePlayground/>
        </section>

        <section className="section" aria-labelledby="work-title">
          <p className="eyebrow green">#what I do</p>
          <div className="section-heading">
            <h2 id="work-title">From a blank page to a product people can use.</h2>
            <p>I care about the details behind a calm, useful experience: structure, maintainability and thoughtful interaction.</p>
          </div>

          <div className="capability-grid">
            {capabilities.map(({number, title, description}) => (
              <article className="capability" key={number}>
                <span className="capability-number">{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section experience-section" aria-labelledby="experience-title">
          <div className="experience-intro">
            <p className="eyebrow blue">#experience</p>
            <h2 id="experience-title">Nine years of learning what survives production.</h2>
            <p>
              My path started close to the interface—with web applications and mobile products—
              and gradually moved deeper into the systems behind them.
            </p>
          </div>

          <div className="experience-notes">
            <article>
              <span>Today</span>
              <h3>Building at enterprise scale</h3>
              <p>
                I design and evolve backend services for a mature SaaS product, where reliability,
                clear ownership and safe change matter every day.
              </p>
            </article>
            <article>
              <span>Along the way</span>
              <h3>A full-product perspective</h3>
              <p>
                Working across backend, frontend and mobile taught me to look beyond an isolated
                component and understand how technical choices shape the whole experience.
              </p>
            </article>
            <article>
              <span>Always</span>
              <h3>Engineering over shortcuts</h3>
              <p>
                I value simple designs, readable code and thoughtful reviews—the habits that keep
                today’s fast solution from becoming tomorrow’s fragile system.
              </p>
            </article>
          </div>
        </section>

        <section className="section split-section" aria-labelledby="approach-title">
          <div>
            <p className="eyebrow blue">#how I work</p>
            <h2 id="approach-title">Practical by default.<br/>Curious by nature.</h2>
          </div>
          <div className="approach-copy">
            <p>
              I like finding the simplest shape of a difficult problem, then building it with
              enough care to last. I value readable code, candid collaboration and steady iteration.
            </p>
            <p>
              I’m especially interested in distributed systems and the different ways languages
              and runtimes—recently Elixir and the BEAM—help us reason about resilience.
            </p>
          </div>
        </section>

        <section className="section" aria-labelledby="stack-title">
          <p className="eyebrow green">#my stack</p>
          <h2 id="stack-title">Tools I’ve worked with</h2>
          <dl className="stack-list">
            {stack.map(([category, tools]) => (
              <div key={category}>
                <dt>{category}</dt>
                <dd>{tools}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="section photography" aria-labelledby="photography-title">
          <div className="photography-mark" aria-hidden="true">⌁</div>
          <div className="photography-copy">
            <p className="eyebrow blue">#beyond code</p>
            <h2 id="photography-title">I also tell stories through photographs.</h2>
            <p>
              Away from the keyboard, photography is how I slow down and pay attention—
              from sport and wildlife to the shapes hidden in cities and architecture.
            </p>
            <a className="photography-link" href="https://mattmusc.photos/" rel="noreferrer" target="_blank">
              Visit my photography portfolio <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className="contact" aria-labelledby="contact-title">
          <p className="eyebrow orange">#say hello</p>
          <h2 id="contact-title">Have an interesting problem?</h2>
          <p>I’m always happy to meet thoughtful people and hear about what they’re building.</p>
          <a className="contact-link" href="https://www.linkedin.com/in/matteomuscella/?locale=en_US" rel="noreferrer" target="_blank">
            Find me on LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Matteo Muscella</span>
        <span>Built with Gatsby · Hosted on Netlify</span>
      </footer>
    </ThemeProvider>
  );
};

export default IndexPage;
