function pyramid(n) {
    let string = "";
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n - i; j++) {
        string += "_";
      }
      for (let k = 0; k < 2 * i - 1; k++) {
        string += "*";
      }
    
      for (let l = i; l < n ; l++) {
      string += "_";
      }
      
      string += "\n";
    }
    console.log(string);
    }
    pyramid(4);