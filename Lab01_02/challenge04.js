const bill = 40;

const tip = (bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2)

console.log(`The bill was ${bill.toFixed(2)}, the tip was ${tip.toFixed(2)}, and the total value ${(bill + tip).toFixed(2)}`)