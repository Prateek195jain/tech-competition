import React from "react";

function Compe() {
  return (
    <section className="bg-[url('./images/background.png')] min-h-screen pt-[55px] bg-cover">
      <div className="relative flex justify-center">
        <img src="./images/topBox.png"></img>
        <h1 className="absolute -top-[10px] w-full text-center z-1 pt-10  text-white lg:text-[20px] md:text-[10px] sm:text-[5px]">
          HACK THE FEST
        </h1>
        <h1 className="absolute top-[90px] w-full text-center z-1  text-white lg:text-[56px] md:text-[36px],top-[80px] sm:text-[16px],top-[60px]">
          COMPETITIONS
        </h1>
      </div>
      <div className="grid grid-rows-3 grid-cols-3 mt-[7%] h-[50vh] w-[90vw] mx-auto gap-4 mb-20">
        <img
          className="mix-blend-hard-light col-span-1 row-span-2 mx-auto"
          src="./images/trophy.png"
        />
        <div className=" row-start-3 row-end-4 flex flex-col mx-auto justify-center">
          <h2 className="text-2xl text-white ">Total Prize Pool</h2> <br />
          <h1 className="text-3xl text-white pt-5">Rs 25,000</h1>
        </div>
        <div className=" col-start-2 col-end-3 row-start-1 row-end-4 flex justify-center relative">
          <img src="./images/saturn.png" className="absolute top-[10px] scale-[130%]" />
          <img src="./images/robo.png" className="absolute top-[60px]" />
        </div>
        <div className=" row-start-1 row-end-2 col-start-3 col-end-4 text-end">
          <h2 className="text-xl text-white">category</h2>
          <h1 className="text-3xl text-white">SUSTAINABILITY</h1>
        </div>
        <div className="row-start-2 row-end-3 col-start-3 col-end-4 text-end">
          <h2 className="text-xl text-white">First Round</h2>
          <h1 className="text-3xl text-white">25TH AUG, 23</h1>
        </div>
        <div className="row-start-3 row-end-4 col-start-3 col-end-4 text-end">
          <h2 className="text-xl text-white">Team Size</h2>
          <h1 className=" text-3xl text-white">2-5 PEOPLE</h1>
        </div>
      </div>
      <div className="flex justify-around pb-20 relative">
        <img className="ml-5%" src="./images/back.png" />
        <img src="./images/box.png" />
        <h1 className="absolute bottom-[120px] w-full text-center z-1  text-white lg:text-[30px]">
          COMPETITION NAME
        </h1>
        <h1 className="absolute bottom-[95px] w-full text-center z-1  text-white lg:text-[20px]">
          Register now
        </h1>
        <img src="./images/front.png" />
      </div>
    </section>
  );
}

export default Compe;