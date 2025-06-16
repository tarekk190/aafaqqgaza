import Achievements from "../Components/Achievements";
import Card from "../Components/Card";
import Footer from "../Components/Footer";
import MainSlider from "../Components/MainSlider";

export default function Home() {
  return (
    <>
      <div className="container">
        <MainSlider />
        <Card title={"حالات إنسانية"} />
        <Card title={"الحملات"} />
        <Card title={"المهام المنجزة"} />
        <Achievements />
      </div>
    </>
  );
}
