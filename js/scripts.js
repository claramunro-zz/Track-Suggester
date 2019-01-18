$(document).ready(function () {
  // attach form with ID to back-end & on submit fire this function...
  $('form#quiz-form').submit(function (event) {
    // assign values from inputs to variables
    var design = $('input:radio[name=question1]:checked').val();
    var back = $('input:radio[name=question2]:checked').val();
    var problem = $('input:radio[name=question3]:checked').val();
    var maker = $('input:radio[name=question4]:checked').val();
    var gamer = $('input:radio[name=question5]:checked').val();
    var app = $('input:radio[name=question6]:checked').val();


    // use logic to determine what text is displayed in the ID section
    if (problem === 'no') {
      $('#answer').text('Get out now');
      $('#results').show();
    }
    else if (design === 'yes' && maker === 'yes' && gamer === 'no' && back === 'no' && app === 'no' && problem === 'yes') {
      $('#answer').text('Designer & Maker combo');
      $('#results').show();
    }
    else if (design === 'yes' && maker === 'yes' && gamer === 'yes' && back === 'no' && app === 'no' && problem === 'yes') {
      $('#answer').text('Designer & Maker & Gamer combo');
      $('#results').show();
    }
    else if (design === 'yes' && maker === 'no' && gamer === 'no' && back === 'no' && app === 'no' && problem === 'yes') {
        $('#answer').text('Designer');
        $('#results').show();
      }
    else if (design === 'no' && maker === 'no' && gamer === 'yes' && back === 'no' && app === 'no' && problem === 'yes') {
      $('#answer').text('Gamer at heart');
      $('#results').show();
    }
    else if (design === 'no' && maker === 'no' && gamer === 'no' && back === 'yes' && app === 'yes' && problem === 'yes') {
      $('#answer').text('Nerd Alert!! App & problem maniac');
      $('#results').show();
    }
    else if (design === 'no' && maker === 'no' && gamer === 'yes' && back === 'yes' && app === 'yes' && problem === 'yes') {
        $('#answer').text('Nerd Alert!! App & gamer & problem maniac');
        $('#results').show();
      }
    else if (design === 'no' && maker === 'no' && gamer === 'no' && back === 'yes' && app === 'no' && problem === 'yes') {
        $('#answer').text('Back End');
        $('#results').show();
      }
    else {
      $('#answer').text('Honestly, who knows you are kind of everywhere! Good Luck with that!');
      $('#results').show();
    }

    event.preventDefault();
  });

});

