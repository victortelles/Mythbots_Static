import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import FunkoSection from "@/components/funko-section"
import PCBSection from "@/components/pcb-section"
import RoboticsSection from "@/components/robotics-section"
import CoursesSection from "@/components/courses-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FunkoSection />
      <PCBSection />
      <RoboticsSection />
      <CoursesSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
