'use strict';            //↓↓//0→nodeコマンドのファイルパス 1→実行しているプログラムファイルのパス。2は与える数値が入る
const number = process.argv[2] || 0;//左が真ならnumberに代入、０やnull(偽)は0代入。
//エラーでないよう0を代入させておく。↑↑　0などはfalsy
let sum = 0;
for (let i =1; i <=number; i++){
    sum = sum + i;
}
console.log(sum);

// process.argvはNode.js がデフォルトで提供してくれる、コマンドラインの引数が入った配列
//node app.js(ファイル名) 値　でJS実行
//〇〇||△△　左側がtruthyなら左、falsyなら右を使う