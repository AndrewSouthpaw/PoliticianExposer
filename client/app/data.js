// var years = [];
var data  = [];
// for(var i = 1990; i<2015; i++){
// 	years.push(i);
// }


// for(var j = 0; j<years.length; j++){
// 	var url = 'http://transparencydata.com/api/1.0/aggregates/pols/top_100.json?cycle='+years[j]+'&apikey=2de79c8522f94e33b12d0f1ff179ece0';
// 	$.ajax({
// 		crossDomain: true,
// 		url:url,
// 		type:'GET',
// 		success:function(d){
// 			data.push(d);
// 		},
// 		dataType: "jsonp"
// 	})
// }

for (var i = 0; i < 100; i += 1) {
	data.push({amount: Math.floor(Math.random() * 9000000),
		name: chance.name()});
}

console.log(data);
