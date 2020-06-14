showResults = function (results) {

  let html = "";
  results.map(function (result) {
    console.log(result.images.original.url);
    html = html + `<img class='imgresults' src=${result.images.original.url} />`
  });
  console.log(html);
  $('#results').html("")
  $('#results').append(html);

};

const fetchSearchResults = function (searchValue) {
  let url = `https://api.giphy.com/v1/gifs/search?api_key=KA4bCwoX66gmvt7ogoGShUai2L59BFaQ&q=${searchValue}`;
  console.log(url);
  fetch(url)
    .then(function (res) {
      return res.json();
    }).then(function (response) {
      // console.log(response.data);
      showResults(response.data);
    });

}

const bootUp = function () {

  $('#search').on('click', function (event) {
    let searchValue = $('#search-box').val();
    console.log(searchValue);
    fetchSearchResults(searchValue);

  });


}

$(bootUp)

