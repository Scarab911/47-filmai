const Cinema = require('./Cinema');

const kauke = new Cinema('Kauke', 'EUR');

kauke.intro();
// Welcome to "Kauke" cinema theater!

// PARAMS: movieName, moviePrice, ticketPrice
kauke.addMovie('Balionelis', 10, 2);
// You can watch "Balionelis" movie for 2 EUR, now!
kauke.addMovie('Kaspinelis', 10, 3);
// You can watch "Kaspinelis" movie for 3 EUR, now!
// PARAMS: movieIndex, ticketsCount
kauke.sellTickets(0, 2);
kauke.sellTickets(1, 1);
kauke.sellTickets(0, 2);
kauke.sellTickets(1, 1);

kauke.profit();
// ===============
// "Kauke" profit:
// ===============
// 1. "Balionelis":
//     paid: 10 EUR;
//     profit: 8 EUR;
//     net profit: -2 EUR;
// ---------------
// 2. "Kaspinelis":
//     paid: 10 EUR;
//     profit: 6 EUR;
//     net profit: -4 EUR;
// ===============

kauke.addMovie('Mano batai buvo 2', 20, 5);
// You can watch "Mano batai buvo 2" movie for 5 EUR, now!

kauke.sellTickets(2, 3);
kauke.sellTickets(1, 4);
kauke.sellTickets(2, 3);
kauke.sellTickets(0, 3);

kauke.updateMoviePrice(2, 8);
// You can watch "Mano batai buvo 2" movie for 8 EUR, now!

kauke.sellTickets(2, 1);

kauke.removeMovie(1);
// No more "Kaspinelis" :(

kauke.sellTickets(1, 4);
// Sorry, you can no longer buy tickets to movie "Kaspinelis".

kauke.profit();
// ===============
// "Kauke" profit:
// ===============
// 1. "Balionelis":
//     paid: 10 EUR;
//     profit: 14 EUR;
//     net profit: 4 EUR;
// ---------------
// 2. "Kaspinelis":
//     paid: 10 EUR;
//     profit: 18 EUR;
//     net profit: 8 EUR;
// ---------------
// 3. "Mano batai buvo 2":
//     paid: 20 EUR;
//     profit: 38 EUR;
//     net profit: 18 EUR;
// ===============
console.log(kauke);