var cA = -1;
var xp = 1;
function getRandom(list) {
  cA = Math.floor(Math.random() * list.length);
  return list[cA];
}

let prompts = ["Log to the console 'Hello world'"];
let awn = ["Hello world"];
var a = document.getElementById("prompt");
var outputA = document.getElementById("output");
var codeText = document.getElementById("code");
var xpD = document.getElementById("xp");
a.innerHTML = getRandom(prompts);
function runprogram() {
  outputA.innerHTML = "running..";
  var text = codeText.value;
  outputA.innerHTML = looseJsonParse(text);
 // eval(text);
  //
}

// function runprogram() {
      // TODO: Can parse actual code
// }

function looseJsonParse(obj) {
  console.oldLog = console.log;
  console.log = function(value) {
    return value;
};

  let ret = eval?.(`"use strict";(${obj})`);
  console.log = console.oldLog;
  if(ret == awn[cA]){ 
    a.innerHTML = "Good.";
    xp = (cA + 1) * (Math.random() * 10);
    console.log(xp)
    xpD.innerHTML = Math.round(xp) + " xp";
  }
  return ret;
}
