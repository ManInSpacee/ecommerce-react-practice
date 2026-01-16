export function formatMoney(amountCents: number) {
  // return (amountCents >= 0) ? `$${(amountCents / 100).toFixed(2)}` : `-$${(Math.abs(amountCents) / 100).toFixed(2)}`;

  if (amountCents >= 0) {
    return `$${(amountCents / 100).toFixed(2)}`;
  }
  else
  {
    return `-$${(Math.abs(amountCents) / 100).toFixed(2)}`;
  }
}

