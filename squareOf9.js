export default function squareOf9(price, degrees) {
  const sqrtPrice = Math.sqrt(price);
  const newPrice = Math.pow(sqrtPrice + degrees / 360, 0.5);
  return newPrice;
}
