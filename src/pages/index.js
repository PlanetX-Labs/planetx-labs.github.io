import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './index.module.css';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  // const imgUrl = useBaseUrl('img/DASSET_Logo.png');
  const imgUrl = useBaseUrl('img/logo-180.png');
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img src={imgUrl} alt="Dasset Logo"/>

        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started/intro">
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={` ${siteConfig.title}`}
      description="Bring your data together with DASSET.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
