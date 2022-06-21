/**
 * 禁止页面滚动 body fixed方案
 * @param forbid
 */
export const forbidScrollByFixed = () => {
  let forbidScrollNum
  return (forbid = false) => {
    if (forbid) {
      forbidScrollNum = document.documentElement.scrollTop || document.body.scrollTop
      document.body.classList.add('fixed')
      if (typeof forbidScrollNum === 'number') {
        document.body.style.top = `${-forbidScrollNum}px`
      }
    } else {
      document.body.classList.remove('fixed')
      if (typeof forbidScrollNum === 'number') {
        document.documentElement.scrollTop = forbidScrollNum
        document.body.scrollTop = forbidScrollNum
      }
    }
  }
}

/**
 * 下次渲染之前执行
 */
export const nextTick = (fn) => {
  window.requestAnimationFrame(fn)
}
