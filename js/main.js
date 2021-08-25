
const root = document.querySelector('#root');
const Home = document.querySelector('#Home');
const List = document.querySelector('#List');
const About = document.querySelector('#About');
const Updates = document.querySelector('#Updates');
const RPS = document.querySelector('#RPS');


Updates.addEventListener('click',() => {
    const home = renderHome();
    root.innerHTML = ''
    root.innerHTML = home;
});

List.addEventListener('click',() => {
    const list = renderList();
    root.innerHTML = ''
    root.innerHTML = list;
});





