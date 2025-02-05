const TicketDao = require("../dao/ticketDao.js");

class TicketRepository {
    constructor(dao) {
        this.dao = dao;
    }

    async createTicket(ticketData) {
        return this.dao.create(ticketData);
    }
}

module.exports = new TicketRepository(TicketDao);
