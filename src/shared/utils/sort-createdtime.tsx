const sortByCreatedTime = (a: any, b: any) => {
  const dateA: any = new Date(a.created_time);
  const dateB: any = new Date(b.created_time);
  return dateA - dateB;
};

export default sortByCreatedTime
