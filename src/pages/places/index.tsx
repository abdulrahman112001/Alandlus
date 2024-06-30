import SelectCities from "@/components/molecules/selects/SelectCities";
import SelectUniversities from "@/components/molecules/selects/SelectUniversities";
import useFetch from "@/hooks/UseFetch";
import getIDfromURL from "@/hooks/getIDfromURL";
import "leaflet/dist/leaflet.css";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Key, useState } from "react";

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
  const { data: allUniversity } = useFetch({
    endpoint: `universities?city_id=${city_id}`,
    queryKey: [`universities?city_id=${city_id}`],
    enabled: !!city_id,
  });
  return (
    <div className="grid grid-cols-12 mt-10  mx-[50px] ">
      <div className="  col-span-12 ">
        <div className=" h-[400px] overflow-hidden">
          <Locations
            //@ts-ignore
            data={allUniversity?.data}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row col-span-12 gap-5  mt-10">
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
            <p
              dangerouslySetInnerHTML={{
                __html:
                  //@ts-ignore
                  data?.data?.desc,
              }}
            ></p>
            <div className="flex  gap-3">
              {
                //@ts-ignore
                data?.data?.images?.map(
                  (item: {
                    id: Key | null | undefined;
                    original: string | StaticImport;
                  }) => (
                    <Image
                      key={item?.id}
                      alt=""
                      src={item?.original}
                      width={200}
                      height={200}
                    />
                  )
                )
              }
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3  gap-3">
              {
                //@ts-ignore

                data?.data?.links_video?.map(
                  (item: {
                    id: Key | null | undefined;
                    original: string | StaticImport;
                  }) => (
                    <iframe
                      key={item?.id}
                      loading="lazy"
                      src={`https://www.youtube.com/embed/${getIDfromURL(
                        item
                      )}?autoplay=1&mute=1`}
                      // title={t("Embedded_YouTube_Video")}
                      frameBorder="0"
                      allowFullScreen
                      className="w-full h-[200px] rounded-md mt-5"
                    ></iframe>
                  )
                )
              }
            </div>
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
