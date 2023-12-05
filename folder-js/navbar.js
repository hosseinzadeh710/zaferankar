

let infoZamin = document.querySelector('#etl-zamin-btn') 
let infoetlfrosh = document.querySelector ('#etl-frosh-btn') 
let infoetlpar = document.querySelector ('#etl-par-btn')
let infoetlkargar = document.querySelector ('#etl-kargar-btn')

let infoZaminBox = document.querySelector ('.etl-zamin-box')
let infoetlfroshbox = document.querySelector ('.etl-frosh')
let infoetlparbox = document.querySelector ('.etl-par')
let infoetlkargarbox = document.querySelector ('.etl-kargar')

let IconColor =document.querySelector ('#Icon')
let BOxBorder = document.querySelector ('.nav-heder-box')

let Section1 = document.querySelector ('#section1')
let Section2 = document.querySelector ('#section2')
let Section3 = document.querySelector ('#section3')
let Section4 = document.querySelector ('#section4')

infoZamin.addEventListener ('click' , (event)=>{
infoZamin.classList.add('button-click1')
infoZaminBox.innerHTML = ''
infoZaminBox.insertAdjacentHTML('beforeend' , `<div class="Icon" style="border:2px solid #ab74b4 ;"></div>`)
BOxBorder.style.borderColor = '#ab74b4'
infoetlfroshbox.innerHTML = ''
infoetlparbox.innerHTML = ''
infoetlkargarbox.innerHTML = ''
infoetlfrosh.classList.remove ('button-click2')
infoetlpar.classList.remove ('button-click3')
infoetlkargar.classList.remove ('button-click4')
Section1.style.display = 'block'
Section2.style.display = 'none'
Section3.style.display = 'none'
Section4.style.display = 'none'
ShowboxZamin()
})

infoetlfrosh.addEventListener ('click' , ()=>{
    infoetlfrosh.classList.add('button-click2')
    infoetlfroshbox.innerHTML = ''
    infoetlfroshbox.insertAdjacentHTML('beforeend' , `<div class="Icon" style="border:2px solid #ab74b4 ;"></div>`)
    BOxBorder.style.borderColor = '#ab74b4'
    infoZaminBox.innerHTML = ''
    infoetlparbox.innerHTML = ''
    infoetlkargarbox.innerHTML = ''
    
    infoZamin.classList.remove('button-click1')
    infoetlpar.classList.remove ('button-click3')
    infoetlkargar.classList.remove ('button-click4')
    Section2.style.display = 'block'
    Section1.style.display = 'none'
    Section3.style.display = 'none'
    Section4.style.display = 'none'
})

infoetlpar.addEventListener ('click' , ()=>{
    infoetlpar.classList.add('button-click3')
    infoetlparbox.innerHTML = ''
    infoetlparbox.insertAdjacentHTML('beforeend' , `<div class="Icon" style="border:2px solid #ab74b4;"></div>`)
    BOxBorder.style.borderColor = '#ab74b4'

    infoZaminBox.innerHTML = ''
    infoetlfroshbox.innerHTML = ''
    infoetlkargarbox.innerHTML = ''
    
infoZamin.classList.remove('button-click1')
infoetlfrosh.classList.remove ('button-click2')
infoetlkargar.classList.remove ('button-click4')
Section1.style.display = 'none'
Section2.style.display = 'none'
Section3.style.display = 'block'
Section4.style.display = 'none'
})

infoetlkargar.addEventListener ('click' , ()=>{
    infoetlkargar.classList.add('button-click4')
    infoetlkargarbox.innerHTML = ''
    infoetlkargarbox.insertAdjacentHTML('beforeend' , `<div class="Icon" style="border:2px solid #ab74b4 ;"></div>`)
    BOxBorder.style.borderColor = '#ab74b4'
    infoZaminBox.innerHTML = ''
    infoetlfroshbox.innerHTML = ''
    infoetlparbox.innerHTML = ''
    
infoZamin.classList.remove('button-click1')
infoetlfrosh.classList.remove ('button-click2')
infoetlpar.classList.remove ('button-click3')
Section1.style.display = 'none'
Section2.style.display = 'none'
Section3.style.display = 'none'
Section4.style.display = 'block'
})

