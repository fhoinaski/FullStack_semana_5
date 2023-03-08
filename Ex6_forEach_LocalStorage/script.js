let lista=["Banana","Morango","Maçã","Uva","Pêra"]

lista.forEach((frutas,indice)=>{
    localStorage.setItem(`Fruta - ${indice}`,frutas);
})
