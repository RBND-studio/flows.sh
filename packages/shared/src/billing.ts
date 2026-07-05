import type { StripeSubscriptionPriceTier, SubscriptionPriceTier } from "@flows/types";
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

export function calculateEstimatedPrice({
  subscriptionPriceTiers,
  usage,
}: {
  subscriptionPriceTiers: SubscriptionPriceTier[];
  usage: number;
}): number {
  const calculatedPrice = subscriptionPriceTiers.reduce<{
    estimatedPrice: number;
    units: number;
    prevTierLastUnit: number;
  }>(
    (acc, tier) => {
      if (acc.units <= 0) return acc;

      const tierLastUnit = tier.last_unit === "inf" ? Infinity : Number(tier.last_unit);
      const currentTierUnits = Math.min(tierLastUnit - acc.prevTierLastUnit, acc.units);
      const currentTierPrice = currentTierUnits * Number(tier.unit_price_decimal ?? "") * 0.01;
      return {
        estimatedPrice: acc.estimatedPrice + currentTierPrice,
        units: acc.units - currentTierUnits,
        prevTierLastUnit: tierLastUnit,
      };
    },
    { estimatedPrice: 0, units: usage, prevTierLastUnit: 0 },
  );

  return calculatedPrice.estimatedPrice;
}

export function calculateStripeEstimatedPrice({
  subscriptionPriceTiers,
  usage,
}: {
  subscriptionPriceTiers: StripeSubscriptionPriceTier[];
  usage: number;
}): number {
  const calculatedPrice = subscriptionPriceTiers.reduce<{
    estimatedPrice: number;
    units: number;
    prevTierLastUnit: number;
  }>(
    (acc, tier) => {
      if (acc.units <= 0) return acc;

      const tierLastUnit = tier.up_to === null ? Infinity : tier.up_to;
      const currentTierUnits = Math.min(tierLastUnit - acc.prevTierLastUnit, acc.units);
      const flatAmount = Number(tier.flat_amount_decimal ?? "") * 0.01;
      const unitAmount = Number(tier.unit_amount_decimal ?? "") * 0.01;
      const currentTierPrice = flatAmount + currentTierUnits * unitAmount;
      return {
        estimatedPrice: acc.estimatedPrice + currentTierPrice,
        units: acc.units - currentTierUnits,
        prevTierLastUnit: tierLastUnit,
      };
    },
    { estimatedPrice: 0, units: usage, prevTierLastUnit: 0 },
  );

  return calculatedPrice.estimatedPrice;
}
