const ArrayGAmes = [
    {
        id: 1,
        link: 'RPS',
        name: "Rock-Paper-Scissors",
        description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
        img: "https://picsum.photos/200",
    },
    {
        id: 2,
        link: '',
        name: "Tick-Tac-Tock",
        description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
        img: "https://picsum.photos/200",
    },
    {
        id: 3,
        link:'',
        name: "Memory game",
        description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
        img: "https://picsum.photos/200",
    },
]


const renderList = () => {
    let list=''
    ArrayGAmes.forEach((game)=>{
        list+=`<div class="col">
            <div class="card" style="width: 18rem;">
                <img src="https://picsum.photos/200" class="card-img-top rounded" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${game.name}${game.id}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a id="${game.link}" class="btn btn-primary">Play!</a>
                </div>
            </div>
        </div>`
    })
    render = `        
        <h1 class="text-center text-primary">Game List</h1>
        <div class="container mt-5">
            <div class="row">
                ${list}
            </div>
        </div>
    `
    return render;
}