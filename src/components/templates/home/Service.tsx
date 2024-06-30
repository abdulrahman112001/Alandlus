import React from "react";
import { FaChair, FaChalkboardTeacher, FaTools } from "react-icons/fa";

function Service() {
  return (
    <div className="p-8 md:mx-[50px]">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-[#0F2239]">
          خدمات شركة بحر الأندلس
        </h2>
        <div className="mt-2 border-b-4 border-blue-500 w-24 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col items-center p-4 border rounded-lg shadow-md">
          <FaChair className="text-4xl text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">مقاعد الطلاب</h3>
          <p className="text-center text-gray-600">
            نوفر كراسي مريحة وعالية الجودة مصممة خصيصاً لتلبية احتياجات الطلاب
            خلال فترات الدراسة الطويلة، مع سرعة فائقة في التسليم.
          </p>
        </div>

        <div className="flex flex-col items-center p-4 border rounded-lg shadow-md">
          <FaChalkboardTeacher className="text-4xl text-pink-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">مقاعد المعلمين</h3>
          <p className="text-center text-gray-600">
            تصميمات مريحة ومتينة لدعم المعلمين خلال ساعات التدريس، مع التركيز
            على سرعة الإنجاز وجودة التصنيع.
          </p>
        </div>

        <div className="flex flex-col items-center p-4 border rounded-lg shadow-md">
          <FaTools className="text-4xl text-green-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">خدمات التركيب والصيانة</h3>
          <p className="text-center text-gray-600">
            نقدم خدمات تركيب وصيانة بأعلى مستوى من الجودة والسرعة، لضمان رضا
            العملاء واستمرار جودة الأثاث على المدى الطويل.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Service;
