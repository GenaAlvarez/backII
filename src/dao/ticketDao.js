const Ticket = require("../models/ticket.js");

class TicketDao {
    async create(ticketData) {
        return await Ticket.create(ticketData);
    }
}

module.exports = new TicketDao();

