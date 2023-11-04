const { NotificationTicket } = require('../models/index');

class TicketRepository {
    
    async getAll(){
        try {
            const tickets  = await NotificationTicket.findAll();
            return tickets;
        } catch (error) {
            throw error;
        }
    }

    async create(data){
        try {
            const ticket = await NotificationTicket.create(data);
            return ticket;
        } catch (error) {
            throw error;
        }
    }

    async get(filter){
        try {
            const ticket = await NotificationTicket.findAll({
                where : {
                    status : filter.status
                }
            });
            return ticket;
        } catch (error) {
            console.log(error);
        }
    }

    async update(ticketId , data){
        try {
            const ticket = await NotificationTicket.findByPk(ticketId);
            ticket.status = data.status;
            if(data.status){
                ticket.status = data.status;
            }
            await ticket.save();
            return ticket;
        } catch (error) {
            console.log(error);
        }
    }

}


module.exports = TicketRepository;