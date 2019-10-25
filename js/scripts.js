$(function() {
  $("#modalSubmit").click(function() {
// Name input and radio buttons input stored in CONST in modal form
    const nameInput = $("#name").val();
    if (nameInput.trim() == "") {
      $("#alert").show();
      return false;
    };
    const answer1 = parseInt($('input[name=question1]:checked').val());
    const answer2 = parseInt($('input[name=question2]:checked').val());
    const answer3 = parseInt($('input[name=question3]:checked').val());
    const answer4 = parseInt($('input[name=question4]:checked').val());
    const answer5 = parseInt($('input[name=question5]:checked').val());
    console.log(nameInput,answer1, answer2, answer3, answer4, answer5);
// Business logic
// Five questions create a lot of combinations and to list all of them would be too long for each statement,
  // I decided to go with first two numbers for each Programming language result by selecting only 11 12 21 22
   // and assigned results to four different languages


    if (answer1 == "1" && answer2 == "1") {
      $("#quizerResult").text("C#");
      $("#quizerName").text(nameInput);
      $(".result").fadeIn();
    } else if (answer1 == "1" && answer2 == "2") {
      $("#quizerResult").text("Python");
      $("#quizerName").text(nameInput);
      $(".result").show();
    } else if (answer1 == "2" && answer2 == "1") {
      $("#quizerResult").text("JavaScript");
      $("#quizerName").text(nameInput);
      $(".result").slideDown();
    } else if (answer1 == "2" && answer2 == "2") {
      $("#quizerResult").text("Rust");
      $("#quizerName").text(nameInput);
      $(".result").slideDown();
    };

  });
});
