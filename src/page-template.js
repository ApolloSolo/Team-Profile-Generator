const templateManager = (dataArr) => {
  return `
    
      ${dataArr
        .filter((position) => position.employeeInfo.rank === "Manager")
        .map(({ employeeInfo, office }) => {
          return `
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h4 class="card-title">${employeeInfo.rank}</h4>
              <h6 class="card-text">${employeeInfo.name}</h6>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Office: #${office}</li>
              <li class="list-group-item"><a href="mailto:${employeeInfo.email}">Email</a></li>
              <li class="list-group-item">Employee ID: ${employeeInfo.id}</li>
            </ul>
            <div class="card-body">
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
            </div>
            `;
        })
        .join("")}
    
  `;
};

const templateEngineer = (dataArr) => {
  return `
    
      ${dataArr
        .filter((position) => position.employeeInfo.rank === "Engineer")
        .map(({ employeeInfo, gitHubLink }) => {
          return `
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h4 class="card-title">${employeeInfo.rank}</h4>
              <h6 class="card-text">${employeeInfo.name}</h6>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">Employee ID: ${employeeInfo.id}</li>
            <li class="list-group-item"><a href="mailto:${employeeInfo.email}">Email</a></li>
              <li class="list-group-item"><a href="${gitHubLink}">GitHub</a></li>
            </ul>
            <div class="card-body">
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
            </div>
            `;
        })
        .join("")}
    
  `;
};

const templateIntern = (dataArr) => {
  return `
  
      ${dataArr
        .filter((position) => position.employeeInfo.rank === "Intern")
        .map(({ employeeInfo, school }) => {
          return `
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h4 class="card-title">${employeeInfo.rank}</h4>
              <h6 class="card-text">${employeeInfo.name}</h6>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">Employee ID: ${employeeInfo.id}</li>
            <li class="list-group-item"><a href="mailto:${employeeInfo.email}">Email</a></li>
              <li class="list-group-item">School: ${school}</li>
            </ul>
            <div class="card-body">
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
            </div>
            `;
        })
        .join("")}
    
  `;
};

const templateData = (data) => {
  //   const managers = data.filter(
  //     (position) => position.employeeInfo.rank === "manager"
  //   );
  //   const interns = data.filter(
  //     (position) => position.employeeInfo.rank === "intern"
  //   );
  //   const engineers = data.filter(
  //     (position) => position.employeeInfo.rank === "engineer"
  //   );
  return `
    <!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]>      <html class="no-js"> <!--<![endif]-->
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <link rel="stylesheet" href="../src/style.css">
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>

        <main>
            <div class="card-container">
                ${templateManager(data)}
                ${templateEngineer(data)}
                ${templateIntern(data)}
            </div>
        </main>
        
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        <script src="" async defer></script>
    </body>
</html>
    `;
};

module.exports = {
  templateData,
};
