// Renders manager information
function renderManager(manager) {
    return `    <div class="card manager flex-container">
            <div class="card-top">
                <h2>${manager.getName()}</h2>
                <h3><i class="fas fa-user-tie"></i> ${manager.getRole()}</h3>
            </div>
            <div class="card-bottom">
                <p>
                <i class="far fa-id-card"></i> ID #${manager.getId()}<br>
                <i class="far fa-envelope"></i> <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a><br>
                <i class="far fa-building"></i> Office #${manager.officeNumber}
                </p>
            </div>
        </div>
`
}

// Renders engineer information
function renderEngineer(engineer) {
    return `        <div class="card engineer flex-container">
            <div class="card-top">
                <h2>${engineer.getName()}</h2>
                <h3><i class="fas fa-laptop-code"></i> ${engineer.getRole()}</h3>
            </div>
            <div class="card-bottom">
                <p>
                    <i class="far fa-id-card"></i> ID #${engineer.getId()}<br>
                    <i class="far fa-envelope"></i> <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a><br>            
                    <i class="fab fa-github"></i> <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a>
                </p>
            </div>
        </div>
`
}

// Renders intern information
function renderIntern(intern) {
    return `        <div class="card intern flex-container">
            <div class="card-top">
                <h2>${intern.getName()}</h2>
                <h3><i class="fas fa-user-graduate"></i> ${intern.getRole()}</h3>
            </div>
            <div class="card-bottom">
                <p>
                    <i class="far fa-id-card"></i> ID #${intern.getId()}<br>
                    <i class="far fa-envelope"></i> <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a><br>    
                    <i class="fas fa-graduation-cap"></i> ${intern.getSchool()}        
                </p>
            </div>
        </div>
`
}

// Renders whole team 
function renderTeam(arr) {
    let html = "";
    for (var i = 0; i < arr[0].length; i++) {
        html += renderManager(arr[0][i]);
    }

    // Sorts engineer array (within team array) by ID (ascending)
    arr[1].sort(function(a, b) {
        return a.id - b.id;
    })

    for (var i = 0; i < arr[1].length; i++) {
        html += renderEngineer(arr[1][i]);
    }

    // Sorts intern array (within team array) by ID (ascending)
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
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">    
    <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
    crossorigin="anonymous"
    /> 
    <link rel="stylesheet" href="./style.css">
    <link rel="shortcut icon" type="image/png" href="../images/favicon.png">
    <title>Team Profile</title>
</head>
<body>
    <header>
        <h1>OUR <span id="team-span">TEAM</span></h1>
    </header>
    <main>
    ${renderTeam(arr)}
    </main>
</body>
</html>`;
}

module.exports = generateHTML;