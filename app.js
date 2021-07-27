const form = document.getElementById("form");
const remove = document.getElementById("remove");
const gifContainer = document.getElementById("gifContainer")


form.addEventListener("submit", (e) => {
    const input = document.getElementById("input").value;
    e.preventDefault();
    getGIF(input);
})

async function getGIF(input) {
    const query = await axios.get("http://api.giphy.com/v1/gifs/search?", {params: {api_key: "8aEqm2PmdD1Dp0rE9N2jTzVsGhawAulj", q: input}});
    addGIF(query.data.data);
}

function addGIF(data){
    let num = data.length;
    if (num!= 0){
        num = Math.floor(Math.random() * num);
        const newGIF = document.createElement("img");
        const urlGIF = data[num].images.original.url;
        newGIF.src = urlGIF;
        newGIF.className = "gif";
        gifContainer.appendChild(newGIF);
    }
    else {
        displayErrorMsg()
    }
}

function displayErrorMsg() {
    setTimeout(() => {
        document.getElementById("errorMessage").innerText = "";
       }, 1000);
       document.getElementById("errorMessage").innerText = "No results found. Please input a valid search term.";
}

remove.addEventListener("click", (e) => {
e.preventDefault();
    gifContainer.innerHTML = "";
})
