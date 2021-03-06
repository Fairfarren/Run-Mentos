//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    banner: [{
      img: 'https://i.loli.net/2018/03/25/5ab75a03c5ee2.jpeg',
      path: 'https://www.baidu.com',
      id: 1
    }, {
      img: 'https://i.loli.net/2018/03/25/5ab75a0538920.jpeg',
      path: '/card',
      id: 2
    }, {
      img: 'https://i.loli.net/2018/03/25/5ab75a0f40956.jpeg',
      path: '/hello',
      id: 3
    }, {
      img: 'https://i.loli.net/2018/03/25/5ab75a130047b.jpg',
      path: '/home',
      id: 4
    }, {
      img: 'https://i.loli.net/2018/03/25/5ab75a1351249.jpeg',
      path: 'http://www.google.com',
      id: 5
    }, {
      img: 'https://i.loli.net/2018/03/25/5ab75a13f22d6.jpg',
      path: 'asdfasdf',
      id: 6
    }],
    activityList: [{
      title: '周末来拉链123321312啊啊地方阿道夫1',
      img: 'https://i.loli.net/2018/03/25/5ab75a03c5ee2.jpeg',
      people: '何华峰1',
      count: 84,
      time: '2018-04-14',
      id: 1
    }, {
      title: '周末来拉链1',
      img: 'https://i.loli.net/2018/03/25/5ab75a0538920.jpeg',
      people: '何华峰2',
      count: 83,
      time: '2018-04-15',
      id: 2
    }, {
      title: '周末来拉链1',
      img: 'https://i.loli.net/2018/03/25/5ab75a0f40956.jpeg',
      people: '何华峰3',
      count: 82,
      time: '2018-04-16',
      id: 3
    }, {
      title: '周末来拉链1',
      img: 'https://i.loli.net/2018/03/25/5ab75a1351249.jpeg',
      people: '何华峰4',
      count: 81,
      time: '2018-04-17',
      id: 4
    }],
    hotTrackList: [{
      avatarUrl: 'https://i.loli.net/2018/04/13/5ad069280dfc9.jpg',
      img: 'https://i.loli.net/2018/03/25/5ab75a130047b.jpg',
      name: '何华峰',
      title: '今天又健身了好棒棒！今天又健身了好棒棒！今天又健身了好棒棒！今天又健身了好棒棒！今天又健身了好棒棒！今天又健身了好棒棒！今天又健身了好棒棒！',
      time: '2018-03-05',
      like: 90,
      id: 199
    }, {
      avatarUrl: 'https://i.loli.net/2018/04/13/5ad069280dfc9.jpg',
      img: 'https://i.loli.net/2018/03/25/5ab75a130047b.jpg',
      name: '何华峰',
      title: '今天又健身了好棒棒！',
      time: '2018-03-04',
      like: 90,
      id: 120
    }, {
      avatarUrl: 'https://i.loli.net/2018/04/13/5ad069280dfc9.jpg',
      img: 'https://i.loli.net/2018/03/25/5ab75a130047b.jpg',
      name: '何华峰',
      title: '今天又健身了好棒棒！',
      time: '2018-03-03',
      like: 39,
      id: 121
    }, {
      avatarUrl: 'https://i.loli.net/2018/04/13/5ad069280dfc9.jpg',
      img: 'https://i.loli.net/2018/03/25/5ab75a130047b.jpg',
      name: '何华峰',
      title: '今天又健身了好棒棒！',
      time: '2018-03-02',
      like: 19,
      id:122
    }, {
      avatarUrl: 'https://i.loli.net/2018/04/13/5ad069280dfc9.jpg',
      img: 'https://i.loli.net/2018/03/25/5ab75a130047b.jpg',
      name: '何华峰',
      title: '今天又健身了好棒棒！',
      time: '2018-03-01',
      like: 901,
      id: 123
    }]
  },
  onShow () {
    console.log(app)
  }
})
