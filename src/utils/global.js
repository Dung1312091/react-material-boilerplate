import { MONTH } from "../constains";

export function genarateMonthCode() {
  let monthCode = {};
  MONTH.forEach((m, index) => {
    monthCode[index] = {
      id: index,
      month: m
    };
  });
  return monthCode;
}
