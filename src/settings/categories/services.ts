import { IconCurrencyBitcoin } from "@tabler/icons-react";
import { Category } from "../types";

export const SERVICES_ORDER = ["payments"] as const;

export const SERVICES_CATEGORIES: Record<
  (typeof SERVICES_ORDER)[number],
  Category
> = {
  payments: {
    title: "Payments",
    icon: IconCurrencyBitcoin,
    nodes: [],
  },
};
