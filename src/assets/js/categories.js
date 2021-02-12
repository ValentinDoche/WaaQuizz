const categories = {
    0: {
        "title" : "General Knowledge",
        "image" : "assets/img/0GENERALKNOWLEDGE.png",
        "categories_id": 9,
        "best_categories": true
    },
    1 : {
        "title" : "Entertainment : Books",
        "image" : "assets/img/1BOOKS.png",
        "categories_id": 10,
        "best_categories": false
    },
    2: {
        "title" : "Entertainment : Cartoon",
        "image" : "assets/img/2CARTOONS.png",
        "categories_id": 32,
        "best_categories": true
    },
    3: {
        "title" : "Entertainment : Comics",
        "image" : "assets/img/3COMICS.png",
        "categories_id": 29,
        "best_categories": false
    },
    4: {
        "title" : "Entertainment : Film",
        "image" : "assets/img/4FILM.png",
        "categories_id": 11,
        "best_categories": false
    },
    5: {
        "title" : "Entertainment : Japanese Anime & Manga",
        "image" : "assets/img/5JAPANESE&MANGA.png",
        "categories_id": 31,
        "best_categories": false
    },
    6: {
        "title" : "Entertainment : Music",
        "image" : "assets/img/6MUSIC.png",
        "categories_id": 12,
        "best_categories": false
    },
    7: {
        "title" : "Entertainment : Musicals & Theatres",
        "image" : "assets/img/7MUSICAL&THEATRES.png",
        "categories_id": 13,
        "best_categories": false
    },
    8: {
        "title" : "Entertainment : Television",
        "image" : "assets/img/8TELEVISION.png",
        "categories_id": 14,
        "best_categories": false
    },
    9: {
        "title" : "Entertainment : Video Games",
        "image" : "assets/img/9VIDEOGAMES.png",
        "categories_id": 15,
        "best_categories": false
    },
    10: {
        "title" : "Entertainment : Board Games",
        "image" : "assets/img/10BOARDGAMES.png",
        "categories_id": 16,
        "best_categories": true
    },
    11: {
        "title" : "Science & Nature",
        "image" : "assets/img/11SCIENCE&NATURE.png",
        "categories_id": 17,
        "best_categories": false
    },
    12: {
        "title" : "Science: Computers",
        "image" : "assets/img/12SCIENCE_COMPUTERS.png",
        "categories_id": 18,
        "best_categories": false
    },
    13: {
        "title" : "Science: Gadgets",
        "image" : "assets/img/13SCIENCE_GADGETS.png",
        "categories_id": 30,
        "best_categories": false
    },
    14: {
        "title" : "Science: Mathematics",
        "image" : "assets/img/14SCIENCE_MATHEMATICS.png",
        "categories_id": 19,
        "best_categories": false
    },
    15: {
        "title" : "Mythology",
        "image" : "assets/img/15MYTHOLOGY.png",
        "categories_id": 20,
        "best_categories": false
    },
    16: {
        "title" : "Sports",
        "image" : "assets/img/16SPORTS.png",
        "categories_id": 21,
        "best_categories": false
    },
    17: {
        "title" : "Geography",
        "image" : "assets/img/17GEOGRAPHY.png",
        "categories_id": 22,
        "best_categories": false
    },
    18: {
        "title" : "History",
        "image" : "assets/img/18HISTORY.png",
        "categories_id": 23,
        "best_categories": false
    },
    19: {
        "title" : "Politics",
        "image" : "assets/img/19POLITICS.png",
        "categories_id": 24,
        "best_categories": false
    },
    20: {
        "title" : "Art",
        "image" : "assets/img/20ART.png",
        "categories_id": 25,
        "best_categories": false
    },
    21: {
        "title" : "Celebrities",
        "image" : "assets/img/21CELEBRITIES.png",
        "categories_id": 26,
        "best_categories": false
    },
    22: {
        "title" : "Animals",
        "image" : "assets/img/22ANIMALS.png",
        "categories_id": 27,
        "best_categories": false
    },
    23: {
        "title" : "Vehicles",
        "image" : "assets/img/23VEHICLES.png",
        "categories_id": 28,
        "best_categories": false
    }
}

console.log("Coucou")
for (const [key, value] of Object.entries(categories)){
    const elem = $('.card-category').eq(0).clone(true);
    elem.attr("id-category", value.categories_id);
    elem.find('img').attr('src', value.image)
    elem.addClass('game-category')
    $('#all-categories').append(elem)
    if(value.best_categories){
        const elem2 = elem.clone(true)
        $('#best-categories').append(elem)
    }
}

$('.game-category').click(function (e) {
    id = $(this).attr('id-category');
    set_category(id)
})