console.log('main.loaded');

 const rijBewijs= prompt('Waneer kan je je autorijbewijs halen ?')

if (rijBewijs >=0 && rijBewijs < 16) {
    document.body.innerHTML += `Je kan nog niet beginnen met je rijbewijs`;
} else if (rijBewijs == "16") {
    document.body.innerHTML += `Je kan beginnen met je theorie en je kan beginnen met lessen`;
} else if (rijBewijs == "17") {
    document.body.innerHTML += `Je mag je praktijk examen doen maar nogniet rijden als je het haalt.`;
} else if (rijBewijs == "18") {
    document.body.innerHTML  += `Je kan nu rijden als je je rijbewijs heb gehaald .`
} else if (rijBewijs >= 18 ) {
    document.body.innerHTML += `Je kan je rijbewijs halen waneer je wilt.`
}

