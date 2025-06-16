"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
 // هنا ناقص بس اظبط ال كلام
const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="about-section"
      className="px-4 md:px-10 lg:px-20 py-14"
    >
      <h2 className="text-right font-extrabold text-3xl md:text-4xl mb-10 text-zinc-800">
        نبذة عن الجمعية
      </h2>

      <header
        className={`flex flex-col-reverse md:flex-col lg:flex-row items-center gap-10 bg-white p-6 md:p-10 rounded-3xl shadow-xl transition-all duration-700 ease-in-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <article className="text-right text-zinc-700 leading-8 lg:w-1/2">
          <p className="text-lg mb-6">
            جمعية فلسطين التربوية لحماية البيئة - بيئتي - هي جمعية فلسطينية
            أهلية تأسست عام 1999م كجمعية غير ربحية غير حكومية مسجلة لدى وزارة
            الداخلية الفلسطينية برقم تسجيل 7191 تعمل الجمعية على تعزيز مفاهيم
            حماية البيئة من خلال نشر الوعي البيئي والمشاركة في القضايا البيئية
            التي تتلاءم أنشطتها مع حاجة المجتمع المحلي...
          </p>

          <button
            aria-label="تصفح آخر الأخبار من الجمعية"
            className="inline-flex cursor-pointer items-center gap-2 bg-zinc-800 text-white px-6 py-3 rounded-full hover:bg-zinc-600 transition shadow-md hover:shadow-lg text-sm md:text-base"
          >
            تصفح آخر الأخبار
            <span className="ml-1">📰</span>
          </button>
        </article>

        <div className="lg:w-1/2 w-full flex justify-center">
          <Image
            src="/about1.png"
            alt="تعريف الجمعيه"
            width={500}
            height={300}
            className="rounded-xl w-full h-auto max-w-md shadow-md"
          />
        </div>
      </header>

      <header
        className={`mt-10 flex flex-col-reverse md:flex-col lg:flex-row items-center gap-10 bg-white p-6 md:p-10 rounded-3xl shadow-xl transition-all duration-700 ease-in-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <article className="text-right text-zinc-700 leading-8 lg:w-1/2">
        <h2 className=" text-right font-extrabold text-3xl md:text-4xl mb-10 text-zinc-800">
          الرؤية
        </h2>
          <p className="text-lg mb-6">
            نعمل معكم نحو مجتمع فلسطيني صامد يعيش فيه الفرد في بيئة صحية خضراء
            وينعم بحياة اقتصادية واجتماعية آمنة.
          </p>
        </article>

        <div className="lg:w-1/2 w-full flex justify-center">
          <Image
            src="/about2.png"
            alt="عن الجمعية"
            width={500}
            height={300}
            className="rounded-xl w-full h-auto max-w-md shadow-md"
          />
        </div>
      </header>

      <header
        className={`my-10 flex flex-col-reverse md:flex-col lg:flex-row items-center gap-10 bg-white p-6 md:p-10 rounded-3xl shadow-xl transition-all duration-700 ease-in-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <article className="text-right text-zinc-700 leading-8 lg:w-1/2">
          <div>
          <h2 className="text-right font-extrabold text-3xl md:text-4xl mb-10 text-zinc-800">
            الرسالة
          </h2>
          <p className="text-lg mb-6">
            تتمثل مهمة جمعية فلسطين بيئتي في خدمة وتنمية الفئات الفقيرة في
            المجتمع الفلسطيني وتحسين الوضع البيئي والثقافي والمعيشي والاجتماعي
            لهذه الفئات المهمشة والمحرومة وإكسابهم الإدارة السليمة من أجل الوصول
            لبيئة صحية جيدة تكون مناسبة للأجيال القادمة. ولتحقيق هذه المهمة تسعى
            الجمعية لتوفير كل طاقاتها وإمكانياتها المادية والبشرية لتوفير جميع
            الخدمات المطلوبة من خلال المشاريع والبرامج التنموية والتطويرية ذات
            الطابع الاستمراري.
          </p>
          </div>
        </article>

        <div className="lg:w-1/2 w-full flex justify-center">
          <Image
            src="/about3.png"
            alt="عن الجمعية"
            width={500}
            height={300}
            className="rounded-xl w-full h-auto max-w-md shadow-md"
          />
        </div>
      </header>
    </section>
  );
};

export default AboutUs;
