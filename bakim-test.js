/* eslint-disable no-undef */
"use strict";

describe("Ayarlamaları yapmak için uygulama ayarları oluştur ve değiştir", function () {
    it("Lisans değişkenin atanması", function () {
        expect(ayarlar.lisansSayisi).toEqual(3);
    });
    it("Gecikme ayarının okunması", function () {
        expect(ayarlar.gecikme).toBe(1);
    });

    xit("Ses seviyesini ayarla ", function () {
        expect(sesAyarla(22)).toBe(22);
        console.log("Test çalışıyor. Test Ses seviyesi:" + ayarlar.sesSeviyesi);

    });
});

xdescribe("Kontrol Bloğu: bakım yapmadan önce herşeyin hazır olup olmadığını kontrol et ", function () {
    it("Çalan bir medya var mı kontrol et", function () {
        expect(medyaCaliyormuKontrolEt()).toBe(false);
    });
    it("internet var mı kontrol et", function () {
        expect(internetKontrolEt()).toBe(true);
    });
    it("batarya yeterli mi kontrol et", function () {
        expect(bataryaKontrolEt()).toBe(true);
    });
    it("Devam şartı sağlanıyor mu?", function () {
        expect(devamSarti).toBe(true);
    });
});
xdescribe("Anket Bloğu: sırasıyla sorular sor ", function () {
    it("konuşma metin oku", function () {
        expect(konus("konuşma test")).toBe("konuşma test");
    });
    it("soru sor", function () {
        expect(soruSorDuyulanSayiyiDondur("2 yazar mısın?")).toBe(Number("2"));
    });

});

