
$(document).on('touchstart', '#123', function (event) {
    event.stopPropagation();
    event.preventDefault();
    if (event.handled !== true) {
        $(this).css({ 'backgroundImage': 'url("img/opt2.png")' });
        event.handled = true;
    } else {
        return false;
    }
});
$(document).on('touchend click', '#123', function (event) {
    event.stopPropagation();
    event.preventDefault();
    if (event.handled !== true) {
        $(this).css({ 'backgroundImage': 'url("img/opt.png")' });
        document.getElementById('main_tab').style.display = 'none'
        $('.td_letter').css({ 'height': '100px' });
        document.getElementById('num_tab').style.display = 'inline-table'
        event.handled = true;
    } else {
        return false;
    }
});
$(document).on('touchstart', '#abc', function (event) {
    event.stopPropagation();
    event.preventDefault();
    if (event.handled !== true) {
        $(this).css({ 'backgroundImage': 'url("img/opt2.png")' });
        document.getElementById('num_tab').style.display = 'inline-table'
        event.handled = true;
    } else {
        return false;
    }
});
$(document).on('touchend click', '#abc', function (event) {
    event.stopPropagation();
    event.preventDefault();
    if (event.handled !== true) {
        $(this).css({ 'backgroundImage': 'url("img/opt.png")' });
        document.getElementById('num_tab').style.display = 'none'
        document.getElementById('main_tab').style.display = 'inline-table'
        $('.td_letter').css({ 'height': '60px' });
        event.handled = true;
    } else {
        return false;
    }
});
$(document).on('touchstart', '#Convert_txt_td', function (event) {
    event.stopPropagation();
    event.preventDefault();
    if (event.handled !== true) {
        $(this).css({ 'backgroundImage': 'url("img/opt2.png")' });
        event.handled = true;
    } else {
        return false;
    }
});
$(document).on('touchend click', '#Convert_txt_td', function (event) {
    event.stopPropagation();
    event.preventDefault();
    if (event.handled !== true) {
        $("#Convert_txt_td").html(words[3]);
        $(this).css({ 'backgroundImage': 'url("img/opt3.png")' });
        document.getElementById('num_tab').style.display = 'none'
        document.getElementById('main_tab').style.display = 'inline-table'
        document.getElementById('convert_tab').style.display = 'none'
        $('.td_letter').css({ 'height': '60px' });
        $("#Convert_txt_td").attr("id", "Convert_txt_td2");
        event.handled = true;
    } else {
        return false;
    }
});
$(document).on('touchstart', '#Convert_txt_td2', function (event) {
    event.stopPropagation();
    event.preventDefault();
    if (event.handled !== true) {
        $(this).css({ 'backgroundImage': 'url("img/opt2.png")' });

        event.handled = true;
    } else {
        return false;
    }
});
$(document).on('touchend click', '#Convert_txt_td2', function (event) {
    event.stopPropagation();
    event.preventDefault();
    if (event.handled !== true) {

        $(this).css({ 'backgroundImage': 'url("img/opt3.png")' });
        $("#Convert_txt_td2").html(words[9]);
        document.getElementById('num_tab').style.display = 'none';
        document.getElementById('main_tab').style.display = 'none';
        document.getElementById('convert_tab').style.display = 'inline-table';
        $("#Convert_txt_td2").attr("id", "Convert_txt_td");
        event.handled = true;
    } else {
        return false;
    }
});
$(document).on('touchstart click', '#tocod', function (event) {
    event.stopPropagation();
    event.preventDefault();
    if (event.handled !== true) {
        tocode();
        $(this).css({ 'backgroundImage': 'url("img/opt3.png")' });
        event.handled = true;
    } else {
        return false;
    }
});
$(document).on('touchend ', '#tocod', function (event) {
    event.stopPropagation();
    event.preventDefault();
    if (event.handled !== true) {
        $(this).css({ 'backgroundImage': 'url("img/opt2.png")' });
        event.handled = true;
    } else {
        return false;
    }
});
$(document).on('touchstart click', '#toen', function (event) {
    event.stopPropagation();
    event.preventDefault();
    if (event.handled !== true) {
        toenglish();
        $(this).css({ 'backgroundImage': 'url("img/opt3.png")' });
        event.handled = true;
    } else {
        return false;
    }
});
$(document).on('touchend', '#toen', function (event) {
    event.stopPropagation();
    event.preventDefault();
    if (event.handled !== true) {
        $(this).css({ 'backgroundImage': 'url("img/opt2.png")' });
        event.handled = true;
    } else {
        return false;
    }
});
$(document).on('touchstart click', '#clearid', function (event) {
    event.stopPropagation();
    event.preventDefault();
    if (event.handled !== true) {
        clearIt();
        $(this).css({ 'backgroundImage': 'url("img/opt3.png")' });
        event.handled = true;
    } else {
        return false;
    }
});
$(document).on('touchend ', '#clearid', function (event) {
    event.stopPropagation();
    event.preventDefault();
    if (event.handled !== true) {
        $(this).css({ 'backgroundImage': 'url("img/opt2.png")' });
        event.handled = true;
    } else {
        return false;
    }
});
$(document).on('touchstart click', '#swapid', function (event) {
    event.stopPropagation();
    event.preventDefault();
    if (event.handled !== true) {
        swap();
        $(this).css({ 'backgroundImage': 'url("img/opt3.png")' });
        event.handled = true;
    } else {
        return false;
    }
});
$(document).on('touchend', '#swapid', function (event) {
    event.stopPropagation();
    event.preventDefault();
    if (event.handled !== true) {
        $(this).css({ 'backgroundImage': 'url("img/opt2.png")' });
        event.handled = true;
    } else {
        return false;
    }
});

$(document).ready(function () {
    document.getElementById("output").innerHTML = "&nbsp;";
    document.getElementById("tocod").value = words[5];
    document.getElementById("toen").value = words[4];
    document.getElementById("clearid").value = words[6];
    document.getElementById("swapid").value = words[7];

    //letters
    for (i = 0; i < 27; i++) {
        $(document).on('touchstart', '#' + i, function (event) {
            event.stopPropagation();
            event.preventDefault();
            if (event.handled !== true) {
                $(this).css({ 'backgroundImage': 'url("img/opt2.png")' });
                event.handled = true;
            } else {
                return false;
            }
        });
        $(document).on('touchstart', '#0' + i, function (event) {
            event.stopPropagation();
            event.preventDefault();
            if (event.handled !== true) {
                $(this).css({ 'backgroundImage': 'url("img/opt2.png")' });
                event.handled = true;
            } else {
                return false;
            }
        });
        $(document).on('touchend click', '#' + i, function (event) {
            event.stopPropagation();
            event.preventDefault();
            if (event.handled !== true) {
                for (i = 1; i < 27; i++) {
                    if (this.id == i)
                        showPopUpMessage(createPopUpHeader(words[0]), createPopUpContent(abc[i]), 250, 300);
                }
                $(this).css({ 'backgroundImage': 'url("img/opt.png")' });
                event.handled = true;
            } else {
                return false;
            }
        });
        $(document).on('touchend click', '#0' + i, function (event) {
            event.stopPropagation();
            event.preventDefault();
            if (event.handled !== true) {
                for (i = 0; i < 10; i++) {
                    if (this.id == '0' + i)
                        showPopUpMessage(createPopUpHeader(words[0]), createPopUpContent(num[i]), 250, 300);
                }
                $(this).css({ 'backgroundImage': 'url("img/opt.png")' });
                event.handled = true;
            } else {
                return false;
            }
        });
    }
});

function toenglish() {
    var input = document.frm.input.value;
    var output = "";
    var words = input.split("/");
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
        output += "/";
    }
    document.getElementById("output").innerHTML = output;
}

function swap() {
    var input = document.frm.input.value;
    var output = document.getElementById("output").innerHTML;
    if (output == "&nbsp;") {
        document.frm.input.value = "";
    } else {
        document.frm.input.value = output;
    }
    document.getElementById("output").innerHTML = input;
}
 
function clearIt() {
    document.frm.input.value = "";
    document.getElementById("output").innerHTML = "&nbsp;";
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