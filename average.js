/* Javascript code that returns the average of all of the items in an array*/
var values= [23, 15, 78, 99,1,56];
var sum =0;
for (var i=0; i< values.length; i++) {
  sum += parseInt (values [i], 10); }
var avg= sum/values.length;
