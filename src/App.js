import React from "react"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import About from "./Components/About"

export default function App() {
    return(
        <div className="border-box">
            <div className="container">
                <Header />
                <About />
                <Footer />
            </div>
        </div>
    )
}