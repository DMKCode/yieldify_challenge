// match -spec files in the test directory
var context = require.context('./src/tests', true, /-spec\.js$/);
context.keys().forEach(context);
console.log(context.keys());