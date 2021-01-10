const baseSize = 32     // 基准字体大小
const maxWindowWidth = 450 // 屏幕最宽设定
// 设置 rem 函数
function setRem () {
    // 当前宽度相对于 750 设计宽度进行缩放
    const scale = Math.min(maxWindowWidth, document.documentElement.clientWidth)  / 750
    // 设置页面根节点字体大小
    document.documentElement.style.fontSize = (baseSize * Math.min(scale, 2)) + 'px'
}

setRem()    // 初始化
window.onresize = function () {
    setRem()
}