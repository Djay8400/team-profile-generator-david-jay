const Employee = require("../lib/Employee");


describe("employee class", () => {
    describe("getName method", () => {
      it("getName", () => {
        const employee = new Employee("David", "345", "email@gmail.com")
        let x = employee.getName();
        expect(x).toBe("David");
      });
    })
})    