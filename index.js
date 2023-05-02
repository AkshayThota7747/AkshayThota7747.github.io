function createElement(tagName, className) {
    const result = document.createElement(tagName);
    if (className !== undefined) result.className = className;
    return result;
  }
  
  function createCarousel (header, dataArray) {
  
    let currentIndex = 0;
  
    function updatePhotoIndex (no) {
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
      };
    }
  
    const container = createElement('div', 'container');
  
    const slideshowContainer = createElement('div', 'slideshow-container'),
      h4 = createElement('h4'),
      prev = createElement('a', 'prev'),
      next = createElement('a', 'next');
  
    h4.innerText = header;
    h4.innerText = header;
    prev.innerText = '❮';
    next.innerText = '❯';
  
    prev.addEventListener('click', function () { updatePhotoIndex(--currentIndex); });
    next.addEventListener('click', function () { updatePhotoIndex(++currentIndex); });
  
    const imgArray = dataArray.map(({url, text}, idx) => {
      const mySlides = createElement('div', 'mySlides fade'),
        img = createElement('img', 'pic'),
        textElement = createElement('div', 'text');
  
      img.src = url;
      textElement.innerText = text;
  
      mySlides.append(img, textElement);
  
      if (currentIndex === idx)
        mySlides.classList.add('show-slide');
  
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
  
    slideshowContainer.append(h4, ...imgArray, prev, next);
    dotHolder.append(...dotArray);
    container.append(slideshowContainer, dotHolder);
  
    updatePhotoIndex(currentIndex);
  
    return container;
  }
  
  const lastText = document.getElementById('last-text');
  
  Object.values(jsonData).forEach(item => {
    const data = Object.keys(item).reduce((acc, key) => {
      if (key !== 'header') acc.push(item[key]);
      return acc;
    }, []);
  
  
    document.body.insertBefore(createCarousel(item.header, data), lastText);
  
    // document.body.append()
  });
  
  
  