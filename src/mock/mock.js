// 引入mockjs
import Mock from 'mockjs'
// 获取 mock.Random 对象
const Random = Mock.Random;
// mock一组数据
const newsData = function () {
  let array_list = [];
  for (let i = 0; i < 10; i++) {
    let newObject = {
      who_repeat: Random.name(), //  Random.csentence( min, max )
      auth:{
        name: Random.name(),
        avatar: Random.image('40x40'),
        send_time: Random.date() + ' ' + Random.time(),
      },
      content:{
        text: Random.paragraph(),
        img: Random.dataImage('500x300'),
        comment: Random.natural(1, 50),
        repeat: Random.natural(1, 50),
        like_it: Random.natural(1, 50)
      }
    }
    array_list.push(newObject)
  }

  return {
      articles: array_list
  }
}

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('http://api/newslist', 'get', newsData);