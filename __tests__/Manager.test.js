const Manager = require('Manager');

describe("Manager class", () => {
    it("New Manager instance has 4 properties", () => {
        const employee = new Employee('Bob', 1, 'bob@work.com');
        const employeeProperties = Object.keys(employee);
        expect(employeeProperties.length).toEqual(3);
    });
});