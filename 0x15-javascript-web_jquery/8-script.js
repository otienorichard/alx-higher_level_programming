$.get('https://swapi-api.hbtn.io/api/films/?format=json', (data) => {
    let films = data.results;
    films.forEach(film => {
        $('<li>' + film.title + '</li>').appendTo('#list_movies');
    });
});