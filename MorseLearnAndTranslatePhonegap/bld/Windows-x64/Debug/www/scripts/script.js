function toenglish() {
    var input = document.frm.input.value;
    var output = "";
    var words = input.split("|");
    var i = 0;
    for (i = 0; i < words.length; i++) {
        var letters = words[i].split(" "); 
        var x = 0;
        for (x = 0; x < letters.length; x++) {
            y = 0;
            for (y = 0; y < morse.length; y++) {
                if ((letters[x] == morse[y]) | (letters[x] == morse_keyboard[y]))  {
                    output += english[y];
                }
            }
        }
        output += " ";
    }
	if (output == " ")
		output = "?";
    document.getElementById("output").innerHTML = output;
}

function tocode() {
    var input = document.frm.input.value;
    var output = "";
    var words = input.split(" "); 
    var i = 0;
    for (i = 0; i < words.length; i++) {
        var letters = words[i].split(""); 
        var x = 0;
        for (x = 0; x < letters.length; x++) {
            y = 0;
            for (y = 0; y < 36; y++) {
                if ((letters[x] == english[y])) {
                    output += morse[y];
                }
            }
            output += " ";
        }
        output += "|";
    }
    document.getElementById("output").innerHTML = output;
}

function swap() {
    var input = document.frm.input.value;
    var output = document.getElementById("output").innerHTML;
    if (output == "<div>        </div>") {
        document.frm.input.value = "";
    } else {
        document.frm.input.value = output;
    }
    document.getElementById("output").innerHTML = input;
}
 
function clearIt() {
    document.frm.input.value = "";
    document.getElementById("output").innerHTML = " ";
}

var overlayElement = null;
var modalWindowElement = null;
var click = 'click';
function createPopUpHeader(title)
{
    modalWindowHeader = document.createElement("div");
    modalWindowHeader.className = "modalWindowHeader";
    modalWindowHeader.innerHTML = "<h2>" + title + "</h2>";
    return modalWindowHeader;
}
function createPopUpContent(msg)
{
    modalWindowContent = document.createElement("div");
    modalWindowContent.className = "modalWindowContent";
    
    modalWindowContent.innerHTML = "<p style='text-align:center; font-size:30px; margin-top:10px;'>" + msg + "</p>";

    okBtn = document.createElement("div");
    okBtn.className = "redBtn okBtn";
    okBtn.innerHTML = "<h3>"+words[2]+"</h3>";
    okBtn.addEventListener(click,function(){ hidePopUpMessage(); },false);
    
    modalWindowContent.appendChild(okBtn);
    return modalWindowContent;
}

function showPopUpMessage(modalWindowHeader,modalWindowContent,width,height) {
    overlayElement = document.createElement("div");
    overlayElement.className = 'modalOverlay';
    modalWindowElement = document.createElement("div");
    modalWindowElement.className = 'modalWindow';
                

    modalWindowElement.style.width = width + "px";
    modalWindowElement.style.height = height + "px";
    modalWindowElement.style.left = (window.innerWidth - width) / 2 + "px";
    modalWindowElement.style.top = (window.innerHeight - height) / 2 + "px";

    modalWindowElement.appendChild(modalWindowHeader);
    modalWindowElement.appendChild(modalWindowContent);
    document.body.appendChild(overlayElement);
    document.body.appendChild(modalWindowElement);
    setTimeout(function() {
        modalWindowElement.style.opacity = 1;
        overlayElement.style.opacity = 0.0;
        overlayElement.addEventListener(click, hidePopUpMessage, false);
    }, 10);
}

function hidePopUpMessage() {
    modalWindowElement.style.opacity = 0;
    overlayElement.style.opacity = 0;
    overlayElement.removeEventListener(click, hidePopUpMessage, false);
    setTimeout(function() {
        document.body.removeChild(overlayElement);
        document.body.removeChild(modalWindowElement);
    }, 200);         
}