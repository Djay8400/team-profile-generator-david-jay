const Intern = require("../lib/Intern");


describe("intern class", () => {
    describe("getSchool method", () => {
      it("getSchool", () => {
        const intern = new Intern("UTSA", "David", "345", "email@gmail.com")
        let x = intern.getSchool();
        expect(x).toBe("UTSA");
      });
    })
})    