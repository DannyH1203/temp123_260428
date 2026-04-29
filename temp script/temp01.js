/**
 * printChristmasTree - 印出一棵 ASCII 聖誕樹
 *
 * 聖誕樹的結構說明：
 *   - 樹身：共 height 層，每層由空格 + 星號組成
 *     - 第 i 層有 (2*i - 1) 個星號，前面補 (height - i) 個空格，使每層水平置中
 *     - 例如 height=5：
 *         第1層：4空格 + *          (1顆星)
 *         第2層：3空格 + ***        (3顆星)
 *         第3層：2空格 + *****      (5顆星)
 *         第4層：1空格 + *******    (7顆星)
 *         第5層：0空格 + *********  (9顆星)
 *   - 樹幹：印兩行 "|||"，水平置中對齊樹身
 *     - 最後一排寬度為 (2*height - 1)，中心位置在 index (height - 1)
 *     - "|||" 寬度為 3，起始 index 應為 (height - 2)，所以前面補 (height - 2) 個空格
 *
 * @param {number} height - 聖誕樹的高度（層數），預設為 8
 */
function printChristmasTree(height) {

  // 若呼叫時沒有傳入 height，或傳入 undefined/0/null，則預設使用 8 層
  height = height || 8;




  // output 用來累積每一行的字串，最後一次性印出
  var output = "";

  // 迴圈從第 1 層跑到第 height 層，逐層建構樹身
  for (var i = 1; i <= height; i++) {

    // 計算這一層左側需要補的空格數
    // 第 1 層補最多空格（height - 1 個），最後一層補 0 個
    // new Array(n + 1).join(" ") 會產生 n 個空格
    var spaces = new Array(height - i + 1).join(" ");

    // 計算這一層的星號數量：第 i 層有 (2*i - 1) 顆星
    // new Array(2*i).join("*") 會產生 (2*i - 1) 個 "*"
    var stars = new Array(2 * i).join("*");

    // 將空格 + 星號拼接成一行，加上換行符號後附加到 output
    output += spaces + stars + "\n";
  }

  // 建構樹幹：使用 "|||" 代表樹幹
  // 樹幹需要對齊樹身中心：
  //   - 最後一排星號寬度為 (2*height - 1)，總寬度以 height=5 為例是 9
  //   - 中心 index = height - 1 = 4
  //   - "|||" 長度為 3，起始 index = (height - 1) - 1 = height - 2
  //   - 所以前面需要補 (height - 2) 個空格
  // new Array(height - 1).join(" ") 產生 (height - 2) 個空格
  var trunk = new Array(height - 1).join(" ") + "|||";

  // 樹幹印兩行，讓視覺上更明顯
  output += trunk + "\n";
  output += trunk + "\n";

  // 將完整的聖誕樹字串一次性印到終端機
  console.log(output);
}

// 呼叫函式，印出高度為 5 層的聖誕樹
printChristmasTree(5);

printChristmasTree(7);
