import axios from 'axios'
import { CryptoCurrenciesResponseSchema } from '../schema/crypto-schema'

export async function getCryptos() {
    try {
        const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
        const { data: {Data} } = await axios.get(url)
        const result = CryptoCurrenciesResponseSchema.safeParse(Data) // order typescript handle this data as crypto currency api response structure
        if(result.success) {
            return result.data
        }
    } catch (error) {
        console.warn('[FETCHCRYPTO]', error)
    }
}