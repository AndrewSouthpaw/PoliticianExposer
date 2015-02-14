(function(){
  'use strict';
  
  
$.ajax({
crossDomain: true,
url:'http://transparencydata.com/api/1.0/aggregates/pols/top_100.json?cycle=1990&apikey=5120da11e9e24de3a4087a8a4f34fcd8',
type:'GET',
success:function(d){console.log(d.length)},
dataType: "jsonp"
})

  initialize('title');

  function initialize(elementId){

    var runner = Runner(elementId);
    console.log(runner)
    runner.update('Check out HackReactor');

    ///////////////////////

    function Runner(elementId){
      var instance;

      instance = {

        element: document.getElementById(elementId),
        update: update

      };

      return instance;

      //////////////////

      function update(value){
        this.element.innerHTML = value;
      }
    }


  }

})();