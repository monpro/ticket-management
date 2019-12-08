import { ORDER_DEPART, ORDER_DURATION } from "./constant";
import { getDateWithDay } from "../common/helper";

export const ACTION_FROM = "ACTION_FROM";
export const ACTION_TO = "ACTION_TO";
export const ACTION_DEPART_DATE = "ACTION_DEPART_DATE";
export const ACTION_HIGH_SPEED = "ACTION_HIGH_SPEED";
export const ACTION_TRAIN_LIST = "ACTION_TRAIN_LIST";
export const ACTION_ORDER_TYPE = "ACTION_ORDER_TYPE";
export const ACTION_ONLY_TICKETS = "ACTION_ONLY_TICKETS";
export const ACTION_TICKET_TYPES = "ACTION_TICKET_TYPES";
export const ACTION_CHECKED_TICKET_TYPES = "ACTION_CHECKED_TICKET_TYPES";
export const ACTION_TRAIN_TYPES = "ACTION_TRAIN_TYPES";
export const ACTION_CHECKED_TRAIN_TYPES = "ACTION_CHECKED_TRAIN_TYPES";
export const ACTION_DEPART_STATIONS = "ACTION_DEPART_STATIONS";
export const ACTION_CHECKED_DEPART_STATIONS = "ACTION_CHECKED_DEPART_STATIONS";
export const ACTION_ARRIVE_STATIONS = "ACTION_ARRIVE_STATIONS";
export const ACTION_CHECKED_ARRIVE_STATIONS = "ACTION_CHECKED_ARRIVE_STATIONS";
export const ACTION_DEPART_TIME_START = "ACTION_DEPART_TIME_START";
export const ACTION_DEPART_TIME_END = "ACTION_DEPART_TIME_END";
export const ACTION_ARRIVE_TIME_START = "ACTION_ARRIVE_TIME_START";
export const ACTION_ARRIVE_TIME_END = "ACTION_ARRIVE_TIME_END";
export const ACTION_IS_FILTER_VISIBLE = "ACTION_IS_FILTER_VISIBLE";
export const ACTION_SEARCH_PARSED = "ACTION_SEARCH_PARSED";

export function setFrom(from) {
  return {
    type: ACTION_FROM,
    payload: from
  };
}

export function setTo(to) {
  return {
    type: ACTION_TO,
    payload: to
  };
}

export function setDepartDate(departDate) {
  return {
    type: ACTION_DEPART_DATE,
    payload: departDate
  };
}

export function setHighSpeed(highSpeed) {
  return {
    type: ACTION_HIGH_SPEED,
    payload: highSpeed
  };
}

export function toggleHighSpeed() {
  return (dispatch, getState) => {
    const { highSpeed } = getState();
    dispatch(setHighSpeed(!highSpeed));
  };
}

export function setTrainList(trainList) {
  return {
    type: ACTION_TRAIN_LIST,
    payload: trainList
  };
}

export function toggleOrderType(orderType) {
  return (dispatch, getState) => {
    const { orderType } = getState();
    if (orderType === ORDER_DEPART) {
      dispatch({
        type: ACTION_ORDER_TYPE,
        payload: ORDER_DURATION
      });
    } else {
      dispatch({
        type: ACTION_ORDER_TYPE,
        payload: ORDER_DEPART
      });
    }
  };
}

export function toggleOnlyTickets(onlyTickets) {
  return (dispatch, getState) => {
    const { onlyTickets } = getState();
    dispatch({
      type: ACTION_ONLY_TICKETS,
      payload: !onlyTickets
    });
  };
}

export function setTicketTypes(ticketTypes) {
  return {
    type: ACTION_TICKET_TYPES,
    payload: ticketTypes
  };
}

export function setCheckedTicketTypes(checkedTicketTypes) {
  return {
    type: ACTION_CHECKED_TICKET_TYPES,
    payload: checkedTicketTypes
  };
}

export function setTrainTypes(trainTypes) {
  return {
    type: ACTION_TRAIN_TYPES,
    payload: trainTypes
  };
}

export function setCheckedTrainTypes(checkedTrainTypes) {
  return {
    type: ACTION_CHECKED_TRAIN_TYPES,
    payload: checkedTrainTypes
  };
}

export function setDepartStations(departStations) {
  return {
    type: ACTION_DEPART_STATIONS,
    payload: departStations
  };
}

export function setCheckedDepartStations(checkedDepartStations) {
  return {
    type: ACTION_CHECKED_DEPART_STATIONS,
    payload: checkedDepartStations
  };
}

export function setArriveStations(arriveStations) {
  return {
    type: ACTION_ARRIVE_STATIONS,
    payload: arriveStations
  };
}

export function setCheckedArriveStations(checkedArriveStations) {
  return {
    type: ACTION_CHECKED_ARRIVE_STATIONS,
    payload: checkedArriveStations
  };
}

export function setDepartTimeStart(departTimeStart) {
  return {
    type: ACTION_DEPART_TIME_START,
    payload: departTimeStart
  };
}

export function setDepartTimeEnd(departTimeEnd) {
  return {
    type: ACTION_DEPART_TIME_END,
    payload: departTimeEnd
  };
}

export function setArriveTimeStart(arriveTimeStart) {
  return {
    type: ACTION_ARRIVE_TIME_START,
    payload: arriveTimeStart
  };
}

export function setArriveTimeEnd(arriveTimeEnd) {
  return {
    type: ACTION_ARRIVE_TIME_END,
    payload: arriveTimeEnd
  };
}

export function toggleIsFilterVisible(isFilterVisible) {
  return (dispatch, getState) => {
    const { isFilterVisible } = getState();
    dispatch({
      type: ACTION_IS_FILTER_VISIBLE,
      payload: !isFilterVisible
    });
  };
}

export function setSearchParsed(searchParsed) {
  return {
    type: ACTION_SEARCH_PARSED,
    payload: searchParsed
  };
}

export function nextDate() {
  return (dispatch, getState) => {
    const { departDate } = getState();
    dispatch(setDepartDate(getDateWithDay(departDate) + 86400 * 1000));
  };
}

export function prevDate() {
  return (dispatch, getState) => {
    const { departDate } = getState();
    dispatch(setDepartDate(getDateWithDay(departDate) - 86400 * 1000));
  };
}
