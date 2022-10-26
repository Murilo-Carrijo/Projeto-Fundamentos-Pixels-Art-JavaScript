const colors = ['black', 'red', 'blue', 'green'];
const pixelBoardId = 'pixel-board';
let pixelSize = 5;

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

function defineSizeOfPixelBoard(pixels) {
  const tamanhoBoard = 40 * pixels;
  const pixelsContainer = document.getElementById(pixelBoardId);
  pixelsContainer.style.width = `${tamanhoBoard}px`;
  pixelsContainer.style.height = `${tamanhoBoard}px`;
}

function createPixels(area) {
  const pixelsContainer = document.getElementById(pixelBoardId);
  defineSizeOfPixelBoard(area)
  const qtdPixel = area ** 2;
  console.log(qtdPixel);
  for (let index = 0; index < qtdPixel; index += 1) {
    const pixel = document.createElement('div');
    pixel.style.backgroundColor = 'white';
    pixel.className = 'pixel';
    pixelsContainer.appendChild(pixel);
  }
}

function createInputEButton() {
  const inputContainer = document.getElementById('input-container');
  const input = document.createElement('input');
  input.placeholder = 'Digite o tamanho os pixels';
  input.id = 'board-size';
  input.type = 'number';
  input.min = '1';
  const button = document.createElement('button');
  button.innerText = 'VQV';
  button.id = 'generate-board';
  inputContainer.appendChild(input);
  inputContainer.appendChild(button);
}

function setSelected(event) {
  const colorPalette = document.getElementsByClassName('color');
  for (let i = 0; i < colorPalette.length; i += 1) {
    if (colorPalette[i].classList.contains('selected')) {
      colorPalette[i].classList.toggle('selected');
    }
  }
  event.target.classList.toggle('selected');
}

function receiveClick() {
  const colorPalette = document.getElementsByClassName('color');
  for (let index = 0; index < colorPalette.length; index += 1) {
    colorPalette[index].addEventListener('click', setSelected);
  }
}

function setColor(color) {
  const colorPalette = document.getElementsByClassName('color');
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

function selectColor() {
  const pixel = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].addEventListener('click', setColor);
  }
}

function clearColorPalette() {
  const clear = document.getElementById('clear-board');
  const pixel = document.getElementsByClassName('pixel');
  clear.addEventListener('click', () => {
    for (let index = 0; index < pixel.length; index += 1) {
      pixel[index].style.backgroundColor = 'rgb(255, 255, 255)';
    }
  });
}

function newBoard() {
  let boardChild = document.getElementById(pixelBoardId).lastElementChild;
  while (boardChild) {
    document.getElementById(pixelBoardId).removeChild(boardChild);
    boardChild = document.getElementById(pixelBoardId).lastElementChild;
  }
  createPixels(pixelSize);
  selectColor();
  selectColor();
}

function emptInputValue() {
  const input = document.getElementById('board-size');
  if (input.value === '') {
    window.alert('Board inválido!');
  }
  return input.value;
}

function checkInputValue() {
  const inputValue = emptInputValue();
  if (inputValue < 5) {
    pixelSize = 5;
  } else if (inputValue > 50) {
    pixelSize = 50;
  } else {
    pixelSize = inputValue;
  }
}

function setNewBoard() {
  const button = document.getElementById('generate-board');
  button.addEventListener('click', () => {
    checkInputValue();
    newBoard();
  });
}

window.onload = () => {
  createTitle();
  createPaletteColor(colors);
  createPixels(pixelSize);
  receiveClick();
  selectColor();
  clearColorPalette();
  createInputEButton();
  setNewBoard();
};
