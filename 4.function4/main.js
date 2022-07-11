function countWords(message){
    // wirte your code here
    var s=new Array();
    s=message.split(" ");
    console.log(s.length);
  }
  countWords('Good morning, I love JavaScript.'); // should return 5
