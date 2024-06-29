import useFetch from "@/hooks/UseFetch";
import React from "react";
import Select from "react-select";

function SelectUniversities({ city_id, setUniversity_id }: any) {
  console.log("🚀 ~ SelectUniversities ~ city_id:", city_id)
  const { data } = useFetch({
    endpoint: `universities?city_id=${city_id}`,
    queryKey: [`universities?city_id=${city_id}`],
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
        placeholder={city_id ? "اختار الجامعة" :"اختر المدينة اولا"}
        isClearable
        isDisabled={!city_id}
//@ts-ignore

        onChange={(option) => setUniversity_id(option?.value)}
      />
    </div>
  );
}

export default SelectUniversities;
