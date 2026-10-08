const filmek = [
  {
    "title": "Ratatouille",
    "year": 2007,
    "genre": "Animation",
    "rating": 5
  },
  {
    "title": "Kung Fu Panda",
    "year": 2008,
    "genre": "Animation",
    "rating": 4
  },
  {
    "title": "Up",
    "year": 2009,
    "genre": "Animation",
    "rating": 4
  },
  {
    "title": "Toy Story 3",
    "year": 2010,
    "genre": "Animation",
    "rating": 1
  },
  {
    "title": "Frozen",
    "year": 2013,
    "genre": "Animation",
    "rating": 4
  },
  {
    "title": "Inside Out",
    "year": 2015,
    "genre": "Animation",
    "rating": 5
  },
  {
    "title": "Zootopia",
    "year": 2016,
    "genre": "Animation",
    "rating": 4
  },
  {
    "title": "Coco",
    "year": 2017,
    "genre": "Animation",
    "rating": 4
  },
  {
    "title": "Spider-Man: Into the Spider-Verse",
    "year": 2018,
    "genre": "Animation",
    "rating": 3
  },
  {
    "title": "Joker",
    "year": 2019,
    "genre": "Drama",
    "rating": 4
  },
  {
    "title": "Parasite",
    "year": 2019,
    "genre": "Thriller",
    "rating": 4
  },
  {
    "title": "Encanto",
    "year": 2021,
    "genre": "Animation",
    "rating": 2
  },
  {
    "title": "Everything Everywhere All at Once",
    "year": 2022,
    "genre": "Action",
    "rating": 3
  },
  {
    "title": "The Super Mario Bros. Movie",
    "year": 2023,
    "genre": "Animation",
    "rating": 2
  },
  {
    "title": "Inside Out 2",
    "year": 2024,
    "genre": "Animation",
    "rating": 5
  }
];

for (const film of filmek) {
  const tr = document.createElement("tr");
 
  const tdtitle = document.createElement("td");
  tdtitle.textContent = film.title;
  tr.appendChild(tdtitle);
 
  const tdyear = document.createElement("td");
  tdyear.textContent = film.year;
  tr.appendChild(tdyear);
 
  const tdgenre = document.createElement("td");
  tdgenre.textContent = film.genre;
  tr.appendChild(tdgenre);

  const tdrating = document.createElement("td");
  if (film.rating <= 2) {
    tr.appendChild(tdrating).className = "low-rating";
      for (let i = 0; i < film.rating; i++ )
    {
      tdrating.textContent += "⭐";
    }
  }
  else {
    tr.appendChild(tdrating)
    for (let i = 0; i < film.rating; i++ )
    {
      tdrating.textContent += "⭐";
    }
  }
  document.getElementById("filmbody").appendChild(tr);
}
const form = document.getElementById('myForm');
  function updateFilmtable(){
  
    form.addEventListener('submit',(e) =>{});
    const data = new FormData(form)
    const title = data.get("title").toString();
    const year = parseInt(data.get("year"));
    const genre = data.get("genre").toString();
    const rating = parseInt(data.get("rating"));}
    
    filmek.push 
    {
      "title";title,
      "year"; year,
      "genre"; genre,
      "rating"; rating
    }

