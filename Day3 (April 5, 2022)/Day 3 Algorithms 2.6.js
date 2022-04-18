function square(n) {
  text = '';
  underScore = 1;
  for (let i=1; i<=n; i++) {
      for (let j=1; j<=n; j++) {
         if (underScore <= j) {
           text += '*';
         } else {
           text += '_'; 
         } 
      }
      text += '\n';
      underScore++;
  }
console.log(text);
}
square(4);