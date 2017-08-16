function requestRobots(type) {
  type = type || 'all';

  fetch(`/robots?type=${type}`)
    // parse the json
    .then(response => response.json())
    // I have robots now
    .then(robots => {
      let robotsHtml = '';

      //for (let robot of robots) {
      for (let x = 0; x < robots.length; x++) {
        let robot = robots[x];
        robotsHtml += `
          <div class="userContainer">
            <div class="headshot">
              <img src="${robot.avatar}" alt="">
            </div>
            <h2 class="userName">${robot.name}</h2>
            <p>${robot.company}</p>
            <p>${robot.email}</p>
          </div>
        `;
      }

      // get the directory container
      document.querySelector('.dirContainer').innerHTML = robotsHtml;
    });
}

Array.from(document.querySelectorAll('.employStatus')).forEach(filterLink => {
  filterLink.addEventListener('click', event => {
    requestRobots(event.target.id);
  });
});

requestRobots();
