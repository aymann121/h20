
"use client"// import Image from "next/image";
import cactus1 from "./cactus1.png";
import cactus2 from "./cactus2.png";
import cactus3 from "./cactus3.png";
import {useState} from "react";
//import next image
import Image from "next/image";

export default function Home() {
  let arr = [cactus1, cactus2, cactus3];
  let [cactus, setCactus] = useState(1);
  return (
    <main className="text-center  ">
      
      <Image src={arr[cactus % 3]} alt="cactus" className = "m-auto h-80 w-40 mb-20 mt-20" />
      <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() =>{setCactus(cactus + 1)}}> Water me</button>
    </main>
  );
}
