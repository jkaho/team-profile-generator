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
    });

    it("getId returns Manager id", () => {
        const managerId = manager.getId();
        expect(managerId).toEqual(2);
    });

    it("getEmail returns Manager email", () => {
        const managerEmail = manager.getEmail();
        expect(managerEmail).toEqual('shirley@work.com');
    });

    it("getRole returns 'Manager'", () => {
        const managerRole = manager.getRole();
        expect(managerRole).toEqual('Manager');
    });
});