const utils = {
  /**
   * [parseTime description]  时间格式化函数
   * @param  {[type]} time    [时间对象]
   * @param  {[type]} cFormat [格式]
   * @return {[type]} timeStr [格式化后时间]
   */
  parseTime(time, cFormat) {
    if (arguments.length === 0) {
      return null
    }
    const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
    var date
    if (typeof time === 'object') {
      date = time
    } else {
      if (new Date(time) + '' === 'Invalid Date') {
        date = new Date(time.substr(0, 10) + 'T' + time.substr(11, 8)) // 兼容safari写法
      } else {
        date = new Date(time)
      }
    }
    const formatObj = {
      y: date.getFullYear(),
      m: date.getMonth() + 1,
      d: date.getDate(),
      h: date.getHours(),
      i: date.getMinutes(),
      s: date.getSeconds(),
      a: date.getDay()
    }
    const timeStr = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
      let value = formatObj[key]
      if (key === 'a') return ['日', '一', '二', '三', '四', '五', '六'][value]
      if (result.length > 0 && value < 10) {
        value = '0' + value
      }
      return value || 0
    })
    return timeStr
  },
  //序列化数据
  serialize(data) {
    let url = "";
    for (let k in data) {
        let value = data[k] != undefined ? data[k] : '';
        url += `&${k}=${encodeURIComponent(value)}`;
    }
    return url ? url.substring(1) : '';
  },
  //大于10个字符省略中间文字
  /**
   * @param {*} str 要分割的字符串
   * @param {*} len 长度限制 (默认为10)
   * 汉字为两个字符，符号英文为一个字符
   */
  getSubStr (str,len=10){
    if(str.replace(/[^\x00-\xff]/g,"01").length>len){
      var subStr1 = str.substr(0,2);
      var subStr2 = str.substr(str.length-2,2);
      var subStr = subStr1 + "..." + subStr2 ;
      return subStr;
    }else{
      return str
    }
  },
   //格式化时间格式
   formatTime(obj){
    let date = obj.offset
    for(let key in date){
      if(date[key]<10){
        date[key] = '0'+ date[key]
      }
    }
    if(date.years>0){
      return  date.year +'年'+ date.months +'月'+ date.days + '天'+ date.hours+':'+date.minutes+':'+date.seconds
    }else if(date.months>0){
      return  date.months +'月'+ date.days + '天'+ date.hours+':'+date.minutes+':'+date.seconds
    }else if(date.days >0){
      return date.days + '天'+ date.hours+':'+date.minutes+':'+date.seconds
    }else if(date.hours >0){
      return  date.hours+':'+date.minutes+':'+date.seconds
    }else if(date.minutes >0){
      return  date.minutes+':'+date.seconds
    }else if(date.seconds > 0){
      return  date.seconds +'s'
    }
  }
}

export default utils
