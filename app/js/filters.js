//convert snake_case to kebab-case
app.filter('kebab', function () {
  return function(input){
    return input.split('_').join('-');
  };
});


//Returns an acronym
app.filter('acronym', function() {
  return function(input){
    return input.split(' ').map(function(el){
      return el.charAt(0);
    }).join('');
  }
});


//Alternates capitialization of string
app.filter('aLtCaPs', function() {
  return function(input){
    return input.split('').map(function(el, i){
      if (i % 2){
        return el.toUpperCase();
      } else {
        return el.toLowerCase();
      }
    }).join('');
  }
});


//Use with ng-repeat and filter the collection
app.filter('startsWithA', function () {
  return function(input) {

      return input.filter(function(el){
        if (el.name.charAt(0) === 'A'){
          return el;
        }
      });

  };
});

//Use with ng-repeat and an input to search a collection for string match
app.filter('strMatch', function () {
  return function (input, search) {
    return input.filter(function(el){
      console.log(el);
      if (el.name.indexOf(search) !== -1) return el;
    })
  };
});

//Come up with on your own
app.filter('?????', function() {
  //Do Cool Things...
});
