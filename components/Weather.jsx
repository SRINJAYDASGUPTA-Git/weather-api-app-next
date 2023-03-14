import React from "react";
import Image from "next/image";
const Weather = ({ data }) => {
  console.log(data);
  return (
    <div className="relative">
      <div>
        <div className="">
          <Image
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="/"
            width="100"
            height="100"
          />
          <p>{data.weather[0].main}</p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
