import { ChangeEvent, FormEvent, useState } from "react"
import { useCryptoStore } from "../store"
import { currencies } from "../data"
import { Pair } from "../types"
import ErrorMessage from "./ErrorMessage"

export default function CryptoSearchForm() {
    const [pair, setPair] = useState<Pair>({
        currency: '',
        cryptoCurrency: '',
    })
    const [error, setError] = useState('')
    const cryptoCurrencies = useCryptoStore((state) => state.cryptoCurrencies)
    const fetchData = useCryptoStore((state) => state.fetchData)

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setPair({
            ...pair,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(Object.values(pair).includes('')) {
            setError('All selects are required!')
            return 
        }

        setError('')
        fetchData(pair)



    }
  return (
    <form 
        className="form"
        onSubmit={handleSubmit}
    >
        <div className="field">
            <label htmlFor="currency">Currency:</label>
            <select 
                name="currency" 
                id="currency"
                onChange={handleChange}
                value={pair.currency}
            >
                <option value="">-- Select --</option>
                {currencies.map( currency => (
                    <option value={currency.code} key={currency.code}>{currency.name}</option>
                ))}
            </select>
        </div>
        <div className="field">
            <label htmlFor="cryptocurrency">Cryptocurrency:</label>
            <select 
                name="cryptoCurrency" 
                id="cryptocurrency"
                onChange={handleChange}
                value={pair.cryptoCurrency}
            >
                <option value="">-- Select --</option>
                {cryptoCurrencies.map( crypto => (
                    <option 
                        key={crypto.CoinInfo.Name} 
                        value={crypto.CoinInfo.Name}>
                    {crypto.CoinInfo.FullName}</option>
                ))}
            </select>
        </div>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <input 
            type="submit" 
            value='Get Price'
        />
    </form>
  )
}
