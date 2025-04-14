const elList = document.querySelector(".js-list");
const elSelect = document.querySelector(".js-select")
const form = document.querySelector(".form-input")
const input = document.querySelector("input")

renderList(films);

elSelect.addEventListener("change", function () {
   const elSelectedMovies = [];

   films.forEach((el) =>{
      el.genres.forEach((e) =>{
         if (e == elSelect.value) {
            elSelectedMovies.push(el);
         }
      });
   });

   renderList(elSelectedMovies);
});

form.addEventListener("submit", (event) => {
   event.preventDefault();
   const sortMovieTitle = [];
   films.forEach((kino) => {
      if (kino.title == input.value) {
         sortMovieTitle.push(kino);
         console.log(sortMovieTitle);
      }
   });
   renderList(sortMovieTitle)
});

function renderList(array) {
   elList.innerHTML = "";
   array.forEach((el) =>{
      elList.innerHTML += `<li>
      <img
      src="${el.poster}"
      alt="movie"
      width="200"
      />
      <h3>${el.title}</h3>
         <p>${el.genres}</p>
      </li> `;
   });
}
