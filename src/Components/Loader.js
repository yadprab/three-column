import React from "react";
import Svg from '../images/car.svg';
function Loader() {
  return (
    <>
      <div className="loader">
        <img src={Svg} alt="pre loader"   width={150} height={150}/>
      </div>
    </>
  );
}

export { Loader };
