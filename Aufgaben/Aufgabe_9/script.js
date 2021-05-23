//Funktion New Task//
var taskZahler = 0;
var benutzereingabe = document.querySelector("#text1");
benutzereingabe.addEventListener("keypress", function (keyboardEvent) {
    var newDiv = document.createElement("div");
    var circle = document.createElement("div");
    var check = document.createElement("div");
    var trash = document.createElement("div");
    var textstyle = document.createElement("div");
    var eingabe = new Text(benutzereingabe.value);
    if (keyboardEvent.key == "Enter") {
        newDiv.className = "spalte3";
        circle.classList.add("far", "fa-circle", "kreis");
        check.classList.add("far", "fa-check-circle", "isHidden", "check");
        trash.classList.add("far", "fa-trash-alt", "trash");
        textstyle.className = "text2";
        taskZahler = taskZahler + 1;
        document.querySelector("span").innerHTML = "You have " + taskZahler + " task(s).";
        document.querySelector(".newTask").appendChild(newDiv);
        newDiv.appendChild(circle);
        newDiv.appendChild(check);
        newDiv.appendChild(trash);
        newDiv.appendChild(textstyle);
        textstyle.appendChild(eingabe);
        //check button//
        function changeClasses(firsHTMLElement, secondHTMLElement) {
            firsHTMLElement.classList.add("isHidden");
            secondHTMLElement.classList.remove("isHidden");
        }
        check.addEventListener("click", function () {
            changeClasses(check, circle);
        });
        circle.addEventListener("click", function () {
            changeClasses(circle, check);
        });
        //trash button//
        trash.addEventListener("click", function () {
            newDiv.classList.add("isHidden");
            taskZahler--;
            document.querySelector("span").innerHTML = "You have " + taskZahler + " task(s).";
        });
    }
});
//# sourceMappingURL=script.js.map