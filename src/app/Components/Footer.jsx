"use client";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { TfiFacebook } from "react-icons/tfi";
import { MdOutlineMailOutline } from "react-icons/md";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-white mt-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 py-10">
          <div>
            <h2 className="font-bold text-xl mb-2">معلومات عنا</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              تعمل الجمعية على تعزيز مفاهيم حماية البيئة من خلال نشر الوعي
              البيئي والمشاركة في القضايا البيئية التي تتلائم مع حاجة المجتمع
              المحلي
            </p>
            <h3 className="text-xl font-bold mt-5">موقعنا</h3>
            <div className="flex items-center mt-2">
              <FaLocationDot className="text-2xl text-blue-400" />
              <span className="text-gray-500 ml-2">غزة</span>
            </div>
            <div className="flex items-center mt-2">
              <FaPhoneAlt className="text-2xl text-blue-400" />
              <span className="text-gray-500 ml-2">+970-567-135-679</span>
            </div>
          </div>

          <div>
            <h2 className="font-bold text-xl mb-2">من نحن</h2>
            <div className="flex flex-col gap-3 text-gray-500 text-sm">
              <Link href="/aboutus">نبذة عن الفريق</Link>
              <Link href="#">الاقتراحات أو الشكاوي</Link>
            </div>
          </div>

          <div>
            <h2 className="font-bold text-xl mb-2">المصادر</h2>
            <div className="flex flex-col gap-3 text-gray-500 text-sm">
              <Link href="/aboutus">التقارير</Link>
              <Link href="#">الأخبار والإعلانات</Link>
            </div>
          </div>

          <div>
            <h2 className="font-bold text-xl mb-2">انضم إلينا</h2>
            <div className="flex flex-col gap-3 text-gray-500 text-sm">
              <Link href="/aboutus">طلب تطوع</Link>
              <Link href="#">بناء شراكة</Link>
              <h3 className="font-bold text-lg mt-5">تواصل معنا</h3>
              <Link href="#">اتصل بنا</Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* حقوق النشر + الأيقونات */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-gray-200 flex flex-col md:flex-row items-center justify-between gap-4 py-4 px-6"
      >
        <p className="text-sm text-gray-500 text-center md:text-right">
          جميع الحقوق محفوظة للموقع الإلكتروني فريق آفاق التطوعي 2024 - 1446هـ
        </p>

        <div className="flex gap-3">
          {[IoLogoTwitter, TfiFacebook, FaInstagram, MdOutlineMailOutline].map(
            (Icon, i) => (
              <div
                key={i}
                className="bg-white p-2 rounded-xl text-gray-500 cursor-pointer transition hover:bg-black hover:text-white"
              >
                <Icon className="text-xl" />
              </div>
            )
          )}
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
