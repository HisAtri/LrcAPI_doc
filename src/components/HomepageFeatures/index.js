import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '快速启动',
    Svg: require('@site/static/img/quickdownload.svg').default,
    description: (
      <>
        想要快速启动程序？请<a href="/docs/QuickStart">点击此处</a>寻找快速部署方式。
      </>
    ),
  },
  {
    title: '帮助我们改进文档',
    Svg: require('@site/static/img/translateit.svg').default,
    description: (
      <>
        希望帮助我们改进此文档？
        请通过电子邮件<a href="mailto:ms1@xms.mx">yz@xms.mx</a>与我们联系。
      </>
      
    ),
  },
  {
    title: '更多内容',
    Svg: require('@site/static/img/more.svg').default,
    description: (
      <>
        网站内容正在不断完善中，欢迎各位有识之士的提议与指正，也欢迎申请加入此项目的建设。或者您可以通过<a href="/docs/Donate">赞助渠道</a>为网站运营提供支持。
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
