let $ = document;

const btnFrosh = $.getElementById("forosh-btn");
let cartElem = $.querySelector(".cart");
const btnSabt = $.getElementById("add");
let alertElem = $.getElementById("alert");
let H6 = $.getElementById("h6");
const btnPak = $.getElementById("clear");
let containerBtn = $.querySelector(".sabt");
let kharidinput = $.getElementById("kharidar");
let pardahktinput = $.getElementById("naghdi");
let ghabzinput = $.getElementById("ghabz");
let HederCardAsli = $.getElementById("heder-asli");
//////////////////////////////////////////////////////////////
let VaznInput = $.getElementById("vazn");
let AdressInput = $.getElementById("adres");
let FiyInput = $.getElementById("fiy");
const Btnparkardan = $.getElementById("parkardan");
let cartElemPar = $.querySelector(".par");
let alertElempar = $.getElementById("alert-par");
let containerBtnpar = $.querySelector("#sapt-par");
var VaznInput1 = $.getElementById("hed");
const BtnsabtData = $.getElementById("sabt-btn");

///////////////////////////////////////////////////////برای دکمه ایجاد زمین
const addNewzamin = $.getElementById("add-jadid");
let NameNewZamin = $.getElementById("add-namezamin");
const btnTaid = $.getElementById("taid");
let Olnewzamin = $.getElementById("nav-zamin");
const BtnClose = $.getElementById("close");
let Time = $.getElementById("tarihk");

////////////////////////////////////////////////////////صفحه جدید
let VaznInputElem = $.getElementById("vazn1");
let FiyInputElem = $.getElementById("fiy2");
//////کد برای ساعت////////////////////////////////////////
let hoursElem = document.getElementById("hours");
let minElem = document.getElementById("min");
let secElem = document.getElementById("sec");
let inputAddZamin = $.getElementById("add-input");

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
////////دکمه فروش/////////////////////////////////////////////////////////////
function showCart() {
  cartElem.style.display = "block";
  cartElemPar.style.display = "none";
  let newBtnforosh, newBtnpak, newH6, newI;
  removeAll();
  function removeAll() {
    kharidinput.value = "";
    pardahktinput.value = "";
    ghabzinput.value = "";
    alertElem.innerHTML = "";
    containerBtn.innerHTML = "";
  }

  newH6 = $.createElement("h6"); //////////ایجاد هدر کارت
  newH6.id = "h6";
  newH6.innerHTML = "اطلاعات رو وارد نماید!";

  newI = $.createElement("button"); ///ایجاد علامت close
  newI.className = "btn btn-close ps-1 mt-1 ";
  alertElem.append(newH6, newI);
  newI.addEventListener("click", function () {
    containerBtn.innerHTML = "";
    newH6.remove();
    inputColorremove();
    cartElem.style.display = "none";
  });

  alertElem.style.backgroundColor = " #e5ccf6";

  newBtnforosh = $.createElement("button"); //////دکمه ثبت
  newBtnforosh.id = "add";
  newBtnforosh.type = "button";
  newBtnforosh.innerHTML = "ثبت";
  newBtnforosh.addEventListener("click", seveInformtion);

  newBtnpak = $.createElement("button"); ////// دکمه پاک کردن
  newBtnpak.id = "clear";
  newBtnpak.type = "button";
  newBtnpak.innerHTML = "پاک کردن";

  containerBtn.append(newBtnforosh, newBtnpak);
  newBtnpak.addEventListener("click", function () {
    ////خالی کردن اینپوت ها با دکمه پاک
    kharidinput.value = "";
    pardahktinput.value = "";
    ghabzinput.value = "";
  });

  function seveInformtion() {
    if (kharidinput.value && pardahktinput.value && ghabzinput.value) {
      ////برای ایجاد دکمه های جدید و بستن
      let newBtnjadid;

      alertElem.style.backgroundColor = "#a8ff89";
      newH6.innerHTML = "با موفقیت ثبت شد";
      inputColor();

      newBtnjadid = $.createElement("button"); /////دکمه جدید
      newBtnjadid.type = "button";
      newBtnjadid.id = "jadid";
      newBtnjadid.innerHTML = "جدید";

      containerBtn.append(newBtnjadid);

      newBtnforosh.remove();
      newBtnpak.remove();

      newBtnjadid.addEventListener("click", refersh); ////  مربوط به کلید جدید و خالی کردن اینپوت ها
      function refersh() {
        containerBtn.innerHTML = "";
        newH6.remove();
        kharidinput.value = "";
        pardahktinput.value = "";
        ghabzinput.value = "";
        inputColorremove();
        showCart();
      }

      function inputColor() {
        kharidinput.style.borderColor = "#a8ff89";
        pardahktinput.style.borderColor = "#a8ff89";
        ghabzinput.style.borderColor = "#a8ff89";
      }
    } else {
      alert("لطفا همه فیلدها را پر کنید");
    }
  }
  function inputColorremove() {
    kharidinput.style.borderColor = "#E1BEE7";
    pardahktinput.style.borderColor = "#E1BEE7";
    ghabzinput.style.borderColor = "#E1BEE7";
  }
}
////////////////////////////////////////////// seve indexeDB
// ///////------------------------------بخش وارایش شده با دیتابیس جدید -------------------
let ClearDB = $.getElementById("clearDB");
ClearDB.addEventListener("click", clearDB);
function clearDB() {
  let req = indexedDB.deleteDatabase("zafrankar");
  req.addEventListener("error", (err) => {
    console.warn("req err deletDB", err);
  });
  req.addEventListener("success", (event) => {
    console.log("req succ deletDB", event);
  });
}
//  -------------------------------------------------پاک کردن نام از خود دیتابس
let containerAryy = [];
let dataB = null;
let ObjectStor = null;
let AllData =[]

function TaidZamin() {
  if (inputAddZamin.value) {
    INdexedDB();
  } else {
    alert("یک نام برای زمین اتخاب کنید");
  }
}

function INdexedDB() {
  let newBoxobj = {
    id: containerAryy.length + 1,
    NameZamin: inputAddZamin.value,
  };
 if (inputAddZamin.value) {
  
   containerAryy.push(newBoxobj);
 }
  
console.log(containerAryy);
  // -------------------------------------------------
  let verjen = containerAryy.length + 1;
 
if (containerAryy.length >= 1) {


    let DB = indexedDB.open("zafrankar", verjen);


  DB.addEventListener("error", (err) => {
    console.warn(err);
  });
  DB.addEventListener("success", (event) => {
    console.log("open success :" , event);
    dataB = event.target.result;
  });
  DB.addEventListener("upgradeneeded", (event) => {
    console.log("open upgradeneeded");
    dataB = event.target.result;
    if (!dataB.objectStoreNames.contains(newBoxobj.NameZamin)) {
    
      objectStore = dataB.createObjectStore(newBoxobj.NameZamin, {
        keyPath: "userId",
      });
    }
  });
}

  // -------------------------------------------------
  setLocalNameZamin(containerAryy);
  NameNewZamin.style.display = "none";
}

function savearry() {
  if (VaznInputElem.value && FiyInputElem.value) {
    let newBoxobj3 = {
      userId: Math.floor(Math.random() * 999),
      vazn: VaznInputElem.value,
      data: Time.value,
      fiy: FiyInputElem.value,
    };
    let tx = dataB.transaction(result, "readwrite");
    
    tx.addEventListener("error", (err) => {
      console.warn("tx error", err);
    });

    tx.addEventListener("complete", (event) => {
      console.log("tx complete", event);
    });

    let stors = tx.objectStore(result);
    let reqest = stors.add(newBoxobj3);
    reqest.addEventListener("error", (err) => {
      console.warn("reqest erroe", err);
    });
    reqest.addEventListener("success", (event) => {
      console.log("reqest success :", event);
      getNameDB();
      clear();
    });
  } else {
    alert("همه فیلدها باید پر شوند");
  }
}



function getNameDB() {
  let tx = dataB.transaction(result, "readonly");
  
  tx.addEventListener("error", (err) => {
    console.warn("tx error readonly", err);
  });

  tx.addEventListener("complete", (event) => {
    console.log("tx complet readonly", event);
  });

  let stors = tx.objectStore(result);
  let reqestget = stors.getAll();
  reqestget.addEventListener("error", (err) => {
    console.warn("reqestget", err);
  });
  reqestget.addEventListener("success", (event) => {
  AllData = event.target.result;
    console.log("reqestget", event);
    getAllData ()
  });
  
}

function getAllData (){
let newgetgetAllData = AllData
localStorage.setItem("newdata", JSON.stringify(newgetgetAllData));
console.log(newgetgetAllData);
 
}
function clear() {
 
  VaznInputElem.value = "";
  FiyInputElem.value = "";
}

//////////////////دکمه پرکردن////////////////////////////////////////////////////////////
function PAR() {
  let newH66, newI, newBtnSabt;
  cartElem.style.display = "none";
  cartElemPar.style.display = "block";
  refershpar();

  newH66 = $.createElement("h6"); //////////ایجاد هدر کارت
  newH66.id = "h6";
  newH66.innerHTML = "اطلاعات رو وارد نماید!";

  newI = $.createElement("button"); ///ایجاد علامت close
  newI.className = "btn btn-close ps-1 mt-1 ";
  alertElempar.append(newH66, newI);

  alertElempar.style.backgroundColor = " #e5ccf6";

  newI.addEventListener("click", function () {
    newH66.remove();
    newI.remove();

    cartElemPar.style.display = "none";
  });

  newBtnSabt = $.createElement("button"); //////دکمه ثبت
  newBtnSabt.id = "add";
  newBtnSabt.type = "button";
  newBtnSabt.innerHTML = "ثبت";
  containerBtnpar.append(newBtnSabt);
  newBtnSabt.addEventListener("click", function () {
    if ((VaznInput.value, AdressInput.value, FiyInput.value)) {
      VaznInput.style.borderColor = "#a8ff89";
      AdressInput.style.borderColor = "#a8ff89";
      FiyInput.style.borderColor = "#a8ff89";
      alertElempar.style.backgroundColor = "#a8ff89 ";
      newH66.innerHTML = "اطلاعات با موفقیت ثبت شد";
    } else {
      alert("لطفا همه فیلدها رو با دقت کامل کنید");
    }
  });
  function refershpar() {
    VaznInput.style.borderColor = "#e5ccf6";
    AdressInput.style.borderColor = "#e5ccf6";
    FiyInput.style.borderColor = "#e5ccf6";
    alertElempar.innerHTML = "";
    containerBtnpar.innerHTML = "";
  }
}

function Addzamin() {
  window.location.reload();
}

window.addEventListener("load", showAddZamin);
function showAddZamin() {
  NameNewZamin.style.display = "flex";
  inputAddZamin.value = "";
  inputAddZamin.focus();
}

function setLocalNameZamin(containerAryy) {
  localStorage.setItem("nameZamin", JSON.stringify(containerAryy));
  Generator(containerAryy);
}

function Generator(containerAryy) {
  let nweli, newA;
  Olnewzamin.innerHTML = "";
  containerAryy.forEach(function (containerAryy) {
    nweli = $.createElement("li");
    nweli.className = "nav-item";

    newA = $.createElement("a");
    newA.className = "nav-link";
    newA.innerHTML = containerAryy.NameZamin;
    newA.style.cursor = "pointer";
    nweli.append(newA);
    Olnewzamin.append(nweli);

    nweli.setAttribute("onclick", "setMeno(" + containerAryy.id + ")");

    inputAddZamin.value = "";
  });
}
var Index;
let result;
function setMeno(containerAryyId) {
  let getNeme = JSON.parse(localStorage.getItem("nameZamin"));
  containerAryy = getNeme;
  Index = getNeme.findIndex(function (containerAryy) {
    return containerAryy.id === containerAryyId;
  });
  result = getNeme[Index].NameZamin; //با شماره ایندکس ایتم ارایه راپیدا می کنیم و با .NameZamin مقدار ایتم مورد نظر  را
  HederCardAsli.innerHTML = result;
  getNameDB();
}

function getNameZamin() {
  
    
    let getNeme = JSON.parse(localStorage.getItem("nameZamin"));
    if (getNeme) {
      containerAryy = getNeme;
      Generator(getNeme);
      HederCardAsli.innerHTML = containerAryy[0].NameZamin;
      
   }
   else {
    containerAryy = [];
  }
}
// function get0 () {
//    var get00 = localStorage.getItem (HederCardAsli.innerHTML)
//    containerAryy0 = get00
//    console.log(containerAryy0);
// }

window.addEventListener("load", getNameZamin);

inputAddZamin.addEventListener("keydown", function (event) {
  /////برای زدن ذکمه اینتر و ثبت زمین
  if (event.keyCode === 13) {
    TaidZamin();
  }
});
///////////////////////////////////////////////////////////////////////منو رفتن به صفحه دیگر

/////////////////////////////////////////////////////////////////
BtnsabtData.addEventListener("click", savearry);
btnTaid.addEventListener("click", TaidZamin);
BtnClose.addEventListener("click", function () {
  inputAddZamin.value = ''
  NameNewZamin.style.display = "none";
  INdexedDB();
});
addNewzamin.addEventListener("click", Addzamin);
Btnparkardan.addEventListener("click", PAR);
/////////////////// برای دکمه ثبت

btnFrosh.addEventListener("click", showCart);

//--------------------------------
function createTX(nameStor, mode) {
  let tx = dataB.transaction(nameStor, mode);

  tx.addEventListener("error", (err) => {
    console.warn("tx", err);
  });

  tx.addEventListener("complete", (event) => {
    console.log("tx", event);
  });

  return tx;
}
