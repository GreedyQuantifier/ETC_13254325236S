window.onload = ev => {
    createDiv();
    document.getElementById("btn").onclick = function (ev) {

        let nodeListOf = document.querySelectorAll("input");
        for (const node of nodeListOf) {
            if (node.value === undefined || node.value === "") {
                alert("А давай без пропусков")
                return;
            }
        }
        $("#hiModal").modal("show");
        ev.preventDefault();
    };
}

function createDiv() {
    list = ["Каких морей нет в камне?", "Что делает воробей, когда у него на голове сидит сторож?",
        "sin x + const",
        "Что у слона хобота, чем?",
        "Ты думаешь эти загадки были плохие? А что думаешь на счёт этой?",
        "Художественный ",
        "Идут два репера, а с ними?",
        "Сколько было вопросов? А загадок?"];

    let str = ""
    for (const argument of list) {
        str += "<div>"+argument + "<br>\n" +
            "        <input type=\"text\">" + "</div>";
    }
    document.getElementById('kavo').innerHTML += str + '<br> <input type="button" value="Получить ответ" id="btn">';

}


$("img").click(function () {

})