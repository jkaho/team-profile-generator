// Renders manager information
function renderManager(manager) {
    return `<div>
    <h1>${manager.getName()}</h1>
    <p>
        Role: ${manager.getRole()}<br>
        Employee ID: ${manager.getId()}<br>
        Email: ${manager.getEmail()}<br>
        Office number: ${manager.officeNumber}
    </p>
</div>
`
}

// Renders engineer information
function renderEngineer(engineer) {
    return `<div>
    <h1>${engineer.getName()}</h1>
    <p>
        Role: ${engineer.getRole()}<br>
        Employee ID: ${engineer.getId()}<br>
        Email: ${engineer.getEmail()}<br>
        GitHub: ${engineer.github}
    </p>
</div>
`
}

// Renders intern information
function renderIntern(intern) {
    return `<div>
    <h1>${intern.getName()}</h1>
    <p>
        Role: ${intern.getRole()}<br>
        Employee ID: ${intern.getId()}<br>
        Email: ${intern.getEmail()}<br>
        School: ${intern.school}
    </p>
</div>
`
}

// Renders whole team 
function renderTeam(arr) {
    let html = "";
    for (var i = 0; i < arr[0].length; i++) {
        html += renderManager(arr[0][i]);
    }

    arr[1].sort(function(a, b) {
        return a.id - b.id;
    })

    for (var i = 0; i < arr[1].length; i++) {
        html += renderEngineer(arr[1][i]);
    }

    arr[2].sort(function(a, b) {
        return a.id - b.id;
    })

    for (var i = 0; i < arr[2].length; i++) {
        html += renderIntern(arr[2][i]);
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