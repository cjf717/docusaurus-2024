import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from "./styles.module.scss"


export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        <div className={styles.navtitle}>个人珍藏网络收藏夹 Favorites</div>
        <div className={styles.row}>
          <div className={styles.col}>
            <span className={styles.title}>新闻IT咨询</span>
            <a className={styles.link} href="https://www.pconline.com.cn">太平洋电脑</a>
            <a className={styles.link} href="https://www.mydrivers.com">驱动之家</a>
            <a className={styles.link} href="https://www.ithome.com/">IT之家</a>
          </div>
          <div className={styles.col}>
            <span className={styles.title}>专业新闻IT咨询平台</span>
            <a className={styles.link} href="http://www.52audio.com/">我爱音频网</a>
            <a className={styles.link} href="http://www.chongdiantou.com">充电头网</a>
            <a className={styles.link} href="https://www.leiphone.com/">雷峰网</a>
          </div>
        </div>
      </main>
    </Layout>
  );
}
