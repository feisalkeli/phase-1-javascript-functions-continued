//code your solution here
function saturdayFun(x) {
  if (x === undefined) {
    return "This Saturday, I want to roller-skate!";
  } else {
    return "This Saturday, I want to bathe my dog!";
  }
}

function mondayWork(x) {
  if (x === undefined) {
    return "This Monday, I will go to the office.";
  } else {
    return "This Monday, I will work from home.";
  }
}

function wrapAdjective(string) {
  function inner(special) {
    if (string === "*") {
      return `You are *${special}*!`;
    } else {
      return `You are ||${special}||!`;
    }
  }
  return inner;
}
