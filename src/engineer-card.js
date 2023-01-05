// engineer profile card

const engineerCard = (profile) => `
  <div class="card m-3" style="width: 180px">
    <div class="card-header bg-success text-white">

// display name
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
          <a href="mailto: ${profile.getEmail()}">${profile.getEmail()}</a>
        </li>

// display github
        <li class="list-group-item">
          <span class="font-weight-bold">GitHub: </span>
          <a href="http://www.github.com/${profile.getGithub()}">${profile.getGithub()}</a>
        </li>
      </ul>
    </div>
  </div>
`;

module.exports = engineerCard;