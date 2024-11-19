import React, { Component } from 'react';
import 'APlayer/dist/APlayer.min.css';
// import APlayer from 'APlayer';
import styles from "./styles.module.scss"


class Demo extends Component {
  componentDidMount() {
    this.myFunction();
  }

  myFunction() {
    console.log('组件已加载，函数被执行');
    // 这里可以放置你需要在文档加载后执行的代码
  }
  handBtn () {
    console.log("点击了按钮1包含导出");
  }
  render() {
    return  (
      <div>
        <h3 className={styles.title}>demo</h3>
        <button onClick={this.handBtn}>按钮</button>
      </div>
    )
  }
}

// Demo.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default Demo
