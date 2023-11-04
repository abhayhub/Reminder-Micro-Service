const cron = require('node-cron');
const sender = require('../config/emailConfig');
const emailService = require('../services/email-service');
/*
10:00 am
every 5 minutes
we will check are their many pending emails which are expected to be sent
ny now  is pending
*/
const setupJobs =  () => {
    cron.schedule('*/1 * * * *', async () => {
        const response = await emailService.fecthPendingEmails();
        response.forEach((email) => {
            sender.sendMail({
                to : email.recepientEmail,
                subject : email.subject,
                text  : email.content
            }, async (err, data) => {
                if(err){
                    console.log(err);
                }else{
                    console.log(data);
                    await emailService.updateTicket(email.id, {status : "SUCCESS"})
                }
            })
        });
        console.log("email sent....");
    })
}

module.exports = setupJobs;
