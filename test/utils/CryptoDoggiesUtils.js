module.exports = function (CryptoDoggies, accounts) {
  function checkDoggyCreation(age, name, dna) {
    it("createDoggy should create a doggy name  " + name, (done) => {
      CryptoDoggies.deployed()
        .then(async (instance) => {
          await instance
            .createDoggy(age, name, dna, {
              from: accounts[0], //0x627306090abaB3A6e1400e9345bC60c78a8BEf57
            })
            .then(function (result) {
              assert.include(
                result.logs[0].event,
                "DoggyCreated",
                "DoggyCreated event was not triggered"
              );
            });
        })
        .then(done)
        .catch(done);
    });
  }

  return {
    checkDoggyCreation: checkDoggyCreation,
  };
};
