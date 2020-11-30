import {performance, PerformanceObserver} from 'perf_hooks'

import {isNumber} from './utils/NumberHelper';


const timesfirst = [];

const max = 100;
let t1 = 0;
let t2 = 0;
for(let i = 0; i < max; i++) {
  t1 =performance.now();
  isNumber(''+i);
  t2 = performance.now();

  timesfirst.push(t2- t1);
}

let media:number = timesfirst
.reduce((previous = 0, current) => previous += current) / max;

console.log('before', media)

t1 = 0;
t2 = 0;
let timesLast = [];
for(let i = 0; i < max; i++) {
  t1 =performance.now();
  isNumber(''+i);
  t2 = performance.now();

  timesLast.push(t2- t1);
}

let media2 = timesLast
.reduce((previous = 0, current) => previous += current) / max;

console.log('after', media2)

console.log('after > before', media2 > media )

let saida = [];

for(let i = 0; i < max; i++){
  saida.push(
    {before: timesfirst[i], last: timesLast[i], result: `memoize is best ${(media >  media2)}`, dif: (media - media2)}
  );
}

console.table(saida);