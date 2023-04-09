var menuItems = [
  {
    title: "SWEET CREPES & BELGIAN WAFFLES",
    content:
      "Of course, Muncheez would not be complete with mouth-watering sweet crepes & waffles! Enjoy fresh fruits mixed with Nutella or caramel sauce, perhaps walnuts or roasted peanuts? Let’s take it up a notch and add ICE CREAM or a slice of New York style CHEESECAKE ",
    imgageUrl:
      "https://muncheez.ca/wp-content/uploads/2022/11/CHCOCO-LOCO-FRAME-7-1484x1920.jpg",
  },
  {
    title: "ICE CREAM & CAKES",
    content:
      "At Muncheez we bring you some of the best quality ice cream and cakes Toronto has to offer.  If you doubt all you have to do is take a bite for yourself and discover.",
    imgageUrl:
      "https://muncheez.ca/wp-content/uploads/2022/11/Al-pacino-Frame-10-1484x1920.jpg",
  },
  {
    title: "FRESH JUICES & SMOOTHIES",
    content:
      "Muncheez juices and smoothies are made with 100% natural ingredients (No added sugar, dairy or flavours). Our tropical combinations are unique and delicious using imported Sugarcanes from Costa Rica and Acai Berry from Brazil. Try our recommendations from the menu or get creative and mix your own with the toppings available.",
    imgageUrl: "https://muncheez.ca/wp-content/uploads/2022/05/cane-3.jpeg",
  },
  {
    title: "HOMEMADE SOUPS & SALADS",
    content:
      "Let’s not forget about our signature soups & salads. Always using the freshest local ingredients, we take full pride in our recipes.",
    imgageUrl: "https://muncheez.ca/wp-content/uploads/2022/05/SOUP-1-pdf.jpg",
  },
  {
    title: "HOT DRINKS",
    content:
      "Whether you want to get a morning boost or wash down your dessert, we have for you a wide selection of organic teas, Hot Chocolate and Ethiopian Coffee.",
    imgageUrl:
      "https://muncheez.ca/wp-content/uploads/2022/11/Hot-drinks-Frame-11-1484x1920.jpg",
  },
];

for (let item of menuItems) {
  document.querySelector(
    ".menuItems"
  ).innerHTML += `<article class="menuItem group">
  <div
    class="image right"
    style="
      background-image: url('${item.imgageUrl}');
    "
  ></div>
  <div style="flex: 1;"></div>
  <section class="menuItemContent">
    <h3 class="headline">${item.title}</h3>
    <p>
      ${item.content}
    </p>
  
    <a
      href="https://muncheez.ca/wp-content/uploads/2022/12/MUNCHEEZ-SAVOURY-FAVOURITES-copy.pdf"
      class="button"
      ><span>See Our Menu</span></a
    >
  </section>
  <div style="flex: 1;"></div>
  </article>`;
}

var opinionItems = [
  {
    opinion:
      "“Best crepes I’ve had in the GTA! We got savoury ones during our visit and I’m so sad I didn’t take a picture of it to show you how stuffed it was with ingredients. Very filling and very satisfying. Will visit again and hopefully try one of their dessert crepes and their all day breakfast crepes. Also the staff is extremely friendly!”",
    author: "Sangeeta A.",
    city: "Toronto",
  },
  {
    opinion:
      "“These guys have everything that I would expect from a 5-star rating. Fun, flavorful, fancy menu items at a very reasonable price and a LOT of healthy options. The service is quick, and the customer service is top notch. There is also plenty of parking available, and also there is decent seating area inside and outside. I cant imagine why anyone would go for a typical “fast food” alternative.”",
    author: "Mehrad M.",
    city: "Toronto",
  },
  {
    opinion:
      "“I love this place, both for savoury and sweet crepes. It definitely is worth all the hype. We tried the ‘Mother nature’ crepe and it was delicious! We also had the banana and Nutella crepe with some peanuts and giiiiirl, was it good! Can you go wrong with Nutella though? The veggies were so fresh, and the savoury crepes were perfect! Yum. For the sweet crepe, they cut up fresh bananas And you get to see it all being made!”",
    author: "Rupa S.",
    city: "Mississauga",
  },
  {
    opinion:
      "“Delicious crepes! Fresh ingredients, beautiful presentation, and friendly staff! It was my first time having a crepe for lunch and I absolutely loved it! Definitely recommend, Enjoy!”",
    author: "Sam K.",
    city: "Newmarket",
  },
  {
    opinion:
      "“My brother recommended to try this place out and I’m so happy he did! Honestly amazing, the food is just simply amazing. I tried the Mama Mia, but I’ll be sure to check out the sweet treats they have next time I go! ”",
    author: "Valentina M.",
    city: "Miami",
  },
  {
    opinion:
      "“HOLY CREPE BATMAN! As of this update, I’m proud to say I’ve tried the whole menu (including the dessert and breakfast crepes) and I’ve even tried the make-your-own crepe. Best crepes in the city still and that’s facts. Raz, Raman and Maria are some of the nicest owners around. Their staff are also super friendly (the lady with the hairnet always stuffs my crepes nice and plump with fillings)!”",
    author: "Jason M.",
    city: "Richmond Hill",
  },
  {
    opinion:
      "“Best crepes I’ve had in the GTA! We got savoury ones during our visit and I’m so sad I didn’t take a picture of it to show you how stuffed it was with ingredients. Very filling and very satisfying. Will visit again and hopefully try one of their dessert crepes and their all day breakfast crepes. Also the staff is extremely friendly!”",
    author: "Sangeeta A.",
    city: "Toronto",
  },
  {
    opinion:
      "“These guys have everything that I would expect from a 5-star rating. Fun, flavorful, fancy menu items at a very reasonable price and a LOT of healthy options. The service is quick, and the customer service is top notch. There is also plenty of parking available, and also there is decent seating area inside and outside. I cant imagine why anyone would go for a typical “fast food” alternative.”",
    author: "Mehrad M.",
    city: "Toronto",
  },
  {
    opinion:
      "“I love this place, both for savoury and sweet crepes. It definitely is worth all the hype. We tried the ‘Mother nature’ crepe and it was delicious! We also had the banana and Nutella crepe with some peanuts and giiiiirl, was it good! Can you go wrong with Nutella though? The veggies were so fresh, and the savoury crepes were perfect! Yum. For the sweet crepe, they cut up fresh bananas And you get to see it all being made!”",
    author: "Rupa S.",
    city: "Mississauga",
  },
  {
    opinion:
      "“Delicious crepes! Fresh ingredients, beautiful presentation, and friendly staff! It was my first time having a crepe for lunch and I absolutely loved it! Definitely recommend, Enjoy!”",
    author: "Sam K.",
    city: "Newmarket",
  },
  {
    opinion:
      "“My brother recommended to try this place out and I’m so happy he did! Honestly amazing, the food is just simply amazing. I tried the Mama Mia, but I’ll be sure to check out the sweet treats they have next time I go! ”",
    author: "Valentina M.",
    city: "Miami",
  },
  {
    opinion:
      "“HOLY CREPE BATMAN! As of this update, I’m proud to say I’ve tried the whole menu (including the dessert and breakfast crepes) and I’ve even tried the make-your-own crepe. Best crepes in the city still and that’s facts. Raz, Raman and Maria are some of the nicest owners around. Their staff are also super friendly (the lady with the hairnet always stuffs my crepes nice and plump with fillings)!”",
    author: "Jason M.",
    city: "Richmond Hill",
  },
];

for (let item of opinionItems) {
  document.querySelector(
    ".slider-container"
  ).innerHTML += `<div class="slide">
    <div class="opinion">
      <p>
        ${item.opinion}
      </p>
      <span>
        <b>${item.author}</b> - ${item.city}
      </span>
    </div>
  </div>`
}

// Imported code for the slider, from https://codepen.io/bushblade/pen/ZEpvzbK

// get our elements
const slider = document.querySelector(".slider-container"),
  slides = Array.from(document.querySelectorAll(".slide"));

// set up our state
let isDragging = false,
  startPos = 0,
  currentTranslate = 0,
  prevTranslate = 0,
  animationID,
  currentIndex = 0;

// add our event listeners
slides.forEach((slide, index) => {
  const slideImage = slide.querySelector(".opinion");
  // disable default image drag
  slideImage.addEventListener("dragstart", (e) => e.preventDefault());
  // pointer events
  slide.addEventListener("pointerdown", pointerDown(index));
  slide.addEventListener("pointerup", pointerUp);
  slide.addEventListener("pointerleave", pointerUp);
  slide.addEventListener("pointermove", pointerMove);
});

// make responsive to viewport changes
window.addEventListener("resize", setPositionByIndex);

// prevent menu popup on long press
window.oncontextmenu = function (event) {
  event.preventDefault();
  event.stopPropagation();
  return false;
};

// use a HOF so we have index in a closure
function pointerDown(index) {
  return function (event) {
    currentIndex = index;
    startPos = event.clientX;
    isDragging = true;
    animationID = requestAnimationFrame(animation);
    slider.classList.add("grabbing");
  };
}

function pointerMove(event) {
  if (isDragging) {
    const currentPosition = event.clientX;
    currentTranslate = prevTranslate + currentPosition - startPos;
  }
}

function pointerUp() {
  cancelAnimationFrame(animationID);
  isDragging = false;
  const movedBy = currentTranslate - prevTranslate;

  // if moved enough negative then snap to next slide if there is one
  if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1;

  // if moved enough positive then snap to previous slide if there is one
  if (movedBy > 100 && currentIndex > 0) currentIndex -= 1;

  setPositionByIndex();

  slider.classList.remove("grabbing");
}

function animation() {
  setSliderPosition();
  if (isDragging) requestAnimationFrame(animation);
}

function setPositionByIndex() {
  currentTranslate = currentIndex * -window.innerWidth;
  prevTranslate = currentTranslate;
  setSliderPosition();
}

function setSliderPosition() {
  slider.style.transform = `translateX(${currentTranslate}px)`;
}
