const botaoMudaClasse =document.getElementById('muda')

function mudaClasse(){
    document.body.classList.toggle('dark')
}

botaoMudaClasse.addEventListener('change', mudaClasse)