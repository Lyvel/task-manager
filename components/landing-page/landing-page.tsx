import { Cog } from "lucide-react";
import { ModeToggle } from "../theme-toggle";
import LandingPageCTA from "./landing-page-cta";
import LandingPageDashboard from "./landing-page-dashboard";
import LandingPageFeatures from "./landing-page-features";
import LandingPageFooter from "./landing-page-footer";
import LandingPageHero from "./landing-page-hero";
import LandingPageNavbar from "./landing-page-navbar";
import LandingPageTestimonials from "./landing-page-testimonials";
import LandingPageWhyUs from "./landing-page-whyus";
import LandingPageIcons from "./landing-page-icons";

export default function LandingPage() {
  return (
    <>
      {/* <ModeToggle /> */}
      <LandingPageNavbar />
      <LandingPageHero />
      <LandingPageDashboard />
      <LandingPageWhyUs />
      <LandingPageFeatures />
      <LandingPageTestimonials />
      <LandingPageCTA />
      <LandingPageFooter />
      <LandingPageIcons />
    </>
  );
}
