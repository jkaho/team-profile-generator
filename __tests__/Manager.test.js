const { expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

describe("Manager class", () => {
    it("New Manager instance has 4 properties", () => {
        const manager = new Manager('Shirley', 2, 'shirley@work.com', 1);
        const managerProperties = Object.keys(manager);
        expect(managerProperties.length).toEqual(4);
    });
});