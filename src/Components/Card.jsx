"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const cardData = [
  {
    src: "/ii1.jpeg",
    title: "زيارة وفد رفيع المستوى",
    description:
      "تعمل الجمعية على تعزيز مفاهيم حماية البيئة من خلال نشر الوعي البيئي",
    paid: 2000,
    remaining: 3000,
  },
  {
    src: "/ii2.png",
    title: "زيارة وفد رفيع المستوى",
    description:
      "تعمل الجمعية على تعزيز مفاهيم حماية البيئة من خلال نشر الوعي البيئي",
    paid: 3500,
    remaining: 1500,
  },
  {
    src: "/ii3.png",
    title: "زيارة وفد رفيع المستوى",
    description:
      "تعمل الجمعية على تعزيز مفاهيم حماية البيئة من خلال نشر الوعي البيئي",
    paid: 1000,
    remaining: 4000,
  },
  {
    src: "/ii4.png",
    title: "زيارة وفد رفيع المستوى",
    description:
      "تعمل الجمعية على تعزيز مفاهيم حماية البيئة من خلال نشر الوعي البيئي",
    paid: 2500,
    remaining: 2500,
  },
];

const SkeletonCard = () => (
  <div className="bg-white shadow-md rounded-t-3xl overflow-hidden animate-pulse flex flex-col">
    <div className="w-full h-[200px] bg-gray-300 rounded-t-3xl"></div>
    <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
      <div className="space-y-2">
        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
        <div className="h-3 bg-gray-200 rounded w-full"></div>
        <div className="h-3 bg-gray-200 rounded w-5/6"></div>
      </div>
      <div className="mt-3 space-y-2">
        <div className="w-full h-3 bg-gray-300 rounded-full"></div>
        <div className="flex justify-between">
          <div className="h-3 bg-gray-300 w-1/4 rounded"></div>
          <div className="h-3 bg-gray-300 w-1/4 rounded"></div>
        </div>
      </div>
    </div>
    <div className="bg-gray-300 p-3 w-full"></div>
  </div>
);

const Card = ({title}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="my-10 pb-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
        <button className="px-6 py-3 text-lg md:text-xl cursor-pointer text-gray-500 border-gray-500 border-2 rounded-full transition-all hover:bg-black hover:text-white">
          عرض الكل
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {loading
          ? Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)
          : cardData.map((item, index) => {
              const total = item.paid + item.remaining;
              const percentage = Math.round((item.paid / total) * 100);

              return (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-t-3xl overflow-hidden flex flex-col"
                >
                  <div className="flex justify-center">
                    <Image
                      className="rounded-t-3xl max-w-full h-auto"
                      src={item.src}
                      alt={item.title}
                      width={400}
                      height={200}
                    />
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <h4 className="mt-2 text-gray-600 text-sm">
                        {item.description}
                      </h4>
                    </div>

                    <div className="mt-4">
                      <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-600 transition-all"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between mt-2 text-sm md:text-base">
                        <span>مدفوع ${item.paid}</span>
                        <span>متبقي ${item.remaining}</span>
                      </div>
                    </div>
                  </div>
                  <button className="w-full text-center bg-blue-600 text-white p-3 mt-auto hover:bg-blue-700 transition">
                    تبرع --/
                  </button>
                </div>
              );
            })}
      </div>
    </section>
  );
};

export default Card;
