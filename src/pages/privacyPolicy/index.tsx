import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="p-8 mx-auto max-w-8xl">
      <div>
        <div
          className={` single-popular  rounded-[20px]  bg-[Popular1] overflow-hidden h-[500px] relative`}
          style={{
            backgroundImage: `url('/assets/image5.jpg')`,
            backgroundSize: "cover",
            // backgroundPosition: "",
          }}
        >
          <div className="overlay h-full bg-[#00000075] absolute z-1 top-0  left-0 w-full"></div>
          <div className="absolute left-[45%] top-1/2">
            <h1 className="text-3xl font-bold mb-6 text-white ">
              السياسة الخصوصية
            </h1>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <p className="mb-4">
          نحرص في شركتنا على حماية خصوصيتك وبياناتك الشخصية. تصف هذه السياسة
          كيفية جمع بياناتك واستخدامها وحمايتها.
        </p>

        <h2 className="text-2xl font-semibold mb-4">جمع المعلومات</h2>
        <p className="mb-4">
          نقوم بجمع المعلومات التي تقدمها لنا مباشرة عند التسجيل في موقعنا أو
          عند استخدامك لخدماتنا. قد تتضمن هذه المعلومات، على سبيل المثال، اسمك،
          بريدك الإلكتروني، ورقم هاتفك.
        </p>

        <h2 className="text-2xl font-semibold mb-4">استخدام المعلومات</h2>
        <p className="mb-4">
          نستخدم المعلومات التي نجمعها لتقديم خدماتنا وتحسينها، وللتواصل معك،
          ولإرسال التحديثات والعروض الترويجية، ولتحليل كيفية استخدام موقعنا.
        </p>

        <h2 className="text-2xl font-semibold mb-4">حماية المعلومات</h2>
        <p className="mb-4">
          نتخذ إجراءات أمنية لحماية بياناتك الشخصية من الوصول غير المصرح به أو
          التعديل أو الكشف أو التدمير. ومع ذلك، يجب أن تتذكر أنه لا يوجد أي
          طريقة نقل عبر الإنترنت أو تخزين إلكتروني آمنة بنسبة 100%.
        </p>

        <h2 className="text-2xl font-semibold mb-4">تعديلات على هذه السياسة</h2>
        <p className="mb-4">
          قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سنقوم بإعلامك بأي
          تغييرات من خلال نشر السياسة الجديدة على موقعنا.
        </p>

        <h2 className="text-2xl font-semibold mb-4">الاتصال بنا</h2>
        <p className="mb-4">
          إذا كان لديك أي أسئلة حول هذه السياسة أو حول ممارسات الخصوصية لدينا،
          يمكنك الاتصال بنا عبر البريد الإلكتروني على info@edura.com.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
