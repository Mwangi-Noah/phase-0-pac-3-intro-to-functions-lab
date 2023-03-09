function shout(string) {
    return string.toUpperCase(); //Hello
}
function whisper(string) {
    return string.toLowerCase(); //hello
}
function logShout (string) {
    console.log(shout(string));
}
function logWhisper (string) {
    console.log(whisper(string));
}
function sayHiToHeadphonedRoommate (string) {
    if (string === string.toLowerCase()) {
        return "I can't hear you!";
    }
    else if (string === string.toUpperCase()) {
        return "YES INDEED!";
    } else if ("Let's have dinner together") {
      return "I would love to!"
    }
}


    
   