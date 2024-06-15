const moment = require("moment/moment");

const formatDate = (date) => {
  return moment(date).format("DD-MMM-YYYY");
};

export default formatDate;
