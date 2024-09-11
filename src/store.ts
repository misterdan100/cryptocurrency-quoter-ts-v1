import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { CryptoCurrency } from './types'
import { getCryptos } from './services/CryptoService'

type CryptoStore = {
    cryptoCurrencies: CryptoCurrency[]
    fetchCrypto: () => Promise<void>
}

export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({ // take care parenthesis with devtools
    cryptoCurrencies: [],
    fetchCrypto: async () => {
        const cryptoCurrencies = await getCryptos()
        set(() => ({
            cryptoCurrencies
        }))
    },
})))