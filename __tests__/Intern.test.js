const Intern = require('../lib/Intern');
const intern = new Intern('Laura', 4, 'laura@work.com', 'The University of Sydney');

describe("Intern class", () => {
    it("new Intern instance has 4 properties", () => {
        const internProperties = Object.keys(intern);
        expect(internProperties.length).toEqual(4);
    });

    describe("getName()", () => {
        it("returns Intern name", () => {
            const internName = intern.getName();
            expect(internName).toEqual('Laura');
        });
    });

    describe("getId()", () => {
        it("returns Intern ID", () => {
            const internId = intern.getId();
            expect(internId).toEqual(4);
        });
    });

    describe("getEmail()", () => {
        it("returns Intern email", () => {
            const internEmail = intern.getEmail();
            expect(internEmail).toEqual('laura@work.com');
        });
    });

    describe("getSchool()", () => {
        it("returns Intern school", () => {
            const internSchool = intern.getSchool();
            expect(internSchool).toEqual('The University of Sydney');
        });
    });

    describe("getRole()", () => {
        it("returns the string 'Intern'", () => {
            const internRole = intern.getRole();
            expect(internRole).toEqual('Intern');
        });
    });
});