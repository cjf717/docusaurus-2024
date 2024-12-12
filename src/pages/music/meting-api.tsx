import React, { PureComponent, Component } from 'react'
import axios from "axios";
import styles from './styles.module.scss';

export class metingApi extends PureComponent {
  constructor() {
    super()
    this.state = {
      server: "netease",
      types: "search",
      id: "中国",
      musicList: [],
      isLoading: false
    }
  }
  getMusic() {
    // console.log("获取音乐列表");
    this.setState({ isLoading: true })
    const {server, types, id} = this.state;
    // console.log(server, types, id);
    axios.get("https://api.i-meto.com/meting/api", {
      "Access-Control-Allow-Origin": true,
      params: {
        server: server,
        type: types,
        id: id,
        r: Math.random()
      }
    })
      .then(res => {
        console.log(res);
        this.setState({ musicList:res.data, isLoading: false })
        // this.setState({musicList:res.data})
        }
      )
      .catch((error) => {
        console.log(error)
        this.setState({ isLoading: false })
      })
      .finally()
  }
  // const listEls = {
  //   if (this.state.loading) {
  //     <div>加载中。。。</div>
  //   } else {
  //     <div>{ this.state.musicList }</div>
  //   }
  // },
  render() {
    const { isLoading,musicList } = this.state
    return (
      <div className={styles.meting}>
        <div className={styles.form}>
        <h3 className="title">meting接口高级搜索</h3>
        <div>
          <label htmlFor="server">选择平台</label>
          <select
            name="server"
            id="server"
            value={this.state.server}
            onChange={(e)=>this.setState({server:e.target.value})}
          >
            <option value="">--Please choose an option--</option>
            <option value="netease">网易云netease</option>
            <option value="tencent">tencent</option>
            <option value="kugou">kugou</option>
            <option value="xiami">xiami</option>
            <option value="baidu">baidu</option>
          </select>
        </div>
        <div>
          <label htmlFor="types">选择类型</label>
          <select
            name="types"
            id="types"
            value={this.state.types}
            onChange={e=>this.setState({types:e.target.value})}
          >
            <option value="">--Please choose an option--</option>
            <option value="search">搜索</option>
            <option value="song">song</option>
            <option value="playlist">playlist</option>
            <option value="album">albumt</option>
            <option value="artist">artist</option>
          </select>
        </div>
        <div>
          <label htmlFor="keyword">关键字id</label>
          <input
            id="keyword"
            type="text"
            value={this.state.id}
            onChange={e=>this.setState({id:e.target.value})}
          />
        </div>
        <div><button onClick={()=>this.getMusic()}>提交</button></div>
        </div>
        {/* <div className='loading'>isLoading：{ isLoading + ""}</div> */}
        { isLoading ? <div className={styles.loading}>加载中...</div>: "" }
        <ul className={styles.list}>
          { musicList ? musicList.map((item,index)=>
            <li className={styles.card} key={index}>
              <div className={styles.album}><img className={styles.cover} src={item.pic} alt={item.title} /></div>
              <div className={styles.content}>
                <h4 className={styles.title}>{item.title}</h4>
                <div className={styles.author}>{item.author}</div>
                <div><a target="_blank" href={item.url}>url地址</a></div>
                <div><a target="_blank" href={item.lrc}>lrc歌词</a></div>
              </div>
            </li>
            ):""
          }
        </ul>
      </div>
    )
  }
}

export default metingApi
