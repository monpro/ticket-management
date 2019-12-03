import {
  SET_IS_DATE_SELECTOR_VISIBLE,
  SET_IS_CITY_SELECTOR_VISIBLE,
  SET_CURRENT_SELECTING_LEFT_CITY,
  SET_HIGH_SPEED,
  SET_IS_LOADING_CITY_DATE,
  SET_CITY_DATE,
  SET_FROM,
  SET_TO,
  SET_DEPART_DATE
} from "./actions";

export default {
  from(state = "Sydney", action) {
    const { type, payload } = action;
    switch (type) {
      case SET_FROM:
        return payload;
      default:
    }
    return state;
  },

  to(state = "Melbourne", action) {
    const { type, payload } = action;
    switch (type) {
      case SET_TO:
        return payload;
      default:
    }
    return state;
  },

  isCitySelectorVisible(state = false, action) {
    const { type, payload } = action;
    switch (type) {
      case SET_IS_CITY_SELECTOR_VISIBLE:
        return payload;
      default:
    }
    return state;
  },

  currentSelectingLeftCity(state = false, action) {
    const { type, payload } = action;
    switch (type) {
      case SET_CURRENT_SELECTING_LEFT_CITY:
        return payload;
      default:
    }
    return state;
  },

  cityData(state = null, action) {
    const { type, payload } = action;
    switch (type) {
      case SET_CITY_DATE:
        return payload;
      default:
    }
    return state;
  },

  isLoadingCityData(state = false, action) {
    const { type, payload } = action;
    switch (type) {
      case SET_IS_LOADING_CITY_DATE:
        return payload;
      default:
    }
    return state;
  },

  isDateSelectorVisible(state = false, action) {
    const { type, payload } = action;
    switch (type) {
      case SET_IS_DATE_SELECTOR_VISIBLE:
        return payload;
      default:
    }
    return state;
  },

  highSpeed(state = false, action) {
    const { type, payload } = action;
    switch (type) {
      case SET_HIGH_SPEED:
        return payload;
      default:
    }
    return state;
  },

  departDate(state = Date.now(), action) {
    const { type, payload } = action;
    switch (type) {
      case SET_DEPART_DATE:
        return payload;
      default:
    }
    return state;
  }
};
