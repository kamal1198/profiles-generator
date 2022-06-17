// generate html page 
const withLayout = function (cards) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" crossorigin="anonymous">
    </head>
    <body>
        <div class="container-fluid bg-secondary">
            <div class="p-3">
                <p class="text-center h1 text-white">Team</p>
            </div>
        </div>
        <main>
            <div class="container">
                <div class="row justify-content-center">
                    ${cards}
                </div>
            </div>
        </main>
    </body>
  </html>
`;
}

// create Manager card
const addCard = function (person, role) {
    if (role === 'Manager') {
        let manager = person;
        return `
            <div class="col-3 mt-4">
                <div class="card h-100">
                    <div class="card-body">
                        <h3>${manager.name}</h3>
                        <h4>Manager</h4>
                        <hr>
                        <p>ID: ${manager.id}</p>
                        <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                        <p>Office Number: ${manager.officeNumber}</p>
                    </div>
                </div>
            </div>
        `;
    } else if (role === 'Engineer') {
        let engineer = person;
        return `
            <div class="col-3 mt-4">
                <div class="card h-100">
                    <div class="card-body">
                        <h3>${engineer.name}</h3>
                        <h4>Engineer</h4>
                        <hr>
                        <p>ID: ${engineer.id}</p>
                        <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                        <p>Github: <a target="_blank" href="https://github.com/${engineer.github}">${engineer.github}</a></p>
                    </div>
                </div>
            </div>
        `;
    } else if (role === 'Intern') {
        let intern = person;
        return `
            <div class="col-4 mt-4">
                <div class="card h-100">
                    <div class="card-body">
                        <h3>${intern.name}</h3>
                        <h4>Intern</h4>
                        <hr>
                        <p>ID: ${intern.id}</p>
                        <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                        <p>School: ${intern.school}</p>
                    </div>
                </div>
            </div>
        `;
    }
}

// push array to page 
const buildHtml = function (data) {
    // cards 
    cards = [];

    data.forEach(person => { cards.push(addCard(person, person.getRole())) });

    // return to generated page
    return withLayout(cards.join(''));
}

// export to index
module.exports = buildHtml; 
