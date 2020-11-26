import React, { useState } from 'react'
import { View, Text} from '@tarojs/components'
import './index.less'
import '../utils/utils.js'
import Taro from '@tarojs/taro'

function Index() {

  const [userName] = useState('Hello world')
  const [style, setStyle] = useState({
    marginTop: Taro.$navBarMarginTop + 'px'
  })

  return (
    
    <View className='home-view'>
      <View className='home-navi-bar' style={style}></View>
      <Text className='myName'>{userName}</Text>
    </View>
  )
}

export default Index
