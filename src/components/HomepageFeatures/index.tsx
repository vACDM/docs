import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Open Source',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        vACDM is completely open source. We appreciate any support and feedback.
      </>
    ),
  },
  {
    title: 'Customizable for your vACC',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        vACDM is tatally customizable for your vACC needs.
      </>
    ),
  },
  {
    title: 'ECFMP Measures',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        vACDM supports MDI measures from ECFMP and calculates CTOT's accordingly.
      </>
    ),
  },
  {
    title: 'Individual Taxi times',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        vACDM woks with geographic taxi zones that let you set taxi times individually depending on parking position and runway.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
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

export default function HomepageFeatures(): JSX.Element {
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
