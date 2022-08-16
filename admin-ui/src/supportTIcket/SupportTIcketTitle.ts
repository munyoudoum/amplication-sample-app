import { SupportTIcket as TSupportTIcket } from "../api/supportTIcket/SupportTIcket";

export const SUPPORTTICKET_TITLE_FIELD = "title";

export const SupportTIcketTitle = (record: TSupportTIcket): string => {
  return record.title || record.id;
};
