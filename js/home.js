const ArrayUpdates= [
    {
        id: 1,
        user: "superpato1234",
        version: "0.0.1",
        description: "This page contains some games made with js",
        date: "24/08/2021",
    },
    {
        id: 2,
        user: "superpato1234",
        version: "0.0.2",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga saepe ab nemo accusamus, veritatis suscipit!",
        date: "24/08/2021",
    },
    {
        id: 3,
        user: "superpato1234",
        version: "0.0.3",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga saepe ab nemo accusamus, veritatis suscipit!",
        date: "24/08/2021",
    },
    {
        id: 4,
        user: "superpato1234",
        version: "0.0.4",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga saepe ab nemo accusamus, veritatis suscipit!",
        date: "24/08/2021",
    }
]

const renderHome = ()=> {
    let updates='';
    ArrayUpdates.forEach((update)=>{
        updates=`
        <div class="row d-flex justify-content-center mt-2">
            <div class="col-8">
                <div class="card">
                    <div class="card-header">
                        ${update.user}
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${update.version}</h5>
                        <p class="card-text">${update.description}</p>
                        <p class="fst-italic">${update.date}</p>
                        <a href="#" class="btn btn-primary">repository</a>
                    </div>
                </div>
            </div>
        </div>
        `+updates;
    })
    updates = `
        <div class="container mx-auto ">
            <div class="row d-flex justify-content-center">
                <div class="col-8">
                    <h1 class="text-center text-primary"> Games free</h1>
                </div>
            </div>
            ${updates}
        </div>
        <script>
        RPS.addEventListener('click',() => {
            const tictactoe = rendertictactoe();
            root.innerHTML='';
            root.innerHTML=tictactoe;
        })
        </script>
    `
    return updates;
}