export const format = (dateStr: string) => {
  const formatted = dateStr.split("T")[0];
  return formatted.split("-").join("/");
};
