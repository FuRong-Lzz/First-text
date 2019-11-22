import Mock from 'mockjs'

const Random = Mock.Random

// mock需要给三个参数,url(与axios请求是传的url一致,我这个是本地启动的项目就直接用本地域名了)
// 请求类型: get post...其他看文档
// 数据处理函数,函数需要return数据
// 定义接口
const baseUrl = 'http://localhost:8080'
// 定义数据
const city = function(){
  let citys = []
  for (let i = 0; i < 10; i++) {
    let obj = {
      id: i+1,
      city: Random.city(),
      color: Random.color()
    }
    citys.push(obj)
  }
  return {cityList: citys}
}

const cityInfo = function (){
  let articles = [];
  for (let i = 0; i < 30; i++) {
    let newArticleObject = {
      id:Random.ctitle(),
      title: Random.csentence(5, 30), //  Random.csentence( min, max )
      img: Random.image('200x100','#FF6600' , Random.first()), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
      name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
      date: Random.date('yyyy-MM-dd') // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    }
    articles.push(newArticleObject)
  }
  return {
    articles: articles
  }
}

Mock.mock(baseUrl+'/test/city', 'get', city);
// post请求,带参数,参数会在data中返回,会返回url,type,body三个参数,可以把data打印出来看看
Mock.mock('http://localhost:8080/test/cityInfo', 'get', cityInfo)
