export function formatAsDollar(price: string | number, amount?: number) {
  const numericPrice = parseFloat(price as string);

  if (isNaN(numericPrice)) {
    console.error("Invalid price value:", price);
    throw new Error("Invalid price value");
  }

  const totalAmount = amount ? numericPrice * amount : numericPrice;

  const tomanAmount = new Intl.NumberFormat("fa-IR", {
    style: "currency",
    currency: "IRR",
    minimumFractionDigits: 0,
  }).format(totalAmount * 10);

  return tomanAmount.replace("ریال", "تومان");
}

export const mainformatAsDollars = (price: string | number): number => {
  const numericPrice = typeof price === "string" ? parseFloat(price) : price;

  if (isNaN(numericPrice)) {
    console.error("Invalid price value:", price);
    return 0;
  }

  const dollarsAmount = numericPrice / 100;
  return dollarsAmount;
};
