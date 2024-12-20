import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from "./index.module.css"
import dataList from "/json/bookmark.json"


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title="收藏夹" description="个人珍藏网络收藏夹">
      <main className={styles.main}>
        <div className={styles.navtitle}>个人珍藏网络收藏夹 Favorites</div>
        <div>
          <a href="/html/bookmark.html" target="_blank" rel="noopener noreferrer">原网页版书签</a>
          <a href="/html/bookmark_m.html" target="_blank" rel="noopener noreferrer">原手机版书签</a>
        </div>
        { dataList.map((type,id)=>{
            return (
              <div className={styles.area} key={id}>
                <span className={styles.title}>{type.area}</span>
                { type.data.map((item,index)=>{
                  return (<a className={styles.link} href={item.url} key={index}>{item.site}</a>)
                })}
              </div>
            )
          })
        }
      </main>
    </Layout>
  );
}
