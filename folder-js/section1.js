let ADDzamin = document.querySelector(".add-zamin");
let SabtBtn = document.querySelector(".span-sabt-btn");
let SabtBtnZamin = document.querySelector(".span-sabt");
let NameZamin = document.querySelector("#Name-Zamin");
let YersZamin = document.querySelector("#Yers-Zamin");
let SatheZamin = document.querySelector("#sathe-Zamin");
let ContainerBoxZamin = document.querySelector("#Box-card-zamin");
let BodyZamin = document.querySelector("#tbody_jozyate-zamin");
let AddInfo = document.querySelector(".Add-new-info");
let TotalVaznInfo = document.querySelector('#Total-vazn') ;
let vahedGhamatInfo = document.querySelector ("#vahed-Ghamat-Info");
let NameZaminInfo = document.querySelector("#name-zamin");
let boxCart = document.querySelector('.box-cart')
let BoxjozyatZamin = document.querySelector('.Box-jozyat-zamin')
let btnClosejoz = document.querySelector('#btn-clo-joz')
let IconCloseModal = document.querySelector ('#btn-closee')
 

let DataZAmin = null;
let ArrPlan = [];
let AllDataZamin = [];
let NewNameZamin = [];
let RozShemar;
let nameID;
let ArryUserName = [];
let DataInfoZAmin = null;
let AllDataInfoZamin = [];

function OpenIndex() {
  let DBZamin = indexedDB.open("BOX Zamin", 12);
  DBZamin.addEventListener("error", (err) => {
    console.warn("errorDBZamin :", err);
  });

  DBZamin.addEventListener("success", (event) => {
    console.log("successDBZamin :", event);
    DataZAmin = event.target.result;
    console.log(DataZAmin);

    //   RonlyboxZamin();
  });
  DBZamin.addEventListener("upgradeneeded", (event) => {
    DataZAmin = event.target.result;
    console.log("upgradeneededDBZamin :", event);
    if (!DataZAmin.objectStoreNames.contains("boxZamin")) {
      DataZAmin.createObjectStore("boxZamin", {
        keyPath: "id",
        autoIncrement: true,
      });
    }
    //   if (DataZAmin.objectStoreNames.contains("boxZamin")) {
    //     DataZAmin.deleteObjectStore("boxZamin");
    //   }
  });
}

function sabtInDB() {
  RWriteBoxZamin();
  closeBoxejoz()
}
let SATHEZAMIN
function VahedItpro(){
  SATHEZAMIN = (Math.floor(SatheZamin.value).toLocaleString("en"))
  SatheZamin.value = SATHEZAMIN
  console.log(SATHEZAMIN);
 }

function RWriteBoxZamin() {
  let NewPlan = {
    nameZAmin: NameZamin.value,
    yersZamin: YersZamin.value,
    satheZamin: SatheZamin.value,
  };

  let transwriteAddzamin = DataZAmin.transaction("boxZamin", "readwrite");
  transwriteAddzamin.addEventListener("error", (err) => {
    console.warn("errortranswriteAddzamin :", err);
  });

  transwriteAddzamin.addEventListener("success", (event) => {
    console.log("successAddzamin:", event);
    DataZAmin = event.target.result;
  });
  let stors = transwriteAddzamin.objectStore("boxZamin");

  let reqestAddZamin = stors.add(NewPlan);

  reqestAddZamin.addEventListener("error", (err) => {
    console.warn("reqestAddZamin error :", err);
  });
  reqestAddZamin.addEventListener("success", (event) => {
    console.log("reqestAddZamin success :", event);

    RonlyboxZamin()
  });
}

function RonlyboxZamin() {
  let transonlyboxZamin = DataZAmin.transaction("boxZamin", "readonly");

  transonlyboxZamin.addEventListener("error", (err) => {
    console.warn("transonlyboxZamin error :", err);
  });
  transonlyboxZamin.addEventListener("complete", (event) => {
    console.log("transonlyboxZamin complete :", event);
  });

  let storgetboxZamin = transonlyboxZamin.objectStore("boxZamin");
  let reqestboxZamin = storgetboxZamin.getAll();

  reqestboxZamin.addEventListener("error", (err) => {
    console.warn("reqestboxZamin", err);
  });
  reqestboxZamin.addEventListener("success", (event) => {
    AllDataZamin = event.target.result;
    console.log("reqestboxZamin", event);
    AddToBoxCart(AllDataZamin);
  checkInfoZamin = true

  });
}
let checkInfoZamin = false
function ShowboxZamin() {
  if (!checkInfoZamin) {
    
    RonlyboxZamin();
  }
 }

async function AddToBoxCart(AllDataZamin) {
  ContainerBoxZamin.innerHTML = "";
  await AllDataZamin.forEach((res) => {
    ContainerBoxZamin.insertAdjacentHTML(
      "beforeend",
      `
      <div class="box-cart" onmouseenter="ShowMoseMove(${res.id})">
      <div class="item-cart " id="heder-cart-item">
          <span id = '${res.id}'>${res.nameZAmin}</span>
          <i class="fa-solid fa-circle-xmark" style="color: #695d64;" onclick="AlertDeletDBInfozamin(${res.id})" titel ="حذ ف" ></i>
      </div>
    <div class="transbox">
    <div class="item-cart mt-2">
    <span> سطح زیرکشت :</span>
    <span>${res.satheZamin}</span>
    <span>مترمربع</span>
 </div>
      <div class="item-cart">
          <span>چند سال کشت :</span>
          <span>${res.yersZamin}</span>
          <span> سال </span>
      </div>
     
      <div class="item-cart">
          <span>تعداد روز گل دهی :</span>
          <span id='${res.nameZAmin}'> </span>
      </div>
      <div class="item-cart">
          <span>مجموع برداشت گل :</span>
          <span class = '${res.id}' style="font-size:13px ;"></span>
      </div>
      <div class="item-cart">
          <span>مجموع درآمد :</span>
          <span class='${res.nameZAmin}'></span>
      </div>
      <div
          <span id='vahed-card' class='${res.nameZAmin}'></span>
      </div>
    </div>
    <div class="item-cart" id="btn-add-card">
      <div class="btn-add-card-item"  onclick="showInfoZamin(${res.id})">
          <span id="span-card">افزودن اطلاعات جدید</span>
          <i class="fa-solid fa-plus" id="I-card"></i>
      </div>
  </div>
    </div>
      `
    );
    // showInfoZamin(`${res.id}`)
  });
  // withdrawalTotal()
}
let Names;
let withdrawalTotal = null
let StopMoseMove = false
function ShowMoseMove(ers){
  if ((withdrawalTotal)!= ers ) {
    Names = document.getElementById(ers);
    withdrawalTotal =Number(Names.id) 
    NameZaminInfo.innerHTML = Names.innerHTML;
    RonlyboxInfoZamin();
    
  }
}
function showInfoZamin(ers) {
  ContainerBoxZamin.style.display = 'none'
    BoxjozyatZamin.style.display = 'block'
}
let resultghematInfo
function SaveInDBInfo() {
  let num1 = vaznInfoZamin.value
  let num2 = fiyInfoZamin.value
  num1 = num1.replace(/,\s?/g, "");
  num2 = num2.replace(/,\s?/g, "");
  resultghematInfo = (num1 / 3) * num2;
  RWriteBoxInfoZamin();
}
let ZaminName;
function AlertDeletDBInfozamin(cartId) {
  ZaminName = document.getElementById(cartId);

  Swal.fire({
    title: "هشدار",
    text: `آیا از حذف اطلاعات  ${ZaminName.innerHTML} مطمئن هستید`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonText: "خیر",
    cancelButtonColor: "#d33",
    confirmButtonText: "بله",
  }).then((result) => {
    if (result.isConfirmed) {
      RemoveCartZamin(cartId);
      RonlyboxInfoZamin();
      // DeletOFDBInfozamin (IDDInfoZamin)
      Swal.fire("Deleted!", "اطلاعات با موفقیت حذف شد", "success");
    }
  });
}

let NameInfo;
function RemoveCartZamin(cartId) {
  NameInfo = document.getElementById(cartId);
  let transwriteAddzaminRemove = DataZAmin.transaction("boxZamin", "readwrite");
  transwriteAddzaminRemove.addEventListener("error", (err) => {
    console.warn("errortranswriteAddzaminRemove :", err);
  });

  transwriteAddzaminRemove.addEventListener("success", (event) => {
    console.log("successAddzamin:", event);
    // DataZAmin = event.target.result;
  });
  let storss = transwriteAddzaminRemove.objectStore("boxZamin");

  let reqestAddZaminRemove = storss.delete(cartId);

  reqestAddZaminRemove.addEventListener("error", (err) => {
    console.warn("reqestAddZaminRemove error :", err);
  });
  reqestAddZaminRemove.addEventListener("success", (event) => {
    console.log("reqestAddZaminRemove success :", event);

    DeletofDetaBInfo(AllDataInfoZamin);
    RonlyboxZamin();
  });
}

let IDDInfoZamin;
let UserDeletInfoZamin;

function DeletofDetaBInfo(AllDataInfoZamin) {
  if (NameInfo) {
    UserDeletInfoZamin = AllDataInfoZamin.filter((use) => {
      return use.NameZamin === NameInfo.innerHTML;
    });

    IDDInfoZamin = UserDeletInfoZamin.map((id) => {
      return id.id;
    });
    DeletOFDBInfozamin(IDDInfoZamin);
  }
}

function DeletOFDBInfozamin(IDDInfoZamin) {
  IDDInfoZamin.forEach((wor) => {
    let transwriteInfozaminRemove = DataInfoZAmin.transaction(
      "boxInfoZamin",
      "readwrite"
    );
    transwriteInfozaminRemove.addEventListener("error", (err) => {
      console.warn("errortranswriteInfozaminRemove :", err);
    });

    transwriteInfozaminRemove.addEventListener("success", (event) => {
      console.log("successAddzamin:", event);
      DataInfoZAmin = event.target.result;
    });
    let stors = transwriteInfozaminRemove.objectStore("boxInfoZamin");

    let reqestInfoZaminRemove = stors.delete(wor);

    reqestInfoZaminRemove.addEventListener("error", (err) => {
      console.warn("reqestInfoZaminRemove error :", err);
    });

    reqestInfoZaminRemove.addEventListener("success", (event) => {
      console.log("reqestInfoZaminRemove success :", event);
      RonlyboxInfoZamin();
    });
  });
}

// =============================================

let tarihkSHamsy = document.querySelector("#tarihk-shamsy");
let vaznInfoZamin = document.querySelector("#vazn-info-zamin");
let fiyInfoZamin = document.querySelector("#fiy-Info-Zamin");

function OpenIndexForInfoZamin() {
  let DBZaminInfo = indexedDB.open("BOX Info Zamin", 5);
  DBZaminInfo.addEventListener("error", (err) => {
    console.warn("errorDBZaminInfo :", err);
  });

  DBZaminInfo.addEventListener("success", (event) => {
    console.log("successDBZaminInfo :", event);
    DataInfoZAmin = event.target.result;
  });
  DBZaminInfo.addEventListener("upgradeneeded", (event) => {
    DataInfoZAmin = event.target.result;
    console.log("upgradeneededDBZaminInfo :", event);
    if (!DataInfoZAmin.objectStoreNames.contains("boxInfoZamin")) {
      DataInfoZAmin.createObjectStore("boxInfoZamin", {
        keyPath: "id",
        autoIncrement: true,
      });
    }
    //   if (DataInfoZAmin.objectStoreNames.contains("boxInfoZamin")) {
    //     DataInfoZAmin.deleteObjectStore("boxInfoZamin");
    //   }
  });
}

function RWriteBoxInfoZamin() {
  let NewInfoPlan = {
    NameZamin: NameZaminInfo.innerHTML,
    tarihkSHamsy: tarihkSHamsy.value,
    vaznInfoZamin: vaznInfoZamin.value,
    fiyInfoZamin: fiyInfoZamin.value,
    resultghematInfo : resultghematInfo ,
  };

  let transwriteInfozamin = DataInfoZAmin.transaction(
    "boxInfoZamin",
    "readwrite"
  );
  transwriteInfozamin.addEventListener("error", (err) => {
    console.warn("errortranswriteInfozamin :", err);
  });

  transwriteInfozamin.addEventListener("success", (event) => {
    console.log("successAddzamin:", event);
    DataInfoZAmin = event.target.result;
  });
  let stors = transwriteInfozamin.objectStore("boxInfoZamin");

  let reqestInfoZamin = stors.add(NewInfoPlan);

  reqestInfoZamin.addEventListener("error", (err) => {
    console.warn("reqestInfoZamin error :", err);
  });
  reqestInfoZamin.addEventListener("success", (event) => {
    console.log("reqestInfoZamin success :", event);
    RemoveBoxModal()
    RonlyboxInfoZamin();
  });
}
function RonlyboxInfoZamin() {
  let transonlyboxInfoZamin = DataInfoZAmin.transaction(
    "boxInfoZamin",
    "readonly"
  );

  transonlyboxInfoZamin.addEventListener("error", (err) => {
    console.warn("transonlyboxInfoZamin error :", err);
  });
  transonlyboxInfoZamin.addEventListener("complete", (event) => {
    console.log("transonlyboxInfoZamin complete :", event);
  });

  let storgetboxInfoZamin = transonlyboxInfoZamin.objectStore("boxInfoZamin");
  let reqestboxInfoZamin = storgetboxInfoZamin.getAll();

  reqestboxInfoZamin.addEventListener("error", (err) => {
    console.warn("reqestboxInfoZamin", err);
  });
  reqestboxInfoZamin.addEventListener("success", (event) => {
    AllDataInfoZamin = event.target.result;

    console.log("reqestboxInfoZamin", event);

    saveTOBoxZAmin(AllDataInfoZamin);
    //  selectRozShemar(AllDataInfoZamin)
    DeletofDetaBInfo(AllDataInfoZamin);
    
  });
}

// ===============================================

let RozShemarCart;

let NewAllDataInfoZamin = [];

function saveTOBoxZAmin(AllDataInfoZamin) {
  let newtr, newtd, newtd1, newtd2;
  BodyZamin.innerHTML = "";
  NewAllDataInfoZamin = AllDataInfoZamin.filter((userss) => {
    return userss.NameZamin === Names.innerHTML;
  });
  RozShemar = NewAllDataInfoZamin.length;

  if (RozShemar) {
    StopMoseMove = true
    RozShemarCart = document.getElementById(NameZaminInfo.innerHTML);
    RozShemarCart.innerHTML = Number(RozShemar) + " " + "روز";
  }

  NewAllDataInfoZamin.forEach((element) => {
    newtr = document.createElement("tr");
    newtd = document.createElement("td");
    newtd.innerHTML = element.tarihkSHamsy;
    newtd1 = document.createElement("td");
    newtd1.innerHTML = element.vaznInfoZamin;

    newtd2 = document.createElement("td");
    newtd2.innerHTML = element.fiyInfoZamin;

    newtd3 = document.createElement("td");
    newtd3.innerHTML = `
      <i class="fa-solid fa-circle-xmark" style="color: #695d64;" onclick="AlertDeletDBInfozaminCart(${element.id})" title="حذ ف" ></i>
      `;
      newtd3.classList.add('Remove-Item-list-Info')

    newtr.append(newtd, newtd1, newtd2 , newtd3);
    BodyZamin.append(newtr);
  });
  ResultTotolINfo()
}

function AlertDeletDBInfozaminCart (IdElem){
  Swal.fire({
    title: "هشدار",
    text: `آیا از حذف اطلاعات  مطمئن هستید`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonText: "خیر",
    cancelButtonColor: "#d33",
    confirmButtonText: "بله",
  }).then((result) => {
    if (result.isConfirmed) {
      Removes(IdElem)
      Swal.fire("Deleted!", "اطلاعات با موفقیت حذف شد", "success");
    }
  });
}
function Removes(IdElem){
  let transwriteInfozaminRemoveItem = DataInfoZAmin.transaction(
    "boxInfoZamin",
    "readwrite"
  );
  transwriteInfozaminRemoveItem.addEventListener("error", (err) => {
    console.warn("errortranswriteInfozaminRemoveItem :", err);
  });

  transwriteInfozaminRemoveItem.addEventListener("success", (event) => {
    console.log("successAddzamin:", event);
    DataInfoZAmin = event.target.result;
  });
  let stors = transwriteInfozaminRemoveItem.objectStore("boxInfoZamin");

  let reqestInfoZaminRemoveItem = stors.delete(IdElem);

  reqestInfoZaminRemoveItem.addEventListener("error", (err) => {
    console.warn("reqestInfoZaminRemoveItem error :", err);
  });

  reqestInfoZaminRemoveItem.addEventListener("success", (event) => {
    console.log("reqestInfoZaminRemoveItem success :", event);
    RonlyboxInfoZamin();
  });
}
function vahedModal2(){
  if (fiyInfoZamin.value) {
    let Numes =fiyInfoZamin.value
    let  Namber1 =Numes.replace(/,\s?/g, "");
    if (Namber1 > 0) {
    vahedGhamatInfo.innerHTML = Num2persian(Namber1) + ' ' + 'تومان'
    } else {
      vahedGhamatInfo.innerHTML = ''
    }
  }else {
    vahedGhamatInfo.innerHTML = ''
  }
}

function  ResultTotolINfo(){
  let totalvaznElemInfo = 0;
  let totalForoshZamin = 0
  NewAllDataInfoZamin.forEach(function (Numbers) {
    totalvaznElemInfo += Numbers.vaznInfoZamin.replace(/,\s?/g, "") * 1;
    totalForoshZamin +=Numbers.resultghematInfo * 1
  });
  
  TotalVaznInfo.innerHTML = totalvaznElemInfo.toFixed(2)
  

  let TotalBardashtGol = document.getElementsByClassName(withdrawalTotal);
  TotalBardashtGol[0].innerHTML =TotalVaznInfo.innerHTML + ' ' + 'کیلو گرم' 
 
  let TotalBardashtPOl = document.getElementsByClassName(NameZaminInfo.innerHTML)[0]
  TotalBardashtPOl.innerHTML = (Math.floor(totalForoshZamin).toLocaleString("en"))
  
  let VahedBardashtPOl = document.getElementsByClassName(NameZaminInfo.innerHTML)[1]
  VahedBardashtPOl.innerHTML = Num2persian(Math.floor(totalForoshZamin)) + ' '+ 'تومان' 
  
}


function RemoveBoxModal(){
  tarihkSHamsy.value = ''
vaznInfoZamin.value = ''
fiyInfoZamin.value = ''
}

function closeBoxejoz(){
  ContainerBoxZamin.style.display = 'flex'
  BoxjozyatZamin.style.display = 'none'
}
btnClosejoz.addEventListener ('click', closeBoxejoz)

fiyInfoZamin.addEventListener ('keyup' , vahedModal2 ,itpro )

SatheZamin.addEventListener ('keyup' , VahedItpro )

SabtBtn.addEventListener("click", SaveInDBInfo);
SabtBtnZamin.addEventListener("click", sabtInDB);
IconCloseModal.addEventListener("click", RemoveBoxModal);
