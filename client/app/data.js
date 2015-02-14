var years = [];
var data  = {};
for(var i = 1990; i<2015; i++){
	years.push(i);
}


for(var j = 0; j<years.length; j++){
	var url = 'http://transparencydata.com/api/1.0/aggregates/pols/top_100.json?cycle='+years[j]+'&apikey=5120da11e9e24de3a4087a8a4f34fcd8';
	$.ajax({
		crossDomain: true,
		url:url,
		type:'GET',
		success:function(d){
			data[years[j]] = d;
		},
		dataType: "jsonp"
	})
}

console.log(data);