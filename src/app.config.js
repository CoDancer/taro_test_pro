export default {
  pages: [
    'pages/home/index',
    'pages/cart/cart',
    'pages/classify/classify',
    'pages/mine/mine'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },

  tabBar: {
    backgroundColor: '#fff',
    color: '#000000',
    selectedColor: '#00874E',
    borderStyle: 'black',
    list: [{
        pagePath: 'pages/home/index',
        text: '首页',
        iconPath: 'images/tab-home.png',
        selectedIconPath: 'images/tab-home-s.png'
      },
      {
        pagePath: 'pages/classify/classify',
        text: '分类',
        iconPath: 'images/tab-classify.png',
        selectedIconPath: 'images/tab-classify-s.png'
      },
      {
        pagePath: 'pages/cart/cart',
        text: '购物车',
        iconPath: 'images/tab-cart.png',
        selectedIconPath: 'images/tab-cart-s.png'
      },
      {
        pagePath: 'pages/mine/mine',
        text: '我的',
        iconPath: 'images/tab-mine.png',
        selectedIconPath: 'images/tab-mine-s.png'
      }
    ]
  }
}
