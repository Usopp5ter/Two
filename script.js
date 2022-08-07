

let numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?', ' ');

let personalMovieDB = {
    count: numberOfFilms,
    movies:  { },
    actors: { } ,
    genres: [ ] ,
    privat: false
};
let i = 0;
do  {  
   
    const a = prompt ('Один из последних просмотренных фильмов?'),
         b = prompt ('На сколько оцените его?');
         i++;   
    personalMovieDB.movies[a] = b;

    if (a != null && b != null && a != ' ' && b != ' ' && a.length < 50) {
        personalMovieDB.movies[a] = b;
    console.log('done');
} else {
    console.log('Error');
    i--;
}
}
while (i < 2);
if (personalMovieDB.count < 10) {
alert ("Просмотрено мало фильмов");
} else if (personalMovieDB.count < 30 ) {

alert ("Вы классический зритель");
} else if (personalMovieDB.count > 30 ) {
    alert ("Вы киноман");
} else {
    alert ("Произошла ошибка");
}
