function generator(){
    let length = 8
    let charset = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*_+-()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let retVal = ""
    for (let i = 0, n = charset.length; i < length; i++) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal
}


let button = document.getElementById("button-el")
button.addEventListener("click",() =>{
    for(let j = 0; j < 4;j++){
        document.getElementById(`input-el-${j}`).value = generator()
    }
})
