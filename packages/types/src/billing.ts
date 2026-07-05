export type SubscriptionPriceTier = {
  last_unit: string;
  unit_price_decimal: string | null;
};

export type StripeSubscriptionPriceTier = {
  flat_amount_decimal: string | null;
  unit_amount_decimal: string | null;
  up_to: number | null;
};
