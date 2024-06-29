import SelectCities from "@/components/molecules/selects/SelectCities";
import SelectUniversities from "@/components/molecules/selects/SelectUniversities";
import useFetch from "@/hooks/UseFetch";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import { useState } from "react";

const Locations = dynamic(
  () => import("../../components/templates/places/locations"),
  { ssr: false }
);

function Places() {
  const [city_id, setCity_id] = useState("");
  const [university_id, setUniversity_id] = useState("");

  const { data } = useFetch({
    endpoint: `university/${university_id}`,
    queryKey: [`university/${university_id}`],
    enabled: !!university_id,
  });
  return (
    <div className="grid grid-cols-12 mt-10  mx-[50px] ">
      <div className="  col-span-12 ">
        <div className=" h-[400px] overflow-hidden">
          <Locations />
        </div>
      </div>
      <div className="  flex col-span-12 gap-5  mt-10">
        <SelectCities
          //@ts-ignore

          setCity_id={setCity_id}
        />
        <SelectUniversities
          city_id={city_id}
          setUniversity_id={setUniversity_id}
        />
      </div>
      {
        //@ts-ignore

        data?.data.name ? (
          <div className="mt-10 col-span-12">
            <h2 className="text-2xl font-bold text-[#0F2239]">
              {
                //@ts-ignore

                data?.data?.name
              }
            </h2>
            <div className="mt-2 border-b-4 border-blue-500 w-24 "></div>
            <p>
              {
                //@ts-ignore

                data?.data?.desc
              }
            </p>
          </div>
        ) : (
          <p className="col-span-12 font-bold mt-5 text-center text-2xl">
            الرجاء اختيار الجامعة اولا
          </p>
        )
      }
    </div>
  );
}

export default Places;
