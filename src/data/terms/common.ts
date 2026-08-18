export * from "./types";
export * from "./insurers";

export const normalizeString = (str: string) => {
  return (str || "")
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[-_.,/()[\]]/g, "");
};

export const escapeRegExp = (string: string) => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};
