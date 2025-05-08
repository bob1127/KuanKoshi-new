"use client";

import { useState, useRef } from "react";
import {
  Button,
  Form,
  Input,
  Textarea,
  RadioGroup,
  Radio,
} from "@heroui/react";
import confetti from "canvas-confetti";
import { supabase } from "../lib/supabaseClient";
import TaiwanDistrictSelector from "../components/TaiwanDistrictSelector";

export default function FullInquiryForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [spaceType, setSpaceType] = useState("");
  const [spaceSize, setSpaceSize] = useState("");
  const [description, setDescription] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [submitMsg, setSubmitMsg] = useState("");
  const buttonRef = useRef(null);

  const handleSubmit = async () => {
    const insertRes = await supabase.from("inquiries").insert([
      {
        email,
        name,
        phone,
        space_type: spaceType,
        space_size: spaceSize,
        city: selectedCity,
        district: selectedDistrict,
        description,
      },
    ]);

    if (insertRes.error) {
      setSubmitMsg(`❌ 送出失敗：${insertRes.error.message}`);
      return;
    }

    const notifyRes = await fetch("/api/notify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        name,
        phone,
        spaceType,
        spaceSize,
        city: selectedCity,
        district: selectedDistrict,
        description,
      }),
    });

    if (!notifyRes.ok) {
      const errData = await notifyRes.json();
      setSubmitMsg(`⚠️ 已儲存但無法寄信：${errData.error || errData.message}`);
      return;
    }

    setSubmitMsg("✅ 表單送出成功！");
    confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });

    setEmail("");
    setName("");
    setPhone("");
    setSpaceType("");
    setSpaceSize("");
    setSelectedCity("");
    setSelectedDistrict("");
    setDescription("");
  };

  return (
    <div className="shadow-lg w-[95%] bg-[#E1E3D9] max-w-[800px] mx-auto rounded-[35px] border border-gray-200">
      <h1 className="text-[2rem] font-normal text-center text-gray-700 mt-10">
        您的需求
      </h1>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="w-full max-w-2xl mx-auto px-4 sm:px-6 md:px-8 space-y-6 py-10"
      >
        <Input
          isRequired
          type="email"
          label="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="輸入您的 Email"
          className="w-full"
        />

        <Input
          type="text"
          label="聯絡姓名"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="輸入您的姓名"
          className="w-full"
        />

        <Input
          isRequired
          type="tel"
          label="聯絡電話"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="輸入您的電話"
          className="w-full"
        />

        <RadioGroup
          label="空間性質"
          value={spaceType}
          onValueChange={setSpaceType}
          orientation="horizontal"
          classNames={{
            wrapper: "flex flex-wrap gap-3 sm:gap-4",
          }}
        >
          {[
            "新屋裝修",
            "老屋翻修",
            "預售屋",
            "商業空間",
            "辦公空間",
            "自地自建",
          ].map((type) => (
            <Radio
              key={type}
              value={type}
              classNames={{
                control: "border-[#375E77] data-[selected=true]:bg-[#375E77]",
              }}
            >
              {type}
            </Radio>
          ))}
        </RadioGroup>

        <RadioGroup
          label="空間坪數"
          value={spaceSize}
          onValueChange={setSpaceSize}
          orientation="horizontal"
          classNames={{
            wrapper: "flex flex-wrap gap-3 sm:gap-4",
          }}
        >
          {[
            "20坪內",
            "20–40坪",
            "40–60坪",
            "60–80坪",
            "80–100坪",
            "100坪以上",
          ].map((size) => (
            <Radio
              key={size}
              value={size}
              classNames={{
                control: "border-[#375E77] data-[selected=true]:bg-[#375E77]",
              }}
            >
              {size}
            </Radio>
          ))}
        </RadioGroup>

        <div className="w-full">
          <TaiwanDistrictSelector
            selectedCity={selectedCity}
            selectedDistrict={selectedDistrict}
            onCityChange={setSelectedCity}
            onDistrictChange={setSelectedDistrict}
          />
        </div>

        <Textarea
          label="諮詢內容"
          placeholder="請填寫您的諮詢需求..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full"
        />

        <div className="text-center pt-4">
          <Button
            ref={buttonRef}
            type="submit"
            className="relative overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl bg-[#375E77] text-white"
          >
            送出表單
          </Button>
        </div>

        {submitMsg && (
          <p className="text-center mt-4 text-default-600">{submitMsg}</p>
        )}
      </Form>
    </div>
  );
}
