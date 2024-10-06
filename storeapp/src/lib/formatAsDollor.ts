export function formatAsDollor(price: string | number) {
  const tomanAmount = new Intl.NumberFormat("fa-IR", {
    style: "currency",
    currency: "IRR",
    minimumFractionDigits: 0,
  }).format(Number(price) * 10);
  return tomanAmount.replace("ریال", "تومان");
}
