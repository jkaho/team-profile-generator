const { expect, it } = require('@jest/globals');
const Employee = require('../lib/Employee');
const inquirer = require('inquirer');

const mock = jest.spyOn(inquirer, "prompt");
mock.mockImplementation(() => new Promise({resolve: () => console.log('success')}));

describe('Employee class', () => {
    it('getRole returns the string "Employee"', () => {
        const bob = new Employee();
        const bobRole = bob.getRole();
        expect(bobRole).toEqual('Employee');
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