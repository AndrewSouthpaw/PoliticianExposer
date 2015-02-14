(function(){
  'use strict';

  initialize('title');

  function initialize(elementId){

    var runner = Runner(elementId);
    console.log(runner);
    runner.update('25 years of political money');

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
