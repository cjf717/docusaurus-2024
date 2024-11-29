import React, { PureComponent, Component } from 'react'
import axios from "axios";
import styles from './styles.module.scss';

export class metingApi extends Component {
  constructor() {
    super()
    this.state = {
      server: "netease",
      types: "search",
      id: "中国人",
      musicList: null,
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
      .catch((error) => console.log(error))
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
        <div className="form">
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
        <div className='loading'>isLoading：{ isLoading + ""}</div>
        <div className='loading'>{ isLoading ? "加载中" : "" }</div>
        <div className='list'>{ musicList ? musicList.map(item=><div>{item.title}</div>):"" }</div>
      </div>
    )
  }
}

export default metingApi
