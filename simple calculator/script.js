let buttons= document.querySelectorAll("button")
        let screen= document.querySelector(".screen")
        let calculator= document.querySelector(".calculator")

        calculator.addEventListener("click",function(e){
            let deger= e.target.textContent
            buttons.forEach(function(button){
                if(deger=="C"){
                    screen.textContent=""
                }else if(deger=="="){
                   let sonuc= eval(screen.textContent)
                   screen.textContent=sonuc
              }else if(button.textContent==deger){
                    screen.textContent+= button.textContent
              }
            })
        })