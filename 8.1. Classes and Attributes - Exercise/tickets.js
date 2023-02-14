// Write a program that manages a database of tickets. A ticket has a destination, a price, and a status. 
// Your program will receive two arguments - the first is an array of strings for ticket descriptions and the second is a string,
// representing a sorting criterion. The ticket descriptions have the following format:
// <destinationName>|<price>|<status>
// Store each ticket and at the end of execution return a sorted summary of all tickets, 
// sorted by either destination, price, or status, depending on the second parameter that your program received. Always sort in ascending order (the default behavior for alphabetical sort). If two tickets compare the same, use order of appearance. See the examples for more information.

function ticketSorter(tickets, sorting) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    let result = []; //запазване на новите инстации;

    tickets.map((el) => {

        let [destination, price, status] = el.split('|');
        price = Number(price);
        result.push(new Ticket(destination, price, status)); //създаване на новите инстации;

    })

    return result.sort((a, b) => {

        if (typeof a[sorting] === 'number') {
            return a[sorting] - b[sorting];
        } else {
            return a[sorting].localeCompare(b[sorting]);
        }

    });
}

console.log(ticketSorter(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'))
