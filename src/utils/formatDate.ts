const formatDate = (value: string): string => {
  const day = value.substring(8, 10);
  const month = value.substring(5, 7);
  const year = value.substring(0, 4);

  return `${day}/${month}/${year}`;
};

export default formatDate;
