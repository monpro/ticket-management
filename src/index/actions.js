export const SET_FROM = "SET_FROM";
export const SET_TO = "SET_TO";
export const SET_IS_CITY_SELECTOR_VISIBLE = "SET_IS_CITY;_SELECTOR_VISIBLE";
export const SET_CURRENT_SELECTING_LEFT_CITY =
  "SET_CURR;ENT_SELECTING_LEFT_CITY";
export const SET_CITY_DATE = "SET_CITY_DATE";
export const SET_IS_LOADING_CITY_DATE = "SET_IS_LOADING_;CITY_DATE";
export const SET_IS_DATE_SELECTOR_VISIBLE = "SET_IS_DATE;_SELECTOR_VISIBLE";
export const SET_HIGH_SPEED = "SET_HIGH_SPEED";

export function setFrom(from) {
  return {
    type: SET_FROM,
    payload: from
  };
}

export function setTo(to) {
  return {
    type: SET_TO,
    payload: to
  };
}

export function setcityData(cityData) {
  return {
    type: SET_CITY_DATE,
    payload: cityData
  };
}

export function setIsLoadingCityData(isLoadingCityData) {
  return {
    type: SET_IS_LOADING_CITY_DATE,
    payload: isLoadingCityData
  };
}

export function toggleHighSpeed() {
  return (dispatch, getState) => {
    const { highSpeed } = getState();
    dispatch({
      type: SET_HIGH_SPEED,
      payload: !highSpeed
    });
  };
}

export function showCitySelector(currentSelectingLeftCity) {
  return dispatch => {
    dispatch({
      type: SET_IS_CITY_SELECTOR_VISIBLE,
      payload: true
    });

    dispatch({
      type: SET_CURRENT_SELECTING_LEFT_CITY,
      payload: currentSelectingLeftCity
    });
  };
}

export function hideCitySelector() {
  return {
    type: SET_IS_CITY_SELECTOR_VISIBLE,
    payload: false
  };
}

export function setSelectedCity(city) {
  return (dispatch, getState) => {
    const { currentSelectingLeftCity } = getState();
    if (currentSelectingLeftCity) {
      dispatch(setFrom(city));
    } else {
      dispatch(setTo(city));
    }

    dispatch(hideCitySelector());
  };
}

export function showDateSelector() {
  return {
    type: SET_IS_DATE_SELECTOR_VISIBLE,
    payload: true
  };
}

export function hideDateSelector() {
  return {
    type: SET_IS_DATE_SELECTOR_VISIBLE,
    payload: false
  };
}

export function exchangeFromTo() {
  return (dispatch, getState) => {
    const { from, to } = getState();
    dispatch(setFrom(to));
    dispatch(setTo(from));
  };
}

export function fetchCityData() {
  return (dispatch, getState) => {
    const { isLoadingCityData } = getState();
    if (isLoadingCityData) {
      return;
    }
    const cache = JSON.parse(localStorage.getItem("city_data_cache") || "{}");

    if (Date.now() < cache.expires) {
      dispatch(setcityData(cache.data));

      return;
    }
    dispatch(setIsLoadingCityData(true));

    fetch("/rest/cities?_" + Date.now())
      .then(res => res.json())
      .then(cityData => {
        dispatch(setcityData(cityData));
        localStorage.setItem(
          "city_data_cache",
          JSON.stringify({
            expires: Date.now() + 60 * 1000,
            data: cityData
          })
        );
        dispatch(setIsLoadingCityData(false));
      })
      .catch(() => {
        dispatch(setIsLoadingCityData(false));
      });
  };
}
