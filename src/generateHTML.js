// renders manager info
function renderManager(manager) {
    return `<h1>${manager.getName()}</h1>
    <p>
        Role: ${manager.getRole()}<br>
        Employee ID: ${manager.getId()}<br>
        Email: ${manager.getEmail()}<br>
        Office number: ${manager.officeNumber}
    </p>`
}

// generates team profile HTML page
function generateHTML(arr) {
    console.log(`<!DOCTYPE html>
<html>
<head>
</head>
<body>
    ${renderManager(arr[0])}
</body>
</html>`)
}

module.exports = generateHTML;