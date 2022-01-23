// Downloads Tabs
const tabsContainer = document.querySelector('.tabs-container');
const btns = document.querySelectorAll('.tabs__list-btn');
const contents = document.querySelectorAll('.tabs__container-content');

tabsContainer.addEventListener('click', function (e) {
  const id = e.target.dataset.id;
  if (id) {
    btns.forEach(function (btn) {
      btn.classList.remove('active');
      e.target.classList.add('active');
    });
    contents.forEach(function (content) {
      content.classList.remove('tabs__container-active');
    });
    const element = document.getElementById(id);
    element.classList.add('tabs__container-active');
  }
});
