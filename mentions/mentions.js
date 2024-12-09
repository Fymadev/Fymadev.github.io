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

/*Load*/
{
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