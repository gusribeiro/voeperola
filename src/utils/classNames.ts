const classNames = (...props: string[]): string => {
  return props.slice().join(" ");
};

export default classNames;
