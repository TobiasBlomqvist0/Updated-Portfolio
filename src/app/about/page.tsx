import Footer from "../components/footer/footer"
import Header from "../components/header/header"

export default function about() {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-between">
            <Header/>
            <div className="w-1/2 text-center mt-8">
                <p className="text-xl">Studied at optima in Finland</p>
            </div>
            <Footer page="about"/>
        </div>
    )
}