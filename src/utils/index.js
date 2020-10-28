/**
 * 鼠标移动偏移量 转换成旋转角度 (rotateX | rotateZ)
 * @param offset
 * @returns {number}
 */
export const offsetToDegree = offset => offset / 4;

/**
 * 返回一个随机整数
 * 有两个参数时, 返回min - max之间的一个整数
 * @param min
 * @param max
 * @returns {number}
 */
export const randomRange = (min, max) => {
    let base = min, range = max - min;
    if (max === undefined) {
        base = 0;
        range = min;
    }
    return ~~(range * Math.random()) + base;
};