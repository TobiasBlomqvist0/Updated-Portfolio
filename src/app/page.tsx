import Footer from "./components/footer/footer";
import NextBtn from "./components/footer/next";
import Header from "./components/header/header";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-between">
      <Header/>
      <div className="w-1/2 text-center mt-8">
          <h3 className=" text-2xl">Tobias Blomqvist</h3>
          <p className="text-xl">Web developer</p>
      </div>
      <Footer page="home"/>
    </div>
  )
}
