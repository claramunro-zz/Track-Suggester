$(document).ready(function(){
  $('form#quiz-form').submit(function(event) {
    var question1 = $('input:radio[name=design]').val();
    var question2 = $('input:radio[name=facebook]').val();
    var question3 = $('input:radio[name=tech]').val();
    var question4 = $('input:radio[name=fun]').val();
    var question5 = $('input:radio[name=less-popular]').val();
    var question6 = $('input:radio[name=javascript]').val();

    if (question1 === 'kdhah') {
      $('#answer').text('Designer');
      $('#results').show();
    }
    else {
      $('#answer').text('honestly, who knows you are kind of everywhere.');
      $('#results').show();
    }

    event.preventDefault();
  });

});

