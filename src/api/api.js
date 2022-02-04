import * as axios from "axios";


export const API = {
  getCurrencyCourses() {
    return axios
      .get(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json`)
      .then((response) => {
        return response.data;
      });
  }
};

