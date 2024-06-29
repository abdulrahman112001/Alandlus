import { Swiper, SwiperSlide } from "swiper/react";

import { MainButton } from "@/components/molecules";
import useFetch from "@/hooks/UseFetch";
import "swiper/css";

export default function CarouselCategory() {
  const { data } = useFetch({
    endpoint: `banners`,
    queryKey: [`banners`],
  });

  return (
    <>
      <Swiper className="mySwiper">
        {
//@ts-ignore
        
        data?.data?.map((item: any) => (
          <SwiperSlide key={item?.id}>
            <div
              className=" p-10  mx-auto bg-slate-400 h-[80vh] flex justify-center items-center"
              style={{
                backgroundImage: `url('${item?.image}')`,
                backgroundSize: "cover",
              }}
            >
              <div className="flex flex-col items-center  mt-[350px]">
                <MainButton href="" text="معرفة اكثر" className="text-white " />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
