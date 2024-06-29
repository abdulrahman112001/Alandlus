import useFetch from "@/hooks/UseFetch";
import { AnyRecord } from "dns";
import React from "react";
import Select from "react-select";
//@ts-ignore
function SelectCities({ setCity_id }:AnyRecord) {
  const { data } = useFetch({
    endpoint: `cities`,
    queryKey: [`cities`],
  });
//@ts-ignore
  const options = data?.data?.map((item: { id: any; name: any }) => ({
    value: item?.id,
    label: item?.name,
  }));

  return (
    <div>
      <Select
        options={options}
        placeholder="اختار المدينة"
        isClearable
//@ts-ignore
        onChange={(option) => setCity_id(option?.value)}
      />
    </div>
  );
}

export default SelectCities;
