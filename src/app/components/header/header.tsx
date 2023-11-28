import AboutLink from "./aboutLink";
import ContactLink from "./contactLink";
import HomeLink from "./homeLink";
import ProjectLink from "./projectLink";

export default function Header() {
    return (
        <>
        <header className=" w-full h-32 flex justify-center fixed" style={{backgroundColor: "#9EF9FF"}}>
            <div className="w-1/2 h-full flex justify-evenly items-center">        
                <HomeLink/>
                <AboutLink/>
                <ProjectLink/>
                <ContactLink/>
            </div>
        </header>
        <div className='w-full h-32'></div>
        </>
    )
}