export default function HomePage() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <header>
        <h1>Welcome to My Portfolio</h1>
        <p>Hi, I&apos;m [Your Name], a passionate developer.</p>
      </header>
      <section>
        <h2>About Me</h2>
        <p>
          I specialize in building modern web applications using React, TypeScript, and more.
        </p>
      </section>
      <section>
        <h2>Projects</h2>
        <ul>
          <li>Project 1 - Description</li>
          <li>Project 2 - Description</li>
        </ul>
      </section>
      <section>
        <h2>Contact</h2>
        <p>
          Email: <a href="mailto:your.email@example.com">your.email@example.com</a>
        </p>
      </section>
    </main>
  );
}
