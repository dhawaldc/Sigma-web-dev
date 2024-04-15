function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    let viwStr;
    if(views<1000){
        viwStr=views;
    }
    else if(views>1000000){
        viwStr=views/1000000 + "M";
    }
    else if(views<1000000){
        viwStr=views/10000+"K";
    }
  // Finish this function
  let html = `<div class="card">
    <div class="image">
      <img
        src="https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
        alt="thumbnail"
      />
      <div class="capsule">${duration}</div>
    </div>
    <div class="text">
      <h2>${title}</h2>
      <p>${cName} . ${viwStr} . ${monthsOld} Months ago</p>
    </div>
  </div>`;
  document.querySelector(".container").innerHTML+=html;
}


createCard(
  "Introduction to Backend | Sigma Web Dev video #2",
  "CodeWithHarry",
  560000,
  7,
  "31:22",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
);
