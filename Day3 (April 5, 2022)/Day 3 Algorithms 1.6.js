function draw(n) {
    let count = 1;
    let string = "";
    for (let i = 1; i <= n; i++) {
      
      for (let j = 1; j <= n; j++) {
        string += count;
        count++;
      }
      string += "\n";
    }
    console.log(string);
    }
    draw(4);