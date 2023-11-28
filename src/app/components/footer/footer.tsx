import BackBtn from "./back";
import NextBtn from "./next";

const pages = ["home", "about", "projects", "contact"]

export default function Footer({page}:any) {
    const index = pages.indexOf(page)
    return (
        <footer className="w-full h-16 flex items-center justify-between" style={index === 0 ? {justifyContent: "end"} : {}}>
            {index !== 0 ? <BackBtn page={pages[index - 1]}/> : ""}
            {index !== pages.length ? <NextBtn page={pages[index + 1]}/> : ""}
        </footer>
    )
}