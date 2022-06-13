// create Manager card
const managerCard = function (manager) {
    return `
                <div class="col-3 mt-4">
                    <div class="card h-100">
                        <div class="card-header">
                            <h3>${manager.name}</h3>
                            <h4><i class="fas fa-user-tie"></i> Manager</h4>
                        </div>
                        <div class="card-body">
                            <p><i class="far fa-id-badge"></i> ID: ${manager.id}</p>
                            <p><i class="far fa-envelope"></i> Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                            <p><i class="fas fa-house-user"></i> Office Number: ${manager.officeNumber}</p>
                        </div>
                    </div>
                </div>
    `;
}

// create Engineer card
const engineerCard = function (engineer) {
    return `
                <div class="col-3 mt-4">
                    <div class="card h-100">
                        <div class="card-header">
                            <h3>${engineer.name}</h3>
                            <h4><i class="fas fa-user-cog"></i> Engineer</h4>
                        </div>
                        <div class="card-body">
                            <p><i class="far fa-id-badge"></i> ID: ${engineer.id}</p>
                            <p><i class="far fa-envelope"></i> Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                            <p><i class="fab fa-github"></i> Github: <a target="_blank" href="https://github.com/${engineer.github}">${engineer.github}</a></p>
                        </div>
                    </div>
                </div>
    `
}

// create Intern card 
const internCard = function (intern) {
    return `
                <div class="col-4 mt-4">
                    <div class="card h-100">
                        <div class="card-header">
                            <h3>${intern.name}</h3>
                            <h4><i class="fas fa-user-graduate"></i> Intern</h4>
                        </div>

                        <div class="card-body">
                            <p><i class="far fa-id-badge"></i> ID: ${intern.id}</p>
                            <p><i class="far fa-envelope"></i> Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                            <p><i class="fas fa-school"></i> School: ${intern.school}</p>
                        </div>
                    </div>
                </div>
    `
};

// push array to page 
const generatePage = function(data) {

    // employee cards 
    cards = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            cards.push(managerCard(employee));
        } else if (role === 'Engineer') {
            cards.push(engineerCard(employee));
        } else if (role === 'Intern') {
            cards.push(internCard(employee));
        }
    }

    // join the strings 
    const employeeCards = cards.join('')

    // return to generated page
    return withBaseLayout(employeeCards);
}

// generate html page 
const withBaseLayout = function (employeeCards) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
            integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
            integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
    </head>
    <body>
        <div class="container-fluid bg-primary">
            <div class="p-3">
                <p class="text-center h1 text-white">My Team</p>
            </div>
        </div>
        <main>
            <div class="container">
                <div class="row justify-content-center">
                    ${employeeCards}
                </div>
            </div>
        </main>
      
    </body>
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF"
        crossorigin="anonymous"></script>
  </html>
`;
}

// export to index
module.exports = generatePage; 
