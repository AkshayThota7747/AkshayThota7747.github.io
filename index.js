window.appVersion = "1"

// Calendar section
const months = [
  'జనవరి', 'ఫిబ్రవరి', 'మార్చి', 'ఏప్రిల్', 'మే', 'జూన్', 'జులై',
  'ఆగస్ట్', 'సెప్టెంబర్', 'అక్టోబర్', 'నవంబర్', 'డిసెంబర్'
];
const days = [
  'ఆదివారం', 'సోమవారం', 'మంగళవారం', 'బుధవారం', 'గురువారం', 'శుక్రవారం', 'శనివారం'
];
const dateObj = new Date();
// document.getElementById("calendar").textContent = `🏆🏆🏆 ${months[dateObj.getMonth()]} ${dateObj.getDate()} ${days[dateObj.getDay()]} గెలిచే రంగులు🏆🏆🏆`;
document.getElementById("calendar").textContent = `🏆🏆🏆 జులై 09 ఆదివారం గెలిచే రంగులు🏆🏆🏆`;
document.getElementById("paksham").textContent = `🌚  కృష్ణపక్షం  🌚`;
// document.getElementById("paksham").textContent = `🌚  శుక్ల పక్షం  🌚`;

// sukla - light , krishna - dark
// sukla - 🌝
// krishna - 🌚
// amavasya - 🌑

function createElement(tagName, className) {
  const result = document.createElement(tagName);
  if (className !== undefined) result.className = className;
  return result;
}

function createCarousel(header, dataArray, winLakshana, losingLakshana, idx) {
  let currentIndex = 0;

  function updatePhotoIndex(no) {
    if (no === 0) {
      prev.style.display = 'none';
    } else if (no === dataArray.length - 1) {
      next.style.display = 'none';
    } else {
      prev.style.display = next.style.display = 'block';
    }

    for (let idx = 0; idx < dataArray.length; idx++) {
      if (no === idx) {
        imgArray[idx].classList.add('show-slide');
        dotArray[idx].classList.add('active');
      } else {
        imgArray[idx].classList.remove('show-slide');
        dotArray[idx].classList.remove('active');
      }
    }
  }

  const container = createElement('div', 'container');

  const slideshowContainer = createElement('div', 'slideshow-container'),
    h4 = createElement('h4'),
    prev = createElement('a', 'prev'),
    next = createElement('a', 'next');

  h4.innerText = header;
  prev.innerHTML = '<img src="/assets/previous.png" style="width: 32px; height: 32px;">';
  next.innerHTML = '<img src="/assets/next.png" style="width: 32px; height: 32px;">';

  prev.addEventListener('click', function () { updatePhotoIndex(--currentIndex); });
  next.addEventListener('click', function () { updatePhotoIndex(++currentIndex); });

  const imgArray = dataArray.map(({ url, text }, idx) => {
    const mySlides = createElement('div', 'mySlides fade'),
      img = createElement('img', 'pic'),
      textElement = createElement('div', 'text'),
      winLakshanaText = createElement('div', 'winLakshana'),
      losingLakshanaText = createElement('div', 'losingLakshana');

    img.src = url;
    textElement.innerText = text;
    winLakshanaText.innerText = winLakshana;
    losingLakshanaText.innerText = losingLakshana;

    mySlides.append(img, textElement, winLakshanaText, losingLakshanaText);

    if (currentIndex === idx) {
      mySlides.classList.add('show-slide');
    }

    return mySlides;
  });

  const dotHolder = createElement('div', 'dot-holder'),
    dotArray = dataArray.map((_, idx) => {
      const dot = createElement('span', 'dot');
      dot.addEventListener('click', function () {
        currentIndex = idx;
        updatePhotoIndex(currentIndex);
      });

      return dot;
    });

  const numberRound = createElement('div', 'number');
  numberRound.innerText = idx;

  slideshowContainer.append(h4, ...imgArray, prev, next);
  dotHolder.append(...dotArray);
  container.append(slideshowContainer, dotHolder, numberRound);

  updatePhotoIndex(currentIndex);

  // Swipe gesture handling
  let touchStartX = 0;
  let touchEndX = 0;

  container.addEventListener('touchstart', function (event) {
    touchStartX = event.changedTouches[0].screenX;
  });

  container.addEventListener('touchend', function (event) {
    touchEndX = event.changedTouches[0].screenX;
    handleSwipe();
  });

  container.addEventListener('mousedown', function (event) {
    touchStartX = event.screenX;
  });

  container.addEventListener('mouseup', function (event) {
    touchEndX = event.screenX;
    handleSwipe();
  });

  function handleSwipe() {
    const swipeThreshold = 100; // Minimum distance required for a swipe

    const swipeDistance = touchEndX - touchStartX;
    if (swipeDistance > swipeThreshold && currentIndex > 0) {
      updatePhotoIndex(--currentIndex); // Swipe left
    } else if (swipeDistance < -swipeThreshold && currentIndex < dataArray.length - 1) {
      updatePhotoIndex(++currentIndex); // Swipe right
    }
  }

  return container;
}

const lastText = document.getElementById('last-text');

Object.values(jsonData).forEach((item, idx) => {
  const data = Object.keys(item).reduce((acc, key) => {
    if (key !== 'header' && key !== 'winLakshana' && key !== 'losingLakshana') acc.push(item[key]);
    return acc;
  }, []);

  document.body.insertBefore(createCarousel(item.header, data, item.winLakshana, item.losingLakshana, idx + 1), lastText);
});
