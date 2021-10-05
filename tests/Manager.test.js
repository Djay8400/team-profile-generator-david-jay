const Manager = require("../lib/Manager");


describe("manager class", () => {
    describe("getofficeNumber method", () => {
      it("getofficeNumber", () => {
        const manager = new Manager("101", "Raffi", "345", "email@gmail.com")
        let x = manager.getofficeNumber();
        expect(x).toBe("101");
      });
    })
})    