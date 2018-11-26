//用来显示距离元旦的倒计时文本
function getTimes() {
  // 获取结束时间的日期
  var endTime = new Date('2019/1/1 00:00:00');
  // 获取当前日期
  var nowTimw = new Date();
  // 获取结束时间与当前时间的总毫秒数
  var t = endTime.getTime() - nowTimw.getTime();
  // 定义4个变量 存放日期
  var d = 0;
  var h = 0;
  var m = 0;
  var s = 0;
  // 如果获取的毫秒数>0
  if (t > 0) {
    // 获取相对应的天时分秒
    d = Math.floor(t / 1000 / 60 / 60 / 24);
    h = Math.floor(t / 1000 / 60 / 60 % 24);
    m = Math.floor(t / 1000 / 60 % 60);
    s = Math.floor(t / 1000 % 60);
  };
  // 写入到页面中
  $('cc').innerHTML = (d);
}
setInterval(getTimes, 0); //执行倒计时的函数
//封装获取id的讲话函数
function $(id) {
  return document.getElementById(id);
}
