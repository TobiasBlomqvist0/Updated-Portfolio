import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Project from "../components/project/project";

export default function projects() {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-between">
            <Header/>
            <div className="w-1/2 h-full text-center mt-8">
                <Project/>
            </div>
            <Footer page="projects"/>
        </div>
    )
}