import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Take Control of Your Data',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Dasset frees you from the dilemma of having your data spread across multiple devices
        and clouds.  You own your data, not a 3rd party cloud provider.

      </>
    ),
  },
  {
    title: 'Keep Your Data Safe',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Your data is more than just files - your data is your asset.  Dasset protects your data
        by keeping it synchronized and backed-up across devices and clouds, ensuring your data is
        safe.    
      </>
    ),
  },
  {
    title: 'Access from Anywhere',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Whether you are next to your Dasset server, or half-way across the world, getting access to
        your data on Dasset is not only easy, but secure through SDN/SDVN technology.
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
