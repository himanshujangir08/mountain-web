function locoInit() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".locomotive"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy(".locomotive", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".locomotive").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}
locoInit();

// function cursorHover() {
    // let cursor = document.querySelector(".cursor");
    // let loco = document.querySelector(".locomotive");

    // loco.addEventListener("mousemove", (details) => {
    //     cursor.style.left = details.x + 50 + "px"
    //     cursor.style.top = details.y + 50 + "px"

    //     cursor.animate({
    //         left: details.x + "px",
    //         top: details.y + "px",
    //     }, { duration: 500, fill: "forwards" })
    // })
// }
// cursorHover();

// function onTheText() {
    // document.querySelectorAll(".onText")
    //     .forEach((elem) => {
    //         elem.addEventListener("mousemove", () => {
    //             var att = elem.getAttribute("data-text")
    //             cursor.style.width = "100px"
    //             cursor.style.height = "20px"
    //             cursor.style.borderRadius = "20px"
    //             // cursor.style.innerHTML = "Sound On"
    //             cursor.style.backgroundText = `url(${att})`
    //         })
    //         elem.addEventListener("mouseleave", () => {
    //             var att = elem.getAttribute("data-text")
    //             cursor.style.width = "15px"
    //             cursor.style.height = "15px"
    //         })
    //     })
// }
// onTheText();

function cursorHover() {
    const cursor = new MouseFollower({
        container: document.body,
        speed: 0.3,
        el: null,
        skewingText: 5,

    });
}
cursorHover();

function navbar() {
    window.addEventListener('scroll', function () {
        const header = this.document.querySelector('header');
        header.classList.toggle('sticky', this.window.scrollY > 0);
    });

    const menuBtn = document.querySelector('.nav-menu-btn');
    const closeBtn = document.querySelector('.nav-close-btn');
    const navigation = document.querySelector('.navigation');

    menuBtn.addEventListener("click", () => {
        navigation.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
        navigation.classList.remove("active");
    });
}
navbar();

function navbarStyle() {
    var tl1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".home-page",
            scroller: ".locomotive",
            // markers: true,
            scrub: true,
            start: "10%",
            end: "-500%"
        }
    })

    tl1.to(".head", {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        color: "black",
        backdropFilter: "blur(10px)",
        height: "55px",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "2px 2px 7px #000",
    })
}
navbarStyle();

function link1() {
    let linked = document.querySelectorAll(".linkedIn");
    let linkAnime = document.querySelector(".linkAnimated");

    linked.forEach((elem) => {
        elem.addEventListener("mousemove", () => {
            linkAnime.style.opacity = "1"
            linkAnime.style.display = "block"
        })
    })
    linked.forEach((elem) => {
        elem.addEventListener("mouseleave", () => {
            linkAnime.style.opacity = "0"
            linkAnime.style.display = "none"

        })
    })

}
link1();

function link2() {
    let git = document.querySelectorAll(".gitHub");
    let gitAnime = document.querySelector(".gitAnimated");

    git.forEach((elem) => {
        elem.addEventListener("mousemove", () => {
            gitAnime.style.opacity = "1"
            gitAnime.style.display = "block"
        })
    })
    git.forEach((elem) => {
        elem.addEventListener("mouseleave", () => {
            gitAnime.style.opacity = "0"
            gitAnime.style.display = "none"

        })
    })
}

link2();

function link3() {
    let mail = document.querySelectorAll(".mail");
    let mailAnime = document.querySelector(".mailAnimated");

    mail.forEach((elem) => {
        elem.addEventListener("mousemove", () => {
            mailAnime.style.opacity = "1"
            mailAnime.style.display = "block"
        })
    })
    mail.forEach((elem) => {
        elem.addEventListener("mouseleave", () => {
            mailAnime.style.opacity = "0"
            mailAnime.style.display = "none"

        })
    })
}

link3();

function secondPageAnimation() {
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".second-page-text h1",
            scroller: ".locomotive",
            // markers: true,
            start: "top 35%",
            end: "top -30%",
            scrub: 3,
            ease: "power3.inOut"

        }
    })

    tl2.to(".second-page-text h1", {
        x: -200,
    }, "same")
    tl2.to(".second-page-text h2", {
        x: 200,
    }, "same")
    tl2.to(".second-page video", {
        width: "90%",
    }, "same")
}
secondPageAnimation();


function thirdPageBackgroundAnimation() {
    var tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".third-page",
            scroller: ".locomotive",
            // markers: true,
            scrub: 2,
            start: "top 35%",
            end: "top 32%",
            ease: "power3.inOut"
        }
    })
    tl3.to(".locomotive", {
        backgroundColor: "#b7b7a4",
        color: "#333533",
    })

}
thirdPageBackgroundAnimation();


function thirdPageTextAnimation() {
    document.querySelectorAll(".second")
        .forEach((e) => {
            e.addEventListener("mousemove", (details) => {
                gsap.to(e.querySelector("img"), {
                    opacity: 1,
                    scale: 1,
                })

            })
            e.addEventListener("mouseleave", (details) => {
                gsap.to(e.querySelector("img"), {
                    opacity: 0,
                })
            })
        })

    var tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".third-page",
            scroller: ".locomotive",
            // markers: true,
            start: "top 34%",
            end: "top 20%",
            ease: "power3.inOut"
        }
    })

    tl3.from(".elem h1", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: .5,
    })
}
thirdPageTextAnimation()

function fourthPageLineAnimation() {
    var tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: ".fourth-page",
            scroller: ".locomotive",
            // markers: true,
            start: "top 65%",
            end: "top -30%",
            ease: "power3.inOut"
        }
    })
    tl4.to(".line", {
        x: "0%",
        width: "100%",
        duration: 1,
        opacity: 1,
    })
}
fourthPageLineAnimation()



function fourthPageTextAnimation() {
    var tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: ".fourth-page",
            scroller: ".locomotive",
            // markers: true,
            start: "top 58%",
            end: "top 30%",
            ease: "power3.inOut"
        }
    })

    tl4.to(".fourth-Text1 h1,.fourth-Text2 h1", {
        y: 0,
        duration: 1,
        stagger: .5,
    })
}
fourthPageTextAnimation()

function fourthImgColorAnimation() {
    document.querySelectorAll(".fImg2")
        .forEach((fourthImg) => {
            let showingColor;
            fourthImg.addEventListener("mousemove", (details) => {
                showingColor = details.target;
                showingColor.style.filter = "grayscale(1)"
                document.querySelector(".fourth-page").style.backgroundColor = "#" + showingColor.dataset.color
            })
            fourthImg.addEventListener("mouseleave", (details) => {
                showingColor.style.filter = "grayscale(0)"
                document.querySelector(".fourth-page").style.backgroundColor = "#b7b7a4"
            })
        })
}
fourthImgColorAnimation();

function fourthImgColor1Animation() {
    document.querySelectorAll(".fImg1")
        .forEach((fourthImg) => {
            let showingColor;
            fourthImg.addEventListener("mousemove", (details) => {
                showingColor = details.target;
                showingColor.style.filter = "grayscale(1)"
                document.querySelector(".fourth-page").style.backgroundColor = "#" + showingColor.dataset.color
            })
            fourthImg.addEventListener("mouseleave", (details) => {
                showingColor.style.filter = "grayscale(0)"
                document.querySelector(".fourth-page").style.backgroundColor = "#b7b7a4"
            })
        })
}
fourthImgColor1Animation();

function fourthVideo1Animation() {
    var tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: ".fourth-page",
            scroller: ".locomotive",
            // markers: true,
            start: "top 3%",
            end: "top -20%",
            ease: "power3.inOut"
        }
    })

    tl4.from(".fVideo1", {
        x: 300,
        opacity: 0,
        duration: 1.2,
    })
}

fourthVideo1Animation()

function fourthImg1Animation() {
    var tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: ".fourth-page",
            scroller: ".locomotive",
            // markers: true,
            start: "top -4%",
            end: "top -100%",
            ease: "power3.inOut"
        }
    })

    tl4.from(".fImg1", {
        x: 0,
        opacity: 0,
        duration: 1.2,
    })
}
fourthImg1Animation()

function fourthMiddleTextAnimation() {

    var text = "";
    document.querySelector(".vdText h1").textContent.split(" ").forEach((elem) => {
        text += `<span> ${elem} </span>`

        document.querySelector(".vdText h1").innerHTML = text;
    })

    var tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: ".fourth-page",
            scroller: ".locomotive",
            // markers: true,
            start: "top -26%",
            end: "top -60%",
            scrub: 1,
            ease: "power3.inOut"
        }
    })

    tl4.to(".vdText h1 span", {
        color: "#333533",
        stagger: 2,
        duration: 5,
    })
}
fourthMiddleTextAnimation();

function fourthVideo2Animation() {
    var tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: ".fourth-page",
            scroller: ".locomotive",
            // markers: true,
            start: "top -90%",
            end: "top -110%",
            ease: "power3.inOut"
        }
    })

    tl4.from(".fVideo2", {
        y: 200,
        opacity: 0,
        duration: 1.2,
    })
}
fourthVideo2Animation()

function fourthImg2Animation() {
    var tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: ".fourth-page",
            scroller: ".locomotive",
            // markers: true,
            start: "top -120%",
            end: "top -140%",
            ease: "power3.inOut"
        }
    })

    tl4.from(".fImg2", {
        y: 200,
        opacity: 0,
        duration: 1.2,
    })
}
fourthImg2Animation()

function fourthPageLine2Animation() {
    var tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: ".fourth-page",
            scroller: ".locomotive",
            // markers: true,
            start: "top -220%",
            end: "top -250%",
            ease: "power3.inOut"
        }
    })
    tl4.to(".line2", {
        x: "0%",
        width: "100%",
        duration: 1,
        opacity: 1,
    })
}
fourthPageLine2Animation()

function fifthPageBackgroundAnimation() {
    var tl5 = gsap.timeline({
        scrollTrigger: {
            trigger: ".fifth-page",
            scroller: ".locomotive",
            // markers: true,
            scrub: 2,
            start: "top 14.7%",
            end: "top 14.6%",
            ease: "power3.inOut"
        }
    })
    tl5.to(".locomotive", {
        backgroundColor: "#0a0e11",
        color: "#e9e9ed"
    })

}
fifthPageBackgroundAnimation();

function fifthPageTextScrollbar() {
    var tl5 = gsap.timeline({
        scrollTrigger: {
            trigger: ".fifth-page",
            scroller: ".locomotive",
            // markers: true,
            scrub: 2,
            start: "top 14.7%",
            end: "top -250%",
            pin: true,
            ease: "power3.inOut",
            delay: 1,
        }
    })
    tl5.to(".pin-content", {
        transform: "translateX(-100%)",
    })

}
fifthPageTextScrollbar()

function fifthPageLineAnimation() {
    var tl5 = gsap.timeline({
        scrollTrigger: {
            trigger: ".fifth-page",
            scroller: ".locomotive",
            // markers: true,
            scrub: 3,
            start: "top 14.7%",
            end: "top -220%",
            ease: "power3.inOut"
        }
    })
    tl5.to(".pinLine", {
        x: "0%",
        width: "160%",
        duration: 10,
        opacity: 1,
    })
}
fifthPageLineAnimation()


function fifthPageTextLineAnimation() {
    var tl5 = gsap.timeline({
        scrollTrigger: {
            trigger: ".fifth-page",
            scroller: ".locomotive",
            // markers: true,
            // scrub: 3,
            start: "top 14.7%",
            end: "top -220%",
            // ease: "power3.inOut"
        }
    })
    tl5.from(".fifth-page h1", {
        x: -300,
        opacity: 0,
        duration: 1.2,
    }, "h")

    // tl5.from(".pin-text h2", {
    //     x: 300,
    //     opacity: 0,
    //     duration: 1.2,
    // }, "h")

    // tl5.from(".pin-text p", {
    //     y: 300,
    //     opacity: 0,
    //     duration: 1.2,
    // }, "h")
}
fifthPageTextLineAnimation()

function sixthLineAnimation() {
    var tl6 = gsap.timeline({
        scrollTrigger: {
            trigger: ".sixth-page",
            scroller: ".locomotive",
            // markers: true,
            start: "top 50%",
            end: "top -20%",
            ease: "power3.inOut"
        }
    })
    tl6.to(".sixth-line", {
        x: "0%",
        width: "100%",
        duration: 1,
        opacity: 1,
    }, "a")
    tl6.from(".sixth-text img", {
        x: "100%",
        duration: 1.2,
        // stagger: 1,
        opacity: 0,
    }, "a")
    tl6.from(".sixth-text h1", {
        x: "-100%",
        duration: 1.2,
        // stagger: 1,
        opacity: 0,
    }, "a")
    tl6.from(".sixth-text p", {
        x: "-100%",
        duration: 1.2,
        // stagger: 1,
        opacity: 0,
    }, "a")
}

sixthLineAnimation();

function sixthPageAnimation() {
    var tl6 = gsap.timeline({
        scrollTrigger: {
            trigger: ".sixth-page",
            scroller: ".locomotive",
            // markers: true,
            scrub: 2,
            pin: true,
            start: "top 0%",
            end: "top -200%",
            ease: "power3.inOut"
        }
    })
    //! first step 
    tl6.to(".sixth-text", {
        transform: "translateY(-95%)",
        opacity: .3,
    }, "a")
    tl6.to("#card-one", {
        transform: "translateY(-220%)",
        left: "10%",
    }, "a")
    tl6.to("#card-two", {
        transform: "translateY(-190%)",
        left: "10%",
    }, "a")

    //! second step

    tl6.to("#card-one", {
        transform: "translateY(-218.5%)",
        left: "15%",
        width: "70%",
        height: "60vh"
    }, "b")
    tl6.to("#card-two", {
        transform: "translateY(-299.4%)",
        left: "10%",
    }, "b")
    tl6.to("#card-three", {
        transform: "translateY(-297%)",
        left: "10%",
    }, "b")

    //! third step 

    tl6.to("#card-two", {
        transform: "translateY(-299%)",
        left: "15%",
        width: "70%",
        height: "60vh"
    }, "c")

    tl6.to("#card-three", {
        transform: "translateY(-400%)",
        left: "10.01%",
    }, "c")

    tl6.to("#card-four", {
        transform: "translateY(-404%)",
        left: "10%",
    }, "c")

    //! fourth step 

    tl6.to("#card-three", {
        transform: "translateY(-400%)",
        left: "15%",
        width: "70%",
        height: "60vh"
    }, "d")

    tl6.to("#card-four", {
        transform: "translateY(-500%)",
        left: "10.01%",
    }, "d")

    tl6.to("#card-five", {
        transform: "translateY(-506%)",
        left: "10%",
    }, "d")

    //! five step

    tl6.to("#card-four", {
        transform: "translateY(-500%)",
        left: "15%",
        width: "70%",
        height: "60vh"
    }, "e")

    tl6.to("#card-five", {
        transform: "translateY(-602%)",
        left: "10.01%",
    }, "e")

}

sixthPageAnimation();


function seventhLineAnimation() {
    var tl7 = gsap.timeline({
        scrollTrigger: {
            trigger: ".seventh-page",
            scroller: ".locomotive",
            // markers: true,
            start: "top 80%%",
            end: "bottom 30%",
        }
    })

    tl7.to(".sevenLine", {
        x: "0%",
        width: "100%",
        duration: 1,
        opacity: 1,
    })
}

seventhLineAnimation();

function seventhPageTextAnimation() {
    var tl7 = gsap.timeline({
        scrollTrigger: {
            trigger: ".seventh-page",
            scroller: ".locomotive",
            // markers: true,
            start: "top 58%",
            end: "top 30%",
            ease: "power3.inOut"
        }
    })

    tl7.to(".seventh-Text1 h1,.seventh-Text2 h1", {
        y: 0,
        duration: 1,
        stagger: .5,
        opacity: 1,
    })
}
seventhPageTextAnimation()

function seventhPageBackgroundAnimation() {
    var tl7 = gsap.timeline({
        scrollTrigger: {
            trigger: ".seventh-page",
            scroller: ".locomotive",
            // markers: true,
            scrub: 2,
            start: "top 1%",
            end: "top 0%",
            ease: "power3.inOut"
        }
    })
    tl7.to(".locomotive", {
        // backgroundColor: "#84a98c",
        color: "#333533",
    })

}
seventhPageBackgroundAnimation();

function seventhBgImgAnimation() {
    var tl7 = gsap.timeline({
        scrollTrigger: {
            trigger: ".seventh-page",
            scroller: ".locomotive",
            // markers: true,
            // scrub: 2,
            start: "top 10%",
            end: "top 0%",
            ease: "power3.inOut"
        }
    })
    tl7.to(".fbg, .fm3, .footer-btn, .fm4, .fm5, .fm6, .fm7", {
        opacity: 1,
        stagger: .2,
        duration: .2,
        // scale: .8,
    })

}
seventhBgImgAnimation();

function seventhBgmAnimation() {
    var tl7 = gsap.timeline({
        scrollTrigger: {
            trigger: ".seventh-page",
            scroller: ".locomotive",
            // markers: true,
            // scrub: 2,
            start: "top 1%",
            end: "top 0%",
            ease: "power3.inOut"
        }
    })
    tl7.from(".fm1", {
        y: 300,
        duration: 1.5,
        opacity: 0,
        delay: 2,
    }, "a")
    tl7.from(".fm2", {
        y: 300,
        duration: 1.5,
        opacity: 0,
        delay: 2,
    }, "a")
    tl7.from(".footerContent", {
        y: 300,
        duration: 1.5,
        opacity: 0,
    })

}
seventhBgmAnimation();