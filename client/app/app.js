

setTimeout(function(){
  var w = 960,
      h = 500,
      nodes = [];

  var svg = d3.select("body").append("svg:svg")
    .attr("width", w)
    .attr("height", h);

  var force = d3.layout.force()
    .charge(-20)
    .size([w, h])
    .nodes(nodes)
    .on("tick", tick)
    .start();

  function tick() {
    svg.selectAll("circle")
    .attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; });
  }

  var year1990 = data.slice();
  var counter = 0;

  var interval = setInterval(function() {
    console.log(year1990[counter].name);
    var d = {
      x: w / 2 + 2 * Math.random() - 1,
      y: h / 2 + 2 * Math.random() - 1,
      amount: year1990[counter].amount
    };

    svg.append("svg:circle")
      .data([d])
      .attr("r", function(d){return d.amount/1000000})
      .transition()
      .ease(Math.sqrt);
      //.attr("r", 4.5);

    nodes.push(d);
    counter += 1;
    if (counter > 99) clearInterval(interval);
    force.start();
  }, 30);
}, 10);

