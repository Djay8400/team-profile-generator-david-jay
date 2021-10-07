const Employee = require("../lib/Employee");


describe("employee class", () => {
    describe("getName method", () => {
      it("getName", () => {
        const employee = new Employee("David", "345", "email@gmail.com")
        let x = employee.getName();
        expect(x).toBe("David");
      });
    })
    describe("getId method", () => {
        it("getId", () => {
          const employee = new Employee("David", "345", "email@gmail.com")
          let x = employee.getId();
          expect(x).toBe("345");
        });
      })
      describe("getEmail method", () => {
        it("getEmail", () => {
          const employee = new Employee("David", "345", "email@gmail.com")
          let x = employee.getEmail();
          expect(x).toBe("email@gmail.com");
        });
      })
})    