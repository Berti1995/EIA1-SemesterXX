

  //Funktion New Task//
  let taskZahler: number = 0;

  const benutzereingabe: HTMLInputElement = document.querySelector("#text1") as HTMLInputElement;

  benutzereingabe.addEventListener("keypress", function (keyboardEvent: KeyboardEvent): void {
    
    const newDiv: HTMLDivElement = document.createElement("div");
    const circle: HTMLDivElement = document.createElement("div");
    const check: HTMLDivElement = document.createElement("div");
    const trash: HTMLDivElement = document.createElement("div");
    const textstyle: HTMLDivElement = document.createElement("div");
    let eingabe: Text = new Text(benutzereingabe.value);

    
    if (keyboardEvent.key == "Enter") {
        
        newDiv.className = "spalte3";
        circle.classList.add("far", "fa-circle", "kreis")
        check.classList.add("far", "fa-check-circle", "isHidden", "check")
        trash.classList.add("far", "fa-trash-alt", "trash")
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

        function changeClasses(firsHTMLElement: HTMLElement, secondHTMLElement: HTMLElement): void {
            firsHTMLElement.classList.add("isHidden");
            secondHTMLElement.classList.remove("isHidden");
    
    
          }
    
    
          check.addEventListener("click", function (): void {
            changeClasses(check, circle);
          });
    
          circle.addEventListener("click", function (): void {
            changeClasses(circle, check);
    
          });

        //trash button//
        trash.addEventListener("click", function (): void {
            newDiv.classList.add("isHidden");
            taskZahler--;
            document.querySelector("span").innerHTML = "You have " + taskZahler + " task(s).";
        }

      
    


    }
});


