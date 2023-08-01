const container = document.querySelector('.posts-container');
const loading = document.querySelector('.loader');

const limit = 5;
let page = 1;

//페이지별 포스트 받아오기
async function getPostData() {
  const posts = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
  ).then((res) => res.json());

  return posts;
}

//리스트 아이템 생성
function createListItem(post) {
  const { id, title, body } = post;
  const list = document.createElement('li');
  list.classList.add('post');
  list.innerHTML = `
    <span>${id}</span>
    <h2 class="post-title">${title}</h2>
    <p class="post-content">${body}</p>
    `;
  container.append(list);
}

//페이지별 포스트받아와 아이템 생성 요청 - 스크롤 처리 필요
async function showPosts() {
  const postDatas = await getPostData();
  postDatas.forEach((post) => createListItem(post));
}

//show Loader & fetch more post
function showLoading() {
  loading.classList.add('show');

  setTimeout(() => {
    loading.classList.remove('show');

    setTimeout(() => {
      page++;
      showPosts();
    }, 300);
  }, 1000);
}

window.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 10) {
    showLoading();
  }
});

showPosts();
