import {
  IconCurrencyBitcoin,
  IconReceipt,
  IconRecycle,
} from "@tabler/icons-react";
import { Category } from "../types";

export const SERVICES_ORDER = ["payments"] as const;

export const SERVICES_CATEGORIES = {
  payments: {
    title: "Payments",
    icon: IconCurrencyBitcoin,
    nodes: [],
  },

  escrow: {
    title: "Escrow",
    icon: IconRecycle,
    nodes: [],
  },
};

export const API_CATEGORIES = {
  balance: {
    title: "Balance",
    icon: IconReceipt,
    nodes: [],
  },
};
