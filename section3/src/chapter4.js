// https://jsonplaceholder.typicode.com/users api
const getData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log(response); // Response 객체
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

getData();
