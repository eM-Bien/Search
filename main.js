const input = document.querySelector('.search-header__input');
const list = document.querySelectorAll('li');

const checkInputValue = e => {
    const inputText = e.target.value.toLowerCase();
    
    list.forEach(el => {
        if (el.textContent.toLowerCase().indexOf(inputText) !== -1) {
            el.style.display = 'block'
        } else {
            el.style.display = 'none'
        }
    })
}

input.addEventListener('keyup', checkInputValue)