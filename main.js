//KF Panda Search

//Button Event Listener
document.getElementById("search-btn").addEventListener("click", btnClicked);

function btnClicked() {
  console.log("Your button has buttoned!!");
  // Get Search Input
  let name = document.getElementById("search-in").value.toLowerCase();

  //Test The Name
  if (name === "po" || name === "Po") {
    document.getElementById("char-info").innerHTML = `
    <img src="img/po.png" alt="PO" />
        <h2>Po</h2>
        <p class="quote">"Buddy, I am the Dragon Warrior"</p>`;
  } else if (name === "mantis" || name === "Mantis") {
    document.getElementById("char-info").innerHTML = `
  <img src="img/mantis.png" alt="MANTIS" />
      <h2>Mantis</h2>
      <p class="quote">"Fear the bug!"</p>`;
  } else if (name === "tigress" || name === "Tigress") {
    document.getElementById("char-info").innerHTML = `
  <img src="img/tigress.png" alt="TIGRESS" />
      <h2>Tigress</h2>
      <p class="quote">"That was pretty hardcore!"</p>`;
  } else if (name === "viper" || name === "Viper") {
    document.getElementById("char-info").innerHTML = `
  <img src="img/viper.png" alt="VIPER" />
      <h2>Viper</h2>
      <p class="quote">"I don't need to bite to fight!"</p>`;
  } else if (name === "monkey" || name === "random") {
    document.getElementById("char-info").innerHTML = `
  <img src="img/monkey.png" alt="MONKEY" />
      <h2>Monkey</h2>
      <p class="quote">"We should hang out!"</p>`;
  } else if (name === "crane" || name === "qwerty") {
    document.getElementById("char-info").innerHTML = `
  <img src="img/crane.png" alt="CRANE" />
      <h2>Crane</h2>
      <p class="quote">"You can chain my body, but you will never chain my warrior spirit!"</p>`;
  } else {
    document.getElementById("char-info").innerHTML = `
  <img src="img/question-mark.png" alt="KFPANDA CHARACTER" />
      <h2>?????</h2>
      <p class="quote">"_________"</p>`;
  }
}
