// intern profile card

const internCard = (profile) => `
  <div class="card m-3" style="width: 180px">
    <div class="card-header bg-success text-white">

// display name and role
      <p class="h3">${profile.getName()}</p>
      <p class="h4">
        <i class="fas fa-glasses mr-1"></i>
        ${profile.getRole()}
      </p>

// list items
    </div>
    <div class="card-body bg-light">
      <ul class="list-group">
        <li class="list-group-item">

// display ID
          <span class="font-weight-bold">Employee ID: </span>
          ${profile.getID()}
        </li>
        <li class="list-group-item">

/display email
          <span class="font-weight-bold">Email Address: </span>
          <a href="mail to: ${profile.getEmail()}">${profile.getEmail()}</a>
        </li>

// display github
        <li class="list-group-item">
          <span class="font-weight-bold">School Name: </span>
          ${profile.getSchool()}">${profile.getSchool()}
        </li>
      </ul>
    </div>
  </div>
`;

module.exports = internCard;
