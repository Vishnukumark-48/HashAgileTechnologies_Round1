var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function rotateStringLeft(s, k) {
    var rotatedString = '';
    k = k % s.length;
    for (var i = k; i < s.length; i++) {
        rotatedString += s[i];
    }
    for (var i = 0; i < k; i++) {
        rotatedString += s[i];
    }
    return rotatedString;
}
rl.question('Enter a string: ', function (s) {
    rl.question('Enter the number of positions to rotate: ', function (input) {
        var k = parseInt(input, 10) || 0;
        var result = rotateStringLeft(s, k);
        console.log("Rotated string: ".concat(result));
        rl.close(); // 
    });
});
