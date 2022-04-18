function square(n) {
    text = '';
    underScore2 = n-1;
    underScore = 1;
    for (let i=0; i<n; i++) {
        for (let j=0; j<n; j++) {
           if (underScore <= j) {
             text += '_';
           } else {
             text += '*'; 
           } 
        }
        text += '\n';
        underScore++;
    }
    for (let i=0; i<n-1; i++) {
        for (let j=0; j<n; j++) {
           if (underScore2 <= j) {
             text += '_';
           } else {
             text += '*'; 
           } 
        }
        text += '\n';
        underScore2--;
    }
	console.log(text);
}
square(4);