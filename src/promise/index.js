const somethingWillHappen = ()=> {
    return new Promise((resolve, reject)=>{
        if (false){
            resolve("Se resolvió!!!");
        } else {
            reject("Chiiin, hubo un error!!!");
        }
    })
}

somethingWillHappen()
.then (response => console.log(response))
.catch(err=> console.error(err));

const somethingWillHappen2 = ()=>{
    return new Promise((resolve, reject)=>{
        if (true){
            setTimeout(() => {
                resolve ("Verdadero");
            }, 2000);
        } else {
            const error = new Error ("Algo salió mal!");
            reject (error);
        }
    })
}

somethingWillHappen2()
.then(response => console.log(response))
.catch(err => console.error(err));

Promise.all([somethingWillHappen(), somethingWillHappen2()])
.then(response => {
    console.log("Arreglo de resultados", response);
})
.catch(err => {
    console.error(err)
});