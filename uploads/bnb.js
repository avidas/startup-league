var request = require('request');
var querystring = require('querystring');

var companies = [
    {
        "name": "Uber",
        "image": "https://crunchbase-production-res.cloudinary.com/image/upload/c_pad,h_98,w_98/v1412017706/sv81vtnrqnenx1lpcgnv.jpg",
        "series": "E",
        "raised": "$5,900,000,000",
        "points": "5900",
        "website": "uber.com"
    },
    {
        "name": "Slack",
        "image": "https://crunchbase-production-res.cloudinary.com/image/upload/c_pad,h_98,w_98/v1413307057/jik5dbxyvnjq40kj3ujs.png",
        "series": "E",
        "raised": "$340,000,000",
        "points": "340",
        "website": "slack.com"
    },
    {
        "name": "Crowdrise",
        "image": "https://crunchbase-production-res.cloudinary.com/image/upload/c_pad,h_98,w_98/v1397199822/2788ed271ca1730b5330127bff107e44.jpg",
        "series": "A",
        "raised": "$24,600,000",
        "points": "24",
        "website": "crowdrise.com"
    },
    {
        "name": "Coinbase",
        "image": "https://crunchbase-production-res.cloudinary.com/image/upload/c_pad,h_98,w_98/v1397751957/1b5c2ec8ce328afeee9c90626b60fe5c.jpg",
        "series": "C",
        "raised": "$106,700,000",
        "points": "106",
        "website": "coinbase.com"
    },
    {
        "name": "Airbnb",
        "image": "https://crunchbase-production-res.cloudinary.com/image/upload/c_pad,h_98,w_98/v1405534850/vubc5kxhmw6jalain0ot.jpg",
        "series": "D",
        "raised": "$794,800,000",
        "points": "794",
        "website": "airbnb.com"
    },
    {
        "name": "Optimizely",
        "image": "https://crunchbase-production-res.cloudinary.com/image/upload/c_pad,h_98,w_98/v1397186979/d7ccf97f0795b7cc9b6f6e7c6b3fadfc.png",
        "series": "B",
        "raised": "$88,200,000",
        "points": "88",
        "website": "optimizely.com"
    },
    {
        "name": "Keyssa",
        "image": "https://crunchbase-production-res.cloudinary.com/image/upload/c_pad,h_98,w_98/v1418419407/kgg5x3bfui53a0ezge8m.jpg",
        "series": "C",
        "raised": "$47,000,000",
        "points": "47",
        "website": "keyssa.com"
    },
    {
        "name": "Robinhood",
        "image": "https://crunchbase-production-res.cloudinary.com/image/upload/c_pad,h_98,w_98/v1411606269/kbkocgbff0yfgxzyrx5h.png",
        "series": "B",
        "raised": "$66,000,000",
        "points": "66",
        "website": "robinhood.com"
    },
    {
        "name": "New Matter",
        "image": "https://crunchbase-production-res.cloudinary.com/image/upload/c_pad,h_98,w_98/v1425680652/o1apsoo8anlakantnyji.jpg",
        "series": "A",
        "raised": "$6,500,000",
        "points": "6",
        "website": "newmatter.com"
    },
    {
        "name": "Wickr",
        "image": "https://crunchbase-production-res.cloudinary.com/image/upload/c_pad,h_98,w_98/v1397189008/1f303fb8d12f1eae5b8fb343f26f22e7.png",
        "series": "B",
        "raised": "$39,000,000",
        "points": "39",
        "website": "wickr.com"
    },
    {
        "name": "Favor",
        "image": "https://crunchbase-production-res.cloudinary.com/image/upload/c_pad,h_98,w_98/v1398400128/cg2xlrnoavjqe9byafw4.png",
        "series": "A",
        "raised": "$16,000,000",
        "points": "16",
        "website": "favordelivery.com"
    },
    {
        "name": "Meerkat",
        "image": "https://crunchbase-production-res.cloudinary.com/image/upload/c_pad,h_98,w_98/v1425928240/wroadkfr55rcnmtspuge.png",
        "series": "B",
        "raised": "$18,200,000",
        "points": "18",
        "website": "meerkatapp.co"
    },
    {
        "name": "Snapchat",
        "image": "https://crunchbase-production-res.cloudinary.com/image/upload/c_pad,h_98,w_98/v1397191605/363f7277d53b74d271eee57b73053a13.png",
        "series": "E",
        "raised": "$848",
        "points": "848",
        "website": "snapchat.com"
    },
    {
        "name": "Instacart",
        "image": "https://crunchbase-production-res.cloudinary.com/image/upload/c_pad,h_98,w_98/v1397202927/74980a0728308f670138a2dbf3b3641a.jpg",
        "series": "C",
        "raised": "$274",
        "points": "274",
        "website": "instacart.com"
    },
    {
        "name": "SoundCloud",
        "image": "https://crunchbase-production-res.cloudinary.com/image/upload/c_pad,h_98,w_98/v1426604222/wzsevupiowty9fgufipn.png",
        "series": "D",
        "raised": "$123",
        "points": "123",
        "website": "soundcloud.com"
    }
];

var newList = [];

companies.forEach(function(company) {
    console.log(company.website);
    request.get('https://edge.dnb.com/v1/duns-search/domain/' + company.website + '?level=standard', {
      'auth': {
        'bearer': '4sj3CrC6x85Wscc8E7g2GZwzSQh5'
      }
    }, function (error, response, body) {
        var info = JSON.parse(body);
        if (!error && info.organization) {
            console.log(info);
            console.log(company);
            console.log(info.organization.numberOfEmployees.value);
            company.numberOfEmployees = info.organization.numberOfEmployees.value;
            company.yearlyRevenue = info.organization.yearlyRevenue.value;
            newList.push(company);
            console.log(newList);            
        }
    });
});




