import dayjs from "dayjs";

export const FREE_LIMIT = 250;
export const FREE_RENEWAL_DATE = dayjs().add(1, "month").set("date", 1).toDate();

export const pricingTiers = {
  free: {
    price: 0,
    flowsRange: [0, FREE_LIMIT],
  },
  tier1: {
    price: 0.075,
    flowsRange: [FREE_LIMIT, 1000],
  },
  tier2: {
    price: 0.06,
    flowsRange: [1000, 2500],
  },
  tier3: {
    price: 0.05,
    flowsRange: [2500, 10000],
  },
  tier4: {
    price: 0.04,
    flowsRange: [10000, Infinity],
  },
};
