const formatDateMmYyyy = (date) => {
  const formattedDate = new Date(date).toDateString();
  const [, month, , year] = formattedDate.split(" ");

  return `${month} ${year}`;
};

export default formatDateMmYyyy;
