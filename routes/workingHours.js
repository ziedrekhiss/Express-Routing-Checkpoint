const workingHours = function (req, res, next) {
    const currentDate = new Date();
    const dayOfWeek = currentDate.getDay();
    const currentHour = currentDate.getHours();

    if (dayOfWeek >= 1 && dayOfWeek <= 5 && currentHour >= 9 && currentHour < 17) {
        next()
    }else { 
        res.status(403).send('The application is only available during working hours (Monday to Friday, 9 AM to 5 PM).');
  }}


  module.exports = workingHours