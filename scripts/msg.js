var size = 1
var requests =      ["help"]; 
var responses =     ["See FAQs for help"];
var resourceLinks = ["help.site.com"]; 
var msgID = 0; 

function msgInstance() {
    sendMessage(); 
    botReply(getMsg()); 
}
function sendMessage() {
    var block = document.createElement('div');
    block.className="container";
    /* Profile */
    var img = document.createElement('IMG');
    img.className = "profileImg"; 
    img.src = "assets/default-user.png";
    img.alt = "Avatar"; 
    block.appendChild(img);
    /* Message */
    var t = document.createElement('P');
    t.textContent = getMsg(); 
    block.appendChild(t);
    /* Timestamp */
    //var timeStamp = document.createElement('SPAN');
    var timeStamp = document.createElement('P');
    timeStamp.textContent = "11:05";  
    timeStamp.className = "time-right";
    block.appendChild(timeStamp);
    /* Push to dms */
    var chatContainer = document.getElementById('dms');
    chatContainer.appendChild(block);
}
function replyMessage(msg, resourceLink) {
    var block = document.createElement('div');
    block.className="container darker";
    /* Profile */
    var img = document.createElement('IMG');
    img.className = "profileImg"; 
    img.src = "assets/default-bot.png";
    img.alt = "Avatar"; 
    block.appendChild(img);
    /* Message */
    var t = document.createElement('P');
    t.textContent = msg; 
    block.appendChild(t);
    /* resourceLink */
    var t = document.createElement('P');
    t.textContent = resourceLink; 
    block.appendChild(t);
    /* Timestamp */
    //var timeStamp = document.createElement('SPAN');
    var timeStamp = document.createElement('P');
    timeStamp.textContent = "11:05";  
    timeStamp.className = "time-right";
    block.appendChild(timeStamp);
    /* Push to dms */
    var chatContainer = document.getElementById('dms');
    chatContainer.appendChild(block);   
}
function getMsg() {
    return document.getElementById("txt-a").value; 
}
function botReply(userMsg) {
    var botMSG = queryRequest(userMsg);
    msgLog(userMsg,botMSG[0],botMSG[1]); // debug
    replyMessage(botMSG[0], botMSG[1]);
}
function queryRequest(request) {
    // build text and link response
    for(i =0; i < size; i++) {
        if(request.includes(requests[i])) {
            var response = [responses[i], resourceLinks[i]];
            return response; 
        }
    }
}
function msgLog(userM, botM, linkM){
    console.log("[msgID]: "+msgID);
    console.log("[userMSG]:"+userM);
    console.log("[botMSG]:"+botM);
    console.log("[linkMSG]:"+linkM);
    msgID++; 
}