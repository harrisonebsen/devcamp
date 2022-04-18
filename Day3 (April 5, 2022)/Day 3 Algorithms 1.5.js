function draw(n) {
    text = '';
    for (let i=n; i>0; i--) {
        for (let j=0; j<n; j++) {
            text += i;
        }
        text += '\n';
    }
	console.log(text);
}
draw(4);
