var $ = document
let Ulnewzamin = $.getElementById("nav-zamin2");
let MenoBtn = $.getElementById("joziyat");
let H2 = $.querySelector ('.h2')
let H3 = $.querySelector ('.h3')
let Tbody =  $.getElementById ('tbody')


let hoursElem = document.getElementById("hours");
let minElem = document.getElementById("min");
let secElem = document.getElementById("sec");
let inputAddZamin = $.getElementById("add-input");
let totalVazn = $.getElementById ("total-vazn")
let totalFrosh = $.getElementById ("total-frosh")

setInterval(function () {
  var myData = new Date();
  var myhours = myData.getHours();
  var mymin = myData.getMinutes();
  var mysec = myData.getSeconds();

  if (myhours < 10) {
    myhours = "0" + myhours;
  }
  if (mymin < 10) {
    mymin = "0" + mymin;
  }
  if (mysec < 10) {
    mysec = "0" + mysec;
  }

  hoursElem.innerHTML = myhours;
  minElem.innerHTML = mymin;
  secElem.innerHTML = mysec;
}, 1000);




var containerAryy2 = []
function NextPage() {
        let getNeme = JSON.parse(localStorage.getItem("nameZamin"));
        containerAryy2 = getNeme;
        Generator2 (containerAryy2)
  }

  function Generator2 (containerAryy2){
    let nweli , newA 
    containerAryy2.forEach(function (containerAryy2) {
        nweli = $.createElement("li");
        nweli.className = "nav-item";
    
        newA = $.createElement("a");
        newA.className = "nav-link";
        newA.innerHTML = containerAryy2.NameZamin;
        newA.style.cursor = "pointer";
        newA.style.fontSize = '16px'
        newA.addEventListener ('click' , getinnerHtml )
        nweli.append(newA);
        Ulnewzamin.append(nweli);
        
        

  })
}

let newarry = []
function getinnerHtml (event) {
    let informatioZamin = JSON.parse(localStorage.getItem(event.target.innerHTML));
    newarry = informatioZamin
      console.log(informatioZamin);
     
    saveTOtable ()
}
function saveTOtable () {
    Tbody.innerHTML = ''
   for (let index = 0; index < newarry.length; index++) {
    const element = newarry[index];
    let newtr , newtd , newtd1 , newtd2 ,newtd3
    newtr = $.createElement ('tr')
    newtd = $.createElement ('td')
    newtd . innerHTML = element.data
    newtd1 = $.createElement ('td')
    newtd1 . innerHTML = element.vazn
    
    newtd2 = $.createElement ('td')
    newtd2 . innerHTML = element.fiy
     newtd3 = $.createElement ('td')
    newtd3 .innerHTML = (element.vazn) * (element.fiy)
     newtr.append (newtd , newtd1 , newtd2 , newtd3)
     Tbody.append (newtr)
   }

   Total ()
     
 }
  
 function Total (){
    let totalvaznElem = 0
    let totalFroshElem = 0
    newarry.forEach(function (Numbers){
        totalvaznElem += Numbers.vazn * 1
        totalFroshElem += Numbers.vazn * Numbers.fiy
    })
    totalVazn.innerHTML = totalvaznElem 
    totalFrosh.innerHTML = totalFroshElem
    
}
  
  window.addEventListener("load", NextPage );