import slugify from "slugify";

export default function suglifyTitle(title: any) {
  return slugify(title?.replace(/[;:.\/]/g, "") || "")
    .toLowerCase()
    .trim();
}
