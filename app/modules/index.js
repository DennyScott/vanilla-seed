'use strict';

import {square, MyClass} from './import';

var _ = require('lodash');
var Hogan = require('Hogan.js');


// 25
console.log(square(5));

var cred = {
  name: 'Ritesh Kumar',
  enrollmentNo: 11115078
};

var x = new MyClass(cred);

var data = { screenname: 'denny' };

var test = ['hello', 'something'];

_.forEach(test, function(v) {
  console.log(v);
});


var template = Hogan.compile('Follow {{ screenname }}');
var output = template.render(data);

console.log(output);

//Ritesh Kumar
console.log(x.getName());
