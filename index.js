// Navigation Toggle
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
    navList.classList.toggle("open");
});

// H1 delay
setTimeout(function() {
    document.getElementById("myHeading").style.display = "block";
    setTimeout(function() {
        document.getElementById("myHeading").style.opacity = "1";
    }, 5000);
}, 18000);

// Video
const video = document.querySelector(".video");
const button = document.querySelector(".video-control");

button.addEventListener("click", playpausevideo);
function playpausevideo() {
    if (video.paused) {
        button.innerHTML = "<i class='bx bx-pause'></i>";
        video.play();
    } else {
        button.innerHTML = "<i class='bx bx-play'></i>";
        video.pause();
    }
}

// Fix Nav
const navigation = document.querySelector(".navigation");
const header = document.querySelector(".header");

window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > 200) {
        navigation.classList.add("fix");
        header.style.zIndex ="1000";
    } else {
        navigation.classList.remove("fix");
    }
});

// Scroll
const links = document.querySelectorAll(".nav-link");

Array.from(links).map((link) => {
  link.addEventListener("click", (e) => {
    // Prevent Default
    e.preventDefault();

    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const navHeight = navigation.getBoundingClientRect().height;
    const fix = navigation.classList.contains("fix");
    let position = element.offsetTop - navHeight;

    // if (!fix) {
    //   position = position - navHeight;
    // }

    window.scrollTo({
      left: 0,
      top: position,
    });
    navList.classList.remove("open");
  });
});


// Scroll Reveal

const scroll = ScrollReveal({
    distance: "100px",
    duration: 2500,
    reset: true,
  });
  
  scroll.reveal(`.sky .content h1, .anniversary .content h1, .anniversary .content .btn`, {
    origin: "top",
    interval: 100,
  });
  
  scroll.reveal(`.hotel .col h1, .hotel .col h2, .hotel .col p, .hotel .col .btn`, {
    origin: "left",
    interval: 150,
  });
  
  scroll.reveal(
    `.hotel .col:last-child, .cuisine .col:last-child`,
    {
      origin: "right",
    }
  );
  
  scroll.reveal(`.flight img,.contact .title`, {
    origin: "top",
  });
  
  scroll.reveal(`.flight .col,.attraction .row`, {
    origin: "bottom",
  });
  
  scroll.reveal(`.attraction .title, .cuisine .col:first-child`, {
    origin: "left",
  });