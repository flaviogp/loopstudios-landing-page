import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"

function App() {

  return (
    <div className="overflow-hidden max-w-[1440px] flex flex-col items-center">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
