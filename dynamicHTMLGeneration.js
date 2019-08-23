console.log("Dynamic HTML generation");

let spaltenkopfHTML = ""
let spielerHTML = "";
const playersDataArray=[
    ["PersonNr","Ironhack Id","Google Account","Ironhack T-Shirt Size","e-mail","Name","persönliche Startseite Dateiname","Pizza","TA","Was Fehlt?","Kind of dev?","Git Clone","Professional History","Future plan","Passions","favorite books","Slack Username","Github Account","Linkedin"],
    ["Pe00001","","patrick.sbrzesny@saw-office.net, patrick.weiss@officeone.team","S","patrick.sbrzesny@saw-office.net, patrick.weiss@officeone.team","Patrick","","","","","","","Dipl. Ing. Automatisierungstechnik, 3 Jahre Daimler IT, 10 Jahre IT Freelancer, 7 Jahre Vorstand der Schwarz auf Weiss AG","Softwareprodukt entwicklen und verkaufen","Skifahren, Snowboarden, Sportwagen, Tanzen","Per Anhalter durch die Galaxis, Wendekreis der Nacht, world wide web","","",""],
    ["Pe00002","","marco.santonastasi@gmail.com","","marco.santonastasi@gmail.com","Marco","","","","","","","Dipl. Ing. Mach.Bau, 3 Yrs. Continenal AG R&D, 4 Yrs. Academic Researcher, 10 Yrs. Professional Engineer","Continue being a professional engineer but update my skills","Building stuff, just about anything","Zur Psychopathologie des Alltagslebens, Freakonomics","","",""],
    ["Pe00003","","marianamv112@gmail.com","","marianamv112@gmail.com","Mariana","","","","","","","Master's in Telecommunications and Informatics Eng., 7months web dev internship, 5 months data internship, Web Dev Bootcamp","Continue to colaborate with Ironhack","Music (I sing and am learning to play the ukelele), cinema, cultural activities","The Picture of Dorian Gray","","",""],
    ["Pe00004","","culaficstefan@gmail.com","L","culaficstefan@gmail.com","Stefan","","","","","","","BSc of Informational Systems and Technologies., 3 years IT Admin, 2 years IT Support Eng, Web Dev Bootcamp","Find a web dev job ","Outdoorsy activities(Hiking, Biking, etc), Reading, Tech","The Alchemist, Paulo Coelho","","",""],
    ["Pe00005",1,"holobolo43@gmail.com","M","verdang@mediamarktsaturn.com","Dominik","start_Pe00005.html, verschoben -> gelöscht, lokal gelöscht","","Stefan","","unbekannt","yes","2 years Consultant Bank now; 11 years external Testmanager Audi ag; 1 year Testmanager Mediamarktsaturn ","Become a sas dev","Running, Mountainbike, Soccer","Masse und Macht, Der unmögliche Planet","","",""],
    ["Pe00006",2,"silverxjc92@gmail.com","XL","gooss@mediamarktsaturn.com","Jürgen","start_Pe00006.html, verschoben, gelöscht","","Stefan","HDMI-Kabel","backend","yes","3 Jahre Bereichsleiter GSM/Dienste MM Ingolstadt, 3 Jahre Licht/Ton- und Medientechniker, 2 Jahre Analyst Supply Chain","Become a developer(inventory)","American Football, Hiking, Videogames","","","",""],
    ["Pe00007",4,"ssupply.chainn@gmail.com","XL","trierdo@mediamarktsaturn.com","Doreen","start_Pe00007.html, verschoben, gelöscht","","Stefan","HP DockingStation / DVI > HDMI Kabel, 2.ter Monitor","frontend","yes","Dipl.Wirtschaftsinformatik, 4 years IT Consultant, 6 years MediaSaturn: SupplyChain Testing, Business & techn. Analysis","frontend developer","my BMW ;-)","Everything that remains, Der Schwarm","","trierdo",""],
    ["Pe00008",5,"brueckls@mediamarktsaturn.com","L","brueckls@mediamarktsaturn.com","Stefan B.","start_Pe00008.html, verschoben, gelöscht, lokal gelöscht","","Stefan","","backend","","3 Jahre Ausbildung zum Fachinformatiker, 1 Jahr Administrator im Bereich DWH","backend engineer","Fußball, Videogames, Snowboarden","","Stefan Brückl","Rookez",""],
    ["Pe00009",7,"ilies.bourib@googlemail.com","M","bourib@mediamarktsaturn.com","Ilies","start_Pe00009.html, verschoben, gelöscht, lokal gelöscht","","Mariana","Displayport Kabel, 2.ter Monitor","frontend","yes","5 Jahre Bachelor of Science (Wirtschaftsinformatik) IT Support Supply Chain, Sales Document and Cashregistersupport","become frontend developer","Fußball, Videogames, Reisen","","","",""],
    ["Pe00010",8,"nestlerf@mediamarktsaturn.com","M","nestlerf@mediamarktsaturn.com","Florian","start_Pe00010.html, verschoben, gelöscht","","Mariana","","backend","yes","Ausbildung zum Informatikkaufmann, danach tätig im Bereich DWH für die Themen FOS/VLF, Inventur und 2nd Level Support","Data Engineer","Fitness, Videogames","","","",""],
    ["Pe00011",9,"c.pinto@gmx.de","M","pintocr@mediamarktsaturn.com","Cristiano","start_pe00011.html, verschoben, gelöscht","","Mariana","","backend","yes","Bachelor of Science (Business Informatics) 1.5 years test automation (Selenium), 6 months ETL Process","backend engineer","Fitness, Videogames, Fußball, Reisen","","","",""],
    ["Pe00012",13,"Denni931@gmail.com","M","demundd@mediamarktsaturn.com","Dennis","start_pe00012.html, verschoben, gelöscht","","Marco","Docking Station (mit USB-C Anschluss, die neue also), 2 Display Port Kabel, zusätzlicher Monitor (HP E232e)","backend","yes","Ausbildung Fachinformatiker Anwendungsentwicklung, 1,5 Jahre Administration des Testumfelds, Automatisierung der Deployments","backend engineer","Schwimmen, Volleyball, Snowboarden, Videogames, Musik","","Dennis Demund","dennisdemund",""],
    ["Pe00013",12,"grulke.stefan@gmail.com","XXX?L","grulke@mediamarktsaturn.com","Stefan","","Salami+ Pilze","Marco","Docking Station, HDMI auf Displayport/DVI Kabel","backend","yes","4 Jahre Diplom Informatik/Bachelor Wirtschaftsinformatik, 5 Jahre Server Administration, 3 Jahre Mediasaturn Application Services Store","backend engineer","Radfahren, Videogames, Tischtennis","Per Anhalter durch die Galaxis, Cody McFadyen - Bücher","","",""],
    ["Pe00014",3,"dariabaniewicz@gmail.com","M","baniewiczd@mediamarktsaturn.com","Daria","start_Pe00014.html verschoben, gelöscht","","Stefan","VGA/HDMI Adapter oder Docking Station","backend","yes","Dipl.Wirtschaftsingenieurwesen, 18 Jahre MediaSaturn: Entwicklung, Analyse Masterdata","backend engineer","Landhaus, Garten, Natur, Wald, Hund","Olga Tokarczuk, Alice Munro","","",""],
    ["Pe00015",6,"vanessahrens@googlemail.com","S","","Vanessa","start_Pe00015.html, verschoben, gelöscht","","Mariana","Docking Station (HP Elite Notebook 840G3), Tastatur","backend","yes","Bachelor of Arts, 2 Jahre Supply Chain Manager Bayer Pharma, 3 Jahre Krones Unternehmensstrategie Projekte, 3 Jahre MMS Controlling","backend engineer","Musizieren (Harfe), Laufen, Aquarellmalerei","Alles von den Bronte-Schwestern, Sebastian Haffner, Golo Mann","","",""],
    ["Pe00016",15,"jakob.primosch@gmail.com","M","primosch@mediamarktsaturn.com","Jakob","start_Pe00016.html, verschoben, ","","Marco","2.ter Monitor, HP E 233","backend","yes","Bachelor BWL, 4 Jahre Bankencontrolling, 2 Jahre MMS","backend engineer","Tennis, Sport, Lesen, Klavier, Videogames","Siddharta (Hesse), Alles von Thomas Bernhard, Das Schloss (Kafka)","","Jakobpri",""],
    ["Pe00017",16,"mmsjohannesn@gmail.com","L","neumeierj@mediamarktsaturn.com","Johannes","start_Pe00017.html, verschoben, gelöscht, lokal löschen","","Mariana","","unbekannt","yes","Ausbildung Fachinformatiker für Systemintegration, 1 Jahr Customizing Oracle Service Cloud","developer","","","Johannes Neumeier","mmsjohannesn",""],
    ["Pe00018","","englertheiko@googlemail.com","L","englert@mediamarktsaturn.com","Heiko","start_Pe00018.html, verschoben, gelöscht","","Marco","Dockingstation für HP Elitebook  840GS, 2.Monitor + Kabel dazu","unbekannt","yes","Ausbildung zum Bankkaufmann, 1 Jahr Weiterbildung zum \"Webmaster\", 18 Jahre bei Media-Saturn, Bereich Rolloutmanagenment/ Deployment Koordination.","developer","Motorrad, Tierschutz, Wandern","","Heiko Englert","",""],
    ["Pe00019","","","","","Yvonne","start_Pe00019.html, verschoben, gelöscht","","Marco","Dockingstation für HP Elitebook 850G3","backend","yes","","backend engineer","","","","",""]
]

const tableHeaderArray = playersDataArray[0];

console.log(tableHeaderArray);
/*
for (let zaehler = 0;zaehler<tableHeaderArray.length;zaehler++){
    spaltenkopfHTML=spaltenkopfHTML+"<th>"+ tableHeaderArray[zaehler]+"</th>";
}

let addOneMoreTHTag = function (tagData){
    spaltenkopfHTML += `<th>${tagData}</th>`;
}
console.log(typeof addOneMoreTHTag);
tableHeaderArray.forEach(addOneMoreTHTag);

tableHeaderArray.forEach(
    function(tagData) {
        spaltenkopfHTML += `<th>${tagData}</th>`;
    }
)
*/
tableHeaderArray.forEach(
    (tagData) => {
        spaltenkopfHTML += `<th>${tagData}</th>`;
    }
)


let playersDataArrayWithoutLabels = Array.from(playersDataArray);
playersDataArrayWithoutLabels.shift();

playersDataArrayWithoutLabels.forEach(
    (personalDataArray) => {
        spielerHTML+=`<tr>`;
        personalDataArray.forEach(
           function(spielerInformation){
               spielerHTML+=`<td>${spielerInformation}</td>`;
           } 
        )
        spielerHTML+="</tr>";
    }
)

document.getElementById("playersTableHead").innerHTML = spaltenkopfHTML;
document.getElementById("playersTableBody").innerHTML = spielerHTML;
