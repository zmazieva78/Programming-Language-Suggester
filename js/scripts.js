
$(function() {
  $("#modalSubmit").click(function() {
// Name input in module form
    const nameInput = $("#name").val();

    const answer1 = $('input[name=question1]:checked').val();
    const answer2 = $('input[name=question2]:checked').val();
    const answer3 = $('input[name=question3]:checked').val();
    const answer4 = $('input[name=question4]:checked').val();
    const answer5 = $('input[name=question5]:checked').val();

    console.log(nameInput,answer1, answer2, answer3, answer4, answer5);

  });
});
