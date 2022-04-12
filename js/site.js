// Step One - controller accept request
function getMessage() {

    let msg = document.getElementById("txtmessage").value;

    if (msg != ''){
        msg = msg.toLowerCase();
        let revMessage = reverseMessageA(msg);
        displayMessage(revMessage);
    }
    else{
        alert("You must enter a string");
        
    
    }

    
}

function reverseMessageA(msg){
    let revMessage = "";
    //decrimenting loop
    for (let index = msg.length - 1 ; index >= 0; index--) {

        let char = msg[index];
        
        revMessage += char;
        
        
    }

    return revMessage;

}

function reverseMessageB(msg){

    let revMessage = "";
    revMessage = msg.split("").reverse().join("");
    return revMessage;



    return revMessage;


}


// Final Step - view
function displayMessage(message) {

    // <li class="list-group-item">A list item</li>
    element = document.getElementById("results");
    element.innerHTML = message;     
}