import Image from "next/image";
import dashboardImage from "../../public/Dashboard.png";

export default function LandingPageDashboard() {
  return (
    <div className="w-fit m-auto pt-12">
      <Image src={dashboardImage} width={870} height={650} alt="Dashboard" />
    </div>
  );
}
