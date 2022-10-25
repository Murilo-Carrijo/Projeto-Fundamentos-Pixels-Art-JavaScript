const colorPalette = document.getElementsByClassName('color');
const pixel = document.getElementsByClassName('pixel');
const clear = document.getElementById('clear-board');
const colors = ['black', 'red', 'blue', 'green'];

function createTitle() {
  const header = document.querySelector('.header-container');
  const title = document.createElement('h1');
  title.innerText = 'Paleta de Cores';
  title.id = 'title';
  header.appendChild(title);
}

function createPaletteColor(arrColors) {
  const colorsContainer = document.getElementById('color-palette');
  for (let index = 0; index < arrColors.length; index += 1) {
    const buttonColor = document.createElement('button');
    buttonColor.type = 'button';
    buttonColor.id = arrColors[index];
    buttonColor.className = 'color';
    colorsContainer.appendChild(buttonColor);
  }
  const firstElement = document.querySelector('.color');
  firstElement.className = 'color selected';
}

function createPixels() {
  const pixelsContainer = document.getElementById('pixel-board');
  for (let index = 0; index < 25; index += 1) {
    const pixell = document.createElement('div');
    pixell.className = 'pixel';
    pixelsContainer.appendChild(pixell);
  }
}

function receiveClick() {
  for (let index = 0; index < colorPalette.length; index += 1) {
    colorPalette[index].addEventListener('click', (event) => {
      for (let i = 0; i < colorPalette.length; i += 1) {
        if (colorPalette[i].classList.contains('selected')) {
          colorPalette[i].classList.toggle('selected');
        }
      }
      event.target.classList.toggle('selected');
    });
  }
}

function selectColor(color) {
  if (colorPalette[0].classList.contains('selected')) {
    color.target.style.backgroundColor = 'rgb(0, 0, 0)';
  } else if (colorPalette[1].classList.contains('selected')) {
    color.target.style.backgroundColor = 'rgb(212, 14, 14)';
  } else if (colorPalette[2].classList.contains('selected')) {
    color.target.style.backgroundColor = 'rgb(0, 110, 255)';
  } else if (colorPalette[3].classList.contains('selected')) {
    color.target.style.backgroundColor = 'rgb(5, 71, 5)';
  }
}

for (let index = 0; index < pixel.length; index += 1) {
  pixel[index].addEventListener('mouseover', selectColor);
}

function clearColorPalette() {
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'rgb(255, 255, 255)';
  }
}

clear.addEventListener('click', clearColorPalette);

window.onload = () => {
  createTitle();
  createPaletteColor(colors);
  createPixels();
  receiveClick();
};
