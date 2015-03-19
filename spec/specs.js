describe("scrabble", function() {
  it("will return the value for a word", function(){
    expect(scrabble("cat")).to.equal(5);
  });

  it("it will return a value for a letter", function(){
    expect(scrabble("z")).to.equal(10);
  });

  it("will downcase an all upper case input", function(){
    expect(scrabble("CAT")).to.equal(5)
  });

});
