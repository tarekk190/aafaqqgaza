'use client'
import { BiDonateHeart } from "react-icons/bi";
import { GiLovers } from "react-icons/gi";
import { BiTask } from "react-icons/bi";
import { FaPeopleCarry } from "react-icons/fa";
import CountUp from "react-countup";

const Achievements = () => {
  return (
    <section className="py-10">
      <div className="mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center md:text-right">
          أبرز الإنجازات
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <div className="bg-zinc-800 p-8 md:p-10 rounded-3xl text-center text-white transition hover:scale-[1.02]">
            <BiDonateHeart className="text-7xl md:text-9xl m-auto transition hover:scale-110" />
            <h3 className="text-2xl md:text-3xl my-4">مجموع التبرعات</h3>
            <span className="text-2xl md:text-3xl">
              <CountUp end={25000} duration={2} separator="," />+
            </span>
          </div>

          <div className="bg-zinc-800 p-8 md:p-10 rounded-3xl text-center text-white transition hover:scale-[1.02]">
            <GiLovers className="text-7xl md:text-9xl m-auto transition hover:scale-110" />
            <h3 className="text-2xl md:text-3xl my-4">المتبرعين</h3>
            <span className="text-2xl md:text-3xl">
              <CountUp end={100} duration={2} separator="," />+
            </span>
          </div>

          <div className="bg-zinc-800 p-8 md:p-10 rounded-3xl text-center text-white transition hover:scale-[1.02]">
            <BiTask className="text-7xl md:text-9xl m-auto transition hover:scale-110" />
            <h3 className="text-2xl md:text-3xl my-4">مهام منجزة</h3>
            <span className="text-2xl md:text-3xl">
              <CountUp end={500} duration={2} separator="," />+
            </span>
          </div>

          <div className="bg-zinc-800 p-8 md:p-10 rounded-3xl text-center text-white transition hover:scale-[1.02]">
            <FaPeopleCarry className="text-7xl md:text-9xl m-auto transition hover:scale-110" />
            <h3 className="text-2xl md:text-3xl my-4">عدد المتطوعين</h3>
            <span className="text-2xl md:text-3xl">
              <CountUp end={5000} duration={2} separator="," />+
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
