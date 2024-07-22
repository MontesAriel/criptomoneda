import About from "./components/about/About"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import HowWork from "./components/howWork/HowWork"
import Navbar from "./components/navbar/Navbar"
import TableCoins from "./components/tabsCoins/TableCoins"
import TabsCoins from "./components/tabsCoins/TabsCoins"

function App() {

  return (
    <>
     <Navbar />
     <Header />
     <TabsCoins />
     <TableCoins />
     <HowWork />
     <About />
     <Footer />
    </>
  )
}

export default App
