class Cinema {
    constructor(cinemaName, currency) {
        this.cinemaName = cinemaName;
        this.currency = currency;
        this.movieList = [];

    }
    intro() {
        console.log(`Welcome to "${this.cinemaName}" cinema theater!`);
    }
    addMovie(movieName, moviePrice, ticketPrice) {

        this.movieList.push({
            movieName,
            moviePrice,
            ticketPrice,
            ticketsSold: 0,
            available: true,
            profit: 0
        });

        console.log(`You can watch "${movieName}" movie for ${ticketPrice} ${this.currency}, now!`);
    }
    sellTickets(movieIndex, ticketsCount) {

        for (let i = 0; i < this.movieList.length; i++) {
            const movie = this.movieList[i];

            if (!movie.available &&
                movieIndex === i) {
                console.log(`Sorry, you can no longer buy tickets to movie "${movie.movieName}".`);
                break;
            } else if (movieIndex === i) {
                movie.ticketsSold += ticketsCount;
                movie.profit += ticketsCount * movie.ticketPrice;
                break;
            }

        }
    }

    profit() {

        let movieInfo = [];
        let index = 0;

        for (let i = 0; i < this.movieList.length; i++) {

            const { movieName, moviePrice, profit } = this.movieList[i];

            if (i > 0) {
                movieInfo.push(`---------------\n${++index}. "${movieName}":\n    paid: ${moviePrice} ${this.currency};\n    profit: ${profit} ${this.currency};\n    net profit: ${profit - moviePrice} ${this.currency};`)

            } else {
                movieInfo.push(`${++index}. "${movieName}":\n    paid: ${moviePrice} ${this.currency};\n    profit: ${profit} ${this.currency};\n    net profit: ${profit - moviePrice} ${this.currency};`)
            }
        }

        console.log(`===============`);
        console.log(`"${this.cinemaName}" profit:`);
        console.log(`===============`);
        console.log(movieInfo.join('\n'));
        console.log(`===============`);

    }

    updateMoviePrice(movieIndex, newTicketPrice) {

        this.movieList[movieIndex].ticketPrice = newTicketPrice;
        const movie = this.movieList[movieIndex].movieName;
        console.log(`You can watch "${movie} movie for ${newTicketPrice} ${this.currency}, now!`);

    }

    removeMovie(movieIndex) {

        this.movieList[movieIndex].available = false;
        const movie = this.movieList[movieIndex].movieName;
        console.log(`No more "${movie}" :(`);

    }

}
module.exports = Cinema;