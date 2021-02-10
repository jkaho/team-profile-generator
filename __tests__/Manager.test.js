const { expect } = require('@jest/globals');
const Manager = require('../lib/Manager');
const manager = new Manager('Shirley', 2, 'shirley@work.com', 1);

describe("Manager class", () => {
    it("New Manager instance has 4 properties", () => {
        const managerProperties = Object.keys(manager);
        expect(managerProperties.length).toEqual(4);
    });

    it("getName returns Manager name", () => {
        const managerName = manager.getName();
        expect(managerName).toEqual('Shirley');
    })
});