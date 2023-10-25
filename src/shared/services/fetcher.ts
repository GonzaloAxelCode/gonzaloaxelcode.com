export const fetcherCache = (url: any) =>
  fetch(url, { next: { revalidate: 60 } }).then((res) => res.json());
