const CONTENT = document.getElementById("content"),
    TEMP = document.getElementById("template-card")

for (let i = 0; i < 15; i++) {
    CONTENT.appendChild(TEMP.content.cloneNode(true))
}

async function getData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        return response.json()
    } catch (error) {
        throw new Error(error)
    }
}

getData().then(data => {
    setTimeout(() => {
        CONTENT.innerHTML = ""
        for (let k = 0; k < data.length; k++) {
            const element = data[k]
            const node = TEMP.content.cloneNode(true)
            node.querySelector(".card-title").textContent = element.title
            node.querySelector(".card-body").textContent = element.body
            node.querySelector(".card-image").style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHrqtKm2xYitTmxtO1T8etGHISHpHf4ftFXw&usqp=CAU')"
            node.querySelector(".card-image").style.opacity = "1"
            CONTENT.appendChild(node)
        }
    }, 2000);
})