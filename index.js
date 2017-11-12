function BoardMember(name, homeState, training) {
  this.name=name
  this.homeState=homeState
  this.training=training  
}

let polishedBoardMember = new BoardMember;

polishedBoardMember.veto= function () {
  console.log("No, I must disagree");
}

polishedBoardMember.approve= function () {
  console.log("You can do that!");
}

polishedBoardMember.doCharity= function () {
  console.log("I like to help people.");
}

polishedBoardMember.releasePressStatement= function () {
  console.log("You will see great things from Scuber.");
}
polishedBoardMember.sayHi= function () {
  console.log(`Hi, my name is ${name}. I am from ${homeState}, and I was trained in ${training}.`);
}