import './main.scss';
import $ from 'jquery';

const hideTitles = () => {
    const botonPrimero = $('#botonUno');

    botonPrimero.on('click', () => {
        if ($('.title').is(':hidden')) {
            $('.title').show();
        } else {
            $('.title').hide();
        }
    });
}

const changeContent = () => {
    const contentSelector = $('#contentSelector');
    const userInput = $('#userInput');

    $('#botonDos').on('click', () => {
        const selectedValue = contentSelector.val();
        const textContent = userInput.val();

        switch (selectedValue) {
            case 'title1':
                $('#title1').text(textContent);
                break;

            case 'title2':
                $('#title2').text(textContent);
                break;

            case 'paragraph1':
                $('#content1').text(textContent);
                break;

            case 'paragraph2':
                $('#content2').text(textContent);
                break;

        }
    });
}



hideTitles();
changeContent();
