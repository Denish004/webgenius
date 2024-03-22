import Features from "../Components/FeaturesHome";
import Footer from "../Components/Footer";
import HallTicket from "../Components/HallTicket";
import HeroHome from "../Components/HeroHomepage";
import NavbarHome from "../Components/NavbarHome";
import StudentTeacher from "../Components/StudentTeacher";

export default function Homepage(){
    return(
        <div>
            <NavbarHome/>
            <HeroHome/>
            <Features/>
            <StudentTeacher/>
            <HallTicket/>
            <Footer/>

        </div>
    )
}