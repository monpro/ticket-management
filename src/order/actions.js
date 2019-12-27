export const SET_TRAIN_NUMBER = "SET_TRAIN_NUMBER";
export const SET_DEPART_STATION = "SET_DEPART_STATION";
export const SET_ARRIVE_STATION = "SET_ARRIVE_STATION";
export const SET_SEATTYPE = "SET_SEATTYPE";
export const SET_DEPART_DATE = "SET_DEPART_DATE";
export const SET_ARRIVE_DATE = "SET_ARRIVE_DATE";
export const SET_DEPART_TIME_STR = "SET_DEPART_TIME_STR";
export const SET_ARRIVE_TIME_STR = "SET_ARRIVE_TIME_STR";
export const SET_DURATION_STR = "SET_DURATION_STR";
export const SET_PRICE = "SET_PRICE";
export const SET_PASSENGERS = "SET_PASSENGERS";
export const SET_MENU = "SET_MENU";
export const SET_IS_MENU_VISIBLE = "SET_IS_MENU_VISIBLE";
export const SET_SEARCH_PARSED = "SET_SEARCH_PARSED";

export function setTrainnumber(trainNumber) {
  return {
    type: SET_TRAIN_NUMBER,
    SET_TRAIN_NUMBER: trainNumber
  };
}

export function setDepartStation(departStation) {
  return {
    type: SET_DEPART_STATION,
    SET_DEPART_STATION: departStation
  };
}

export function setArriveStation(arriveStation) {
  return {
    type: SET_ARRIVE_STATION,
    SET_ARRIVE_STATION: arriveStation
  };
}

export function setSeatType(seatType) {
  return {
    type: SET_SEATTYPE,
    SET_SEATTYPE: seatType
  };
}

export function setDepartDate(departDate) {
  return {
    type: SET_DEPART_DATE,
    SET_DEPART_DATE: departDate
  };
}

export function setArriveDate(arriveDate) {
  return {
    type: SET_ARRIVE_DATE,
    SET_ARRIVE_DATE: arriveDate
  };
}

export function setDepartTimeStr(departTimeStr) {
  return {
    type: SET_DEPART_TIME_STR,
    SET_DEPART_TIME_STR: departTimeStr
  };
}

export function setArriveTimeStr(arriveTimeStr) {
  return {
    type: SET_ARRIVE_TIME_STR,
    SET_ARRIVE_TIME_STR: arriveTimeStr
  };
}

export function setDurationStr(durationStr) {
  return {
    type: SET_DURATION_STR,
    SET_DURATION_STR: durationStr
  };
}

export function setPrice(price) {
  return {
    type: SET_PRICE,
    SET_PRICE: price
  };
}

export function setPassengers(passengers) {
  return {
    type: SET_PASSENGERS,
    SET_PASSENGERS: passengers
  };
}

export function setMenu(menu) {
  return {
    type: SET_MENU,
    SET_MENU: menu
  };
}

export function setIsMenuVisible(isMenuVisible) {
  return {
    type: SET_IS_MENU_VISIBLE,
    SET_IS_MENU_VISIBLE: isMenuVisible
  };
}

export function setSearchParsed(searchParsed) {
  return {
    type: SET_SEARCH_PARSED,
    SET_SEARCH_PARSED: searchParsed
  };
}
