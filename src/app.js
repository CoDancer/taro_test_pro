import { Component } from 'react'
import Taro from '@tarojs/taro'
import './app.less'

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    Taro.getSystemInfo({})
      .then(res  => {
        Taro.$navBarMarginTop =  res.statusBarHeight || 0
    })
    return this.props.children
  }
  
}

export default App
