const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  // your code here
}
const keyCodes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let index = 0;

document.body.addEventListener("keydown", (thingPressed) => {
  const key = thingPressed.key 
  console.log(key) 
  
  if (keyCodes[index] == key) {
    ++index 
  } 
  
  else {
    idx = 0 
  }
  
  console.log(index)
  if (index == 10) {
    alert("Hurray!");
    index = 0 
  }
}); const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
 function init() { var index = 0;
  document.addEventListener('keydown', function (e) {
    const key = parseInt(e.detail || e.which);

    if (key === code[index]) {
      index++;

      if (index === code.length - 1) {
        window.alert("YOU DID IT!");
        index = 0;
      }
    } else {
      index = 0;
    }
  }, false);
}	}