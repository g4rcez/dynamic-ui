export type Plurals = {
  [key: string]: string;
};

export type lenA = number | any[];

export const Pluralize = (
  text: string,
  length: lenA,
  plurals: Plurals,
  zero?: string,
  negative?: string
) => {
  const len = Array.isArray(length) ? length.length : length;
  if (len <= 0) {
    if (negative !== undefined) {
      return negative;
    }
    return zero;
  }
  let strBuilder = text;
  for (const x in plurals) {
    const regex = new RegExp(`#{${x}}`, "g");
    strBuilder = strBuilder.replace(regex, len > 1 ? plurals[x] : x);
  }
  return strBuilder.replace(/#\{%\}/, `${len}`);
};
