
let Dashs = [
    {
        name: "Perdas na Colheita Mecanizada",
        url:"https://app.powerbi.com/view?r=eyJrIjoiYTUxYzM3ZmEtMjIxYS00YmIzLThhNzQtNGM3Nzk2OGRkYzBhIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9",
        time: 20
    
    },
    {
        name: "Perdas na Colheita Manual",
        url:"https://app.powerbi.com/view?r=eyJrIjoiZTYyYThmNTMtYjAxNC00NWI0LWIzZjUtMjJlNDRmMzU1YTJjIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9",
        time: 20
    
    },
    {
        name: "Perdas na Colheita - Campos Avaliados",
        url:"https://app.powerbi.com/view?r=eyJrIjoiMjZiNWJjY2YtYTdiZi00ZTgzLWIxNDQtNmE5NDM4OTQxM2RjIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9",
        time: 20
    
    },
    {
        name: "Plantio Mecanizado",
        url:"https://app.powerbi.com/view?r=eyJrIjoiOTIxM2M0YzYtZmRlMi00OWEwLTk0ODktODE2NDg1ZmE4NDFjIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9",
        time: 20
    
    },
    {
        name: "Preparo de Solo",
        url:"https://app.powerbi.com/view?r=eyJrIjoiMzZkNDg2NWItN2YzOC00NGEzLTk2ZmEtYTRlZjE2ODYzMzcwIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9",
        time: 20
    
    },
    {
        name: "Comparativo Sulco x Fita",
        url:"https://app.powerbi.com/view?r=eyJrIjoiZjA3ZTVkZGMtMjY3Ni00MTAxLWFlN2UtZGZjMmNkNjA5NmIyIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9",
        time: 20
    
    },
    {
        name: "IUP",
        url:"https://app.powerbi.com/view?r=eyJrIjoiZDg0MzRlNTUtNThkOS00OWJjLWExZjgtZjMwZmMzODA0OGE4IiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9",
        time: 20
    
    },
    {
        name: "Avaliação Composto",
        url:"https://app.powerbi.com/view?r=eyJrIjoiZTQ4Yzc4OGItZDFlMi00YzFlLWIxZjEtOTc2YjNmOWU5MTcxIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9",
        time: 20
    
    },
    {
        name: "Avaliação Vinhaça Localizada",
        url:"https://app.powerbi.com/view?r=eyJrIjoiZjNmNWYwZTMtYzFhNC00N2U5LWJmNTAtMjZjYmNlNGI5MTQzIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9",
        time: 20
    
    },
    {
        name: "Infestação Final - Broca Mecanizada",
        url:"https://app.powerbi.com/view?r=eyJrIjoiNzg3MGEzMmYtNmZhNy00YTk4LWE4YzQtMjJhYWVjNzc5NGZkIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9",
        time: 20
    
    },
    {
        name: "Semente - Última Avaliação",
        url:"https://app.powerbi.com/view?r=eyJrIjoiYTU0ZTU3ZjAtZjFiZC00NTk1LWFjZWYtOGQwZDgxMTkxNzNmIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9",
        time: 20
    
    },
    {
        name: "Semente - Histórico",
        url:"https://app.powerbi.com/view?r=eyJrIjoiNzc5Mzg5MGQtZGE2Mi00MDM4LTgwYjUtM2NkMTRhNGIwN2Q5IiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9",
        time: 20
    
    }

]
//



let urlview = document.getElementById("ViewDash")
let contador = 0;
let tempo = 60000 * 3;
let total = Dashs.length
total = total - 1

urlview.src = Dashs[total].url;
document.title = "Dashboard " + Dashs[total].name

setInterval(function() {
    if(contador<Dashs.length){
        urlview.src = Dashs[contador].url;
        document.title = "Dashboard " + Dashs[contador].name
        tempo = Dashs[contador].time
        contador++;
    }else{
        contador = 0;
        urlview.src = Dashs[contador].url;
        document.title = "Dashboard " + Dashs[contador].name
        tempo = Dashs[contador].time
    }
    
}, tempo);


function AlterarDash(id){
    urlview.src = Dashs[id].url;
}

function MenuLista(){

    let lista = document.querySelector(".lista")
    let menuIcon = document.querySelector(".menu_icon")
    let menu = document.querySelector(".MenuLateral")

    if(lista.style.display == "none"){
        lista.style.display = "Flex"
        menuIcon.src = "../src/galery/menu_off.png"
        menu.style.whidt = "320px"
        menu.style.position = "relative";
    }else{
        lista.style.display = "none"
        menuIcon.src = "../src/galery/menu_on.png"
        menu.style.whidt = "40px"
        menu.style.position = "relative";
    }
    
}