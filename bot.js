
let canvas = document.getElementById("mainbody");

document.getElementById("mainLogo").onclick = function () {
    window.location.href  = "index.html";
};
document.getElementById("linkTO-repo").onclick = function () {
    window.location.href  = "https://github.com/bearbots-bhs/gitbear";
};

let directory = localStorage.getItem("botDir");

fetch (`imports/${directory}/config.json`)
    .then(function(response) {
        return response.json();
    })
    .then (function(data){
        document.getElementById("title").innerHTML = data[0].name;
        document.getElementById("season").innerHTML = data[0].season;
        document.getElementById("img").innerHTML = `<img src="images/${data[0].image}"/>`;


        let content = "";
        for (let i = 0; i < data[1].length; i++) {

            let k = data[1][i];

            let id = String(k.name.substring(0, k.name.length-5).trim());
            //console.log(id);
            content += `
            <div class="script" id="${id}">
                <h2>${k.name}</h2>
                <h3>${k.task}</h3>
            </div>
            <br>
            `;

        }
        content += `<h1>CREDITS</h1><h4>${data[0].credits}</h4>`;
            canvas.innerHTML += content;
        for (let i = 0; i < data[1].length; i++) {

            let k = data[1][i];

            let id = String(k.name.substring(0, k.name.length-5).trim());
            //console.log(id);
            let link = `imports/${directory}/${k.name}`;
            console.log(id, link);

            document.getElementById(`${id}`).onclick = function() {
                window.location.href = `${link}`;
            }
        }


    })
    .catch (function(error){
        console.error("Error fetching json", error);
    });

if (window.innerWidth <= 650) {
    window.location.href = "small.html"
}
console.log("done");