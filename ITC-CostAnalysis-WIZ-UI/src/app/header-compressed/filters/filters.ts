
export class Filters {
  year:string = "";
  quarter:string = "";
  month:string = "";
  constructor(year,quarter,month) {
    this.year = year;
    this.quarter = quarter;
    this.month = month;
  }
}
