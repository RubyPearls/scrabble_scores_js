var scrabble = function(word) {
  var newWord = word.toLowerCase().split("");
  var baseScore = 0
  var points = {a: 1, e: 1, i: 1, o: 1, l: 1, n: 1, r: 1, s: 1, t: 1, d: 2, g: 2, b: 3, c: 3, m: 3, p: 3, f: 4, h: 4, v: 4, w: 4, y: 4, k: 5, j: 8, x: 8, q: 10, z: 10};

    newWord.forEach(function(letter) {
      var score = points[letter]
      baseScore += score
    });
  return baseScore
}; //ending

// for (var baseScore = 0; baseScore < newWord.length ; baseScore += 1)
//   var score = points[newWord[baseScore]]

$(function(){
  $("form#scrabble").submit(function(event){
    var word = $("input#word").val();
    var score = scrabble(word);

    $(".score").text(score.toString());

    $("#results").show();
    event.preventDefault();
  });
}); //ending
