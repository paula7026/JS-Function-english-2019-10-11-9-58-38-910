    // wirte your code here
     // 将字符串每一个字符都转化为数组单元
     var arr = message.split('');
     // 将数组进行反转 
     arr.reverse();
     // 将反转的数组拼接为新的字符串，并且每个字符之间没有间隔
     var newStr = arr.join('');

     if (message === newStr) {
         // 如果新的字符串等于原始字符串 
         // 返回值是true，表示是回文字符串
         return console.log(true);
     } else {
         // 否则，返回值是false，表示不是回文字符串
         return console.log(false);
     }

  }
  palindrome('hello'); // should return false
  palindrome('abcba'); // should return true
