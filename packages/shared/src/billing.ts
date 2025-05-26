import dayjs from "dayjs";

export const FREE_LIMIT = 250;
export const FREE_RENEWAL_DATE = dayjs().add(1, "month").set("date", 1).toDate();

export const pricingTiers = {
  free: {
    price: 0,
    flowsRange: [0, FREE_LIMIT],
  },
  tier1: {
    price: 0.1,
    flowsRange: [FREE_LIMIT + 1, 500],
  },
  tier2: {
    price: 0.05,
    flowsRange: [501, 1500],
  },
  tier3: {
    price: 0.035,
    flowsRange: [1501, 5000],
  },
  tier4: {
    price: 0.025,
    flowsRange: [5001, 15000],
  },
  tier5: {
    price: 0.0175,
    flowsRange: [15001, 50000],
  },
  tier6: {
    price: 0.0125,
    flowsRange: [50001, Infinity],
  },
};
