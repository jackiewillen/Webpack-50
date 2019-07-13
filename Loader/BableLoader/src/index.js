let a = [1,2,3];
let b = [...a, 4];
let c = 'my';
let d = 'name';
let f = 'is';
document.body.innerHTML += b.join(',');

let sentence = `${c} first ${d} ${f} yin`;

document.body.innerHTML += sentence;