function draw(n) {
    text = '';
    underScore = 1;
    underScore2 = n-1;
  
    for(i=0; i<n; i++) {
      for(j=0; j<n; i++) {
        if(underScore2<=j) {
          text += '*';
        } else {
          text += '_';
        }
      }
      text +='\n';
      underScore2--;
    }
    for(i=0; i<n-1; i++) {
      for(j=0; j<n; j++) {
        if(underScore<=j){
          text+='*';
        } else {
          text+='_';
        }
      }
      text+='\n';
      underScore++;
    }
    console.log(text);
  }
  
  draw(4);