import React from "react";
import picc from "./bgpic.png";

const Background = () => {
  return (
    <div className="">
      <img src={picc} style={{minWidth:'100%'}} useMap="map" class="object-fit-cover border rounded" alt="..." />
      
    </div>
  );
};

export default Background;
