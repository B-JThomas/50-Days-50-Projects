const searchButton = document.querySelector('.btn');
const container = document.getElementById('container');

const toggleSearchMenu = () => {
    if(container.classList.contains('disabled')){
        container.classList.remove('disabled')
    }else {
        container.classList.add('disabled')
    }
}

searchButton.onclick = toggleSearchMenu;
