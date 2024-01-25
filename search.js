const resultArtist = document.getElementById('result-artist');
const playlistContainer = document.getElementById('result-playlists');
const searchInput = document.getElementById('search-input');

searchInput.addEventListener('input', function () {
  const searchTerm = searchInput.value.toLowerCase();
  console.log('Valor do campo de busca:',`http://localhost:3000/artists?name=${searchTerm}`);
  if (searchTerm === '') {
    resultArtist.classList.add('hidden');
    playlistContainer.classList.remove('hidden');
    return;
  }
  requestApi(searchTerm);
});

function requestApi(searchTerm) {
    console.log('Valor do argumento da função requestApi:', searchTerm);
    fetch(`http://localhost:3000/artists?name=${searchTerm}`)
    .then((response) => response.json())
    .then((results) => displayResults(results));
}

function displayResults(results) {
  hidePlaylists();
  const artistImage = document.getElementById('artist-img');
  const artistName = document.getElementById('artist-name');

  results.forEach((element) => {
    artistImage.src = element.urlImg;
    artistName.innerText = element.name;
  });
  resultArtist.classList.remove('hidden');
}

function hidePlaylists() {
  playlistContainer.classList.add('hidden');
}

