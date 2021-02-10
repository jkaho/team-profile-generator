// renders manager info
function renderManager(manager) {
    return `<h1>${manager.name}</h1>
`
}

// generates team profile HTML page
function generateHTML(arr) {
    return `<!DOCTYPE html>
<html>
<head>
</head>
<body>
    ${renderManager(arr[0])}
</body>
</html>`
}