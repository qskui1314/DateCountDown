//计算剩余天数

function stringToDate(dateString){
  dateString = dateString.split('-');
  return new Date(dateString[0], dateString[1] - 1, dateString[2]);
}
function getTimes() {
  // 获取当前日期
  var date = new Date();
         var month = date.getMonth() + 1;
         var strDate = date.getDate();
         if (month >= 1 && month <= 9) {
                 month = "0" + month;
             }
         if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
             }
         var date1 = date.getFullYear() + '-' + month + '-' + strDate;

  date1 = stringToDate(date1);
  // 获取结束时间的日期
  var date2 = stringToDate('2021-01-01');
  delta = (date2 - date1) / (1000 * 60 * 60 * 24) + 1; // 计算出总时间

  weeks = 0;
  for(i = 0; i < delta; i++){
      if(date1.getDay() == 0 || date1.getDay() == 6) weeks ++;  // 若为周六或周天则加1
      date1 = date1.valueOf();
      date1 += 1000 * 60 * 60 * 24;
      date1 = new Date(date1);
  }
  // 写入到页面中
  $('cc').innerHTML = delta - weeks;
}
setInterval(getTimes, 1000); //执行倒计时的函数

//封装获取id的讲话函数
function $(id) {
  return document.getElementById(id);
}
