
  function shout(string) {
    return string.toUpperCase();
  }
  //1) whisper(string)
  //     receives one argument and returns it in all lowercase:
  //   ReferenceError: whisper is not defined
 //(test/index-test.js:10:5)
//   at processImmediate (internal/timers.js:456:21)
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    console.log(string.toUpperCase());
}
function logWhisper(string){
    console.log(string.toLowerCase());
}
function sayHiToHeadphonedRoommate(string){
    // return "I can't hear you!" (if 'string' is lowercase());
if (string=== string.toLowerCase()) {
    return "I can't hear you!"

}

if (string===string.toUpperCase()){
    return "YES INDEED!"
}

if (string==="Let's have dinner together!"){
    return"I would love to!"
}
}



