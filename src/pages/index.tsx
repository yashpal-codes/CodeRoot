import clsx from "clsx";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import { Code2, Palette, FileCode, Atom, Server, Database } from "lucide-react";

import styles from "./index.module.css";

const TOPICS = [
  {
    title: "HTML",
    description:
      "Learn the fundamentals of HTML, semantic elements, forms, and structural tags.",
    Icon: Code2,
    path: "/docs/HTML/HTML-intro",
  },
  {
    title: "CSS",
    description:
      "Master CSS layouts, Flexbox, positioning, and styling properties.",
    Icon: Palette,
    path: "/docs/CSS/CSS Intro",
  },
  {
    title: "TypeScript",
    description:
      "Discover type safety and advanced TypeScript concepts for scalable code.",
    Icon: FileCode,
    path: "/docs/typescript/introduction",
  },
  {
    title: "React",
    description: "Build interactive UIs with React and TypeScript integration.",
    Icon: Atom,
    path: "/docs/intro",
  },
  {
    title: "PHP",
    description:
      "Explore PHP fundamentals, OOP, sessions, cookies, and backend development.",
    Icon: Server,
    path: "/docs/PHP/introduction",
  },
  {
    title: "Node.js",
    description: "Learn server-side JavaScript with Node.js (coming soon).",
    Icon: Database,
    path: "/docs/intro",
  },
];

function HomepageHeader() {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className={styles.profileButton}>
        <a
          href="https://github.com/yashpal-codes"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <img
            src="/img/profile.png"
            alt="Profile"
            className={styles.profileImage}
          />
        </a>
      </div>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Learning Programming
        </Heading>
        <p className="hero__subtitle">
          A comprehensive guide covering HTML, CSS, JavaScript, React,
          TypeScript, PHP, and more
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Start Learning 📚
          </Link>
        </div>
      </div>
    </header>
  );
}
function TopicsSection() {
  return (
    <section className={styles.topicsSection}>
      <div className="container">
        <h2 style={{ textAlign: "center", marginBottom: "3rem" }}>
          What You'll Learn
        </h2>
        <div className={styles.topicsGrid}>
          {TOPICS.map((topic, index) => (
            <div key={index} className={styles.topicCard}>
              <Link to={`${topic?.path}`}>
                <div className={styles.topicIcon}>
                  <topic.Icon size={48} />
                </div>
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Learning Programming - A Complete Guide"
      description="Learn HTML, CSS, JavaScript, React, TypeScript, PHP, and Node.js through comprehensive documentation and tutorials."
    >
      <HomepageHeader />
      <TopicsSection />
    </Layout>
  );
}
