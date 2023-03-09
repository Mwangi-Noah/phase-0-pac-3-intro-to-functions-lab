function shout(String) {
    return String.toUpperCase(); //Hello
}
function whisper(String) {
    return String.toLowerCase(); //hello
}
function logShout (String) {
    console.log(shout(String));
}
function logWhisper (String) {
    console.log(whisper(String));
}
function sayHiToHeadphonedRoommate (String) {
    
    let greeting;

    switch (String) {
        case String.toLowerCase():
            greeting = "I can't hear you";
            break;
        case String.toUpperCase():
            greeting = "YES INDEED";
            break;
        case String === "Let's have dinner together!":
            greeting = "I would love to";
            break;
        default:
            greeting = "Normal";
            break;
    }
    console.log(greeting);
    greeting;
}