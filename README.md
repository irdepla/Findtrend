# Findtrend


Example 1


innerfunction() outerVar ozgaruvchisini ko'ra oladi chunki birinchi ozgaruvchi innerfunction funksiyasini ichida yoq lekin undan tepasiga chiqqanda ozgaruchi outerfunction funksiyasida bor. Bu qoida lexical scope va closure qoidalariga asoslanadi.




Example 2



Konsolda birinchi 20 keyin 10 soni chiqariladi chunki inner funksiyasi ozida bor ozgaruchisi ya'ni x ni chiqazadi ekranga agar ozida bomaganda undan tashqaridagigi funksiyadan olardi, bundan keyingi funksiya chaqrlvotti yan uni qiymati 10 shuning uchun ekranga 10 chiqadi.



Example 3


Count ozgaruvchisi createcounter funksiyasi ichida saqlanadi, lekin keyingi savolini uncha yaxshi chunmadim nima dmoxchi boganlarini




Example 4


Konsolga brinchi bolib "Mahalliy xabar" keyin "Global xabar" chiqadi. Chunki message ozgaruvchisi funksiyani ozini ichida bor yani bu local scope qoidasiga tegishli shunga message ozgaruvchisini showMessage funksiyasi ozidan oladi agar bomaganida tashqaridagi global scopedan olardi."Global xabar" global scope qoidasiga asosslangan holda chiqadi uni shu ozgaruchisi bn chqairsak boladi. Ya'ni u funksiyani tashqarsida shunga global.




Example 5


return ichidagi funksiya multiplier parametri ozida yoqligi uchun tepaga chiqadi yani boshqa funksiyada multiplier parametri bor shunga bu ikkita parametr qoshilib ishlidi.Keyin uni ishlashiga yana bitta sabab bu biza ozgaruvchi sifatida double bn tripple ga createMultiplier funksiyasiga tenglavoldik.