import axios from 'axios'
import { CryptoCurrenciesResponseSchema, CryptoPriceSchema } from '../schema/crypto-schema'
import { Pair } from '../types'

export async function getCryptos() {
    try {
        const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
        const { data: {Data} } = await axios(url)
        const result = CryptoCurrenciesResponseSchema.safeParse(Data) // order typescript handle this data as crypto currency api response structure
        if(result.success) {
            return result.data
        }
    } catch (error) {
        console.warn('[FETCHCRYPTO]', error)
    }
}

export async function fetchCurrentCryptoPrice(pair: Pair) {
    try {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.cryptoCurrency}&tsyms=${pair.currency}`
        const { data: {DISPLAY} } = await axios(url)
        const result = CryptoPriceSchema.safeParse(DISPLAY[pair.cryptoCurrency][pair.currency])
        if(result.success) {
            return result.data
        }
    } catch (error) {
        console.log('[FETCHCURRENTCRYPTOPRICE]', error)
    }
}