const { expect, it } = require('@jest/globals');
const Employee = require('../lib/Employee');
const inquirer = require('inquirer');

// const mock = jest.spyOn(inquirer, "prompt");
// mock.mockImplementation(() => Promise.resolve((answer) => answer.employeeName = 'Bob'));

describe("Employee class", () => {
    it("New Employee instance has 3 properties", () => {
        const employee = new Employee('Bob', 1, 'bob@work.com');
        const employeeProperties = Object.keys(employee);
        expect(employeeProperties.length).toEqual(3);
    });

    it("getName returns Employee name", () => {
        const employee = new Employee('Bob', 1, 'bob@work.com');
        const employeeName = employee.getName();
        expect(employeeName).toEqual('Bob');
    });

    it("getId returns Employee id", () => {
        const employee = new Employee('Bob', 1, 'bob@work.com');
        const employeeId = employee.getId();
        expect(employeeId).toEqual(1);
    });

    it("getEmail returns Employee email", () => {
        const employee = new Employee('Bob', 1, 'bob@work.com');
        const employeeEmail = employee.getEmail();
        expect(employeeEmail).toEqual('bob@work.com');
    });

    it("getRole returns the string 'Employee'", () => {
        const employee = new Employee();
        const role = employee.getRole();
        expect(role).toEqual('Employee');
    });

    // it('getName returns name from inquirer prompt', () => {
    //     const bob = new Employee();
    //     // mock.mockImplementation(answer => {answer.name = "bob"});
    //     // mock.mockImplementation(() => new Promise({resolve: () => console.log('success)}))
    //     // expect(mock).resolves.toEqual(...);
    //     expect(bob.getName()).toEqual("bob");
    //     // test the input assuming inquirer works 
    // });
})