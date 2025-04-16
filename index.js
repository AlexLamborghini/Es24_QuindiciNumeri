window.addEventListener("load", function () {
    
    creaMatrice();
    CaricaMatrice();

});



function creaMatrice() {
   
    const wrapper = document.getElementById("wrapper");
    for (let i = 0; i < 16; i++) {
        const div = document.createElement("div");
        wrapper.appendChild(div);
        div.addEventListener("click", divClick);
        div.id = `div-${i / 4}-${i % 4}`;
        wrapper.appendChild(div);
    }
}



function divClick() {
    
    const i = parseInt(this.id.split(`-`)[1]);
    const j = parseInt(this.id.split(`-`)[2]);
    //cella sopra
    if(i - 1 >= 0)
    {
        const sopra = document.getElementById(`div-${i - 1}-${j}`);

        
        if (sopra.textContent == "")
        {
            scambiaDiv(this, sopra);
            return;
        }
    }
    //cella di destra
    if(j + 1 < 4)
        {
            const destra = document.getElementById(`div-${i}-${j + 1}`);
    
            
            if (destra.textContent == "")
            {
                scambiaDiv(this, destra);
                return;
            }
        }
    //cella di sotto
    if(i + 1 < 4)
        {
            const sotto = document.getElementById(`div-${i + 1}-${j}`);
    
            
            if (sotto.textContent == "")
            {
                scambiaDiv(this, sotto);
                return;
            }
        }
    //celle di sinistra
    if(i + 1 < 4)
        {
            const sinistra = document.getElementById(`div-${i + 1}-${j}`);
    
            
            if (sinistra.textContent == "")
            {
                scambiaDiv(this, sinistra);
                return;
            }
        }
    
}


function scambiaDiv(piena, vuota)
{
    vuota.textContent = piena.textContent;
    vuota.style.backgroundColor = "blue";

    piena.textContent = vuota.textContent;
    piena.style.backgroundColor = null;


}



function CaricaMatrice() {
    for (let cont = 1; cont <= 15; cont++)
    {
        let divRnd;
        do 
        {
            const i = Math.floor(Math.random() * 4);
            const j = Math.floor(Math.random() * 4);

            const divRnd = document.getElementById(`div-${i}-${j}`);
        } while (divRnd.textContent != "")

        divRnd.style.backgroundColor = "blue";
        divRnd.textContent = cont;
    
    }
}