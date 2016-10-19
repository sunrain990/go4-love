/**
 * Created by kevin on 16/10/8.
 */
var e = Date();
console.log(e);

var together = new Date();
together.setFullYear(2016, 9, 1);
together.setHours(17);
together.setMinutes(0);
together.setSeconds(0);
together.setMilliseconds(0);



var f = (Date.parse(e) - Date.parse(together)) / 1000;




console.log(f);