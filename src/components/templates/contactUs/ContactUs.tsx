import { MainButton } from "@/components/molecules";
import { useMutate } from "@/hooks/UseMutate";
import { TextField } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

function ContactUs() {
  const { mutate, isPending } = useMutate({
    mutationKey: ["contact-us"],
    endpoint: "contact-us",
    formData: true,
  });

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
//@ts-ignore
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
//@ts-ignore
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", formValues.name);
    formData.append("email", formValues.email);
    formData.append("phone", formValues.phone);
    formData.append("message", formValues.message);

    mutate(formData, {
      onSuccess: (response) => {
        // Handle successful response
        console.log("Form submitted successfully:", response);
      },
      onError: (error) => {
        // Handle error response
        console.error("Error submitting form:", error);
      },
    });
  };

  return (
    <div>
      <div className="grid grid-cols-12 mx-10 md:mx-[100px] mt-10">
        <div className="col-span-12 md:col-span-6">
          <div>
            <form onSubmit={handleSubmit}>
              <h2>تواصل معنا ...</h2>
              <div className="flex flex-col items-start gap-5 w-full mt-5 text-start border rounded-md p-3">
                <div className="w-full">
                  <input
                    name="name"
                    className="border rounded-md p-3 w-full"
                    placeholder="الاسم باكامل"
                    value={formValues.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full">
                  <input
                    name="email"
                    type="email"
                    className="border rounded-md p-3 w-full"
                    placeholder="البريد الالكتروني"
                    value={formValues.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full">
                  <input
                    name="phone"
                    type="number"
                    className="border rounded-md p-3 w-full"
                    placeholder="رقم الهاتف"
                    value={formValues.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full">
                  <textarea
                    name="message"
                    placeholder="اكتب رسالتك هنا"
                    className="border rounded-md p-3 w-full"
                    value={formValues.message}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className={`bg-[#0D5EF4] max-h-[55px] text-[16px] py-[15px] px-[30px] w-fit mx-auto lg:m-0 lg:min-w-fit rounded-[5px] font-bold text-white ${
                      isPending ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    disabled={isPending}
                  >
                    ارسال
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="flex justify-center">
            <Image
              alt=""
              src={"/assets/image1.jpg"}
              width={10000}
              height={0}
              className="w-[450px] h-full rounded-md mx-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
