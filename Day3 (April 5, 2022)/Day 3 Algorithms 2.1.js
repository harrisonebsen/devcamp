function square(n) {
    text = '';
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
	console.log(text);
}
square(4);