// renders manager info
function renderManager(manager) {
    return `<h1>${manager.name}</h1>
`
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