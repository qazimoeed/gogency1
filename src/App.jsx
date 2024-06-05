import Footer from "../components/footer"
import HeroSection from "../components/heroSection"
import Navbar from "../components/navbar"
import Section1 from "../components/section1"
import LastSection from "../components/lastSection"
import "./style.css"
import CustomerExperience from "../components/customerExperience"
import Track from "../components/track"
import TimeManagement from "../components/timeManagement"

function App() {
	return (
		<>
			<Navbar />
			<HeroSection />
			<Section1 />
			<Track />
			{/* <CustomerExperience /> */}
			<TimeManagement />
			<LastSection />
			<Footer />
		</>
	)
}

export default App
