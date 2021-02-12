const Employee = require('../lib/Employee');
const employee = new Employee('Bob', 1, 'bob@work.com');

describe("Employee class", () => {
    it("new Employee instance has 3 properties", () => {
        const employeeProperties = Object.keys(employee);
        expect(employeeProperties.length).toEqual(3);
    });

    describe("getName()", () => {
        it("returns Employee name", () => {
            const employeeName = employee.getName();
            expect(employeeName).toEqual('Bob');
        });
    });

    describe("getId()", () => {
        it("returns Employee ID", () => {
            const employeeId = employee.getId();
            expect(employeeId).toEqual(1);
        });
    });

    describe("getEmail()", () => {
        it("returns Employee email", () => {
            const employeeEmail = employee.getEmail();
            expect(employeeEmail).toEqual('bob@work.com');
        });
    });

    describe("getRole()", () => {
        it("returns the string 'Employee'", () => {
            const role = employee.getRole();
            expect(role).toEqual('Employee');
        });
    });
});