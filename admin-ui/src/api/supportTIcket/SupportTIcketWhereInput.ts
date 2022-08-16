import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SupportTIcketWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
};
