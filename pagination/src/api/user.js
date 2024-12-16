const users = [{"id":1,"FullName":"Adelheid Nappin","NumPhone":"1576027641","email":"anappin0@meetup.com","Date":"04/08/2022"},
{"id":2,"FullName":"Pattin Khomin","NumPhone":"5055968582","email":"pkhomin1@rambler.ru","Date":"02/11/2022"},
{"id":3,"FullName":"Kaela Baildon","NumPhone":"2856509985","email":"kbaildon2@sohu.com","Date":"07/03/2023"},
{"id":4,"FullName":"Nataline Layzell","NumPhone":"8381801198","email":"nlayzell3@creativecommons.org","Date":"01/09/2022"},
{"id":5,"FullName":"Cassey Fellos","NumPhone":"6329830890","email":"cfellos4@biblegateway.com","Date":"15/08/2022"},
{"id":6,"FullName":"Devi Oertzen","NumPhone":"2856562519","email":"doertzen5@google.com.au","Date":"18/07/2022"},
{"id":7,"FullName":"Nap Orring","NumPhone":"1371320715","email":"norring6@blogger.com","Date":"06/04/2023"},
{"id":8,"FullName":"Kenna Stithe","NumPhone":"2203848708","email":"kstithe7@cnet.com","Date":"13/12/2022"},
{"id":9,"FullName":"Sibyl Dibbin","NumPhone":"5236573598","email":"sdibbin8@techcrunch.com","Date":"06/01/2023"},
{"id":10,"FullName":"Amalita Courtes","NumPhone":"5694638573","email":"acourtes9@go.com","Date":"11/08/2022"},
{"id":11,"FullName":"Gregor Eberst","NumPhone":"5575401998","email":"gebersta@wordpress.com","Date":"07/05/2023"},
{"id":12,"FullName":"Herrick Fotheringham","NumPhone":"2786727417","email":"hfotheringhamb@imgur.com","Date":"22/10/2022"},
{"id":13,"FullName":"Jim Limb","NumPhone":"4676955480","email":"jlimbc@businesswire.com","Date":"13/10/2022"},
{"id":14,"FullName":"Jaynell Kesterton","NumPhone":"5304570784","email":"jkestertond@reverbnation.com","Date":"29/07/2022"},
{"id":15,"FullName":"Ophelia Nation","NumPhone":"9426068240","email":"onatione@usnews.com","Date":"01/04/2023"},
{"id":16,"FullName":"Brodie Tonkinson","NumPhone":"6352258013","email":"btonkinsonf@prnewswire.com","Date":"13/09/2022"},
{"id":17,"FullName":"Muffin Izzard","NumPhone":"1154722026","email":"mizzardg@sitemeter.com","Date":"05/05/2023"},
{"id":18,"FullName":"Beulah Baurerich","NumPhone":"7516118176","email":"bbaurerichh@mac.com","Date":"05/10/2022"},
{"id":19,"FullName":"Hewie Sanders","NumPhone":"4645020685","email":"hsandersi@mozilla.com","Date":"31/10/2022"},
{"id":20,"FullName":"Noelani Doveston","NumPhone":"7088189745","email":"ndovestonj@xinhuanet.com","Date":"24/09/2022"},
{"id":21,"FullName":"Rina Greedy","NumPhone":"9118697253","email":"rgreedyk@ucsd.edu","Date":"18/04/2023"},
{"id":22,"FullName":"Aindrea Conachie","NumPhone":"3735353723","email":"aconachiel@goo.gl","Date":"07/02/2023"},
{"id":23,"FullName":"Holt Duggan","NumPhone":"7223084609","email":"hdugganm@github.com","Date":"02/10/2022"},
{"id":24,"FullName":"Dynah Bicksteth","NumPhone":"4517194424","email":"dbickstethn@addtoany.com","Date":"01/10/2022"},
{"id":25,"FullName":"Glenine De Vaar","NumPhone":"4611974221","email":"gdeo@tinyurl.com","Date":"15/10/2022"},
{"id":26,"FullName":"Adel Cartmer","NumPhone":"1364154428","email":"acartmerp@theglobeandmail.com","Date":"25/09/2022"},
{"id":27,"FullName":"Vera Mitchell","NumPhone":"9326519984","email":"vmitchellq@sourceforge.net","Date":"05/05/2023"},
{"id":28,"FullName":"Grantley Chatainier","NumPhone":"5016572332","email":"gchatainierr@diigo.com","Date":"10/07/2022"},
{"id":29,"FullName":"Alleyn Asser","NumPhone":"5552170317","email":"aassers@umich.edu","Date":"18/09/2022"},
{"id":30,"FullName":"Elena Scapelhorn","NumPhone":"4786438552","email":"escapelhornt@slashdot.org","Date":"07/05/2023"},
{"id":31,"FullName":"Bertie Shorto","NumPhone":"8809830722","email":"bshortou@shareasale.com","Date":"17/05/2023"},
{"id":32,"FullName":"Katuscha Lantiff","NumPhone":"3674251395","email":"klantiffv@theglobeandmail.com","Date":"20/07/2022"},
{"id":33,"FullName":"Galvan Newgrosh","NumPhone":"3526428153","email":"gnewgroshw@apache.org","Date":"09/07/2022"},
{"id":34,"FullName":"Ardelis Brumbie","NumPhone":"4709251915","email":"abrumbiex@bing.com","Date":"29/06/2023"},
{"id":35,"FullName":"Elladine Frantzen","NumPhone":"3761772082","email":"efrantzeny@mayoclinic.com","Date":"15/04/2023"},
{"id":36,"FullName":"Juliet Crannis","NumPhone":"8597555901","email":"jcrannisz@businessweek.com","Date":"04/06/2023"},
{"id":37,"FullName":"Stacie Heinritz","NumPhone":"5303042600","email":"sheinritz10@paypal.com","Date":"22/07/2022"},
{"id":38,"FullName":"Courtney Cordero","NumPhone":"1004404560","email":"ccordero11@google.es","Date":"12/01/2023"},
{"id":39,"FullName":"Romeo Maddinon","NumPhone":"9648667032","email":"rmaddinon12@icq.com","Date":"16/09/2022"},
{"id":40,"FullName":"Chrystal Ayris","NumPhone":"2195334090","email":"cayris13@google.cn","Date":"03/05/2023"},
{"id":41,"FullName":"Kameko Sodory","NumPhone":"2589829205","email":"ksodory14@geocities.com","Date":"04/12/2022"},
{"id":42,"FullName":"Harv Crossan","NumPhone":"8952197351","email":"hcrossan15@salon.com","Date":"14/04/2023"},
{"id":43,"FullName":"Lion Foch","NumPhone":"1882310138","email":"lfoch16@unesco.org","Date":"15/11/2022"},
{"id":44,"FullName":"Sterne Stichall","NumPhone":"7144170806","email":"sstichall17@unblog.fr","Date":"22/10/2022"},
{"id":45,"FullName":"Culver Mullan","NumPhone":"8592874213","email":"cmullan18@blogspot.com","Date":"17/02/2023"},
{"id":46,"FullName":"Hagen Hoggan","NumPhone":"5404862878","email":"hhoggan19@biblegateway.com","Date":"04/12/2022"},
{"id":47,"FullName":"Inesita Batrick","NumPhone":"1193047996","email":"ibatrick1a@sohu.com","Date":"21/03/2023"},
{"id":48,"FullName":"Lorna Bartolijn","NumPhone":"1439234420","email":"lbartolijn1b@newsvine.com","Date":"23/12/2022"},
{"id":49,"FullName":"Ransell Chastang","NumPhone":"4265843077","email":"rchastang1c@jimdo.com","Date":"23/09/2022"},
{"id":50,"FullName":"Colleen Danell","NumPhone":"3401901212","email":"cdanell1d@list-manage.com","Date":"27/11/2022"}]

export const getUsers =function(page,limit){
    let array = [];
    for (let i = (page-1)*limit; i < (page*limit) && users[i]; i++) {
        array.push(users[i]);
    }
    return array;
}
export const getLength =function()
{
    return users.length;
} 