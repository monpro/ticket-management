import { useCallback } from "react";

import { getDateWithDay } from "./helper";

export default function useNav(departDate, dispatch, prevDate, nextDate) {
  const isPrevDisabled = getDateWithDay(departDate) <= getDateWithDay();

  const isNextDisabled =
    getDateWithDay(departDate) - getDateWithDay() > 15 * 86400 * 1000;

  const prev = useCallback(() => {
    if (isPrevDisabled) {
      return;
    }
    dispatch(prevDate());
  }, [isPrevDisabled]);

  const next = useCallback(() => {
    if (isNextDisabled) {
      return;
    }
    dispatch(nextDate());
  }, [isNextDisabled]);

  return {
    isPrevDisabled,
    isNextDisabled,
    prev,
    next
  };
}
