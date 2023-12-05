
let Ulnewzamin = document.getElementById("nav-zamin2");

let MenoBtn = document.getElementById("joziyat");
let H2 = document.querySelector(".h2");
let H3 = document.querySelector(".h3");
let Tbody = document.getElementById("tbody");
let TimeElem = document.getElementById("tarihk-shamsy3");

let totalVazn = document.getElementById("total-vazn");
let totalpardakht = document.getElementById("total-pardakht");
let totalmande = document.getElementById("total-mande");
let totalNahayi = document.getElementById("total-nahay");

let daryaftiElemFactor = document.getElementById("daryafti");
let mandehElemFactor = document.getElementById("mandeh");
let namekharidarElem = document.getElementById("namekharidar");

const btnFrosh = document.getElementById("forosh-btn");
let ListElem = document.getElementById("kharidar");
let vazngolInputElem = document.getElementById("vazngol");
let ghimatInputElem = document.getElementById("ghimat");

// let ghabzinput = document.getElementById("ghabz");
let alertElem = document.getElementById("alert");
// let cartElemPar = document.querySelector(".par");
let containerBtn = document.querySelector(".sabt");

let cartElem = document.querySelector(".cart");
let VaznInput = document.getElementById("vazn");
let AdressInput = document.getElementById("adres");
let FiyInput = document.getElementById("fiy");
const Btnparkardan = document.getElementById("parkardan");
let alertElempardahkty = document.getElementById("alert-pardahkty");
let CardPardahkt = document.getElementById("sapt-pardahkt");
let PElem = document.getElementById("p");
let resoltList = document.getElementById("resolt-list");

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
// let naghdivahed = document.getElementById("naghdi-vahed");
let ghabzvahed = document.getElementById("ghabz-vahed");
//==========================================================
let vforoshElem = document.getElementById("v-forosh");
let vdaryaftiElem = document.getElementById("v-daryafti");
let vmandehElem = document.getElementById("v-mandeh");
// =========================================================
let NumberphoneElem = document.getElementById("Number-phone");
let AdressElem = document.getElementById("Adress");
let kolfroshElem = document.getElementById("kol-frosh");
let IMG = document.getElementById("img");
// ========================================================= alert
var BoxAlert = document.getElementById("box-alert");
const BtnYes = document.querySelector(".btn-yes");
const BtnNo = document.getElementById("btn-No");
let alerttime = document.getElementById("alert-time");
let alertvazn = document.getElementById("alert-vazn");
let alertmablagh = document.getElementById("alert-mablagh");
let alertname = document.getElementById("alert-name");
const BtnYesuser = document.querySelector(".yes-user-Delet");
const BtnNouser = document.getElementById("No-user-Delet");

let cardBdehcar = document.getElementById ('card-bdehcar')
let numbedehkar = document.getElementById ('num-bedehkar')
let vahedbedehkar = document.getElementById ('vahed-bedehkar')
let ClearDB = document.getElementById("delet-All");
//--------------------------------------- for print
let hederBOX = document.querySelector(".nav-heder-box");
let PrintElem = document.getElementById("print");
let BoxPrint = document.getElementById("Boxprint");
let NavPrint = document.getElementById("nav");
let Print2 = document.getElementById("print2");
let Print3 = document.getElementById("print3");
var ClosePrint = document.getElementById("close-print");
var ClosePrintjoz = document.getElementById("close-jozyate");
var CloseIconjoz = document.querySelector(".btn-clo-joz");
let containerPrint = document.getElementById("cont-print");
let printJozyate = document.getElementById("print-jozyate");
let TrashImg = document.querySelectorAll("trash-img");

// =========================================================
let newBtnforosh, newBtnpak, newH6, newI;

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

// =========================================================
let dataB3 = null;
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
      CartPardahkt.style.display = 'none'
      Catrkharid.style.display = "none";
      
      removeAll();
      function removeAll() {
        ListElem.value = "";
        // ValueDaryaft.innerHTML = "";
        // ghabzinput.value = "";
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
      newI.addEventListener("click", CloseMeno) 
     

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
        // ValueDaryaft.innerHTML = "";
        // ghabzinput.value = "";
        ghimatvahed.innerHTML = "";
        VahedNaghdy2.innerHTML = ""
        // ghabzvahed.innerHTML = "";
        milElem.innerHTML = "";
        tomanElem.innerHTML = "";
        PElem.innerHTML = "";
      });

      function seveInformtion() {
        if (
          ListElem.value &&
          vazngolInputElem.value &&
          // ValueDaryaft.innerHTML &&
          ghimatInputElem.value 
          // ghabzinput.value 
        ) {
          resultTotal()
          RWriteFrosh();
        } else {
          Swal.fire('لطفا همه فیلدها را پر کنید')
        }
      }
    } else {
      
      Toast.fire({
        icon: 'warning',
        title: 'تاریخ رو به درستی وارد نمایید'
      })
    }
  } else {
    Swal.fire('ابتدا نام خریدار را در لیست خریداران وارد نمایید')
   
  }
} 
function CloseMeno(){
  resoltList.innerHTML = ''
  containerBtn.innerHTML = "";
  newH6.remove();
  inputColorremove();
  cartElem.style.display = "none";
  PElem.innerHTML = "";
  ghimatvahed.innerHTML = "";
  // VahedNaghdy2.innerHTML = ""
  // ghabzvahed.innerHTML = "";
  milElem.innerHTML = "";
  // tomanElem.innerHTML = "";
  TimeElem.value = "";
}

function sabtRedRwrite(){
  alertElem.style.backgroundColor = "#a8ff89";
  newH6.innerHTML = "با موفقیت ثبت شد";
  inputColor();
  filterName = ListElem.value;
  getUserlFrosh(AllDataUserFrosh);
  inputColor()
  newBtnforosh.remove();
  newBtnpak.remove();

}

function inputColor() {
  ListElem.style.borderColor = "#a8ff89";
  // Addmoney.style.borderColor = "#a8ff89";
  // ghabzinput.style.borderColor = "#a8ff89";
  vazngolInputElem.style.borderColor = "#a8ff89";
  ghimatInputElem.style.borderColor = "#a8ff89";
  setTimeout(CloseMeno , 500)
  Toast.fire({
    icon: 'success',
    title: 'اطلاعات با موفقیت ثبت شد'
  })
}

let resultghemat, resultghemat2 ;
function resultTotal() {
 let ReplaceGhamat =ghimatInputElem.value .replace(/,\s?/g, "");
  if (Number.isInteger(Number(ReplaceGhamat))) {
    let Namber1, Namber2;
  Namber1 = vazngolInputElem.value;
  Namber2 = ghimatInputElem.value;
  if (vazngolInputElem.value && ghimatInputElem.value) {
    Namber1 = Namber1.replace(/,\s?/g, "");
    Namber2 = Namber2.replace(/,\s?/g, "");
    resultghemat = (Namber1 / 3) * Namber2;

    $("#p").html(Math.floor(resultghemat).toLocaleString("en")  );
    $("#resolt-list").html( 'کل فروش لیست :'+ '       '  );
    milElem.innerHTML = Num2persian(Math.floor(resultghemat)) + ' '+ 'تومان'

  } else{
    PElem.innerHTML = ''
    milElem.innerHTML = ''
    ghimatvahed.innerHTML = ''
    
  }
  ghimatvahed.innerHTML = Num2persian(Namber2) + ' '+ 'تومان'
  } else {
    ghimatvahed.innerHTML = 'فقط عدد وارد شود'
    PElem.innerHTML = ''
    milElem.innerHTML = ''
    ghimatInputElem.value = ''
  }
}


let Namber3;
// function Vahedpardakt() {
//   Namber3 = ValueDaryaft.innerHTML;
  
//   Namber3 = Namber3.replace(/,\s?/g, "");
//   let Namber4 = resultghemat - Namber3;
//   if (Namber4 > 0 ) {
    
//     $("#ghabz").val(Math.floor(Namber4).toLocaleString("en"));
//   }else {
//     $("#ghabz").val(0)
//   }

//   Vahedghabz();
// }

// function Vahedghabz() {
//   let Namber5 = ghabzinput.value;

//   Namber5 = Namber5.replace(/,\s?/g, "");
//   ghabzvahed.innerHTML = Num2persian(Namber5) + ' ' + 'تومان'

// }

// ------------------------------------------------  ثبت در ایندکس قسمت فروش

function IndexedSabt() {
  let DB3 = indexedDB.open("Box Frosh",5);

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
      dataB3.createObjectStore("box forosh",  {keyPath: 'id', autoIncrement: true},);
    }
  });
}

function RWriteFrosh() {
  let newOBject2 = {
    // userId: Math.floor(Math.random() * 9999),
    data: TIME,
    namekharidar: ListElem.value,
    Vazn: vazngolInputElem.value,
    GHabz: ghimatInputElem.value,
    Mablagh: PElem.innerHTML,
    // Pardakhty: ValueDaryaft.innerHTML,
    // Mande: ghabzinput.value,
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
    sabtRedRwrite()
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
let UserDelet 
function getUserlFrosh(AllDataUserFrosh) {
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
  // ValueDaryaft.style.borderColor = "#E1BEE7";
  // ghabzinput.style.borderColor = "#E1BEE7";
  vazngolInputElem.style.borderColor = "#E1BEE7";
  ghimatInputElem.style.borderColor = "#E1BEE7";
  // Addmoney.style.borderColor = "#E1BEE7"
}

//==================================================== for box kharidar

function kharid() {
  cartElem.style.display = "none";
  Catrkharid.style.display = "block";
  CartPardahkt.style.display = "none";
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
    let userss = Allusers.includes(namehknputElem.value.toLowerCase());
    if (!userss) {
      RWriteKharidar();
      resultSabt();
    } else {
      Swal.fire("این نام از قبل وجود دارد")
    }
  } else {
    Swal.fire("شماره تلفن نامعتبر است")
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
    setTimeout(btnCloses , 1000)
  } else {
    Swal.fire("لطفا همه فیلدها رو کامل کنید!")
  }
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
    'اطلاعات  <span style="color:#fa1212; font-size: 15px;">خریدار</span> رو وارد نماید!';
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
// -----------------------------------indexed DB    Box Frosh  BOX kharidar
ClearDB.addEventListener("click", AlertDeletDB);
function AlertDeletDB() {
  Swal.fire({
    title: 'هشدار',
    text: "آیا از حذف کلیه اطلاعات ثبت شده در این نرم افزار مطمئن هستید؟؟",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonText: 'خیر',
    cancelButtonColor: '#d33',
    confirmButtonText: 'بله'
  }).then((result) => {
    if (result.isConfirmed) {
      clearDBase()
      Swal.fire(
        'Deleted!',
        'اطلاعات با موفقیت حذف شد',
        'success'
      )
      setTimeout(successClearBD , 2000)
    }
  })
}

function successClearBD(){
  window.location.reload()

}
function clearDBase() {

  let reqBoxKHaridar = indexedDB.deleteDatabase("BOX kharidar");
  reqBoxKHaridar.addEventListener("error", (err) => {
    console.warn("reqBoxKHaridar err deletDB", err);
  });
  reqBoxKHaridar.addEventListener("success", (event) => {
    console.log("reqBoxKHaridar success deletDB", event);
  });
// ====================================================
  let reqstBoxFrosh = indexedDB.deleteDatabase("Box Frosh");
  reqstBoxFrosh.addEventListener("error", (err) => {
    console.warn("reqstBoxFrosh err deletDB", err);
  });
  reqstBoxFrosh.addEventListener("success", (event) => {
    console.log("reqstBoxFrosh succ deletDB", event);
  });
  // ==================================================
  let reqstBoxpayment = indexedDB.deleteDatabase("Box payment");
  reqstBoxpayment.addEventListener("error", (err) => {
    console.warn("reqstBoxpayment err deletDB", err);
  });
  reqstBoxpayment.addEventListener("success", (event) => {
    console.log("reqstBoxpayment succ deletDB", event);
  });
  localStorage.clear()
}

function necessary() {
  saveTOindexedDB();
  IndexedSabt();
  saveTOIndexedPardaghty()
  OpenIndex()
  OpenIndexForInfoZamin()
}
// ------------------- indexeDB
function saveTOindexedDB() {
  let DB2 = indexedDB.open("BOX kharidar", 3);
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
      dataB2.createObjectStore("boxuser", {keyPath: 'id', autoIncrement: true},);
    }
  });
}

function RWriteKharidar() {
  let newOBject = {
    nameUser: namehknputElem.value,
    phoneUser: REGister,
    adsresUser: addersnputElem.value,
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
var filterAdres, filterphone ;
let ListElemPardahkt = document.querySelector ('#kharidar-pardahkt')
function getUserlkharidar(AllDataUser) {
  ListElemPardahkt.value =''
  ListElemPardahkt.innerHTML = ''
  ListElem.value = ''
  AllDataUser.map(function (user) {
  
    Ulcontainer.insertAdjacentHTML(
      "afterbegin",
      `<li class="nav-item">
          <i class = "fa fa-close  closeSvg" 
           title="حذف کردن" id='${user.id}' 
           onclick="removeUserKHaridar(${user.id})"></i>

        <button 
         title="${user.nameUser}" 
         onclick="setUserKHaridar(${user.id})"
         class="btnn m-auto mt-1 mb-1 overflow-hidden "
         id = 'value${user.id}'
          style="max-height:34px ;"
           >${user.nameUser}</button>
    </li>`
    );
    ListElem.insertAdjacentHTML(
      "afterbegin",
      `<option id = "option-item" > ${user.nameUser} </option>`
    );
 ListElemPardahkt.insertAdjacentHTML ('afterbegin' , 
 `<option id = "option-item" > ${user.nameUser} </option>`
 )
});
}
function setUserKHaridar(IDBtn){
  let NamseUser = document.getElementById (`value${IDBtn}`)

BoxAlert.style.display = "none";
if (BoxPrint.style.height === "159px") {
  setTimeout(translateHeight, 300);
} else {
  BoxPrint.style.height = "159px";
  setTimeout(translateHeight, 300);
}
filterId = `${IDBtn}`;

filterName = NamseUser.innerHTML;
factorUser();
getUserlFrosh(AllDataUserFrosh);
RonlyjozyatePardakht()
namekharidarElem.innerHTML = filterName;
}
// ============================================= RefreshFactor
function RefreshFactor() {
  factorUser();
  getUserlFrosh(AllDataUserFrosh);
  namekharidarElem.innerHTML = filterName;
}
// ============================================    برای تعین تیترهی فاکتور
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
let filterId, filterName , boxUlcontainer;

//--------------------------------------------------------- for Delet user
let UserDeletName =document.getElementById ('delet-Nameuser')
let BoxAlertUser = document.querySelector('#alertDanger2')
let BoxDanger2 = document.querySelector('.BoxDanger2')
let UserName 
function removeUserKHaridar(UserID) {
  NumberphoneElem.innerHTML = ''
  AdressElem.innerHTML = ''
  UserName = document.getElementById(`value${UserID}`)
 
  BtnYesuser.id = `${UserID}`
  BoxAlertUser.style.display = 'block'

  if (BoxDanger2.style.height === "29px") {
    setTimeout(heightBox2 , 300)
  } else {
    BoxDanger2.style.height = "29px";
    setTimeout(heightBox2 , 300)
  }

  
  function heightBox2(){
    BoxDanger2.style.height = '195px'
    UserDeletName.innerHTML = UserName.innerHTML
  }

  
BtnNouser.addEventListener ('click' , () =>{
  BoxAlertUser.style.display = 'none'
  Toast.fire({
    icon: 'error',
    title: 'خریدار حذف نشد'
  })
})
BtnYesuser.addEventListener('click' , ()=>{
  let deleteID = Number(BtnYesuser.id) 
 
  let transwrite = dataB2.transaction("boxuser", "readwrite");
  transwrite.addEventListener("error", (err) => {
    console.warn("transwriteRemove error :", err);
  });
  transwrite.addEventListener("success", (event) => {
    console.log("transwriteRemove success :", event);
  });
  let stors = transwrite.objectStore("boxuser");
  let reqestkh = stors.delete(deleteID);
  reqestkh.addEventListener("error", (err) => {
    console.warn("reqestkhRemove error :", err);
  });
  reqestkh.addEventListener("success", (event) => {
    console.log("reqestkhRemove success :", event);
   DeletofDetaBC(AllDataUserFrosh)
   
   DeletofDetaBCJP(AllDataJoz)
    RonlyKharidar();
    BoxAlertUser.style.display = 'none'
    Toast.fire({
      icon: 'success',
      title: 'نام خریدار حذف شد'
    })
  });
})
  // ------------------------------------------- for delet from BOX frosh

}
let IDD
function DeletofDetaBC(AllDataUserFrosh){

    UserDelet= AllDataUserFrosh.filter((use)=>{
      return use.namekharidar === UserName.innerHTML
    })
    IDD = UserDelet.map((idd) =>{
      return idd.id 
    })
    console.log(UserDelet);
     DeletOFDB (IDD)
 } 
 function DeletOFDB (IDD){
  console.log(typeof(IDD));
  
  IDD.forEach((word)=>{
    let transwriteB3 = dataB3.transaction("box forosh", "readwrite");
    transwriteB3.addEventListener("error", (err) => {
      console.warn("errortranswriteB3Delet :", err);
    });
    transwriteB3.addEventListener("success", (event) => {
      console.log("successtranswriteB3Delet :", event);
      dataB3 = event.target.result;
    });
    let boxstors = transwriteB3.objectStore("box forosh");
    let reqestFrosh2 = boxstors.delete(word);

    reqestFrosh2.addEventListener("error", (err) => {
      console.warn("reqestFrosh error DeletUser:", err);
    });
    reqestFrosh2.addEventListener("success", (event) => {
      console.log("reqestFrosh success Delet User:", event);
      RonlyFrosh();
    });
  })
  
 }

function translateHeight() {
  BoxPrint.style.height = "auto";
}

let newtd6, newtr, newtd, newtd1, newtd2, newtd3, newtd4, newtd5;
function saveTOtable() {

  Tbody.innerHTML = "";
  
  resultfrosh.forEach((element) => {
    newtr = document.createElement("tr");
    newtd = document.createElement("td");
    newtd.innerHTML = element.data;
    newtd1 = document.createElement("td");
    newtd1.innerHTML = element.Vazn;

    newtd2 = document.createElement("td");
    newtd2.innerHTML = element.GHabz;
    // newtd3 = document.createElement("td");
    // newtd3.innerHTML = element.Pardakhty;
    // newtd4 = document.createElement("td");
    // newtd4.innerHTML = element.Mande;
    newtd5 = document.createElement("td");
    newtd5.innerHTML = element.Mablagh;
    newtd6 = document.createElement("td");
    newtd6.id = "trash";
    newtd6.innerHTML = `<img src="./img/trash.png" 
    id="${element.id}" 
    class="img-fluid trash-img" 
    onclick="removefactorElme(${element.id})" 
     title=" حذف کردن">`;
     

    newtr.append(newtd, newtd1, newtd2, newtd5, newtd6);
    Tbody.append(newtr);
  });
 
  Total();
}
//------------------------------------------------ for delet Box frosh

function removefactorElme(UserId) {
  
    BoxAlert.style.height = 'none'

    setTimeout(BoxAlertt ,300)
   function BoxAlertt(){
      BoxAlert.style.display = "block";
      BtnYes.id = `${UserId}`
    }
    cartElem.style.display = "none";
    milElem.innerHTML = "";
    // tomanElem.innerHTML = "";
    PElem.innerHTML = "";
    alertInformition(event);
  
    BtnNo.addEventListener("click", () => {
      BoxAlert.style.display = "none";
      Toast.fire({
        icon: 'error',
        title: 'اطلاعات حذف نشد'
      })
    });
}
  BtnYes.addEventListener("click", () => {
    let UserIdDelet =Number(BtnYes.id) 
    
    BoxAlert.style.display = "none";
    event.preventDefault();
    let transwriteB3 = dataB3.transaction("box forosh", "readwrite");
    transwriteB3.addEventListener("error", (err) => {
      console.warn("errortranswriteB3Delete :", err);
    });

    transwriteB3.addEventListener("success", (event) => {
      console.log("successtranswriteB3Delete :", event);
      dataB3 = event.target.result;
    });
    let storsName = transwriteB3.objectStore("box forosh");

    let reqestFrosh = storsName.delete(UserIdDelet);
  
    reqestFrosh.addEventListener("error", (err) => {
      console.warn("reqestFrosh error Delete :", err);
      Toast.fire({
        icon: 'error',
        title: 'اطلاعات حذف نشد'
      })
    });
    reqestFrosh.addEventListener("success", (event) => {
      console.log("reqestFrosh success  Delete:", event);
      RonlyFrosh();
      Toast.fire({
        icon: 'success',
        title: 'اطلاعات با موفقیت حذف شد'
      })
      RonlyjozyatePardakht()
    });
  });
  const Toast = Swal.mixin({
    heightAuto : false,
    toast: true,
    position:'top',
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
 
//============================================ alert denger
let transactionAlert = document.querySelector(".transition-alert");
function alertInformition(event) {
  let parentNode = event.target.parentNode.parentNode;
  let FirstChild = parentNode.firstChild;
  let LastChild = FirstChild.nextElementSibling;
  let LastChild2 = LastChild.nextElementSibling;
  let LastChild3 = LastChild2.nextElementSibling;
  if (transactionAlert.style.height === "10px") {
    setTimeout(translateHeightAlert, 300);
  } else {
    transactionAlert.style.height = "10px";
    setTimeout(translateHeightAlert, 300);
  }

  function translateHeightAlert() {
    transactionAlert.style.height = "195px";
    alerttime.innerHTML = FirstChild.innerHTML;
    alertvazn.innerHTML = LastChild.innerHTML + " " + "کیلو گرم";
    alertmablagh.innerHTML = LastChild3.innerHTML + " " + "تومان";
    alertname.innerHTML = filterName;
  }
}



let totalFrosh ;
function Total() {
  totalFrosh = 0
  let totalvaznElem = 0;
  // let totalpardakhtElem = 0;
  resultfrosh.forEach(function (Numbers) {
    totalvaznElem += Numbers.Vazn.replace(/,\s?/g, "") * 1;
    // totalpardakhtElem += Numbers.Pardakhty.replace(/,\s?/g, "") * 1;
    
    totalFrosh += Numbers.Mablagh.replace(/,\s?/g, "") * 1;
  });
  TotalJOzPardahkty()
  totalVazn.innerHTML = totalvaznElem.toFixed(2);
  $("#kol-frosh").html(totalFrosh.toLocaleString("en"));
  $("#total-nahay").html(totalFrosh.toLocaleString("en"));

  

  // vdaryaftiElem.innerHTML = Num2persian(totalpardakhtElem) + ' ' + 'تومان';;
  vforoshElem.innerHTML = Num2persian(totalFrosh) + ' ' + 'تومان';;
 
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
//============================   for vahed factor




PrintElem.addEventListener("click", PRINT);
function PRINT(){
  hederBOX.style.display = 'none'
  PrintElem.style.display = "none";
  NavPrint.style.display = "none";
  Print2.style.display = "none";
  Print3.style.display = "none";
  BoxPrint.style.margin = "auto";
  BoxPrint.style.width = "99%";
  BoxPrint.style.height = 'auto'
  ClosePrint.style.display = 'block'
  containerPrint.style.margin = "auto";
  joziyatPardahkt.style.display = 'none'
  window.print();
}

ClosePrint.addEventListener("click", ClosePRINT);
function ClosePRINT(){
  hederBOX.style.display = 'block'
  PrintElem.style.display = "block";
  NavPrint.style.display = "block";
  Print2.style.display = "block";
  Print3.style.display = "block";
  BoxPrint.style.margin = "auto";
  BoxPrint.style.width = "757px";
  containerPrint.style.marginRight = "-6px";
  ClosePrint.style.display = 'none'
  joziyatPardahkt.style.display = 'block'
}
 printJozyate.addEventListener ('click' , beforeprint)
function beforeprint(){
  BoxPrint.style.display = 'none'
  printJozyate.style.display ='none'
  CloseIconjoz.style.display ='none'

  PRINT()
}
ClosePrintjoz.addEventListener ('click' , afterPrint)
function afterPrint(){
  
  BoxPrint.style.display = 'block'
  CloseIconjoz.style.display ='block'
  printJozyate.style.display ='block'


  ClosePRINT()
}
CloseIconjoz.addEventListener ('click' ,  afterPrint)

//=============================================== for delet from factor

// window.addEventListener("load", getNewArra);
phoneinputElem.addEventListener("keyup", ImgRegist);
btnFrosh.addEventListener("click", showCart);
// Btnparkardan.addEventListener("click", PAR);
btnAddtKharid.addEventListener("click", kharid);
window.addEventListener("load", necessary);
ghimatInputElem.addEventListener("keyup", resultTotal, itpro);
// ValueDaryaft.addEventListener("keyup", Vahedpardakt);
// ghabzinput.addEventListener ('keyup' , Vahedghabz)
