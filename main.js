fetch (`imports/config.json`)
    .then(function(response) {
        return response.json();
    })
    .then (function(data){
        let toAdd = "";
        for (let i = 0; i < data.length; i++) {
            toAdd += `
            <div class="robot" id="${data[i].dir}">
                <img src="images/${data[i].img}">
                <h2 class="montserratFONT">${data[i].name}</h2>
            </div>
            <br><br>
            `
        }
        document.getElementById("mainbody").innerHTML = toAdd;

        for (let i = 0; i < data.length; i++) {
            document.getElementById(`${data[i].dir}`).onclick = function() {
                localStorage.setItem("botDir", `${data[i].dir}`);
                window.location.href = "bot.html";
            }
        }

    })