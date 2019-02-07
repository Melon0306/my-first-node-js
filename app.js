'use strict';            //↓↓//0→node 1→ファイルのパスが入ってる。2は与える数値が入る
const number = process.argv[2] || 0;//左が真ならnumberに代入、０やnull(偽は0代入。process.argvはNode.js がデフォルトで提供してくれる、コマンドラインの引数が入った配列
//エラーでないよう0を代入させておく。↑↑　0などはfalsy
let sum = 0;
for (let i =1; i <=number; i++){
    sum = sum + i;
}
console.log(sum);

//node app.js(ファイル名) 値　で実行