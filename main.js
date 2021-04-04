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
        recept.innerHTML = "<h1>Pasta Pesto</h1>Snipper het uitje en fruit even aan in een scheutje olijfolie. Voeg de blokjes" +
            "kip toe en bak ongeveer 5 minuten. Kook ondertussen de pasta gaar. Voeg de (zelfgemaakte) pesto en room toe aan de kip" +
            "en roer goed door. Proef nog even of er nog peper of zout bij moet.<br>" +
            "Laat de pestosaus een paar minuutjes zachtjes pruttelen. Voeg dan de" +
            "gekookte pasta toe en schep er doorheen. Halveer de tomaatjes en roer ook door de pasta pesto en verwarm nog een minuutje mee." +
            "Serveer de pasta pesto in de pan of op een bord met een handje rucola en de geroosterde pijnboompitten.";

    }


    function tikka(e) {
        e.preventDefault();
        let recept = document.getElementById('recept')
        recept.innerHTML = "<h1>Tikka Masalla</h1> Meng de yoghurt, 5 teentjes uitgeperste knoflook, 4 cm geraspte gember, 2 tl garam masala, 1 tl komijnpoeder, 1 tl kurkumapoeder en 1 tl zout door elkaar in een grote kom." +
            " Roer de blokjes kippendij er goed door en laat minimaal 10 minuten afgedekt marineren in de koelkast." +
            "Blancheer de roosjes broccoli 5 minuten in kokend water en giet daarna af." +
            "Verhit een grote hapjes- of braadpan met een flinke scheut zonnebloemolie. Schep de kip uit de marinade en bak de blokjes op hoog vuur rondom bruin. Schep daarna uit de pan." +
            "Smelt de boter in dezelfde pan en fruit de uien met een snuf zout op middelhoog vuur. Voeg daarna de 2 teentjes uitgeperste knoflook en 2 cm geraspte gember toe en bak 1 minuut mee." +
            " Daarna komt de 1 tl garam masala, ½ tl komijnpoeder, 1 tl kurkumapoeder en tomatenpuree erbij. Roer goed door en bak nog 1 minuut. Schenk de passata, slagroom en melk in de pan en roer de gebakken " +
            "kip en geblancheerde broccoli erdoor. Zit er nog marinade in je kom? Roer dit er dan ook door. Laat 15 minuten pruttelen en roer af en toe door." +
            "Proef de saus en breng naar wens op smaak met citroensap, zout, zwarte peper en eventueel chili." +
            "Serveer de kip tikka masala met koriander en witte rijst."

    }

    function kleur(gerecht, button) {
        if (localStorage.getItem(gerecht) == 'Verwijder uit favorieten') {
            document.getElementById(button).style.background = 'gold'


        }
        if (localStorage.getItem(gerecht) == 'Voeg toe aan favorieten') {
            document.getElementById(button).style.background = '#0069ed'




    }



}
