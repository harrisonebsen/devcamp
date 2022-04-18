function square(n) {
  text = '';
  array = [];
  underScore = 1;
  for (let i=0; i<n; i++) {
      for (let j=0; j<n; j++) {
         if (underScore <= j) {
           array.push(text += '_');
         } else {
           array.push(text += '*'); 
         } 
      }
      text += '\n';
      underScore++;
  }
console.log(text);
}
square(4);