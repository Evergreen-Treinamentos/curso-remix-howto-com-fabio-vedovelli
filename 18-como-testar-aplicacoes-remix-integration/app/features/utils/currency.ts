import Dinero from "dinero.js";

export function formatCurrency(amount: number) {
  return Dinero({ amount }).toFormat("$0,0.00");
}
