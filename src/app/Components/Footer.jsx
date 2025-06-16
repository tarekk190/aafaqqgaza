import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { TfiFacebook } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";






const Footer = () => {
  return (
    <footer className="bg-white ">
      <div className="container">
        <div className="grid grid-cols-4 gap-10 p-10 w-full">
          <div>
            <h2 className="font-bold text-xl">معلومات عنا</h2>
            <p className="text-gray-500">
              تعمل الجمعية على تعزيز مفاهيم حماية البيئة من خلال نشر الوعي
              البيئي والمشاركة في القضايا البيئية التي تتلائم مع حاجة المجتمع
              المحلي
            </p>
            <h3 className="text-xl font-bold mt-5">موقعنا</h3>
            <div className="flex">
              <FaLocationDot className=" text-3xl text-blue-400 mt-4" />
              <h4 className="text-gray-500 mt-4 ml-2">غزه</h4>
            </div>
            <div className="flex">
              <FaPhoneAlt className="text-3xl text-blue-400 mt-4" />
              <h4 className="text-gray-500 mt-4 ml-2">+970-567-135-679</h4>
            </div>
          </div>
          <div>
            <h2 className="font-bold text-xl mb-2">من نحن</h2>
            <Link href={"/aboutus"} className="text-gray-500">
              نبذة عن الفريق
            </Link>
            <Link href={""} className="grid text-gray-500 mt-5">
              الاقتراحات أو الشكاوي
            </Link>
          </div>
          <div>
            <h2 className="font-bold text-xl mb-2">المصادر</h2>
            <Link href={"/aboutus"} className="text-gray-500">
              التقارير
            </Link>
            <Link href={""} className="grid text-gray-500 mt-5">
              الأخبار والإعلانات
            </Link>
          </div>
          <div>
            <h2 className="font-bold text-xl ">انضم إلينا</h2>
            <Link href={"/aboutus"} className="text-gray-500">
              طلب تطوع
            </Link>
            <Link href={""} className="grid text-gray-500 mt-5">
              بناء شراكة
            </Link>
            <h3 className=" font-bold text-xl mt-5">تواصل معنا</h3>
            <Link href={""} className="grid text-gray-500">
              اتصل بنا
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 w-100 flex justify-evenly">
        <div>
          <h5 className="p-5 text-gray-500">
            جميع الحقوق محفوظة للموقع الإلكتروني فريق آفاق التطوعي 2024 - 1446هـ
          </h5>
        </div>
        <div className="flex my-auto gap-3">
          <div className="bg-white p-2 cursor-pointer text-gray-400 rounded-xl transition-colors hover:bg-black hover:text-white">
            <IoLogoTwitter className="  text-3xl transition-all  " />
          </div>
          <div className="bg-white p-2 cursor-pointer text-gray-400 rounded-xl transition-colors hover:bg-black hover:text-white">
            <TfiFacebook className="  text-3xl transition-all  " />
          </div>
          <div className="bg-white p-2 cursor-pointer text-gray-400 rounded-xl transition-colors hover:bg-black hover:text-white">
            <FaInstagram className="  text-3xl transition-all  " />
          </div>
          <div className="bg-white p-2 cursor-pointer text-gray-400 rounded-xl transition-colors hover:bg-black hover:text-white">
            <MdOutlineMailOutline className="  text-3xl transition-all  " />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
