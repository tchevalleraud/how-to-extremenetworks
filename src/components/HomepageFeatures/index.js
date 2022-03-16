import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

import Translate, {translate} from '@docusaurus/Translate';

const FeatureList = [
    {
        title: <Translate>Fabric SPBm</Translate>,
        Svg: require('@site/static/img/undraw_connected_world_wuay.svg').default,
        description: (
            <Translate>
                TODO
            </Translate>
        ),
    },
    {
        title: <Translate>Fabric IP</Translate>,
        Svg: require('@site/static/img/undraw_server_status_re_n8ln.svg').default,
        description: (
            <Translate>
                TODO
            </Translate>
        ),
    },
    {
        title: <Translate>Management centralized</Translate>,
        Svg: require('@site/static/img/undraw_software_engineer_re_tnjc.svg').default,
        description: (
            <Translate>
                TODO
            </Translate>
        ),
    },
    {
        title: <Translate>Centralized security</Translate>,
        Svg: require('@site/static/img/undraw_fingerprint_re_uf3f.svg').default,
        description: (
            <Translate>
                TODO
            </Translate>
        ),
    },
    {
        title: <Translate>DevOps</Translate>,
        Svg: require('@site/static/img/undraw_dev_productivity_re_fylf.svg').default,
        description: (
            <Translate>
                TODO
            </Translate>
        ),
    },
    {
        title: <Translate>Optimized deployment</Translate>,
        Svg: require('@site/static/img/undraw_time_management_re_tk5w.svg').default,
        description: (
            <Translate>
                TODO
            </Translate>
        ),
    },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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
