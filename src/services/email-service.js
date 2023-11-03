const sender = require('../config/emailConfig');

const sendBasicEmail = async ( mailfrom,mailto,mailSubject,mailBody) => {
    
    try {
        const response = await sender.sendMail({
            from : mailfrom,
            to : mailto,
            subject : mailSubject,
            text : mailBody
        });
        console.log("Email Send....");
    } catch (error) {
        console.log(error)
    }
    

   
}

module.exports = {
    sendBasicEmail
}