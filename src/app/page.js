import Header from "@/components/Header";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <>
      <Header />
      <div className=" flex flex-col items-center mt-24 ">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
          alt="Google Logo"
          width={200}
          height={100}
          priority
          style={{ width: "auto" }}
        />
        <HomeSearch />
      </div>
    </>
  );
};

export default Home;
