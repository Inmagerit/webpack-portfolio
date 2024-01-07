import './main.scss'

import $ from 'jquery';

$.ajax({
  url: 'https://jsonplaceholder.typicode.com/posts',   method: 'GET',
  dataType: 'json',
  success: function(response) {
    // Clear previous content in the restApi div
    $('#restApi').empty();

    // Create a row wrapper for cards
    var row = $('<div class="row"></div>');

    // Loop through each JSON object and create Bootstrap cards
    $.each(response, function(index, post) {
      var cardHtml = `
        <div class="col-lg-3 col-md-6 col-sm-12 mb-3">
          <div class="card apiCard">
            <div class="card-body">
              <h5 class="card-title">${post.title}</h5>
              <p class="card-text">${post.body}</p>
            </div>
          </div>
        </div>
      `;
      // Append each card to the row
      row.append(cardHtml);

      // Add the row to the restApi div for every 4 cards
      if ((index + 1) % 4 === 0 || index === response.length - 1) {
        $('#restApi').append(row);
        row = $('<div class="row"></div>'); // Create a new row for the next set of cards
      }
    });
  },
  error: function(xhr, status, error) {
    // Handle errors
    console.error('Error fetching data', error);
  }
})
