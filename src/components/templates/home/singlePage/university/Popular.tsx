import { Popular1, Popular2 } from "@/components/atom";
import SinglePopular from "./SinglePopular";

export default function Popular() {
  return (
    <>
      <div className="text-center mb-6 pt-[120px]">
        <h2 className="text-2xl font-bold text-[#0F2239]"> خدماتنا</h2>
        <div className="mt-2 border-b-4 border-blue-500 w-20 mx-auto"></div>
      </div>
      <div className=" container mx-auto flex flex-col md:flex-row items-center md:px-[12px] gap-6">
        <SinglePopular
          img={`/assets/image4.jpg`}
          title="مقاعد طلابية"
          heading="ساحة الاندلس مقابل مستشفى بغداد الاهلي"
          buttonHref=""
        />
        <SinglePopular
          img={`/assets/image5.jpg`}
          title="مقاعد طلابية"
          heading="ساحة الاندلس مقابل مستشفى بغداد الاهلي"
          buttonHref=""
        />
      </div>
    </>
  );
}
