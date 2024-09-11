import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { CryptoCurrency, CryptoPrice, Pair } from './types'
import { fetchCurrentCryptoPrice, getCryptos } from './services/CryptoService'

type CryptoStore = {
    cryptoCurrencies: CryptoCurrency[]
    result: CryptoPrice
    fetchCrypto: () => Promise<void>
    fetchData: (pair: Pair) => Promise<void>
}

export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({ // take care parenthesis with devtools
    cryptoCurrencies: [],
    result: {} as CryptoPrice,
    fetchCrypto: async () => {
        const cryptoCurrencies = await getCryptos()
        set(() => ({
            cryptoCurrencies
        }))
    },
    fetchData: async (pair) => {
        const result = await fetchCurrentCryptoPrice(pair)
        set(() => ({
            result
        }))
        
    }
})))