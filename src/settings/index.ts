import { API_CATEGORIES, SERVICES_CATEGORIES } from "./categories/services";
import { Category } from "./types";

type CategoryMap = {
  [key: string]: {
    categories: {
      [key: string]: Category;
    };
    order: never[];
  };
};

export const categorized: CategoryMap = {
  services: {
    categories: SERVICES_CATEGORIES,
    order: [],
  },
  api: {
    categories: API_CATEGORIES,
    order: [],
  },
};
