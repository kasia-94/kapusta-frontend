import { format } from 'date-fns';

class FormatDate{
    getYear = date => {
        return format(date, 'yyyy');
  };
  getMonth = date => {
    return format(date, 'MM');
  };
  getDay = date => {
    return format(date, 'dd');
  };
  getMonthName = date => {
    return format(date, 'LLLL');
  };

  getDateObj = date => ({
    day: this.getDay(date),
    month: this.getMonth(date),
    year: this.getYear(date),
  });

  getMonthYearObj = date => ({
    year: this.getYear(date),
    month: this.getMonth(date),
  });
}

export default new FormatDate();