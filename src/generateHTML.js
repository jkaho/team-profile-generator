// Renders manager information
function renderManager(manager) {
    return `<div>
        <h1>${manager.getName()}</h1>
        <p>
            Role: ${manager.getRole()}<br>
            Employee ID: ${manager.getId()}<br>
            Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a><br>
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
            Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a><br>            
            GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a>
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
            Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a><br>            
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
    return `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./profile.html">
    <title>Team Profile</title>
</head>
<body>
    <header>
        <h1>My Team</h1>
    </header>
    <main>
    ${renderTeam(arr)}
    </main>
</body>
</html>`;
}

module.exports = generateHTML;