const icon = Symbol();
const cfg = {
    'surround-cat': {
        content: 'icon-youxi',
    },
    'sort-3d': {content: 'icon-D'},
    hanoi: {content: 'icon-diejia'},
    // 'test-demo': {content: ''},
    'css-util': {content: 'icon-util'},
    calendar: {content: 'icon-rili'},
    // mandelbroat: {content: ''},
    // duang: {content: ''},
    // 'find-qq': {content: ''},
    'kill-pc': {content: 'icon-duyao'},
    search: {content: 'icon-soushuo'},
    'random-cuboid': {content: 'icon-donghua'},
    ball: {content: 'icon-donghua'},
    Gobang: {content: 'icon-qi'},
    'solar-system': {content: 'icon-taiyangxi'},
    canvasToImg: {content: 'icon-yuanhu'},
    cube: {content: 'icon-mofang'},
    'to-qr-code': {content: 'icon-V'},
    // snake: {content: ''},
    minesweeper: {content: 'icon-saoleix'},
    'blog-md-test': {content: 'icon-note'},
    // 'set-code-style': {content: ''},
    'variable-declaration-of-js': {content: 'icon-note'},
    TaiChi: {content: 'icon-taiji'},
    // 'matrix-style': {content: ''},
    'number-of-js': {content: 'icon-note'},
    'css-code-guide': {content: 'icon-note'},
    'image-opt': {content: 'icon-picture'},
    'layout-of-css': {content: 'icon-note'},
    'word-count': {content: 'icon-note'},
    scss: {content: 'icon-note'},
    'high-performance-web-site': {content: 'icon-note'},
    refactoring: {content: 'icon-note'},
    'eight-queens': {content: ''},
    'shoot-test': {content: 'icon-sheji'},
    'three-door': {content: 'icon-men'},
    'translate-program': {content: 'icon-biji'},
    'css-remove-scroll-shake': {content: 'icon-note'},
    tetris: {content: 'icon-youxi'},
    'snake-auto': {content: 'icon-youxi'},
    sudoku: {content: 'icon-V'},
    'push-box': {content: 'icon-V'},
    'bad-apple': {content: 'icon-shipin'}
};

for (let k in cfg) {
    if (cfg[k].type === undefined) {
        cfg[k].type = icon;
    }
}

export default cfg;