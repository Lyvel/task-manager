import { ModeToggle } from "../theme-toggle";
import LandingPageDashboard from "./landing-page-dashboard";
import LandingPageFeatures from "./landing-page-features";
import LandingPageHero from "./landing-page-hero";
import LandingPageNavbar from "./landing-page-navbar";
import LandingPageWhyUs from "./landing-page-whyus";

export default function LandingPage() {
  return (
    <div>
      {/* <ModeToggle /> */}
      <LandingPageNavbar />
      <LandingPageHero />
      <LandingPageDashboard />
      <LandingPageWhyUs />
      <LandingPageFeatures />
    </div>
  );
}
