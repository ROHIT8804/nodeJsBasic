const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('sum', (num1,num2) => {
    console.log(`Sum: ${num1 + num2}`);
});

eventEmitter.on('multiply', (num1,num2) => {
    console.log(`Multiply: ${num1 * num2}`);
});

eventEmitter.on('divide', (num1,num2) => {
    if(num2 === 0) {
        console.log('Cannot divide by zero');
    } else {
        console.log(`Divide: ${num1 / num2}`);
    }
});

function triggerDiv(a, b) {
    eventEmitter.emit('divide', a, b);
}

module.exports = {
    eventEmitter,
    triggerDiv
};