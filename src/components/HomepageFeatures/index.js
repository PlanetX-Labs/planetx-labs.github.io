import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Your Data, Your Device',
    Svg: require('@site/static/img/control-your-data.svg').default,
    description: (
      <>
        DASSET Data Hub frees you from the dilemma of having your data spread across multiple devices
        and clouds.  You own your data, not a 3rd party cloud provider.

      </>
    ),
  },
  {
    title: 'Keep Your Data Safe',
    Svg: require('@site/static/img/somuchsafety.svg').default,
    description: (
      <>
        Your data is more than just files - your data is your asset.  DASSET Data Hub protects your data
        by keeping it synchronized and backed-up across devices and clouds.    
      </>
    ),
  },
  {
    title: 'Access from Anywhere',
    Svg: require('@site/static/img/access-data-anywhere.svg').default,
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
