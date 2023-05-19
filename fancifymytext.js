function getBigger(){
    document.getElementById("inputText-1").style.fontSize = "24pt";
}
function changeStyle() {
    var myTA = document.getElementById("inputText-1");
    var fancyOption = document.getElementById("fancy-option");
    var boringOption = document.getElementById("boring-option");

    if (fancyOption.checked) {
        myTA.style.fontWeight = "bold";
        myTA.style.color = "blue";
        myTA.style.textDecoration = "underline";
    } else if (boringOption.checked) {
        myTA.style.fontWeight = "normal";
        myTA.style.color = "black";
        myTA.style.textDecoration = "none";
    }
}
    function mooBtn(){
        const myTA = document.getElementById('inputText-1').value;
        const uppercase = myTA.toUpperCase();
        const parts = uppercase.split(".");
        for(var i = 0; i < parts.length  - 1; i++) {
            let temp = parts[i].trim();
            temp += "-Moo";
            parts[i] = temp;
        }
        document.getElementById("inputText-1").value = parts.join("");
    }   