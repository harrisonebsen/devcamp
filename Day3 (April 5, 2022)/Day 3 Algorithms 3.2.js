function pyramid(n) {
    let string = "";
    let num = 1;
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n - i; j++) {
        string += "_";
      }
      for (let k = 0; k < 2 * i - 1; k++) {
        string += num;
        num++;
      }
    
      for (let l = i; l < n ; l++) {
      string += "_";
      }
      
      string += "\n";
    }
    //Bottom half
    for (let i = 2; i <= n; i++) {
      for (let j = 1; j < i; j++) {
        string += "_";
      }
    
      for (let k = -2; k < 2 * (n-i) - 1; k++) {
        string += num;
        num++;
      }
      
      for (let l = 0; l < i-1; l++) {
      string += "_";
      }
      
      string += "\n";
    }
    console.log(string);
    }
    pyramid(4);