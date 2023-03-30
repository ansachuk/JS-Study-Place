const wrapperRef = document.querySelector('.wrapper');
const inputRef = document.querySelector('.name');

inputRef.addEventListener('input', inputHandler);

function inputHandler(e) {
  const searchQuery = inputRef.value;

  fetchUsers(searchQuery).then(makeUserMarkup);
}

function makeUserMarkup({ login, avatar_url, public_repos, id }) {
  wrapperRef.innerHTML = `<div class="wrapper">
      <img src="${avatar_url}" alt="user image" />
      <h2 class="username">Username:${login}</h2>
      <h3 class="id">ID:${id}</h3>
      <p class="repos">Public repos:${public_repos}</p>
    </div>`;
}

function fetchUsers(user) {
  const URL = `https://api.github.com/users/${user}`;

  return fetch(URL).then(res => {
    if (!ok) {
      throw new Error();
    }

    return res.json();
  });
}
