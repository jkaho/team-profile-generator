const Manager = require('../lib/Manager');
const manager = new Manager('Shirley', 2, 'shirley@work.com', 1);

describe("Manager class", () => {
    it("new Manager instance has 4 properties", () => {
        const managerProperties = Object.keys(manager);
        expect(managerProperties.length).toEqual(4);
    });

    describe("getName()", () => {
        it("returns Manager name", () => {
            const managerName = manager.getName();
            expect(managerName).toEqual('Shirley');
        });
    });

    describe("getId()", () => {
        it("returns Manager ID", () => {
            const managerId = manager.getId();
            expect(managerId).toEqual(2);
        });
    });

    describe("getEmail()", () => {
        it("returns Manager email", () => {
            const managerEmail = manager.getEmail();
            expect(managerEmail).toEqual('shirley@work.com');
        });
    });

    describe("getRole()", () => {
        it("returns the string 'Manager'", () => {
            const managerRole = manager.getRole();
            expect(managerRole).toEqual('Manager');
        });
    });
});