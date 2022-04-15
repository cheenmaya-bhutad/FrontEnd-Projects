const chars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","W","Y","X",0,1,2,3,4,5,6,7,8,9,"+","-","/","*","@","#","$","%","^","&"];
let passwords = [];
let passwordGenerated = false;
let userInput = 0;
let passwordsList = "";


//Populating the passwords array with reference to input element used to store them
passwords.push(document.getElementById("pwd-el1"));
passwords.push(document.getElementById("pwd-el2"));
passwords.push(document.getElementById("pwd-el3"));
passwords.push(document.getElementById("pwd-el4"));

//Function to return a random character from chars array at a time
function randomCharacterGenerator() {
    return chars[Math.floor(Math.random()*72)];
}

//Function to generate the passwords
function Pwds(len) {
    passwordsList = "";
    for(let i=0;i<4;i++) {
        let temp = "";
        for(let j=0;j<len;j++) {
            temp += randomCharacterGenerator();
        }
        passwords[i].value = temp;
        passwordsList += passwords[i].value + "\n";
    }
}

/*
    Funtion to generate the passwords
    if user input is not present then generate passwords for 8 characters length
    else generate the password for user input characters length.
    isGenerated is used to check whether the passwords are generated or not.
*/
function generatePasswords() {
    len = document.getElementById("user-input").value;
    if(len > 8 && len < 16) {
        Pwds(len);
    }  else {
        Pwds(8);
    }
    passwordGenerated = true;
}

//Function to copy the passwords to clipboard
function copyPasswords() {
    if(passwordGenerated) {
        /*Create a text area element*/
        let dummy = document.createElement('textarea');
        /*Add to the body of document*/
        document.body.appendChild(dummy);
        /*Add the passwords to the textarea*/
        dummy.value = passwordsList;
        /*Copy to clipboard*/
        navigator.clipboard.writeText(passwordsList);
        /*Remove the element from body*/
        document.body.removeChild(dummy);
        alert("Passwords copied!");
    }  else {
        alert("Generate passwords first to copy")
    }
}