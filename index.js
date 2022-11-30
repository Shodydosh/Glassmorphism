let slideIndex = 1;
autoSlidin();

// Get the button:
let mybutton = document.getElementById("btt-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 600 ||
    document.documentElement.scrollTop > 600
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// $(document).ready(function () {
//   if (!$.browser.webkit) {
//     $(".wrapper").html("<p>Sorry! Non webkit users. :(</p>");
//   }
// });

//! SLIDER

showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  //   setTimeout(autoSlidin(slideIndex + 1), 4000);
}

function autoSlidin() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";

  let dots = document.getElementsByClassName("dot");

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(autoSlidin, 4000); // Change image every 2 seconds
}

//! Random img render

const imgContainer = document.getElementById("img-container");
render();

function render() {
  let content = "";

  for (let i = 0; i < 40; i++) {
    content += `
    <div class="grid-item" data-tilt data-tilt-glare data-tilt-max-glare="0.3" data-tilt-reverse="true" href="" >
        <a href=""></a>
        <figure class="grid-img">
            <div>
                <img class="item-img" src="https://picsum.photos/1080/1080?random=3${i}" alt="" loading="lazy">
            </div>
        </figure>
        <section>
            <div class="grid-wrapper">
                <div class="grid-title">Picture ${i + 1}</div>
                <div class="grid-date">Shodydosh</div>
            </div>
        </section>
    </div>
    `;
  }

  imgContainer.innerHTML = content;
}

document.getElementById("rerender-btn").addEventListener("click", render);

document.getElementById("rerender-btn").addEventListener("click", () => {
  console.log("clicked!");
});
