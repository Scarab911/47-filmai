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

        this.movieList.push({ movieName, moviePrice, ticketPrice, ticketsSold: 0, available: true, profit: 0 });

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

            const movie = this.movieList[i];

            if (i > 0) {
                movieInfo.push(`---------------\n${++index}. "${movie.movieName}":\n    paid: ${movie.moviePrice} ${this.currency};\n    profit: ${movie.profit} ${this.currency};\n    net profit: ${movie.profit - movie.moviePrice} ${this.currency};`)

            } else {
                movieInfo.push(`${++index}. "${movie.movieName}":\n    paid: ${movie.moviePrice} ${this.currency};\n    profit: ${movie.profit} ${this.currency};\n    net profit: ${movie.profit - movie.moviePrice} ${this.currency};`)
            }
        }

        console.log(`===============`);
        console.log(`"${this.cinemaName}" profit:`);
        console.log(`===============`);
        console.log(movieInfo.join('\n'));
        console.log(`===============`);

    }

    updateMoviePrice(movieIndex, newPrice) {

        for (let i = 0; i < this.movieList.length; i++) {
            const movie = this.movieList[i];

            if (i === movieIndex) {

                movie.ticketPrice = newPrice;

                console.log(`You can watch "${movie.movieName} movie for ${newPrice} ${this.currency}, now!`);
                break;
            }
        }

    }

    removeMovie(movieIndex) {

        for (let i = 0; i < this.movieList.length; i++) {

            const movie = this.movieList[i];

            if (i === movieIndex) {

                movie.available = false;
                console.log(`No more "${this.movieList[movieIndex].movieName}" :(`);
                break;
            }
        }
    }

}
module.exports = Cinema;