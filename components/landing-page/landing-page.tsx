import { ModeToggle } from "../theme-toggle";
import LandingPageHero from "./landing-page-hero";
import LandingPageNavbar from "./landing-page-navbar";

export default function LandingPage() {
  return (
    <div>
      <LandingPageNavbar />
      <LandingPageHero />
    </div>
  );
}
