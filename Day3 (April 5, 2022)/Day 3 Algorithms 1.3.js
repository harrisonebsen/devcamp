function printRow(n) {
    text = '';
    for (let j=0; j<n; j++) {
      text += j + 1;
    }
    return text;
}
function printColumn(n) {
    text = '';
    for (let i=0; i<n; i++) {
        text += printRow(n);
        text += '\n';
    }
    console.log(text);
}
printColumn(9);
