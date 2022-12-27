
import Header from "../components/Header"
import Hero from "../components/Hero"
import Jenis from "../components/Jenis"
import ProductList from "../components/ProductList"
export default function Home() {
  return (
    <div className="bg-secondary">
      <Header />
      <Hero/>
      <Jenis />
      <ProductList />
    </div>
  )
}
