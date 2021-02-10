// renders manager info
// function renderManager(manager) {

// }

//renders engineer info
function renderTeamMembers(member) {
    if (member.getRole() === 'Manager') {
        return `<div>
        <h1>${member.getName()}</h1>
        <p>
            Role: ${member.getRole()}<br>
            Employee ID: ${member.getId()}<br>
            Email: ${member.getEmail()}<br>
            Office number: ${member.officeNumber}
        </p>
    </div>
    `
    } else if (member.getRole() === 'Engineer') {
        return `<div>
        <h1>${member.getName()}</h1>
        <p>
            Role: ${member.getRole()}<br>
            Employee ID: ${member.getId()}<br>
            Email: ${member.getEmail()}<br>
            GitHub: ${member.github}
        </p>
    </div>
    `
    } else {
        return `<div>
        <h1>${member.getName()}</h1>
        <p>
            Role: ${member.getRole()}<br>
            Employee ID: ${member.getId()}<br>
            Email: ${member.getEmail()}<br>
            School: ${member.school}
        </p>
    </div>
    `
    }
}

function renderTeam(arr) {
    let html = "";
    for (var i = 0; i < arr.length; i++) {
        html += renderTeamMembers(arr[i]);
    }
    return html;
}

// generates team profile HTML page
function generateHTML(arr) {
    console.log(`<!DOCTYPE html>
<html>
<head>
</head>
<body>
    ${renderTeam(arr)}
</body>
</html>`)
}

module.exports = generateHTML;