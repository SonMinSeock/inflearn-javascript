const API_URL = 'https://animal-api-two.vercel.app/';

const $content = document.querySelector('div.content');
const template = [];

const getData = async (name) => {
  const res = await fetch(`${API_URL}${name}`);
  try {
    if (res) {
      const data = await res.json();
      data.photos.forEach((element) => {
        template.push(`<img src=${element.url} />`);
      });

      $content.innerHTML = template;
    }
  } catch (err) {
    console.log(err);
  }
};

getData('penguin');
