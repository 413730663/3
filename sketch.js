function setup() {  //設定函數，設定初始值的地方
  // 建立依照視窗的高與寬當作畫布的寬高
  createCanvas(windowWidth, windowHeight);  //創建畫布
  // 設定顏色模式為HSB
  colorMode(HSB);
  background(0);  // 清除畫布
}

function draw() {
  // 根據滑鼠的 X 座標計算色相，範圍從 20 到 360
  let hue = map(mouseX, 0, windowWidth, 20, 360);

  // 根據滑鼠的 Y 座標計算亮度，範圍從 0 到 100
  let brightness = map(mouseY, 0, windowHeight, 0, 100);

  // 設定填充顏色
  fill(hue, 100, brightness);

  // 畫圓，圓的寬高為 200px
  noStroke();
  //設定框的框線與顏色
  stroke(255);
  strokeWeight(5);
  ellipse(mouseX, mouseY, 200, 200);
}

function mouseMoved() {
  redraw();  // 當滑鼠移動時重新繪製
}

//當視窗的大小改變時，重新設定畫布的寬高
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);  // 清除畫布
}

