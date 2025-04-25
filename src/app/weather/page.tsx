"use client";

import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

const Weather = () => {
  const [query, setQuery] = useState<string>("Kigali");
  const [data, setData] = useState<any>(null);

  const API_KEY: string = process.env.NEXT_PUBLIC_WEATHER_API_KEY_TWO || "";

  //   const getCurrentLocation = () => {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       setLatitude(position.coords.latitude);
  //       setLongitude(position.coords.longitude);
  //     });
  //   };

  const getWeatherData = (apiKey: string, q: string) => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${q}&lang=en`
      )
      .then((response) => {
        setData(response.data);
        console.log("Weather data:", data);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  };

  useEffect(() => {
    getWeatherData(API_KEY, query);
  }, [query]);

  return (
    <div>
      <div className="header">
        <div className="h1 text-3xl flex items-center">Weather Data</div>
      </div>
      <div className="search">
        <input
          type="text"
          className="bg-white p-4 w-full"
          name="city"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter the city name..."
        />
      </div>
      <div className="data"></div>
    </div>
  );
};

export default Weather;
