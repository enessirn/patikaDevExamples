let allFilterButton = document.querySelector("#all");
let mochaFilterButton = document.querySelector("#mocha");
let americanoFilterButton = document.querySelector("#americano");
let espressoFilterButton = document.querySelector("#espresso");

let products = document.querySelector(".products")

const urunler = [
    {
        urunAdi: "Buzlu White Chocolate Mocha",
        urunResim : "img/buzlu-white-mocha.webp",
        urunAciklama: "Espresso, beyaz çikolata sosu, soğuk süt ve buzun buluşması, krema ile süslenerek sunulur.",
        urunFiyat : "₺15.00",
        tag : "mocha"
    },
    {
        urunAdi: "Caffè Mocha",
        urunResim : "img/caffe-mocha.webp",
        urunAciklama: "Espresso, mocha sos (çikolata sos) ve buharla ısıtılmış süt, krema ile tamamlanarak sunulur.",
        urunFiyat : "₺20.00",
        tag : "mocha"
    },
    {
        urunAdi: "White Chocolate Mocha",
        urunResim : "img/white-chocolate-mocha.webp",
        urunAciklama: "Espresso, beyaz çikolata sosu ve buharla ısıtılmış süt kahvesini tatlı sevenler için buluştu ve krema ile süslendi.",
        urunFiyat : "₺20.00",
        tag : "mocha"
    },
    {
        urunAdi: "Buzlu Caffè Mocha",
        urunResim : "img/buzlu-caffe-mocha.webp",
        urunAciklama: "Espresso, mocha sos (çikolata sos), soğuk süt ve buz parçalarının buluştuğu lezzet, krema ile tamamlanarak sunulur.",
        urunFiyat : "₺25.00",
        tag : "mocha"
    },
    {
        urunAdi: "Caffè Americano",
        urunResim : "img/caffe-americano.webp",
        urunAciklama: "Sıcak su ile inceltilmiş yoğun espresso lezzeti",
        urunFiyat : "₺25.00",
        tag : "americano"
    },
    {
        urunAdi: "Buzlu Caffè Americano",
        urunResim : "img/buzlu-caffe-americano.webp",
        urunAciklama: "Su ile inceltilmiş yoğun espresso lezzetinin buzlu sunumu",
        urunFiyat : "₺22.00",
        tag : "americano"
    },
    {
        urunAdi: "Espresso Con Panna",
        urunResim : "img/espresso-con-panna.webp",
        urunAciklama: "Krema ile süslenmiş, karamel tatlılığı sunan espresso",
        urunFiyat : "₺27.00",
        tag : "espresso"
    },
    {
        urunAdi: "Espresso",
        urunResim : "img/espresso.webp",
        urunAciklama: "Karamel notaları ve zengin lezzetiyle espresso",
        urunFiyat : "₺23.00",
        tag : "espresso"
    },
    {
        urunAdi: "Espresso Macchiato",
        urunResim : "img/espresso-macchiato.webp",
        urunAciklama: "Buharla ısıtılmış süt köpüğünün dokunuşuyla espresso",
        urunFiyat : "₺27.00",
        tag : "espresso"
    }
]


let mochaArray = [];
let americanoArray = [];
let espressoArray = [];

var mochaAll = urunler.map(tagUrun => {
    if(tagUrun.tag == "mocha")
    mochaArray.push(tagUrun)
});
var americanoAll = urunler.map(tagUrun => {
   if (tagUrun.tag == "americano") {
    americanoArray.push(tagUrun)
   }
});
var espressoAll = urunler.map(tagUrun => {
    if (tagUrun.tag == "espresso") 
    espressoArray.push(tagUrun)
    
})

function urunEkleme(name,img,desc,price) {
  
        let urun = document.createElement("div");
        urun.classList.add("urun");
        products.appendChild(urun)

        let productImg = document.createElement("div");
        productImg.classList.add("product-img");
        let productImgSrc = document.createElement('img')
        productImgSrc.setAttribute("src",img)
        productImg.appendChild(productImgSrc)
        urun.appendChild(productImg)

        let productDetails = document.createElement("div")
        productDetails.classList.add("product-details")
        urun.appendChild(productDetails)

        let productHeader = document.createElement("div")
        productHeader.classList.add("product-header")
        productHeader.textContent = name
        productDetails.appendChild(productHeader)
        
        let productDesc = document.createElement("div")
        productDesc.classList.add("product-desc")
        productDesc.textContent = desc
        productDetails.appendChild(productDesc)

        let productPrice = document.createElement("div")
        productPrice.classList.add("product-price")
        productPrice.textContent = price
        productDetails.appendChild(productPrice)

        let siparisVer = document.createElement("div")
        siparisVer.classList.add("siparis-ver")
        siparisVer.textContent = "Sipariş Ver";
        urun.appendChild(siparisVer)
}

allFilterButton.addEventListener("click", ()=> {
    products.innerHTML = ""
    for (let i = 0; i < urunler.length; i++) {
        urunEkleme(urunler[i].urunAdi, urunler[i].urunResim, urunler[i].urunAciklama, urunler[i].urunFiyat)
        
    }
})
allFilterButton.click();
mochaFilterButton.addEventListener("click", ()=> {
    products.innerHTML = ""
    for (let i = 0; i < mochaArray.length; i++) {
        urunEkleme(mochaArray[i].urunAdi, mochaArray[i].urunResim, mochaArray[i].urunAciklama, mochaArray[i].urunFiyat)
        
    }
})
americanoFilterButton.addEventListener("click",()=> {
    products.innerHTML = ""
    for (let i = 0; i < americanoArray.length; i++) {
        urunEkleme(americanoArray[i].urunAdi, americanoArray[i].urunResim, americanoArray[i].urunAciklama, americanoArray[i].urunFiyat)
        
    }
})
espressoFilterButton.addEventListener("click",()=> {
    products.innerHTML = ""
    for (let i = 0; i < espressoArray.length; i++) {
        urunEkleme(espressoArray[i].urunAdi, espressoArray[i].urunResim, espressoArray[i].urunAciklama, espressoArray[i].urunFiyat)
        
    }
})