const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function rotateStringLeft(s: string, k: number): string {
    let rotatedString = '';
    k = k % s.length;
    for (let i = k; i < s.length; i++) {
        rotatedString += s[i];
    }
    for (let i = 0; i < k; i++) {
        rotatedString += s[i];
    }
    return rotatedString;
}


rl.question('Enter a string: ', (s: string) => {
    
    rl.question('Enter the number of positions to rotate: ', (input: string) => {
        const k: number = parseInt(input, 10) || 0; 
        const result = rotateStringLeft(s, k); 
        console.log(`Rotated string: ${result}`); 
        rl.close(); // 
    });
});
