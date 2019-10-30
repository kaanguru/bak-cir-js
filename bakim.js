"use strict";
export  {basla} ;
import swal from "sweetalert";

function basla() {
    dugmeSakla();
    sesAyarla(75);
    (devamSarti) ? log("devam ediyoruz") : calismayıDurdur("devam için şartlar sağlanmadı");
    bakimSonuclarinaYaz(kacinciKovanSorKovanNoAl());
    // setTimeout(konus, 5000 , bakimSonuclari[0] + " nolu kovan bakımı, kolay gelsin.Kaç arılı çerçeve olduğunu kontrol ediniz biraz sonra soracağım");
    // setTimeout(ariliCerceveSayisiYaz, 10000);
}

function dugmeSakla() {
    document.getElementById('button').style.display = 'none';
}
function konus(metin) {
    swal('Bilge', metin);
    return metin;
}
function sesAyarla(seviye) {
    ayarlar.sesSeviyesi = Number(seviye);
    console.log("Ses ayarlandı yeni ses seviyesi:" + ayarlar.sesSeviyesi);
    return ayarlar.sesSeviyesi;
}
function medyaCaliyormuKontrolEt() {
    console.log("medya çalınıyor mu: kontrol");
    return false;
}
function internetKontrolEt() {
    console.log("internet varmı kontrol");
    return true;
}
function bataryaKontrolEt() {
    console.log("batarya yeterli mi kontrol");
    return true;
}
function log(mesaj) {
    console.log(mesaj)
}
function calismayıDurdur(mesaj) {
    konus(mesaj)
    return false;
}
function soruSorDuyulanSayiyiDondur(soru) {
    console.log("soruyorum: " + soru)
    let duyulan = swal('Bilge', soru);
    return isFinite(duyulan) ? Number(duyulan) : false;
}
// kovanNo
function kacinciKovanSorKovanNoAl() {
    let cevap = soruSorDuyulanSayiyiDondur("kaçıncı kovana bakım yapacaksınız")
    if (Number(cevap) <= ayarlar.lisansSayisi) {
        let kovanNo = cevap;
        return Number(kovanNo);
    } else {
        calismayıDurdur("lisans sayısından fazla kovana bakım yapamazsınız")
        return false;
    }
}
// arili
function kacAriliCerceveSorAriliCerceveSayisiAl() {
    let cevap = soruSorDuyulanSayiyiDondur("Kaç arılı çerçeve gördünüz")
    if (isFinite(Number(cevap))) {
        let ariliCerceveSayisi = cevap;
        return Number(ariliCerceveSayisi);
    } else {
        calismayıDurdur("bir sayı girmelisiniz.")
        return false;
    }
}




let devamSarti = (!medyaCaliyormuKontrolEt() && internetKontrolEt() && bataryaKontrolEt());
let ayarlar = {
    lisansSayisi: 3,
    gecikme: 1,
    sesSeviyesi: 1,
};
let bakimSonuclari = [];

