"use client";

import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

const Weather = () => {
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);
  const [query, setQuery] = useState<string>("Kigali");
  const [data, setData] = useState<any>(null);

  const API_KEY: string = "499c71eec929b440106a0792eb284992";

  //   const getCurrentLocation = () => {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       setLatitude(position.coords.latitude);
  //       setLongitude(position.coords.longitude);
  //     });
  //   };

  const getCityCoordinates = (apiKey: string, limit: number) => {
    axios
      .get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=${limit}&appid=${apiKey}`
      )
      .then((response) => {
        setLatitude(response.data[0].lat);
        setLongitude(response.data[0].lon);
      })
      .catch((error) => {
        console.error("Error fetching coordinates data:", error);
      });
  };

  const getWeatherData = (apiKey: string) => {
    axios
      .get(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  };

  useEffect(() => {
    getCityCoordinates(API_KEY, 5);
  }, [query]);

  useEffect(() => {
    if (latitude !== 0 && longitude !== 0) {
      getWeatherData(API_KEY);
    }
  }, [latitude, longitude]);

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
      <div className="data">
        {data && (
          <div>
            <h1 className="font-bold text-2xl">{data.current.temp}°C</h1>
            <p className="text-sm text-gray-500">
              {data.current.weather[0].description}
            </p>
            <Image
              src={`http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`}
              alt="weather icon"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
