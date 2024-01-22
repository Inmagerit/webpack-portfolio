import './main.scss';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';

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
const fetchAndShowData = () => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/comments'; 
    const itemsPerPage = 10;
    let currentPage = 1;

    const displayItems = (items) => {
        const resultDiv = $('#resultDiv');
        resultDiv.empty(); // Clear previous content
    
        // Assuming you want to show only the first 10 items
        const itemsToShow = items.slice(0, 10);
    
        let count = 0;
        while (count < itemsToShow.length) {
            const currentItem = itemsToShow[count];
            
            // Assuming `name`, `email`, and `body` are attributes in each item
            const itemElement = $('<div>').html(`
                <p><strong>Name:</strong> ${currentItem.name}</p>
                <p><strong>Email:</strong> ${currentItem.email}</p>
                <p><strong>Comment:</strong> ${currentItem.body}</p>
            `);
    
            resultDiv.append(itemElement);
            count++;
        }
    };
    

    const fetchData = async () => {
        try {
            const response = await $.ajax({
                url: `${apiUrl}?_page=${currentPage}&_limit=${itemsPerPage}`, // Use _page and _limit for JSONPlaceholder
                method: 'GET',
                dataType: 'json',
            });
    
            displayItems(response);
    
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const loadMore = () => {
        currentPage++;
        fetchData();
    };
    const loadPrevious = () => {
        if (currentPage > 1) {
            currentPage--;
            fetchData();
        }
    };

    $('#cargarMas').on('click', loadMore);
    $('#cargarMenos').on('click', loadPrevious);

    fetchData();
};

fetchAndShowData();
hideTitles();
changeContent();
