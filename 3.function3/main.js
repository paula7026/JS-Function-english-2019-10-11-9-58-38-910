function alphabetSort(message){
    // wirte your code here
    var a=message.toString();
    var b = a.split("");//将字符串拆分成字母数组
    var c=[];
    var d = [];
    for(i=0;i<=b.length-1;i++){
       if(b[i]<='z'&&b[i]>='a') {
        //判断是否为a~z的字母,并将其存放在一个新数组中
         c[c.length]=b[i];
       }
      else {
//判断是否为A~Z的字母,并将其存放在一个新数组中
        d[d.length]=b[i];  
       }  
    }
    e = d.concat(c);//链接两个字母数组
    ee=e.sort();//字母表排序
    return console.log(e.join(''));
  }
 

  alphabetSort('hello'); // should return 'ehllo'
