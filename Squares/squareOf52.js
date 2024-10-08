export default function squareOf52(startDate) {
  let dates = [];
  let start = moment(startDate);

  for (let i = 7; i <= 52; i += 7) {
    let futureDate = start.clone().add(i, "weeks");
    dates.push({ week: i, date: futureDate.format("YYYY-MM-DD") });
  }

  return dates;
}
