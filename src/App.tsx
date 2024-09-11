import { useEffect } from "react"
import CryptoSearchForm from "./components/CryptoSearchForm"
import { useCryptoStore } from "./store"
import CryptoPriceDisplay from "./components/CryptoPriceDisplay"

function App() {
  const fetchCrypto = useCryptoStore((state) => state.fetchCrypto)

  useEffect(() => {
    fetchCrypto()
  }, [])

  return (
    <>
      <div className="container">
        <h1 className="app-title">
          <span>Cryptocurrency</span>
          Price Tracker
        </h1>

        <div className="content">
          <CryptoSearchForm />
          <CryptoPriceDisplay />
        </div>
      </div>
    </>
  )
}

export default App
