export const priceTag = (price: number) => {
  switch (true) {
    case price < 100:
      return "$";
    case price < 200 && price >= 100:
      return "$$";
    case price >= 200:
      return "$$$";
  }
};
