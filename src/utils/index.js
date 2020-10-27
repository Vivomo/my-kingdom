/**
 * 鼠标移动偏移量 转换成旋转角度 (rotateX | rotateZ)
 * @param offset
 * @returns {number}
 */
export const offsetToDegree = offset => offset / 4;

/**
 * 返回一个随机整数
 * @param max
 * @returns {number}
 */
export const randomInt = max => ~~(max * Math.random());