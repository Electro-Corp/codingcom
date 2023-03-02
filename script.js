//var exec = require('child_process').exec;
//import { execSync } from '/child_process';  // replace ^ if using ES modules
// var exec = require('child_process');
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
var button = document.getElementById("run");

a.innerHTML = getRandom(prompts);
// button.addEventListener("click", runprogram);


// export function runprogram() {
//   outputA.innerHTML = "running..";
//   var text = codeText.value;
//   //var exec = require('child_process').exec;

  //const execSync = require('child_process').execSync;

  //export const runprogram = () => {

function runProgram() {
  const code = document.getElementById("program-input").value;
  const xhr = new XMLHttpRequest();
  const output = document.getElementById("output");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        output.innerText = xhr.responseText;
      } else {
        output.innerText = "Error: " + xhr.status;
      }
    }
  };

  xhr.open("POST", "/run");
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.send(JSON.stringify({ code: code }));
}



// // var exec = require()
// function runprogram(){
//   // console.log("yo");
//   // execSync('ls', { encoding: 'utf-8' });  // the default is 'buffer'
//   // console.log('Output was:\n', output);
//   //var oShell = new ActiveXObject("Shell.Application");

//   //var commandtoRun = "ls";
//   //if (inputparms != "") {
//   //  var commandParms = document.Form1.filename.value;
//   //}

// // Invoke the execute method.  
// //oShell.ShellExecute(commandtoRun, commandParms, "", "open", "1");
//};

// I really hope that this makes sense
document.addEventListener("DOMContentLoaded", () => {
async function runCppProgram() {
  /*// Get the C++ code from the textarea
  var cppCode = document.getElementById("cpp-code").value;

  // Send the C++ code to the server to be executed
  fetch("/run-cpp-program", {
    method: "POST",
    body: cppCode
  })
  .then(response => response.text())
  .then(result => {
    // Display the output of the C++ program
    alert(result);
  })
  .catch(error => {
    // Display an error message if something goes wrong
    alert("There was an error running the program: " + error.message);
  });

  let code = document.getElementById("code").value;

  const response = await fetch('/compile', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ code })
  });

  const result = await response.json();
  console.log(result); // Add this line to see the contents of the response.

  let outputDiv = document.getElementById("output");
  outputDiv.innerHTML = result.output; */
  } 
});



    //outputA.innerHTML = looseJsonParse(text);
  // eval(text);
  //
  // }

// function runprogram() {
      // TODO: Can parse actual code
// }

// function looseJsonParse(obj) {
//   console.oldLog = console.log;
//   console.log = function(value) {
//     return value;
// };

//   let ret = eval?.(`"use strict";(${obj})`);
//   console.log = console.oldLog;
//   if(ret == awn[cA]){ 
//     a.innerHTML = "Good.";
//     xp = (cA + 1) * (Math.random() * 10);
//     console.log(xp)
//     xpD.innerHTML = Math.round(xp) + " xp";
//   }
//   return ret;
// }
