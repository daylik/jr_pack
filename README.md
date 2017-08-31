# jr_pack
Javascript library of quick functions

```
jr.timer.start('Oleg');
	console.log(jr.date_plus('23:59', '00:02'));
	console.log(jr.date_plus('23:59', '00:03'));
	console.log(jr.date_plus('23:59', '00:04'));
	console.log(jr.date_plus('23:59', '00:05'));
	console.log(jr.date_plus('23:59', '00:06'));
jr.timer.stop_log('Oleg');

jr.hr();

console.log(0.1 + 0.2);
console.log( jr.n(0.1, '+', 0.2) );

var v_regexp = [
	{num: '1', regexp_str: 'дорог(ой|ая|ие)'},
	{num: '2', regexp_str: 'дешев(ый|ая|ие|ле)'},
	{num: '3', regexp_str: 'хорош(ий|ая|ие|ее)'}
];

var regexp_match = jr.regex_compile(v_regexp, 'regexp_str', 'ig');
var v_str = 'хороший';
if( regexp_match.test(v_str) ){
// 	true
}
 ```
