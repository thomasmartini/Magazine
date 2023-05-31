window.addEventListener('load', init);

let favorietNamen = [
    'favorietPesto', 'favorietTikka', 'favorietBruschetta', 'favorietBolognese', 'favorietShoarma'
]

let receptNamen = [

    'pesto', 'tikka', 'bruschetta', 'bolognese', 'shoarma'
]

function check(gerecht){

    if(localStorage.getItem(gerecht) == null){

        localStorage.setItem(gerecht, 'Voeg toe aan favorieten')
    }

}

function init() {

    for (let i = 0; i< receptNamen.length; i++){
        kleur(receptNamen[i], favorietNamen[i])
        check(receptNamen[i])
        document.getElementById(favorietNamen[i]).innerHTML = localStorage.getItem(receptNamen[i]);
    }

    if (window.history.replaceState) {
        window.history.replaceState(null, null, window.location.href);

        let pastaPesto = document.getElementById('pesto');
        pastaPesto.addEventListener('click', pesto);
        let tikkaMasalla = document.getElementById('tikka');
        tikkaMasalla.addEventListener('click', tikka);
    }

    document.getElementById('favorietPesto').addEventListener('click', favorietPesto);
    document.getElementById('favorietTikka').addEventListener('click', favorietTikka);
    document.getElementById('favorietBolognese').addEventListener('click', favorietBolognese);
    document.getElementById('favorietBruschetta').addEventListener('click', favorietBruschetta);
    document.getElementById('favorietShoarma').addEventListener('click', favorietShoarma);

    recept.innerHTML = "<h1>Pasta Pesto</h1><h3>Ingrediënten:<br> 500g kippenblokjes, 1 grote ui, groene pesto, fusili, 250g cherry tomaatjes<br>Optioneel: pijnboompittjes, rucola en geraspte kaas</h3><h3>Recept:</h3>" +
    "Als eerste snipper het uitje en fruit even aan in een scheutje olijfolie. Voeg hierna de blokjes " +
       "kip toe en bak ze totdat ze gaar zijn. Kook ondertussen de pasta gaar(Doe een blokje kip bouillon in het water inplaats van zout voor extra smaak). Voeg de pesto toe aan de kip " +
       "en roer goed door. Proef nog even of er nog peper of zout bij moet. <br>" +
       "Laat de pestosaus een paar minuutjes zachtjes pruttelen. Voeg dan de " +
       "gekookte pasta toe en schep er doorheen. Halveer de tomaatjes en roer ook door de pasta pesto en verwarm nog een minuutje mee. " +
       "Serveer de pasta pesto op een bord met een handje rucola, geroosterde pijnboompitten en wat geraspte kaas.";
}
function favorieten(gerecht, button) {
    let favoriet = localStorage.getItem(gerecht);
    if (favoriet == 'Voeg toe aan favorieten') {
        localStorage.setItem(gerecht, 'Verwijder uit favorieten')
        document.getElementById(button).innerHTML = "Verwijder uit favorieten"
        kleur(gerecht, button)
        stop()
    }
    if (favoriet == 'Verwijder uit favorieten') {
        localStorage.setItem(gerecht, 'Voeg toe aan favorieten')
        document.getElementById(button).innerHTML = "Voeg toe aan favorieten"
        kleur(gerecht, button)
        stop()
    }
}

function favorietPesto(){

    favorieten('pesto', 'favorietPesto')
}
function favorietTikka(){

    favorieten('tikka', 'favorietTikka')
}
function favorietBolognese(){

    favorieten('bolognese', 'favorietBolognese')
}
function favorietBruschetta(){

    favorieten('bruschetta', 'favorietBruschetta')
}
function favorietShoarma(){

    favorieten('shoarma', 'favorietShoarma')
}
    /**
     *
     * @param e
     */

    function pesto(e) {
        e.preventDefault();
        let recept = document.getElementById('recept')
        recept.innerHTML = "<h1>Pasta Pesto</h1><h3>Ingrediënten:<br> 500g kippenblokjes, 1 grote ui, groene pesto, fusili, 250g cherry tomaatjes<br>Optioneel: pijnboompittjes, rucola en geraspte kaas</h3>" +
    "Snipper het uitje en fruit het even in een scheutje olijfolie. Voeg de blokjes " +
       "kip toe en bak ze totdat ze gaar zijn. Kook ondertussen de pasta gaar(Doe een blokje kip bouillon in het water inplaats van zout voor extra smaak). Voeg de pesto toe aan de kip " +
       "en roer goed door. Proef nog even of er nog peper of zout bij moet. <br>" +
       "Laat de pestosaus een paar minuutjes zachtjes pruttelen. Voeg dan de " +
       "gekookte pasta toe en schep er doorheen. Halveer de tomaatjes en roer ook door de pasta pesto en verwarm nog een minuutje mee. " +
       "Serveer de pasta pesto op een bord met een handje rucola, geroosterde pijnboompitten en wat geraspte kaas.";

    }


    function tikka(e) {
        e.preventDefault();
        let recept = document.getElementById('recept')
        recept.innerHTML = "<h1>(soort van) Tikka Masalla</h1><h3>Ingrediënten:<br> 500g kippenblokjes, 1 grote ui, ajam paniki, rode curry, 400g sperziebonen, 1 groot blik kokos melk(400ml) en basmati rijst<br></h3><h3>Recept:</h3>" +
        "Zet als eerste een pan water op voor de rijst en als je meerdere pannen hebt kan je er ook meteen een voor de sperziebonen aanzetten. Gooi de rijst in de pan als het begint met koken" +
        ". Snipper het uitje en fruit het even in een scheutje olijfolie. Voeg de blokjes "  + 
        " kip toe en bak ze totdat ze gaar zijn. Terwijl dit bezig is halveer je de boontjes en kook je ze gaar. Voeg de ajam paniki, rode curry en kokos melk toe aan de kip en roer goed totdat alles vermengd is. Voeg hierna de sperziebonen toe en laat het nog een paar minuten prutellen. <br>" + 
        "server de rijst met de saus" 

    }

    function kleur(gerecht, button) {
        if (localStorage.getItem(gerecht) == 'Verwijder uit favorieten') {
            document.getElementById(button).style.background = 'gold'


        }
        if (localStorage.getItem(gerecht) == 'Voeg toe aan favorieten') {
            document.getElementById(button).style.background = '#0069ed'

    }

}
