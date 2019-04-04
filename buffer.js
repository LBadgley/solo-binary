const newBuffer = Buffer.alloc(10, 'ben');
console.log(newBuffer);

const newBufferFromString = Buffer.from('hi');
console.log(newBufferFromString.toString());


const buf = Buffer.alloc(9, 'Hi there!');
console.log(buf.toString());


const smile = Buffer.from([0xF0, 0x9F, 0x98, 0x81]);
console.log(smile.toString());

const decimalSmile = Buffer.from([240, 927, 152, 129]);
console.log(decimalSmile.toString());
