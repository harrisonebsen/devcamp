function square(n) {
    text = '';
    underScore2 = 1;
    underScore = n-1;
    for (let i=0; i<n; i++) {
        for (let j=0; j<n; j++) {
           if (underScore <= j) {
             text += '*';
           } else {
             text += '_'; 
           } 
        }
        text += '\n';
        underScore--;
    }
    for (let i=0; i<n-1; i++) {
        for (let j=0; j<n; j++) {
           if (underScore2 <= j) {
             text += '*';
           } else {
             text += '_'; 
           } 
        }
        text += '\n';
        underScore2++;
    }
	console.log(text);
}
square(4);