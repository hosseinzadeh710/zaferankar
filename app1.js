let Ulnewzamin = document.getElementById("nav-zamin2");
let MenoBtn = document.getElementById("joziyat");
let H2 = document.querySelector(".h2");
let H3 = document.querySelector(".h3");
let Tbody = document.getElementById("tbody");
let TimeElem = document.getElementById("tarihk-shamsy");

let inputAddZamin = document.getElementById("add-input");
let totalVazn = document.getElementById("total-vazn");
let totalpardakht = document.getElementById("total-pardakht");
let totalmande = document.getElementById("total-mande");
var daryaftiElemFactor = document.getElementById("daryafti");
var mandehElemFactor = document.getElementById("mandeh");
let namekharidarElem = document.getElementById("namekharidar");

const btnFrosh = document.getElementById("forosh-btn");
let ListElem = document.getElementById("kharidar");
let vazngolInputElem = document.getElementById("vazngol");
let ghimatInputElem = document.getElementById("ghimat");
let pardahktinput = document.getElementById("naghdi");
let ghabzinput = document.getElementById("ghabz");
let alertElem = document.getElementById("alert");
let cartElemPar = document.querySelector(".par");
let containerBtn = document.querySelector(".sabt");

let cartElem = document.querySelector(".cart");
let VaznInput = document.getElementById("vazn");
let AdressInput = document.getElementById("adres");
let FiyInput = document.getElementById("fiy");
const Btnparkardan = document.getElementById("parkardan");
let alertElempar = document.getElementById("alert-par");
let containerBtnpar = document.getElementById("sapt-par");
let PElem = document.getElementById("p");

let Catrkharid = document.getElementById("khrid");
let namehknputElem = document.getElementById("namehk");
let phoneinputElem = document.getElementById("phone");
let addersnputElem = document.getElementById("adders");
let btnAddtKharid = document.getElementById("btn-add");
const btnCloseKharid = document.getElementById("btn-close");
const btnsaptkharidar = document.querySelector(".sapt-kharidar");
let headerkharidElem = document.getElementById("h6");
let headerkharidH6 = document.getElementById("h66");

let contaiterSabt = document.getElementById("container-sabt");

let Ulcontainer = document.getElementById("ul-container");

let milElem = document.getElementById("mil");
let heZElem = document.getElementById("heZ");
let tomanElem = document.getElementById("toman");
let ghimatvahed = document.getElementById("ghimat-vahed");
let naghdivahed = document.getElementById("naghdi-vahed");
let ghabzvahed = document.getElementById("ghabz-vahed");
// =========================================================
let NumberphoneElem = document.getElementById("Number-phone");
let AdressElem = document.getElementById("Adress");
let kolfroshElem = document.getElementById("kol-frosh");
let IMG = document.getElementById("img");
// =========================================================
function itpro(Number) {
  Number += "";
  Number = Number.replace(",", "");
  Number = Number.replace(",", "");
  Number = Number.replace(",", "");
  Number = Number.replace(",", "");
  Number = Number.replace(",", "");
  Number = Number.replace(",", "");
  x = Number.split(".");
  y = x[0];
  z = x.length > 1 ? "." + x[1] : "";
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(y)) y = y.replace(rgx, "$1" + "," + "$2");
  return y + z;
}
// <input type="text" id="txtMoney" onkeyup="javascript:this.value=itpro(this.value);" />
// =========================================================

let dataB2 = null;
let contatinerkh = [];
let AllDataUser = [];
let AllDataUserFrosh = [];
let TIME = null;
function showCart() {
  if (AllDataUser.length >= 1) {
    let regiser = /^\d{4}\/(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])$/;
    let regiserValues = regiser.test(TimeElem.value);
    if (regiserValues) {
      TIME = TimeElem.value;
      cartElem.style.display = "block";
      cartElemPar.style.display = "none";
      Catrkharid.style.display = "none";
      let newBtnforosh, newBtnpak, newH6, newI;
      removeAll();
      function removeAll() {
        ListElem.value = "";
        pardahktinput.value = "";
        ghabzinput.value = "";
        vazngolInputElem.value = "";
        ghimatInputElem.value = "";
        alertElem.innerHTML = "";
        containerBtn.innerHTML = "";
      }

      newH6 = document.createElement("h6"); //////////ایجاد هدر کارت
      newH6.id = "h6";
      newH6.innerHTML = `اطلاعات  <span style="color:#fa1212; font-size: large;">فروش</span> رو وارد نماید!`;

      newI = document.createElement("button"); ///ایجاد علامت close
      newI.className = "btn btn-close ps-1 mt-1 ";
      alertElem.append(newH6, newI);
      newI.addEventListener("click", function () {
        containerBtn.innerHTML = "";
        newH6.remove();
        inputColorremove();
        cartElem.style.display = "none";
        PElem.innerHTML = "";
        ghimatvahed.innerHTML = "";
        naghdivahed.innerHTML = "";
        ghabzvahed.innerHTML = "";
        milElem.innerHTML = "";
        tomanElem.innerHTML = "";
      });

      alertElem.style.backgroundColor = " #e5ccf6";

      newBtnforosh = document.createElement("button"); //////دکمه ثبت
      newBtnforosh.id = "add";
      newBtnforosh.type = "button";
      newBtnforosh.innerHTML = "ثبت";
      newBtnforosh.addEventListener("click", seveInformtion);

      newBtnpak = document.createElement("button"); ////// دکمه پاک کردن
      newBtnpak.id = "clear";
      newBtnpak.type = "button";
      newBtnpak.innerHTML = "پاک کردن";

      containerBtn.append(newBtnforosh, newBtnpak);
      newBtnpak.addEventListener("click", function () {
        ////خالی کردن اینپوت ها با دکمه پاک
        ListElem.value = "";
        vazngolInputElem.value = "";
        ghimatInputElem.value = "";
        pardahktinput.value = "";
        ghabzinput.value = "";
        ghimatvahed.innerHTML = "";
        naghdivahed.innerHTML = "";
        ghabzvahed.innerHTML = "";
        milElem.innerHTML = "";
        tomanElem.innerHTML = "";
        PElem.innerHTML = "";
      });

      function seveInformtion() {
        if (
          ListElem.value &&
          pardahktinput.value &&
          ghabzinput.value &&
          vazngolInputElem.value &&
          ghimatInputElem.value
        ) {
          ////برای ایجاد دکمه های جدید و بستن
          let newBtnjadid;
          RWriteFrosh();
          alertElem.style.backgroundColor = "#a8ff89";
          newH6.innerHTML = "با موفقیت ثبت شد";
          inputColor();

          newBtnjadid = document.createElement("button"); /////دکمه جدید
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
            ListElem.value = "";
            pardahktinput.value = "";
            ghabzinput.value = "";
            vazngolInputElem.value = "";
            ghimatInputElem.value = "";
            PElem.innerHTML = "";
            ghimatvahed.innerHTML = "";
            naghdivahed.innerHTML = "";
            ghabzvahed.innerHTML = "";
            inputColorremove();
            showCart();
          }

          function inputColor() {
            ListElem.style.borderColor = "#a8ff89";
            pardahktinput.style.borderColor = "#a8ff89";
            ghabzinput.style.borderColor = "#a8ff89";
            vazngolInputElem.style.borderColor = "#a8ff89";
            ghimatInputElem.style.borderColor = "#a8ff89";
          }
        } else {
          alert("لطفا همه فیلدها را پر کنید");
        }
      }
    } else {
      alert("تاریخ رو به درستی وارد نمایید");
    }
  } else {
    alert("ابتدا نام خریدار را در لیست خریداران وارد نمایید!");
  }
}
var resultghemat, resultghemat2;
function resultTotal() {
  let Namber1, Namber2;
  Namber1 = vazngolInputElem.value;
  Namber2 = ghimatInputElem.value;
  if (vazngolInputElem.value && ghimatInputElem.value) {
    Namber1 = Namber1.replace(/,\s?/g, "");
    Namber2 = Namber2.replace(/,\s?/g, "");
    resultghemat = (Namber1 / 3) * Namber2;

    $("#p").html(Math.floor(resultghemat).toLocaleString("en"));

    AddMilorHezar();

    if (Namber2.length > 3) {
      ghimatvahed.innerHTML = "هزار";
    }
    if (Namber2.length > 6) {
      ghimatvahed.innerHTML = "میلیون";
    }
  }
}

function AddMilorHezar() {
  if (PElem.innerHTML.length > 4) {
    milElem.innerHTML = "هزار";

    tomanElem.innerHTML = "تومان";
  }
  if (PElem.innerHTML.length > 7) {
    milElem.innerHTML = "میلیون ";

    tomanElem.innerHTML = "تومان";
  }
}
let Namber3;
function Vahedpardakt() {
  Namber3 = pardahktinput.value;
  joziyatPardahkt();
  Namber3 = Namber3.replace(/,\s?/g, "");
  if (Namber3.length > 3) {
    naghdivahed.innerHTML = "هزار";
  }
  if (Namber3.length > 6) {
    naghdivahed.innerHTML = "میلیون";
  }
  let Namber4 = resultghemat - Namber3;
  $("#ghabz").val(Math.floor(Namber4).toLocaleString("en"));

  Vahedghabz();
}

function Vahedghabz() {
  let Namber5 = ghabzinput.value;

  Namber5 = Namber5.replace(/,\s?/g, "");
  if (Namber5.length > 3) {
    ghabzvahed.innerHTML = "هزار";
  }
  if (Namber5.length > 6) {
    ghabzvahed.innerHTML = "میلیون";
  }
}
function joziyatPardahkt() {
  // برای جرییات
}
// ------------------------------------------------  ثبت در ایندکس قسمت فروش

function IndexedSabt() {
  let DB3 = indexedDB.open("Box Frosh", 2);

  DB3.addEventListener("error", (err) => {
    console.warn("errorDB3 :", err);
  });

  DB3.addEventListener("success", (event) => {
    console.log("successDB3 :", event);
    dataB3 = event.target.result;
    RonlyFrosh();
  });
  DB3.addEventListener("upgradeneeded", (event) => {
    dataB3 = event.target.result;
    console.log("upgradeneededDB3 :", event);
    if (!dataB3.objectStoreNames.contains("box forosh")) {
      dataB3.createObjectStore("box forosh", {
        keyPath: "userId",
      });
    }
  });
}

function RWriteFrosh() {
  let newOBject2 = {
    userId: Math.floor(Math.random() * 9999),
    data: TIME,
    namekharidar: ListElem.value,
    Vazn: vazngolInputElem.value,
    GHabz: ghimatInputElem.value,
    Mablagh: PElem.innerHTML,
    Pardakhty: pardahktinput.value,
    Mande: ghabzinput.value,
  };

  let transwriteB3 = dataB3.transaction("box forosh", "readwrite");
  transwriteB3.addEventListener("error", (err) => {
    console.warn("errortranswriteB3 :", err);
  });

  transwriteB3.addEventListener("success", (event) => {
    console.log("successtranswriteB3 :", event);
    dataB3 = event.target.result;
  });
  let stors = transwriteB3.objectStore("box forosh");

  let reqestFrosh = stors.add(newOBject2);

  reqestFrosh.addEventListener("error", (err) => {
    console.warn("reqestFrosh error :", err);
  });
  reqestFrosh.addEventListener("success", (event) => {
    console.log("reqestFrosh success :", event);
    RonlyFrosh();
  });
}

function RonlyFrosh() {
  let transonlyFrosh = dataB3.transaction("box forosh", "readonly");

  transonlyFrosh.addEventListener("error", (err) => {
    console.warn("transonlyFrosh error :", err);
  });
  transonlyFrosh.addEventListener("success", (event) => {
    console.log("transonlyFrosh success :", event);
  });

  let storgetFrosh = transonlyFrosh.objectStore("box forosh");
  let reqestonlyFrosh = storgetFrosh.getAll();

  reqestonlyFrosh.addEventListener("error", (err) => {
    console.warn("reqestonlyFrosh", err);
  });
  reqestonlyFrosh.addEventListener("success", (event) => {
    AllDataUserFrosh = event.target.result;
    console.log("reqestonlyFrosh", event);
    RefreshFactor();
  });
}
function getUserlFrosh(AllDataUserFrosh) {
  // RonlyFrosh ()

  resultfrosh = AllDataUserFrosh.filter((userfrosh) => {
    return userfrosh.namekharidar === filterName;
  });

  saveTOtable();
}
let resultfrosh = [];
let containerResulte = [];
// -------------------------------------------------
function inputColorremove() {
  ListElem.style.borderColor = "#E1BEE7";
  pardahktinput.style.borderColor = "#E1BEE7";
  ghabzinput.style.borderColor = "#E1BEE7";
  vazngolInputElem.style.borderColor = "#E1BEE7";
  ghimatInputElem.style.borderColor = "#E1BEE7";
}

function PAR() {
  let newH66, newI, newBtnSabt;
  cartElem.style.display = "none";
  Catrkharid.style.display = "none";
  cartElemPar.style.display = "block";
  refershpar();

  newH66 = document.createElement("h6"); //////////ایجاد هدر کارت
  newH66.id = "h6";
  newH66.innerHTML = "اطلاعات رو وارد نماید!";

  newI = document.createElement("button"); ///ایجاد علامت close
  newI.className = "btn btn-close ps-1 mt-1 ";
  alertElempar.append(newH66, newI);

  alertElempar.style.backgroundColor = " #e5ccf6";

  newI.addEventListener("click", function () {
    newH66.remove();
    newI.remove();
    PElem.innerHTML = "";
    cartElemPar.style.display = "none";
  });

  newBtnSabt = document.createElement("button"); //////دکمه ثبت
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

function kharid() {
  cartElem.style.display = "none";
  Catrkharid.style.display = "block";
  cartElemPar.style.display = "none";
  refershkharid();
}

function sabtkharidar() {
  var Registerr =
    /^09((1[0-9]|9[013])|((3[0-1]|3[3-9])|0[1-5])|(2[0-2]))\d{7}$/g;
  let phoneRegistr = Registerr.test(phoneinputElem.value);
  if (phoneRegistr) {
    REGister = phoneinputElem.value;
    let Allusers = AllDataUser.map((userName) => {
      return userName.nameUser;
    });
    let userss = Allusers.includes(namehknputElem.value);
    if (!userss) {
      RWriteKharidar();
      resultSabt();
    } else {
      alert("این نام از قبل وجود دارد");
    }
  } else {
    alert("شماره نامعتبر است");
  }
}

function resultSabt() {
  if (namehknputElem.value && phoneinputElem.value && addersnputElem.value) {
    namehknputElem.style.borderColor = "#a8ff89";
    phoneinputElem.style.borderColor = "#a8ff89";
    addersnputElem.style.borderColor = "#a8ff89";

    headerkharidElem.style.background = "#a8ff89";
    newh6.innerHTML = "اطلاعات با موفقیت ثبت شد";
    contaiterSabt.innerHTML = "";
  } else {
    alert("لطفا همه فیلدها رو کامل کنید!");
  }
}
// -----------------------------------indexed DB    Box Frosh  BOX kharidar
let ClearDB = document.getElementById("clearDB");
ClearDB.addEventListener("click", clearDBfrohs);
function clearDBfrohs() {
  let req = indexedDB.deleteDatabase("BOX kharidar");
  req.addEventListener("error", (err) => {
    console.warn("req err deletDB", err);
  });
  req.addEventListener("success", (event) => {
    console.log("req succ deletDB", event);
  });
}

function necessary() {
  saveTOindexedDB();
  IndexedSabt();
}
// ------------------- indexeDB
function saveTOindexedDB() {
  let DB2 = indexedDB.open("BOX kharidar", 1);
  DB2.addEventListener("error", (err) => {
    console.warn("errorDB2 :", err);
  });

  DB2.addEventListener("success", (event) => {
    console.log("successDB2 :", event);
    dataB2 = event.target.result;

    RonlyKharidar();
  });
  DB2.addEventListener("upgradeneeded", (event) => {
    dataB2 = event.target.result;
    console.log("upgradeneededDB2 :", event);
    if (!dataB2.objectStoreNames.contains("boxuser")) {
      dataB2.createObjectStore("boxuser", {
        keyPath: "phoneUser",
      });
    }
  });
}

function RWriteKharidar() {
  let newOBject = {
    nameUser: namehknputElem.value,
    phoneUser: REGister,
    adsresUser: addersnputElem.value,
    id: AllDataUser.length + 1,
  };

  let transwrite = dataB2.transaction("boxuser", "readwrite");

  transwrite.addEventListener("error", (err) => {
    console.warn("transwrite error :", err);
  });
  transwrite.addEventListener("success", (event) => {
    console.log("transwrite success :", event);
  });

  let stors = transwrite.objectStore("boxuser");

  let reqestkh = stors.add(newOBject);

  reqestkh.addEventListener("error", (err) => {
    console.warn("reqestkh error :", err);
  });
  reqestkh.addEventListener("success", (event) => {
    console.log("reqestkh success :", event);

    RonlyKharidar();
  });
}

function RonlyKharidar() {
  let transonly = dataB2.transaction("boxuser", "readonly");

  transonly.addEventListener("error", (err) => {
    console.warn("transonly error :", err);
  });
  transonly.addEventListener("complete", (event) => {
    console.log("transonly complete :", event);
  });

  let storget = transonly.objectStore("boxuser");
  let reqestonlykh = storget.getAll();

  reqestonlykh.addEventListener("error", (err) => {
    console.warn("reqestonlykh", err);
  });
  reqestonlykh.addEventListener("success", (event) => {
    AllDataUser = event.target.result;
    console.log("reqestonlykh", event);
    Ulcontainer.innerHTML = "";
    ListElem.innerHTML = "";
    getUserlkharidar(AllDataUser);
  });
}
var filterAdres, filterphone;
function getUserlkharidar(AllDataUser) {
  AllDataUser.map(function (user) {
    Ulcontainer.insertAdjacentHTML(
      "afterbegin",
      `<li class="nav-item">
    <button id="${user.id}" class="btnn m-auto mt-1 mb-1" type="button">${user.nameUser}</button>
</li>`
    );

    ListElem.insertAdjacentHTML(
      "afterbegin",
      `<option id = "${user.id}" > ${user.nameUser} </option>`
    );
  });
  selectuser();
}
// ============================================= RefreshFactor
function RefreshFactor() {
  filterName = ListElem.value;
  factorUser();
  getUserlFrosh(AllDataUserFrosh);
  namekharidarElem.innerHTML = filterName;
}
// =======================================      برای تعین تیترهی فاکتور
let resultFactor = [];
function factorUser() {
  resultFactor = AllDataUser.filter((users) => {
    return users.nameUser === filterName;
  });
  resultFactor.map((Item) => {
    NumberphoneElem.innerHTML = Item.phoneUser;
    AdressElem.innerHTML = Item.adsresUser;
  });
}

// ===========================for select id
// let selectId
// var lists = [];
//     function getValue(value, id)
//     {
//       lists[id] = value;
//         for (i in lists) {
//            selectId = lists[i]
//         }
//     }
// =========================================
let filterId, filterName;
function selectuser() {
  let boxUlcontainer = Ulcontainer.querySelectorAll("li");

  boxUlcontainer.forEach(function (words) {
    words.addEventListener("click", function (event) {
      filterId = event.target.id;

      filterName = event.target.innerHTML;
      factorUser();

      getUserlFrosh(AllDataUserFrosh);

      namekharidarElem.innerHTML = filterName;
    });
  });
}

function refershkharid() {
  namehknputElem.value = "";
  phoneinputElem.value = "";
  addersnputElem.value = "";
  namehknputElem.style.borderColor = "#E1BEE7";
  phoneinputElem.style.borderColor = "#E1BEE7";
  addersnputElem.style.borderColor = "#E1BEE7";
  headerkharidElem.style.background = "#e5ccf6";
  createHederRemove();
  createHeder();
}
let newh6, newbtn, nwesabtbtn;
function createHeder() {
  newh6 = document.createElement("h6");
  newh6.id = "h66";
  newh6.innerHTML =
    'اطلاعات  <span style="color:#fa1212; font-size: large;">خریدار</span> رو وارد نماید!';
  headerkharidElem.append(newh6);

  newbtn = document.createElement("button");
  newbtn.className = "btn btn-close ps-1 mt-1 ";
  newbtn.id = "btn-close";
  newbtn.addEventListener("click", btnCloses);
  headerkharidElem.append(newbtn);

  nwesabtbtn = document.createElement("button");
  nwesabtbtn.className = "sapt-kharidar";
  nwesabtbtn.type = "button";
  nwesabtbtn.id = "add";
  nwesabtbtn.innerHTML = "ثبت";
  nwesabtbtn.addEventListener("click", sabtkharidar);
  contaiterSabt.appendChild(nwesabtbtn);
  IMG.style.display = "none";
}
function createHederRemove() {
  headerkharidElem.innerHTML = "";
  contaiterSabt.innerHTML = "";
}
function btnCloses() {
  Catrkharid.style.display = "none";
  namehknputElem.value = "";
  phoneinputElem.value = "";
  addersnputElem.value = "";
  PElem.innerHTML = "";
  IMG.style.display = "none";
}

function saveTOtable() {
  Tbody.innerHTML = "";
  resultfrosh.forEach((element) => {
    let newtr, newtd, newtd1, newtd2, newtd3, newtd4, newtd5;
    newtr = document.createElement("tr");
    newtd = document.createElement("td");
    newtd.innerHTML = element.data;
    newtd1 = document.createElement("td");
    newtd1.innerHTML = element.Vazn;

    newtd2 = document.createElement("td");
    newtd2.innerHTML = element.GHabz;
    newtd3 = document.createElement("td");
    newtd3.innerHTML = element.Pardakhty;
    newtd4 = document.createElement("td");
    newtd4.innerHTML = element.Mande;
    newtd5 = document.createElement("td");
    newtd5.innerHTML = element.Mablagh;

    newtr.append(newtd, newtd1, newtd2, newtd5, newtd3, newtd4);
    Tbody.append(newtr);
  });
  Total();
}

function Total() {
  let totalvaznElem = 0;
  let totalpardakhtElem = 0;
  let totalmandeElem = 0;
  let totalFrosh = 0;
  resultfrosh.forEach(function (Numbers) {
    totalvaznElem += Numbers.Vazn.replace(/,\s?/g, "") * 1;
    totalpardakhtElem += Numbers.Pardakhty.replace(/,\s?/g, "") * 1;
    totalmandeElem += Numbers.Mande.replace(/,\s?/g, "") * 1;
    totalFrosh += Numbers.Mablagh.replace(/,\s?/g, "") * 1;
  });

  totalVazn.innerHTML = totalvaznElem.toFixed(2);
  $("#total-pardakht").html(Number(totalpardakhtElem).toLocaleString("en"));
  $("#kol-frosh").html(totalFrosh.toLocaleString("en"));
  $("#total-nahay").html(totalFrosh.toLocaleString("en"));
  $("#daryafti").html(Number(totalpardakhtElem).toLocaleString("en"));
  $("#mandeh").html(totalmandeElem.toLocaleString("en"));
  $("#total-mande").html(totalmandeElem.toLocaleString("en"));
}

let REGister = null;
function ImgRegist(event) {
  if (phoneinputElem.value.length >= 4) {
    RegisterHamrahAval = /09(1[0-9]|9[013])/;
    RegisterMTN = /09((3[0-1]|3[3-9])|0[1-5])/;
    RegisterRitel = /09(2[0-2])/;
    let phoneRegistrHAV = RegisterHamrahAval.test(phoneinputElem.value);
    let phoneRegistrMTN = RegisterMTN.test(phoneinputElem.value);
    let phoneRegistrRitel = RegisterRitel.test(phoneinputElem.value);
    if (phoneRegistrHAV) {
      IMG.style.display = "block";
      IMG.src = "./img/hamrah1.jpg";
    }
    if (phoneRegistrMTN) {
      IMG.style.display = "block";
      IMG.src = "./img/mtn.png";
    }
    if (phoneRegistrRitel) {
      IMG.style.display = "block";
      IMG.src = "./img/rightel.jpg";
    }
  } else {
    IMG.style.display = "none";
  }
}

// window.addEventListener("load", NextPage );
phoneinputElem.addEventListener("keyup", ImgRegist);
btnFrosh.addEventListener("click", showCart);
Btnparkardan.addEventListener("click", PAR);
btnAddtKharid.addEventListener("click", kharid);
window.addEventListener("load", necessary);
ghimatInputElem.addEventListener("keyup", resultTotal, itpro);
pardahktinput.addEventListener("keyup", Vahedpardakt);
// ghabzinput.addEventListener ('keyup' , Vahedghabz)
