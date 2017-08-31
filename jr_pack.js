window.timer_start = {};
var jr = {
	timer: {
	  start: function(timer_name) {
	    window.timer_start[timer_name] = new Date().getTime();
	  },
	  stop: function(timer_name) {
	    var timer_stop = new Date().getTime();
	    var out = timer_stop - window.timer_start[timer_name];
	    return 'timer '+ timer_name +': ' + out + 'ms';
	  },
	  stop_log: function(timer_name) {
	    var timer_stop = new Date().getTime();
	    var out = timer_stop - window.timer_start[timer_name];
	    console.log('timer '+ timer_name +': ' + out + 'ms');
	  }
	},
	isset: function(v_var) {
	  if(typeof(v_var) == 'number'){ if(isNaN(v_var)){return false;}}
	  if(typeof(v_var) == 'undefined' || v_var === null ){return false;}
	  return true;
	},
  fix_00: function(x) {
    return ((x < 10 ? '0' : '') + x);
  },
  to_number: function(v) {
    return parseInt(v, 10);
  }, 
  to_number2: function(v) {
    return parseInt(v);
  },
  get_time: function() {
    var d = new Date();
    return '' + jr.fix_00(d.getHours()) + ':' + jr.fix_00(d.getMinutes());
  },
  get_date: function() {
  	var d = new Date();
    return '' + jr.fix_00(d.getDate()) + '.' + jr.fix_00(d.getMonth()+1) + '.' + d.getFullYear();
  },
  date_plus: function(time_1, time_2){
  	var hour_plus = 0;
  	time_1 = time_1.split(':');
  	time_2 = time_2.split(':');

  	time_1[0] = jr.to_number(time_1[0]);
  	time_1[1] = jr.to_number(time_1[1]);
  	time_2[0] = jr.to_number(time_2[0]);
  	time_2[1] = jr.to_number(time_2[1]);
  	
  	var minutes = jr.fix_00(time_1[1] + time_2[1]);
  	if( minutes >= 60){
  		minutes = jr.fix_00(minutes - 60);
  		hour_plus = 1;
  	}

  	var hour = jr.fix_00(time_1[0] + time_2[0] + hour_plus);
  	if( hour >= 24){
  		hour = jr.fix_00(hour - 24);
  	}
  	return hour +':'+ minutes;
  },
  n: function( num, plus, num2 ){
	  if( num < 1 && num2 < 1 ){
	    num = num * 10;
	    num2 = num2 * 10;
	  }
	  var num_out = ''+num+plus+num2;
	  num_out = eval(num_out);
	  return num_out/10;
	},
	hr: function(){
		console.log('------------------');
	},
  regex_compile: function(v, name, regexp_flags){
  	// use: jr.regex_compile(array_strings, object_name_in_array, (regexp flags, to return finalregexp object)? );
  	var regexp_str = '';
  	for (var i = 0; i < v.length; i++) {
  		if(i === 0){
				regexp_str += v[i][name];
  		} else {
  			regexp_str += '|'+ v[i][name];
  		}
  	}
  	if( jr.isset(regexp_flags) ){
  		var regexp_str = new RegExp(regexp_str, regexp_flags);
  	}
  	return regexp_str;
  }
};
//console.log(jr.date_plus('01:30', '22:31'));
