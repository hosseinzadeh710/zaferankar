let inputCHeck = document.querySelector("#naghdi-check");
let VahedCHeck = document.querySelector("#naghdi-check-vahed");
let inputZaferan = document.querySelector("#naghdi-zaferan");
let VahedZaferan = document.querySelector("#naghdi-zaferan-vahed");

let VahedNaghdy = document.querySelector("#naghdi-vahed");
let VahedNaghdy2 = document.querySelector("#naghdi-vahed2");

let totalzaferan = document.querySelector("#total-zaferan");
let inputkelo = document.querySelector("#kelo");
let inputgram = document.querySelector("#gram");

let VahedTotalRise = document.querySelector("#vahed-zaferan");
let Hedernaghdy = document.querySelector("#naghdy-heder");
let Hedercheck = document.querySelector("#check-heder");
let Hederzaferan = document.querySelector("#zaferan-heder");
let Close = document.querySelector(".Icon-close");
let CartMoney = document.querySelector(".money-card");

let addMoney = document.querySelector("#Addmoney");
let Addmoney = document.querySelector("#naghdi2");
let inputNaghdi = document.querySelector("#naghdi22");

let Bodynaghdi = document.querySelector("#Body-naghdi");
let Bodycheck = document.querySelector("#Body-check");
let Bodyzaferan = document.querySelector("#Body-zaferan");

let naghdyDown = document.querySelector("#naghdy-heder-down");
let checkDown = document.querySelector("#check-heder-down");
let zaferanDown = document.querySelector("#zaferan-heder-down");

let BtnTaiedNaghdi = document.querySelector("#btn-taid-naghdi");
let BtnTaiedCheck = document.querySelector("#btn-taid-check");
let BtnTaiedZaferan = document.querySelector("#btn-taid-zaferan");

let ValueDaryaft = document.querySelector("#daryaft-value");
let ValueTarikh = document.querySelector("#tarihk-shamsy2");
let CloseModal2 = document.querySelector("#staticBackdrop");

let Checkbox = document.querySelector("#checkbox");
let Checkbox2 = document.querySelector("#checkbox2");
let Checkbox3 = document.querySelector("#checkbox3");

let Tarihk1 = document.querySelector("#tarihk-naghdi");
let Tarihk2 = document.querySelector("#tarihk-check");
let Tarihk3 = document.querySelector("#tarihk-zaferan");

let taxtareaNaghdi = document.querySelector("#taxtarea-naghdi");
let taxtareaCheck = document.querySelector("#taxtarea-check");
let taxtareaZaferan = document.querySelector("#taxtarea-zaferan");

let foterjoz = document.querySelector("#foter-joz");
let vahedFoterjoz = document.querySelector("#vahed-foter-joz");

const pardahktybtn = document.querySelector("#pardahkty-btn");
let CartPardahkt = document.querySelector(".Cart-pardahkt");
const btnClosePardahkty = document.querySelector("#btn-close-pardahkty");
let tarihkSHamsy44 = document.querySelector("#tarihk-shamsy44");
let kharidarPardahkty = document.querySelector("#kharidar-pardahkt");
let daryaftyValuePardahkt = document.querySelector("#daryaft-value-pardahkt");
let naghdiVahed2 = document.querySelector("#naghdi-vahed22");

const BtnSaptPardahkt = document.querySelector("#sapt-pardahkt");

let Inputkelo;
let Inputgram;
let totalRise;
let w;
let num;

function VahedNaghdi() {
  let Namber8 = inputNaghdi.value;
  Namber8 = Namber8.replace(/,\s?/g, "");
  if (!Number.isInteger(Number(Namber8))) {
    inputNaghdi.value = "";
    VahedNaghdy.innerHTML = "فقط از اعداد استفاده شود";
    VahedNaghdy.classList.add("toman3");
  } else {
    VahedNaghdy.classList.remove("toman3");
    VahedNaghdy.innerHTML = Num2persian(Namber8) + " " + "تومان";
  }
}
function VahedghabzCheck() {
  let Namber6 = inputCHeck.value;
  Namber6 = Namber6.replace(/,\s?/g, "");
  if (!Number.isInteger(Number(Namber6))) {
    inputCHeck.value = "";
    VahedCHeck.innerHTML = "فقط از اعداد استفاده شود";
    VahedCHeck.classList.add("toman3");
  } else {
    VahedCHeck.classList.remove("toman3");
    VahedCHeck.innerHTML = Num2persian(Namber6) + " " + "تومان";
  }
}

function TotalRiseZaferan() {
  let Namber7 = inputZaferan.value;
  Namber7 = Namber7.replace(/,\s?/g, "");
  Namber7 = Number(Namber7);
  if (!Number.isInteger(Number(Namber7))) {
    inputZaferan.value = "";
    VahedTotalRise.innerHTML = "";
    totalzaferan.innerHTML = "";
    VahedZaferan.innerHTML = "فقط از اعداد استفاده شود";
    VahedZaferan.classList.add("toman3");
  } else {
    VahedZaferan.classList.remove("toman3");
    Inputkelo = Number(inputkelo.value);
    Inputgram = Number(inputgram.value) / 1000;

    totalRise = Math.floor(Inputkelo * Namber7 + Inputgram * Namber7);
    w = itpro(totalRise);

    totalzaferan.innerHTML = w;

    VahedTotalRise.innerHTML = Num2persian(w);
    VahedZaferan.innerHTML = Num2persian(Namber7) + "" + "تومان";
  }
}

Hedernaghdy.addEventListener("click", () => {
  removeElem();
  FirstCart();
});

function FirstCart() {
  let dismiss = BtnTaiedNaghdi.hasAttribute("data-bs-dismiss");
  if (dismiss) {
    BtnTaiedNaghdi.removeAttribute("data-bs-dismiss");
  }
  Bodynaghdi.style.display = "block";
  Bodycheck.style.display = "none";
  Bodyzaferan.style.display = "none";

  naghdyDown.style.backgroundColor = "#ee5454";
  checkDown.style.backgroundColor = "white";
  zaferanDown.style.backgroundColor = "white";
}

Hedercheck.addEventListener("click", () => {
  removeElem();
  let dismiss = BtnTaiedCheck.hasAttribute("data-bs-dismiss");
  if (dismiss) {
    BtnTaiedCheck.removeAttribute("data-bs-dismiss");
  }
  Bodynaghdi.style.display = "none";
  Bodycheck.style.display = "block";
  Bodyzaferan.style.display = "none";
  naghdyDown.style.backgroundColor = "white";
  checkDown.style.backgroundColor = "#ee5454";
  zaferanDown.style.backgroundColor = "white";
});
Hederzaferan.addEventListener("click", () => {
  let dismiss = BtnTaiedZaferan.hasAttribute("data-bs-dismiss");
  if (dismiss) {
    BtnTaiedZaferan.removeAttribute("data-bs-dismiss");
  }
  removeElem();
  Bodynaghdi.style.display = "none";
  Bodycheck.style.display = "none";
  Bodyzaferan.style.display = "block";

  naghdyDown.style.backgroundColor = "white";
  checkDown.style.backgroundColor = "white";
  zaferanDown.style.backgroundColor = "#ee5454";
});

let styleCard = false;
let stylePardahkty = false;

// function showmodal1() {
//   styleCard = true;
//   stylePardahkty = false;
//   ShowModal();
// }
// function ShowModal2() {
//   stylePardahkty = true;
//   styleCard = false;
//   ShowModal();
// }

function ShowModal() {
  FirstCart();
  CartMoney.style.display = "block";
  // if (styleCard && !stylePardahkty) {
  //   Tarihk1.innerHTML = TimeElem.value;
  //   Tarihk2.innerHTML = TimeElem.value;
  //   Tarihk3.innerHTML = TimeElem.value;
  // }

  Tarihk1.innerHTML = tarihkSHamsy44.value;
  Tarihk2.innerHTML = tarihkSHamsy44.value;
  Tarihk3.innerHTML = tarihkSHamsy44.value;

  // ValueDaryaft.innerHTML = "";
  // VahedNaghdy2.innerHTML = "";
  daryaftyValuePardahkt.innerHTML = "";
  naghdiVahed2.innerHTML = "";
}

function setDismis() {
  BtnTaiedNaghdi.setAttribute("data-bs-dismiss", "modal");
  BtnTaiedZaferan.setAttribute("data-bs-dismiss", "modal");
}

let Payment = [];
function SeveMoney() {
  if (inputNaghdi.value) {
    if (Checkbox.checked == true) {
      console.log(Checkbox2.checked);

      let usecaret = {
        cart: "واریز به کارت",
        textarea: taxtareaNaghdi.value,
      };
      Payment = [];
      Payment.push(usecaret);
    } else if (Checkbox2.checked == true) {
      let usecaret = {
        cart: " کارتخوان ",
        textarea: taxtareaNaghdi.value,
      };
      Payment = [];
      Payment.push(usecaret);
    } else if (Checkbox3.checked == true) {
      let usecaret = {
        cart: "پول",
        textarea: taxtareaNaghdi.value,
      };
      Payment = [];
      Payment.push(usecaret);
    } else {
      let usecaret = {
        cart: "--",
        textarea: taxtareaNaghdi.value,
      };
      Payment = [];
      Payment.push(usecaret);
    }

    // if (!Checkbox2.checked == false) {

    //   let usecaret = {
    //     cart: " کارتخوان ",
    //     textarea: taxtareaNaghdi.value,
    //   };
    //   Payment = [];
    //   Payment.push(usecaret);
    //   console.log( 'hkan',Payment);

    // } else {
    //   let usecaret = {
    //     cart: "--",
    //     textarea: taxtareaNaghdi.value,
    //   };
    //   Payment = [];
    //   Payment.push(usecaret);
    //   console.log( 'hkanels', Payment);

    // }
    // if (!Checkbox3.checked == false) {
    //   let usecaret = {
    //     cart: "پول",
    //     textarea: taxtareaNaghdi.value,
    //   };
    //   Payment = [];
    //   Payment.push(usecaret);
    //   console.log('pol' , Payment);

    // } else {
    //   let usecaret = {
    //     cart: "--",
    //     textarea: taxtareaNaghdi.value,
    //   };
    //   Payment = [];
    //   Payment.push(usecaret);
    //   console.log('polelse' , Payment);

    // }

    // if (styleCard && !stylePardahkty) {

    //   ValueDaryaft.innerHTML = "";
    //   VahedNaghdy2.innerHTML = "";
    //   ValueDaryaft.innerHTML = inputNaghdi.value ;
    //   VahedNaghdy2.innerHTML = VahedNaghdy.innerHTML + " " + "تومان";
    // }

    daryaftyValuePardahkt.innerHTML = "";
    naghdiVahed2.innerHTML = "";
    daryaftyValuePardahkt.innerHTML = inputNaghdi.value;
    naghdiVahed2.innerHTML = VahedNaghdy.innerHTML + " " + "تومان";

    // Vahedpardakt();
    closeModal();
  } else {
    Swal.fire("فیلد مبلغ پرداختی نباید خالی باشد");
  }
}

function timer() {
  if (ValueTarikh.value) {
    let regiserTime = /^\d{4}\/(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])$/;
    let regiserTimeCheck = regiserTime.test(ValueTarikh.value);
    if (regiserTimeCheck) {
      if (inputCHeck.value) {
        BtnTaiedCheck.setAttribute("data-bs-dismiss", "modal");
      }
    } else {
      Swal.fire("تاریخ به درستی وارد شود");
    }
  } else {
    inputCHeck.value = "";
    Swal.fire(" ابتدا تاریخ سر رسید چک مشخص شود");
  }
}

function SeveMoney1() {
  if (inputCHeck.value) {
    let usecaret = {
      cart: "چک",
      textarea:
        `تاریخ سررسید چک ${ValueTarikh.value} می باشد` +
        `<br>` +
        taxtareaCheck.value,
    };
    Payment = [];
    Payment.push(usecaret);

    // if (styleCard && !stylePardahkty) {

    //   ValueDaryaft.innerHTML = "";
    //   VahedNaghdy2.innerHTML = "";
    //   ValueDaryaft.innerHTML = inputCHeck.value;
    //   VahedNaghdy2.innerHTML = VahedCHeck.innerHTML + " " + "تومان";
    // }

    daryaftyValuePardahkt.innerHTML = "";
    naghdiVahed2.innerHTML = "";
    daryaftyValuePardahkt.innerHTML = inputCHeck.value;
    naghdiVahed2.innerHTML = VahedCHeck.innerHTML + " " + "تومان";

    // Vahedpardakt();
    closeModal();
  } else {
    Swal.fire("مبلغ چک باید مشخص باشد");
  }
}
function SeveMoney2() {
  if (inputZaferan.value) {
    let usecaret = {
      cart: "زعفران",
      textarea:
        `مقدار ${inputkelo.value} کیلو و ${inputgram.value} گرم با قیمت ${inputZaferan.value}` +
        `<br>` +
        taxtareaZaferan.value,
    };
    Payment = [];
    Payment.push(usecaret);

    // if (styleCard && !stylePardahkty) {

    //   ValueDaryaft.innerHTML = "";
    //   VahedNaghdy2.innerHTML = "";
    //   ValueDaryaft.innerHTML = w;
    //   VahedNaghdy2.innerHTML = VahedTotalRise.innerHTML + " " + "تومان";
    // }

    daryaftyValuePardahkt.innerHTML = "";
    naghdiVahed2.innerHTML = "";
    daryaftyValuePardahkt.innerHTML = w;
    naghdiVahed2.innerHTML = VahedTotalRise.innerHTML + " " + "تومان";

    // Vahedpardakt();
    closeModal();
  } else {
    Swal.fire("فیلد مبلغ نباید خالی باشد");
  }
}

function closeModal() {
  CartMoney.style.display = "none";
  totalzaferan.innerHTML = "";
  VahedCHeck.innerHTML = "";
  VahedNaghdy.innerHTML = "";
  VahedZaferan.innerHTML = "";
  Tarihk1.innerHTML = "";
  Tarihk2.innerHTML = "";
  Tarihk3.innerHTML = "";
  VahedTotalRise.innerHTML = "";
}
function removeElem() {
  totalzaferan.innerHTML = "";
  VahedCHeck.innerHTML = "";
  VahedNaghdy.innerHTML = "";
  VahedZaferan.innerHTML = "";
  VahedTotalRise.innerHTML = "";
}

// ====================================================== مربوط به ذخیره اطلاعات در دیتابیس قسمت فاکتور پرداختی
function seveToPayment() {
  if ( 
    tarihkSHamsy44.value &&
  daryaftyValuePardahkt.innerHTML &&
  kharidarPardahkty.value ) {
    
    RWritejozyatePardakht();
    setTimeout(CloseCardPardahkt, 500);
  } else {
    Swal.fire("لطفا همه فیلدها رو کامل کنید!")
  }
}
function saveTOIndexedPardaghty() {
  let DBjoz = indexedDB.open("Box payment", 6);

  DBjoz.addEventListener("error", (err) => {
    console.warn("errorDBjoz :", err);
  });

  DBjoz.addEventListener("success", (event) => {
    console.log("successDBjoz :", event);
    dataBjoz = event.target.result;
  });
  DBjoz.addEventListener("upgradeneeded", (event) => {
    dataBjoz = event.target.result;
    console.log("upgradeneededDBjoz :", event);
    if (!dataBjoz.objectStoreNames.contains("box payment")) {
      dataBjoz.createObjectStore("box payment", {
        keyPath: "id",
        autoIncrement: true,
      });
    }
  });
}
let dataBjoz = null;
// function Test(){
//   let checketValue = ValueDaryaft.innerHTML.replace(/,\s?/g, "");

//   if (checketValue == 0) {
//   } else if (checketValue > 0) {
//     RWritejozyatePardakht()
//   } else{
//     console.log('در لیست جزئیات ثبت نشد');
// }

// }
function RWritejozyatePardakht() {
  // let newOBjectjoz = {
  //   data: TIME,
  //   namekharidar: ListElem.value,
  //   Mablagh: ValueDaryaft.innerHTML,
  //   PaymentMethod: Payment[0].cart,
  //   Description: Payment[0].textarea,
  // };
  let newOBjectjozPardahkty = {
    data: tarihkSHamsy44.value,
    namekharidar: kharidarPardahkty.value,
    Mablagh: daryaftyValuePardahkt.innerHTML,
    PaymentMethod: Payment[0].cart,
    Description: Payment[0].textarea,
  };

  let transwriteBjoz = dataBjoz.transaction("box payment", "readwrite");
  transwriteBjoz.addEventListener("error", (err) => {
    console.warn("errortranswriteBjoz :", err);
  });

  transwriteBjoz.addEventListener("success", (event) => {
    console.log("successtranswriteBjoz :", event);
    dataBjoz = event.target.result;
  });
  let storsJoz = transwriteBjoz.objectStore("box payment");
  let reqestjoz = null;
  // if (styleCard && !stylePardahkty) {
  //   reqestjoz = storsJoz.add(newOBjectjoz);
  // }

  reqestjoz = storsJoz.add(newOBjectjozPardahkty);

  reqestjoz.addEventListener("error", (err) => {
    console.warn("reqestjoz error :", err);
  });
  reqestjoz.addEventListener("success", (event) => {
    console.log("reqestjoz success :", event);
    Toast.fire({
      icon: "success",
      title: "اطلاعات با موفقیت ثبت شد",
    });
    RonlyjozyatePardakht();
   
  });
}
let AllDataJoz = [];
function RonlyjozyatePardakht() {
  let transjozyatePardakht = dataBjoz.transaction("box payment", "readonly");

  transjozyatePardakht.addEventListener("error", (err) => {
    console.warn("transjozyatePardakht error :", err);
  });
  transjozyatePardakht.addEventListener("success", (event) => {
    console.log("transjozyatePardakht success :", event);
  });

  let storgetjozyatePardakht = transjozyatePardakht.objectStore("box payment");
  let reqestonlyjozyatePardakht = storgetjozyatePardakht.getAll();

  reqestonlyjozyatePardakht.addEventListener("error", (err) => {
    console.warn("reqestonlyjozyatePardakht", err);
  });
  reqestonlyjozyatePardakht.addEventListener("success", (event) => {
    AllDataJoz = event.target.result;
    console.log("reqestonlyjozyatePardakht", event);
    getUserlfactoJoz(AllDataJoz);
  });
}
let Tbodyjoz = document.querySelector("#tbody_jozyate");
let joziyatPardahkt = document.querySelector(".Div-joz");
let Namekhaeidarjozt = document.querySelector("#namekhaeidar-joz");
let resultNameFactoJoz = [];

joziyatPardahkt.addEventListener("click", RonlyjozyatePardakht);

function getUserlfactoJoz(AllDataJoz) {
  resultNameFactoJoz = AllDataJoz.filter((userjoz) => {
    return userjoz.namekharidar === namekharidarElem.innerHTML;
  });
  getDateJOz();
}
function getDateJOz() {
  Tbodyjoz.innerHTML = "";
  resultNameFactoJoz.forEach((joz) => {
    let joztr, joztd, joztd1, joztd2, joztd3, joztd0;
    joztr = document.createElement("tr");

    joztd0 = document.createElement("td");
    joztd0.innerHTML = `<i class="fa-solid fa-circle-xmark" style="color: #695d64;" onclick="AlertDeletDBInfoJoz(${joz.id})" titel ="حذ ف" ></i>`;
    joztd0.classList.add("td-remove-style");
    joztd0.classList.add("td-style");

    joztd = document.createElement("td");
    joztd.innerHTML = joz.data;
    joztd.classList.add("td-style");
    joztd.setAttribute("colspan", "1");

    joztd1 = document.createElement("td");
    joztd1.innerHTML = joz.Mablagh;
    joztd1.classList.add("td-style");
    joztd1.setAttribute("colspan", "1");

    joztd2 = document.createElement("td");
    joztd2.innerHTML = joz.PaymentMethod;
    joztd2.classList.add("td-style");
    joztd2.setAttribute("colspan", "1");

    joztd3 = document.createElement("td");
    joztd3.innerHTML = joz.Description;
    joztd3.classList.add("td-style");
    joztd3.classList.add("FountSize");
    joztd3.setAttribute("colspan", "3");

    joztr.append(joztd0, joztd, joztd1, joztd2, joztd3);

    Tbodyjoz.append(joztr);
  });

  Namekhaeidarjozt.innerHTML = namekharidarElem.innerHTML;
  TotalJOzPardahkty();
}
function AlertDeletDBInfoJoz(IdWord){
 
  Swal.fire({
    title: "هشدار",
    text:`  آیا از حذف اطلاعات پرداختی مطمئن هستید`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    cancelButtonText: "خیر",
    confirmButtonText: "بله"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
      
        text: "اطلاعات حذف شد",
        icon: "success"
      });
      DeletOfJozyatPardakht(IdWord)
    }
  });



}
function DeletOfJozyatPardakht(IdWord){

  let transwriteBjoz = dataBjoz.transaction("box payment", "readwrite");
  transwriteBjoz.addEventListener("error", (err) => {
    console.warn("errortranswriteDBjozD :", err);
  });

  transwriteBjoz.addEventListener("success", (event) => {
    console.log("successtranswriteDBjozD :", event);
    dataBjoz = event.target.result;
  });
  let storsJozdelet = transwriteBjoz.objectStore("box payment");

  let reqestjozDelet = storsJozdelet.delete(IdWord);

  reqestjozDelet.addEventListener("error", (err) => {
    console.warn("reqestjozDelet error :", err);
  });
  reqestjozDelet.addEventListener("success", (event) => {
    console.log("reqestjozDelet success :", event);
    
    RonlyjozyatePardakht()
  });
}

let IDJP
let userDeletJoz
function DeletofDetaBCJP(AllDataJoz){
  
    userDeletJoz= AllDataJoz.filter((use)=>{
      return use.namekharidar === UserName.innerHTML
    })
    IDJP = userDeletJoz.map((id) =>{
      return id.id 
    })
  
    DeletOFDBJoz (IDJP)
 } 
 function DeletOFDBJoz (IDJP){
  IDJP.forEach((word)=>{
    let transwriteBjoz = dataBjoz.transaction("box payment", "readwrite");
    transwriteBjoz.addEventListener("error", (err) => {
      console.warn("errortranswriteDBjozD :", err);
    });
  
    transwriteBjoz.addEventListener("success", (event) => {
      console.log("successtranswriteDBjozD :", event);
      dataBjoz = event.target.result;
    });
    let storsJozdelet = transwriteBjoz.objectStore("box payment");
  
    let reqestjozDelet = storsJozdelet.delete(word);
  
    reqestjozDelet.addEventListener("error", (err) => {
      console.warn("reqestjozDelet error :", err);
    });
    reqestjozDelet.addEventListener("success", (event) => {
      console.log("reqestjozDelet success :", event);
      
      RonlyjozyatePardakht()
    });
  })
  
 }

function TotalJOzPardahkty() {
  let totalMablaghpardakht = 0;

  resultNameFactoJoz.forEach((joz) => {
    totalMablaghpardakht += joz.Mablagh.replace(/,\s?/g, "") * 1;
  });
  let summondeh = totalFrosh - totalMablaghpardakht;

  if (summondeh < 0) {
    numbedehkar.innerHTML = "";
    vahedbedehkar.innerHTML = "";
    $("#mandeh").html(0);
    vmandehElem.innerHTML = Num2persian(0) + " " + "تومان";
    cardBdehcar.style.display = "flex";

    $("#num-bedehkar").html(Math.abs(summondeh).toLocaleString("en"));
    vahedbedehkar.innerHTML = Num2persian(Math.abs(summondeh)) + " " + "تومان";
  } else {
    cardBdehcar.style.display = "none";
    $("#mandeh").html(summondeh.toLocaleString("en"));
    vmandehElem.innerHTML = Num2persian(summondeh) + " " + "تومان";
  }

  $("#foter-joz").html(Number(totalMablaghpardakht).toLocaleString("en"));
  vahedFoterjoz.innerHTML = Num2persian(totalMablaghpardakht) + " " + "تومان";
  vdaryaftiElem.innerHTML = Num2persian(totalMablaghpardakht) + " " + "تومان";
  daryaftiElemFactor.innerHTML = foterjoz.innerHTML;
}

let AddPardahkty = document.querySelector("#naghdi55");
AddPardahkty.addEventListener("click", ShowModal);

function SHoweCardPardahkt() {
  ListElemPardahkt.value = ''
  tarihkSHamsy44.value = "";
  kharidarPardahkty.value = "";
  daryaftyValuePardahkt.innerHTML = "";
  naghdiVahed2.innerHTML = "";

  CartPardahkt.style.display = "block";
  cartElem.style.display = "none";
  Catrkharid.style.display = "none";
}

function CloseCardPardahkt() {
  ListElemPardahkt.value = ''
  tarihkSHamsy44.value = "";
  kharidarPardahkty.value = "";
  daryaftyValuePardahkt.innerHTML = "";
  naghdiVahed2.innerHTML = "";
  CartPardahkt.style.display = "none";
}
// ======================================================
inputNaghdi.addEventListener("keyup", VahedNaghdi);
BtnTaiedNaghdi.addEventListener("click", SeveMoney);
BtnTaiedCheck.addEventListener("click", SeveMoney1);
BtnTaiedZaferan.addEventListener("click", SeveMoney2);
// Addmoney.addEventListener("click", showmodal1);
// ValueTarikh.addEventListener("click", timer);

Close.addEventListener("click", closeModal);
inputCHeck.addEventListener("keyup", VahedghabzCheck, timer);
inputCHeck.addEventListener("keypress", timer);
inputCHeck.addEventListener("change", timer);
inputZaferan.addEventListener("keyup", TotalRiseZaferan);
inputZaferan.addEventListener("change", setDismis);
pardahktybtn.addEventListener("click", SHoweCardPardahkt);
btnClosePardahkty.addEventListener("click", CloseCardPardahkt);
inputNaghdi.addEventListener("change", setDismis);
BtnSaptPardahkt.addEventListener("click", seveToPayment);
