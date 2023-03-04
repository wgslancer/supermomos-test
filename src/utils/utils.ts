export function parseDate(s: string) {
  const a = s.split(" ");
  return new Date([a[4], a[3], a[5], a[0] + "Z"].join(" "));
}
