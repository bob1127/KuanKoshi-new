"use client";

import { useState, useEffect } from "react";
import { Select, SelectItem } from "@heroui/react";
import twDistricts from "../../data/twDistricts.json";

export default function TaiwanDistrictSelector({
  selectedCity,
  selectedDistrict,
  onCityChange,
  onDistrictChange,
}) {
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);

  useEffect(() => {
    const cityList = Object.keys(twDistricts["台灣"]);
    setCities(cityList);
  }, []);

  useEffect(() => {
    if (selectedCity) {
      setDistricts(Object.keys(twDistricts["台灣"][selectedCity]));
    } else {
      setDistricts([]);
    }
  }, [selectedCity]);

  return (
    <div className="space-y-4">
      <Select
        label="縣市"
        className="max-w-full"
        selectedKeys={selectedCity ? [selectedCity] : []}
        onSelectionChange={(keys) => {
          const city = Array.from(keys)[0];
          onCityChange(city);
        }}
        placeholder="請選擇縣市"
      >
        {cities.map((city) => (
          <SelectItem key={city}>{city}</SelectItem>
        ))}
      </Select>

      <Select
        label="區域"
        className="max-w-full"
        selectedKeys={selectedDistrict ? [selectedDistrict] : []}
        onSelectionChange={(keys) => {
          const district = Array.from(keys)[0];
          onDistrictChange(district);
        }}
        placeholder="請選擇區域"
        isDisabled={!selectedCity}
      >
        {districts.map((district) => (
          <SelectItem key={district}>{district}</SelectItem>
        ))}
      </Select>
    </div>
  );
}
