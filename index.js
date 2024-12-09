/*Card animation*/
{
    for (const el of document.querySelectorAll(".card-el")) {
        el.addEventListener("mouseenter", (e) => {
            if(e.target.querySelector(".card_info").classList.contains("card-close")){
                e.target.querySelector(".card_info").classList.toggle("card-close");
            }
            e.target.querySelector(".card_info").classList.toggle("card-open");
        });
    
        el.addEventListener("mouseleave", (e) => {
            if(e.target.querySelector(".card_info").classList.contains("card-open")){
                e.target.querySelector(".card_info").classList.toggle("card-open");
            }
            e.target.querySelector(".card_info").classList.toggle("card-close");
        });
    }
}

//Set max width to variable css
{
    document.querySelector("html").style.setProperty("--max-size", document.documentElement.clientWidth + "px");
    window.addEventListener("resize", () => {
        document.querySelector("html").style.setProperty("--max-size", document.documentElement.clientWidth + "px");
        if(document.documentElement.clientWidth < 1250){
            document.querySelector(".site-burger_menu").style.display = "block";
            document.querySelector(".fix-nav").style.display = "none";
        }else{
            document.querySelector(".site-burger_menu").style.display = "none";
            document.querySelector(".fix-nav").style.display = "grid";
        }
    });
}

/*Sroll \ Nav \ Ranges*/
{
    let ranges = document.querySelector(".page2-ranges");
    let cont = 0;
    document.addEventListener("scroll", () => {
        /*Ranges animation*/
        if(ranges.getBoundingClientRect().top > 0 && ranges.getBoundingClientRect().top < document.documentElement.scrollTop && cont < 1){
            cont = 1;
            circleAnimation();
        } else if(cont < 1){
            circle();
        }
    });

    function circleAnimation() {
        var canvases = document.getElementsByClassName("circle_canvas");
        var progressValues = [];

        function drawProgressBar(canvas, percent) {
            var context = canvas.getContext("2d");
            var x = canvas.width / 2;
            var y = canvas.height / 2;
            var radius = 75;
            var startAngle = 1.5 * Math.PI;
            var endAngle = ((percent / 100) * 2 - 0.5) * Math.PI;
            var counterClockwise = false;

            context.clearRect(0, 0, canvas.width, canvas.height);

            context.shadowBlur = 10;
            context.shadowColor = "rgba(0, 0, 0, 0.3)";

            context.beginPath();
            context.arc(x, y, radius, 0, 2 * Math.PI);
            context.lineWidth = 10;
            if(percent < 100){
                context.strokeStyle = "#E0E0E0";
            } else {
                context.strokeStyle = "#00BFFF";
            }
            context.stroke();

            context.shadowBlur = 6;
            context.shadowColor = "rgba(0, 0, 0, 0.5)";

            context.beginPath();
            context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
            context.lineWidth = 10;
            context.strokeStyle = "#00BFFF";
            context.stroke();

            context.shadowBlur = 0;
            context.shadowColor = "rgba(0, 0, 0, 0.5)";

            context.font = "30px sans-serif";
            context.fillStyle = "#000000";
            context.textAlign = "center";
            context.fillText(percent + "%", x, y + 10);

        }

        function updateProgressBar(canvas, currentPercent) {
            if (currentPercent <= 100 || progressValues.includes(canvas)) {
                drawProgressBar(canvas, currentPercent);
                if (currentPercent < 100) {
                    currentPercent++;
                }
                if (currentPercent === 100) {
                    progressValues.push(canvas);
                }
                setTimeout(function() {
                    updateProgressBar(canvas, currentPercent);
                }, 1);
            }
        }

        for (var i = 0; i < canvases.length; i++) {
            var canvas = canvases[i];
            var initialPercent = 0;
            updateProgressBar(canvas, initialPercent);
        }
    }

    function circle() {
        var canvases = document.getElementsByClassName("circle_canvas");

        function drawProgressBar(canvas, percent) {
            var context = canvas.getContext("2d");
            var x = canvas.width / 2;
            var y = canvas.height / 2;
            var radius = 75;

            context.clearRect(0, 0, canvas.width, canvas.height);

            // Line
            context.beginPath();
            context.arc(x, y, radius, 0, 2 * Math.PI);
            context.lineWidth = 10;
            context.strokeStyle = "#E0E0E0";
            context.stroke();

            // Procent text
            context.font = "30px sans-serif";
            context.fillStyle = "#000000";
            context.textAlign = "center";
            context.fillText("0%", x, y + 10);
        }

        function updateProgressBar(canvas, currentPercent) {
            drawProgressBar(canvas, currentPercent);
        }

        for (var i = 0; i < canvases.length; i++) {
            var canvas = canvases[i];
            var initialPercent = 0;
            updateProgressBar(canvas, initialPercent);
        }
    }

    window.addEventListener('beforeunload', () => {
        /*
        localStorage.setItem('scrollPosition', window.scrollY);
        */
        document.querySelector("html").style.setProperty("--max-size", document.documentElement.clientWidth + "px");
    });
  
    window.addEventListener('load', () => {
        document.querySelector("html").style.setProperty("--max-size", document.documentElement.clientWidth + "px");

        if(document.documentElement.clientWidth < 1250){
            document.querySelector(".site-burger_menu").style.display = "block";
            document.querySelector(".fix-nav").style.display = "none";
        } else{
            document.querySelector(".site-burger_menu").style.display = "none";
            document.querySelector(".fix-nav").style.display = "grid";
        }

        /*
        const savedScrollPosition = localStorage.getItem('scrollPosition');
        if (savedScrollPosition) {
            window.scrollTo(0, savedScrollPosition);
            localStorage.removeItem('scrollPosition');
        }
        */

        /*Ranges animation*/
        if(ranges.getBoundingClientRect().top > 0 && ranges.getBoundingClientRect().top < document.documentElement.scrollTop && cont < 1){
            cont = 1;
            circleAnimation();
        } else if(cont < 1){
            circle();
        }
    });
}

/*Messages*/
{
    (function messageAnim() {
        let nxt = ["ms2", "ms3"];

        let intervalMessages = setInterval(() => {
            if(document.documentElement.clientWidth < 1250){
                clearInterval(intervalMessages);
            }
            if(nxt.length === 0){
                nxt = ["ms1", "ms2", "ms3"];
            }
            let active = document.querySelector(".message-active");
            let nextEl = document.querySelector("#" + nxt.shift());

            active?.classList?.add("previos-activeRe");
            nextEl?.classList?.add("new-activeRe");
            nextEl?.classList?.remove("desactive");

            active.addEventListener("animationend", () => {
                active?.classList?.toggle("desactive");
                active?.classList?.remove("previos-activeRe");
                active?.classList?.remove("message-active");
                active = "";
            });

            nextEl.addEventListener("animationend", () => {
                nextEl?.classList?.toggle("message-active");
                nextEl?.classList?.remove("new-activeRe");
                nextEl = "";
            });
        }, 3500);
    })();
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
    header = document.querySelector('.site-burger_menu');
    
    burger.addEventListener("pointerdown", () => {
        header.classList.toggle("menu-opened");
    });
}



