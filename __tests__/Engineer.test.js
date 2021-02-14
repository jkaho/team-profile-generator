const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Greg', 3, 'greg@work.com', 'greghub');

describe("Engineer class", () => {
    it("new Engineer instance has 4 properties", () => {
        const engineerProperties = Object.keys(engineer);
        expect(engineerProperties.length).toEqual(4);
    });

    describe("getName()", () => {
        it("returns Engineer name", () => {
            const engineerName = engineer.getName();
            expect(engineerName).toEqual('Greg');
        });
    });

    describe("getId()", () => {
        it("returns Engineer ID", () => {
            const engineerId = engineer.getId();
            expect(engineerId).toEqual(3);
        });
    });

    describe("getEmail()", () => {
        it("returns Engineer email", () => {
            const engineerEmail = engineer.getEmail();
            expect(engineerEmail).toEqual('greg@work.com');
        });
    });

    describe("getGithub()", () => {
        it("returns Engineer GitHub username", () => {
            const engineerGithub = engineer.getGithub();
            expect(engineerGithub).toEqual('greghub');
        });
    });

    describe("getRole()", () => {
        it("returns the string 'Engineer'", () => {
            const engineerRole = engineer.getRole();
            expect(engineerRole).toEqual('Engineer');
        });
    });
});