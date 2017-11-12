function BoardMember(name, homeState, training) {
  this.name=name;
  this.homeState=homeState;
  this.training=training;
  .veto= function () {
    console.log("No, I must disagree");
  }
  .approve= function () {
    console.log("You can do that!");
  }
  .doCharity= function () {
    console.log("I like to help people.");
  }
  .releasePressStatement= function () {
    console.log("You will see great things from Scuber.");
  }
  .sayHi= function () {
    console.log(`Hi, my name is ${name}. I am from ${homeState}, and I was trained in ${training}.`);
  }

}

let polishedBoardMember = new BoardMember("Mr. Polished", "New York", "law");
