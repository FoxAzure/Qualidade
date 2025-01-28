const User = [
    {id: 0, user: "ADMIN", senha: "@target556", name: "Administrador", subnick:"Administrador Geral", level: 0},
    {id: 1, user: "PAULO", senha: "target2024", name: "Paulo Roberto", subnick:"Administrador", level: 0},
    {id: 2, user: "ROMARIO", senha: "target2024", name: "Romario Lima", subnick:"Administrador", level: 0},
    {id: 3, user: "FELIPE", senha: "target2024", name: "Felipe Vitturi", subnick:"Coordenador de Qualidade Agrícola", level: 0},
    {id: 4, user: "AGROVALE", senha: "agrovale2024", name: "Agrovale", subnick:"", level: 1},
    {id: 5, user: "EDNEI", senha: "santosfc", name: "Ednei Robiatti", subnick:"Gerente SGI", level: 1},
    {id: 6, user: "JACKSON", senha: "bahia", name: "Jackson Daniel", subnick:"Tec. Qualidade Agrícola", level: 0},
    {id: 7, user: "PAULO RICARDO", senha: "94244", name: "Paulo Ricardo", subnick:"Superintendente Geral", level: 1},
    {id: 8, user: "QUALIDADE", senha: "qualidade2024", name: "Equipe Qualidade", subnick:"Equipe Qualidade Agrícola - Agrovale", level: 1},
    {id: 9, user: "LEANDRO", senha: "91702", name: "Leandro Rodrigues", subnick:"Aux. Tec. Qualidade", level: 0},
    {id: 10, user: "DIEGUINHO", senha: "90405", name: "Dieguinho", subnick:"Aux. Tec. Qualidade", level: 0},
    {id: 11, user: "CESAR", senha: "1234", name: "Cesar", subnick:"Superintedente AgroIndustrial", level: 1},

    //solicitado
    {id: 12, user: "MARCIO", senha: "18299", name: "Marcio", subnick:"Coordenador Agrícola", level: 1},
    {id: 13, user: "JOSUE BEZERRA", senha: "75664", name: "Josué Bezerra", subnick:" ", level: 1},
    {id: 14, user: "ARGEMIRO", senha: "50349", name: "Argemiro Chaves", subnick:"Gerente de Agronomia", level: 1},
    {id: 15, user: "ARTUR", senha: "80472", name: "Artur Pereira", subnick:"Gestor de Irrigação", level: 1},
    {id: 16, user: "NAYARA", senha: "74644", name: "Nayara Aline", subnick:"Controladoria", level: 1},
    {id: 17, user: "JOSENILDO", senha: "86270", name: "Josenildo Kelder", subnick:" ", level: 1},
    {id: 18, user: "WILLIAMS", senha: "85856", name: "Williams", subnick:"Líder Colheita MEC", level: 1},

    {id: 19, user: "ADEMAR", senha: "18718", name: "Ademar", subnick:"Coordenador Agrícola", level: 1},
    {id: 20, user: "MARIO", senha: "15350", name: "Mario Jorge", subnick:"Coordenador Mecanização", level: 1},
    {id: 21, user: "PREPARO", senha: "1993", name: "Preparo de Solo", subnick:" ", level: 1},
    {id: 22, user: "CID", senha: "cid123", name: "CID", subnick:"Diretor", level: 1},

    {id: 23, user: "ISMAEL", senha: "93945", name: "Ismael", subnick:" ", level: 1},
    {id: 24, user: "ICARO", senha: "82460", name: "Icaro Paulo", subnick:"Líder Agrícola", level: 1},
    {id: 25, user: "GUILHERME", senha: "agrovale@24", name: "Guilherme Filho", subnick:"Diretor Financeiro", level: 1},
    {id: 26, user: "JOAQUIM", senha: "93225", name: "Joaquim de Carli", subnick:"Gerente de RH", level: 1},
    {id: 27, user: "IGOR", senha: "", name: "Igor Beanor", subnick:"Líder Pesquisa", level: 1},
    {id: 28, user: "GUSTAVO", senha: "agrovale", name: "Gustavo", subnick:"Diretor Indústrial", level: 1},
    {id: 29, user: "BRUNO", senha: "91019", name: "Bruno", subnick:" ", level: 1},
    {id: 30, user: "MURILO", senha: "72387", name: "Murilo", subnick:"Assistente Técnico", level: 1},

]


let txt_user;
let txt_senha;
let txt_userUP;

function validarlogin(){
    txt_user = document.querySelector("#user").value
    txt_senha = document.querySelector("#senha").value
    
    txt_userUP = txt_user.toUpperCase()
    txt_userUP = txt_userUP.trim()

    let resultado = User.filter( item =>
        item.user == txt_userUP && item.senha == txt_senha
    )
    if(resultado.length>0){

        let userName = resultado[0].user
        let nickName = resultado[0].name
        let levelUser = resultado[0].level
        let subnick = resultado[0].subnick
        let userID = resultado[0].id


        localStorage.setItem("target_User",userName)
        localStorage.setItem("target_Name",nickName)
        localStorage.setItem("target_Level",levelUser)
        localStorage.setItem("target_Subnick",subnick)
        localStorage.setItem("target_id",userID)
        
        window.location.assign("../inicio.html")
        
    }else{
        alert("Login ou senha inválidos. Verifique e tente novamente.")
    }
}



function checklogin(){
    let username = document.querySelector("#username")
    let nickname = document.querySelector("#subnick")
    let user = localStorage.getItem("target_User");
    let usernick = localStorage.getItem("target_Name");
    let subnick = localStorage.getItem("target_Subnick")
    let level = localStorage.getItem("target_Level");

    let resultado = User.filter( item =>
        item.user == user && item.level == level
    )
    
    if(resultado.length==0){
        window.location.assign("../index.html")
    }else{
        username.innerHTML = "Bem vindo, " + usernick
        nickname.innerHTML = subnick
    }
}

function checkConected(){
    let username = document.querySelector("#username")
    let nickname = document.querySelector("#subnick")
    let user = localStorage.getItem("target_User");
    let usernick = localStorage.getItem("target_Name");
    let subnick = localStorage.getItem("target_Subnick")
    let level = localStorage.getItem("target_Level");

    let resultado = User.filter( item =>
        item.user == user && item.level == level
    )
    
    if(resultado.length==1){
        window.location.assign("../inicio.html")
    }else{
        username.innerHTML = "Bem vindo, " + usernick
        nickname.innerHTML = subnick
    }
}



function quitlogin(){
    localStorage.removeItem("target_User")
    localStorage.removeItem("target_Name")
    localStorage.removeItem("target_Level")
    window.location.assign("../index.html")
}