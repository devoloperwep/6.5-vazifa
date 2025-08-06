function formatPrice(price) {
  return new Intl.NumberFormat("usd-US", {
    style: "currency",
    currency: "USD",
  }).format(price.toFixed(2));
}
export { formatPrice };
