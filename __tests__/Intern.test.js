const { expect } = require('@jest/globals');
const Intern = require('../lib/Intern');
const intern = new Intern('Laura', 4, 'laura@work.com', 'The University of Sydney');

describe("Intern class", () => {
    it("New Intern instance has 4 properties", () => {
        const internProperties = Object.keys(intern);
        expect(internProperties.length).toEqual(4);
    });

    it("getName returns Intern name", () => {
        const internName = intern.getName();
        expect(internName).toEqual('Laura');
    });

    it("getId returns Intern id", () => {
        const internId = intern.getId();
        expect(internId).toEqual(4);
    });

    it("getEmail returns Intern email", () => {
        const internEmail = intern.getEmail();
        expect(internEmail).toEqual('laura@work.com');
    });

    it("getSchool returns Intern school", () => {
        const internSchool = intern.getSchool();
        expect(internSchool).toEqual('The University of Sydney');
    });

    it("getRole returns 'Intern'", () => {
        const internRole = intern.getRole();
        expect(internRole).toEqual('Intern');
    });
});