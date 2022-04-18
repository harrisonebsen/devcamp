function draw(n) {
    text = '';
    num = '';
    row = '';
    col = '';
    for (let i=0; i<n; i++) {
        text += i+1;
        row = i+1
        for (let j=0; j<n-1; j++) {
          text += col;
          
          //text += num;
        }
        text += '\n';
    }
	console.log(text);
}
draw(4);