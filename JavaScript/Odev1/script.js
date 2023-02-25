const ad = document.querySelector("#ad")
const saat = document.querySelector("#saat")

let date = new Date();
let day = date.getDate();
let gun = date.getDay();
let gunler = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"]
let gunIsmı = gunler[gun]
let ay = date.getMonth();
let yil = date.getFullYear();
let aylar =["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"]
let ayIsmi = aylar[ay];
let adKontrolPrompt = prompt("İsminizi Giriniz");

ad.innerHTML = adKontrolPrompt.toUpperCase();
saat.textContent = `${day} ${ayIsmi} ${yil} ${gunIsmı}`