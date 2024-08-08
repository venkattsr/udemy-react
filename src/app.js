import Navbar from "./components/navbar"
import Categories from "./components/categories"
import Sale from "./components/sales"
import Recommended from "./components/recommended"
import Topics from "./components/topic"
import Popular from "./components/popular"
import Footer from "./components/footer"

function App(){
    return(<>
    <Navbar></Navbar>
    <Categories></Categories>
    <Sale></Sale>
    <Recommended></Recommended>
    <Topics></Topics>
    <Popular></Popular>
    <Footer></Footer>
    </>)
}

export default App