import './assets/sass/style.scss';
import 'normalize.css/normalize.css';
console.log('Hello from Webpack');

var student = require("/studentName.js");
var student1 = new student("Hasan", "Eylia");

setTimeout( ()=> alert('Hello Students!'),4000);