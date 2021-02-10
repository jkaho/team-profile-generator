// Renders individual team members
function renderTeamMember(member) {
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

// Renders whole team 
function renderTeam(arr) {
    let html = "";
    for (var i = 0; i < arr.length; i++) {
        html += renderTeamMember(arr[i]);
    }
    return html;
}

// Generates team profile HTML page template
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