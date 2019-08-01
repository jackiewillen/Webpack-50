import {plus} from '@/plus';
import react from '@/react';

let a = [1,2,3];
let b = [...a, 4];
let c = 'my';
let d = 'name';
let f = 'is';
document.body.innerHTML += b.join(',');

let sentence = `${c} first ${d} ${f} yin`;

document.body.innerHTML += sentence;
let m = 8;
let k = 1;
let result = plus(m,k);

document.body.innerHTML += ('8+1的结果为：'+result);
