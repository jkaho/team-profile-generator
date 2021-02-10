const { expect, it } = require('@jest/globals');
const Employee = require('../lib/Employee');
const inquirer = require('inquirer');

const mock = jest.spyOn(inquirer, "prompt");
mock.mockImplementation(() => Promise.resolve((answer) => answer.employeeName = 'Bob'));

describe("Employee class", () => {
    it("getName returns Employee name", () => {
        const employee = new Employee('Bob', 1, 'bob@work.com');
        const employeeName = employee.getName();
        expect(employeeName).toEqual('Bob');
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