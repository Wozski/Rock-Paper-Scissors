function games() {
    const readline = require('readline');
    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });
    rl.question('輸入你的答案(1.剪刀 2.石頭 3.布): ', (answer) => {
    // TODO: Log the answer in a database
    if (answer > 3 || answer < 1 ) {
        console.log("Please try again");
        num -= 1;
        if (num > 0) {
            rl.close();
            games();
        } else {
            console.log("請重新啟動");
        }
    } else {
        let com = Math.floor(Math.random() * 3);
        let ans = answer - 1 ;
        const result = [["平手","贏","輸"],["輸","平手","贏"],["贏","輸","平手"]]
        console.log(`Thank you for your valuable feedback: ${result[com][ans]}`);
    }
    rl.close();
    });
}
let num = 3;
games();