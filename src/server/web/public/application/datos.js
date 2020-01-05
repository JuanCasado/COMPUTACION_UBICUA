

function generadorDatos(){
    let labels = []
    let data = []
    for (i = 0; i < 30; i++) {
        labels.push("Valor"+i)
        data.push(Math.random()*10);
    }
    return {labels:labels, data:data}

}