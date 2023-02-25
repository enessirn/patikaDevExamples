//lokasyon
const input = document.querySelector(".gorev");
const ekleButon = document.querySelector(".ekle")
const content = document.querySelector('.content')
const darkButon = document.querySelector('.toggle-button')
const elips = document.querySelector('.elips')
const container = document.querySelector('.container')
var gorevSayaci = 0;
var gorevler = [];
// Fonksiyonlar
function ekleButonuTıkla(e) {
    if ((input.value.length == 0) && (input.value == empty)){
        document.querySelector('.basarisiz').classList.add('block')
        setTimeout(function basariSilindi(){
        document.querySelector('.basarisiz').classList.remove('block')
        },1500)
    }

    
    var liste = document.querySelector('.liste');
    const li = document.createElement('li');
    li.classList.add('gorevler');
    li.classList.add(gorevSayaci);
    liste.appendChild(li);
    gorevler[gorevSayaci] = li;

    const onaylaButon = document.createElement('button');
    onaylaButon.classList.add('onayla');
    onaylaButon.innerHTML = "<i class='fa-solid fa-square-check'></i>";
    li.appendChild(onaylaButon);
    
    const p = document.createElement('p');
    p.classList.add('gorevYazi');
    p.innerText = input.value;
    li.appendChild(p);

    const div = document.createElement('div');
    div.classList.add('butonlar');
    li.appendChild(div);

    const duzenleButon = document.createElement('button');
    duzenleButon.classList.add('duzenle');
    duzenleButon.innerHTML = "<i class='fa-solid fa-pen'></i>";
    div.appendChild(duzenleButon);

    const silButon = document.createElement('button');
    silButon.classList.add('sil');
    silButon.innerHTML = "<i class='fa-solid fa-trash'></i>";
    div.appendChild(silButon);


    document.querySelector('.basarili').classList.add('block');
    setTimeout(function sil() {
        document.querySelector('.basarili').classList.remove('block');
    },1500)

    gorevSayaci ++;
    input.value="";
    darkModeKontrol();
    
}
function silButonuTıkla(e) {
   const sil =  e.target;
    if (sil.classList[0] === "sil") {
        const div = sil.parentElement;
        const li = div.parentElement;
       const onay =  confirm("Silmek istediğinizden emin misiniz?");
            if (onay === true){
                li.remove();
                document.querySelector('.basarili').classList.add('block');
                setTimeout(function sil() {
                    document.querySelector('.basarili').classList.remove('block')
                },1500)
            }
    }
}

function duzenleButonuTıkla(e){
    
    const duzenle = e.target;

    if (duzenle.classList[0] === "duzenle"){ 
        const oncekiEleman = duzenle.parentElement.parentElement;
        const editValue = oncekiEleman.querySelector(".gorevYazi");
        const newValue = prompt(`Duzenlemeyi istediğiniz görevin konusunu yazınız.
        
Değiştirmek istediğiniz gorevin adı : ${editValue.innerText}
        `);
        newValue.trim();
       
    if ((newValue.length > 0)){
        editValue.innerText = newValue;
        document.querySelector('.basarili').classList.add('block');
         setTimeout(function sil() {
         document.querySelector('.basarili').classList.remove('block');
        },1500)
    }
    }
}
function onaylaButonuTıkla(e){
    const onayla = e.target
    if (onayla.classList[0] === "onayla"){
        onayla.classList.add('onayButon')
        const oncekiEleman = onayla.parentElement
        oncekiEleman.classList.toggle('onaylandı');
        setTimeout( function onayAnimasyon() {
            oncekiEleman.querySelector('.duzenle').classList.toggle('kilitli')
        },800)
        oncekiEleman.querySelector('.duzenle').classList.toggle('display-none');
        
    }
}

//dark mode fonksiyon
function darkMode(e){ 
console.log(gorevSayaci);
    elips.classList.toggle('active');
   

        if (elips.classList[1] == "active" ){
            for (let index = 0; index < gorevSayaci; index++) {
            container.classList.add('container-dark');
            darkButon.classList.add('toggle-button-light')
            input.classList.add('dark-input')
           gorevler[index].classList.add('darkGorev')
           gorevler[index].querySelector('.onayla').classList.add('darkOnay')
           gorevler[index].querySelector('.duzenle').classList.add('darkDuzenle')
           gorevler[index].querySelector('.sil').classList.add('darkSil')
            }
        }
        else {
            for (let index = 0; index < gorevSayaci; index++) {
            container.classList.remove('container-dark');
            darkButon.classList.remove('toggle-button-light')
            input.classList.remove('dark-input')
            gorevler[index].classList.remove('darkGorev')
            gorevler[index].querySelector('.onayla').classList.remove('darkOnay')
            gorevler[index].querySelector('.duzenle').classList.remove('darkDuzenle')
            gorevler[index].querySelector('.sil').classList.remove('darkSil')
            }
        }
        
    }

    function darkModeKontrol() {
        if (elips.classList[1] == "active" ){
            for (let index = 0; index < gorevSayaci; index++) {
            container.classList.add('container-dark');
            darkButon.classList.add('toggle-button-light')
            input.classList.add('dark-input')
           gorevler[index].classList.add('darkGorev')
           gorevler[index].querySelector('.onayla').classList.add('darkOnay')
           gorevler[index].querySelector('.duzenle').classList.add('darkDuzenle')
           gorevler[index].querySelector('.sil').classList.add('darkSil')
            }
        }
        else {
            for (let index = 0; index < gorevSayaci; index++) {
            container.classList.remove('container-dark');
            darkButon.classList.remove('toggle-button-light')
            input.classList.remove('dark-input')
            gorevler[index].classList.remove('darkGorev')
            gorevler[index].querySelector('.onayla').classList.remove('darkOnay')
            gorevler[index].querySelector('.duzenle').classList.remove('darkDuzenle')
            gorevler[index].querySelector('.sil').classList.remove('darkSil')
            }
        }
    }
   
       
    



//saat tarih function


function saatBilgisi() {
    const date = new Date();

    var hour = date.getHours();
    if(hour < 10) {
        hour = "0" + hour
    }
    var min = date.getMinutes();
    if(min < 10){
        min = "0" + min
    }
    var sec = date.getSeconds();
    if(sec < 10){
        sec = "0" + sec
    }
    const time = `${hour}:${min}:${sec}`
    document.querySelector('.saat').innerHTML = time
}
setInterval(function()
{
    saatBilgisi();
} ,1000);

setInterval(function(){
const date = new Date();
var gun = date.getDate();
if(gun < 10) {
    gun = "0" + gun
}
var ayBilgisi = date.getMonth();
let aylar = ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"]
let ay = aylar[ayBilgisi]
var yil = date.getFullYear()

let fullTime = `${gun} ${ay} ${yil}`
document.querySelector('.tarih').innerHTML = fullTime
},1000)
//eventler

//ekle
ekleButon.addEventListener("click",ekleButonuTıkla);
//sil
addEventListener("click",silButonuTıkla);
addEventListener("click",duzenleButonuTıkla);
addEventListener("click",onaylaButonuTıkla);
darkButon.addEventListener("click",darkMode);


