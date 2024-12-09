//Set max width to variable css
{
    document.querySelector("html").style.setProperty("--max-size", document.documentElement.clientWidth + "px");
    window.addEventListener("resize", () => {
        document.querySelector("html").style.setProperty("--max-size", document.documentElement.clientWidth + "px");
        if(document.documentElement.clientWidth < 1250){
            document.querySelector(".site-burger_menu").style.display = "block";
            document.querySelector(".fix-nav").style.display = "none";
        } else{
            document.querySelector(".site-burger_menu").style.display = "none";
            document.querySelector(".fix-nav").style.display = "grid";
        }
    });
}

/*Sroll \ Nav*/
{
    let cont = 0, cont2 = 0;
    let num = 0, nPoj1 = 0, nProj2 = 0;
    let numberCont = document.querySelectorAll(".p5_projets_el-number");
    let number1 = 91;
    let number2 = 62;
    numberCont[0].textContent = numberCont[1].textContent = "0";

    document.addEventListener("scroll", () => {
        /*Page3 ranges*/
        let rangesCont = document.querySelector(".p3_info-ranges").getBoundingClientRect();
        if(rangesCont.top > 0 && rangesCont.top < document.documentElement.scrollTop && cont < 1) {
            cont = 1;
            const rangeEls = document.querySelectorAll(".p3_range-el");
            rangeEls.forEach(function(el) {
            let proc = el.querySelector(".p3_range_el-procent");
            let line = el.querySelector(".p3_range_el-line");
            let num = 0;
            let iter = setInterval(function() {
                if (proc.textContent !== "100%") {
                    proc.textContent = num + "%";
                    line.style.width = num + "%";
                    num++;
                }else {
                    clearInterval(iter);
                }
            }, 20)});
        }

        let projContainer = document.querySelector(".page5-projects_cont").getBoundingClientRect();
        if (projContainer.top > 0 && projContainer.top < document.documentElement.scrollTop && cont2 < 1) {
          cont2 = 1;
          let iter1 = setInterval(() => {
            if (numberCont[0].textContent < number1) {
              numberCont[0].textContent = nPoj1;
              nPoj1++;
            } else {
              clearInterval(iter1);
            }
          }, 30);
          let iter2 = setInterval(() => {
            if (numberCont[1].textContent < number2) {
              numberCont[1].textContent = nProj2;
              nProj2++;
            } else {
              clearInterval(iter2);
            }
          }, 30);
        }        
    });
  
    window.addEventListener('load', () => {
        if(document.documentElement.clientWidth < 1250){
            document.querySelector(".site-burger_menu").style.display = "block";
            document.querySelector(".fix-nav").style.display = "none";
        } else{
            document.querySelector(".site-burger_menu").style.display = "none";
            document.querySelector(".fix-nav").style.display = "grid";
        }
    });
}

/*Contact*/
{
    let close = document.querySelector(".contact-close_butt");
    let contacts_buttons = document.querySelectorAll(".contact");

    close.addEventListener("pointerdown", (e) => {
        e.preventDefault();
        document.querySelector(".contact-container").classList.remove("contact-opened");
        document.querySelector(".contact-container").classList.add("contact-closed");
    });

    let thank_close = document.querySelector(".thankyou-close_butt");
    thank_close.addEventListener("pointerdown", (e) => {
        e.preventDefault();
        document.querySelector(".thankyou-cont").style.display = "none";
    });

    let form_contact = document.querySelector(".contact-form");
    form_contact.addEventListener("submit", () => {
        document.querySelector(".thankyou-cont").style.display = "flex";
    })

    let seconds = new Date().getSeconds(), seconds2;
    let mlseconds = new Date().getMilliseconds(), mlseconds2;
    for (const iterator of contacts_buttons) {
        iterator.addEventListener("pointerdown", (e) => {
            e.preventDefault();
            seconds = new Date().getSeconds();
            mlseconds = new Date().getMilliseconds();
        });

        iterator.addEventListener("pointerup", (e) => {
            e.preventDefault();
            seconds2 = new Date().getSeconds();
            mlseconds2 = new Date().getMilliseconds();

            if(mlseconds + 180 > mlseconds2 && seconds >= seconds2){
                document.querySelector(".contact-container").classList.remove("contact-closed");
                document.querySelector(".contact-container").classList.add("contact-opened");
            }
        });
    }
}

/*Menu burger*/
{
    var burger = document.querySelector('.burger-container'),
    header = document.querySelector('.header');
    
    burger.addEventListener("pointerdown", () => {
        header.classList.toggle("menu-opened");
    });
}
