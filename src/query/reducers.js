import {
  ACTION_FROM,
  ACTION_TO,
  ACTION_DEPART_DATE,
  ACTION_HIGH_SPEED,
  ACTION_TRAIN_LIST,
  ACTION_ORDER_TYPE,
  ACTION_ONLY_TICKETS,
  ACTION_TICKET_TYPES,
  ACTION_CHECKED_TICKET_TYPES,
  ACTION_TRAIN_TYPES,
  ACTION_CHECKED_TRAIN_TYPES,
  ACTION_DEPART_STATIONS,
  ACTION_CHECKED_DEPART_STATIONS,
  ACTION_ARRIVE_STATIONS,
  ACTION_CHECKED_ARRIVE_STATIONS,
  ACTION_DEPART_TIME_START,
  ACTION_DEPART_TIME_END,
  ACTION_ARRIVE_TIME_START,
  ACTION_ARRIVE_TIME_END,
  ACTION_IS_FILTER_VISIBLE,
  ACTION_SEARCH_PARSED
} from "./actions";
import { ORDER_DEPART } from "./constant";

export default {
  from(state = null, action) {
    const { type, payload } = action;
    /* eslint-disable no-console */
    console.log("action", action);
    /* eslint-enable no-console */
    switch (type) {
      case ACTION_FROM:
        return payload;
      default:
    }
    return state;
  },
  to(state = null, action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_TO:
        return payload;
      default:
    }
    return state;
  },
  departDate(state = Date.now(), action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_DEPART_DATE:
        return payload;
      default:
    }
    return state;
  },
  highSpeed(state = false, action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_HIGH_SPEED:
        return payload;
      case ACTION_CHECKED_TRAIN_TYPES: {
        const checkedTrainTypes = payload;
        return Boolean(checkedTrainTypes[1] && checkedTrainTypes[5]);
      }
      default:
    }
    return state;
  },
  trainList(state = [], action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_TRAIN_LIST:
        return payload;
      default:
    }
    return state;
  },
  orderType(state = ORDER_DEPART, action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_ORDER_TYPE:
        return payload;
      default:
    }
    return state;
  },
  onlyTickets(state = false, action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_ONLY_TICKETS:
        return payload;
      default:
    }
    return state;
  },
  ticketTypes(state = [], action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_TICKET_TYPES:
        return payload;
      default:
    }
    return state;
  },
  checkedTicketTypes(state = {}, action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_CHECKED_TICKET_TYPES:
        return payload;
      default:
    }
    return state;
  },
  trainTypes(state = [], action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_TRAIN_TYPES:
        return payload;
      default:
    }
    return state;
  },
  checkedTrainTypes(state = {}, action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_CHECKED_TRAIN_TYPES:
        return payload;
      case ACTION_HIGH_SPEED: {
        const highSpeed = payload;
        const newCheckedTrainTypes = { ...state };

        if (highSpeed) {
          newCheckedTrainTypes[1] = true;
          newCheckedTrainTypes[5] = true;
        } else {
          delete newCheckedTrainTypes[1];
          delete newCheckedTrainTypes[5];
        }
        return newCheckedTrainTypes;
      }
      default:
    }
    return state;
  },
  departStations(state = [], action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_DEPART_STATIONS:
        return payload;
      default:
    }
    return state;
  },
  checkedDepartStations(state = {}, action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_CHECKED_DEPART_STATIONS:
        return payload;
      default:
    }
    return state;
  },
  arriveStations(state = [], action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_ARRIVE_STATIONS:
        return payload;
      default:
    }
    return state;
  },
  checkedArriveStations(state = {}, action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_CHECKED_ARRIVE_STATIONS:
        return payload;
      default:
    }
    return state;
  },
  departTimeStart(state = 0, action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_DEPART_TIME_START:
        return payload;
      default:
    }
    return state;
  },
  departTimeEnd(state = 24, action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_DEPART_TIME_END:
        return payload;
      default:
    }
    return state;
  },
  arriveTimeStart(state = 0, action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_ARRIVE_TIME_START:
        return payload;
      default:
    }
    return state;
  },
  arriveTimeEnd(state = 24, action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_ARRIVE_TIME_END:
        return payload;
      default:
    }
    return state;
  },
  isFilterVisible(state = false, action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_IS_FILTER_VISIBLE:
        return payload;
      default:
    }
    return state;
  },
  searchParsed(state = false, action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_SEARCH_PARSED:
        return payload;
      default:
    }
    return state;
  }
};
