import { ModeToggle } from "../theme-toggle";
import LandingPageDashboard from "./landing-page-dashboard";
import LandingPageFeatures from "./landing-page-features";
import LandingPageHero from "./landing-page-hero";
import LandingPageNavbar from "./landing-page-navbar";
import LandingPageTestimonials from "./landing-page-testimonials";
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
      <LandingPageTestimonials />
    </div>
  );
}
