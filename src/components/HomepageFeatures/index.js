import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Bring Your Data Together',
    Svg: require('@site/static/img/data-together.svg').default,
    description: (
      <>
        Easily synchronize your data from all of your devices and clouds, freeing you 
        from the data maze of files spread across multiple locations.
      </>
    ),
  },
  {
    title: 'Future-Ready with AI Integration',
    Svg: require('@site/static/img/ai-ready.svg').default,
    description: (
      <>
        Interact with your data like never before with DASSET’s constantly expanding AI features and applications
        like intelligent search, smart photo management and more.    
      </>
    ),
  },
  {
    title: 'Access from Anywhere',
    Svg: require('@site/static/img/access-anywhere.svg').default,
    description: (
      <>
        DASSET Instant Connect ensures you can connect to your Data Hub from half-way across the world
        as easily as if you were sitting right next to it.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
