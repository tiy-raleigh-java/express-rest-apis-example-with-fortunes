function requestRandomFortune() {
  fetch('/fortunes/random')
    .then(response => {
      if (response.status === 200) {
        // yay we got a fortune!
        return response.json();
      } else {
        // do something here for other non-success status codes
      }
    })
    .then(fortune => {
      document.querySelector('#fortune').innerHTML = fortune;
    });
}

// request fortune on page load
requestRandomFortune();

// listen for clicks on the load another fortune button
document.querySelector('#load').addEventListener('click', () => requestRandomFortune());
