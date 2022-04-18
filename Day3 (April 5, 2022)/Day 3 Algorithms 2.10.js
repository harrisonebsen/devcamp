function pyramid(n) {
    let string = "";
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j < i; j++) {
        string += "_";
      }
    
      for (let k = -2; k < 2 * (n-i) - 1; k++) {
        string += "*";
      }
      
      for (let l = 0; l < i-1; l++) {
      string += "_";
      }
      
      string += "\n";
    }
    console.log(string);
    } 
    pyramid(4);