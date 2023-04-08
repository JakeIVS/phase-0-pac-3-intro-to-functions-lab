function shout(string){
    // makes string input all uppercase
    return string.toUpperCase();
}
function whisper(string){
    // makes string input all lowercase
    return string.toLowerCase();
}
function logShout(string){
    console.log(shout(string));
}
function logWhisper(string){
    console.log (whisper(string));
}
function sayHiToHeadphonedRoommate(string){
    // returns "I can't hear you!" if string is not all uppercase
    if (string === "Let's have dinner together!"){
        return "I would love to!";
    }
     else if (string === shout(string)){
        return"YES INDEED!";
    }
    else {
        return "I can't hear you!";
    }
}
