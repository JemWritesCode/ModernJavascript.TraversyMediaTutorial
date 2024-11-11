console.log(100);

console.log('Hello world');

console.log(20, 'Hello', true);

const x = 100;

console.log(x);

console.error('Alert');

console.warn('warning');

console.table({name: 'Brad', email: 'brad@gmail.com'});

console.group('simple');
console.log(x);
console.error('Alert');
console.warn('warning');
console.groupEnd();

const styles = 'padding: 10px; background-color: white; color: green';

console.log('%cHello world CSS', styles);