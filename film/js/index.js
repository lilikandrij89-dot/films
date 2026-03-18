const filmData = {
    "youtube": {
        "name": "YuoTube",
        "image": "https://yt3.googleusercontent.com/sT8F3gr_Km9eFJuJmeAwI4WYgWoyvub_xqWsJzPaAdPf2j7CkL-UWKPhBdsEgPbT4h29TYxErPU=s900-c-k-c0x00ffffff-no-rj"
    },
    "netflix": { 
        "name": "Natflix",
        "image": "https://yt3.googleusercontent.com/3b73AYEMMfa3SX5KJMeygio9smTPvrPrpicuQZbfQ_2DN7dV_ApiRM4CdYjSprEy1YYvt_9b=s900-c-k-c0x00ffffff-no-rj"
    },
    "twitch": {
        "name": "Twitch",
        "image": "https://m.media-amazon.com/images/I/21kRx-CJsUL.png"
    }
};

let favFilmArr = []
if(localStorage.getItem("favFilms") != undefined){
    favFilmArr = localStorage.getItem("favFilms").split(",");
    showFavs();
    }


Object.entries(filmData).forEach((el) => {
    let div = document.createElement('div');
    div.classList.add('film')
    div.innerHTML = `<img src="${el[1].image}">
    <h2>${el[1].name}</h2>
    <button class="btn btn-outline-danger" id="${el[0]}">В избранное</button>`
    document.querySelector('main.films').appendChild(div);
});
const filmsBtn = document.querySelectorAll (".film button")
filmsBtn.forEach((btn)=> {
btn.addEventListener("click", (e) => {
    if(!favFilmArr.includes(e.target.id)){
        favFilmArr.push(e.target.id);
        e.target.classList.toggle('active');
        e.target.textContent = 'Добавлено'
        showFavs();
    }
    
})
});


function showFavs(){
let favFilm = document.querySelector(".fav-films");
favFilm.innerHTML = "";
if(favFilmArr.length == 0)
    return;

let ul = document.createElement('ul');
favFilm.appendChild(ul);

favFilmArr.forEach((el) => {
let item = `<li><img id="${el}" src="${filmData[el].image}"><span>${filmData[el].name}</span></li>`;
let li = document.createElement('li')
li.innerHTML = item;
document.querySelector(".fav-films ul").appendChild(li)
});


localStorage.setItem("favFilms", favFilmArr.join());


 const favFilms = document.querySelectorAll(".fav-films li img")
favFilms.forEach((film) =>
{
    film.addEventListener("click", (e) =>{
let id = e.target.id;
let index = favFilmArr.indexOf(id);
favFilmArr.splice(index, 1);
showFavs();


let button = document.querySelector(".film button#" + id);
button.classList.toggle("active");
button.textContent = "В избранное";
    });
});

};


