const Engineer = require("../lib/Engineer");


describe("engineer class", () => {
    describe("getGithub method", () => {
      it("getGithub", () => {
        const engineer = new Engineer("githubUser", "David", "345", "email@gmail.com")
        let x = engineer.getGithub();
        expect(x).toBe("githubUser");
      });
    })
})    