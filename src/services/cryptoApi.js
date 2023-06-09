import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react' 


const cryptoApiHeader = {
    'X-RapidAPI-key': process.env.RAPID_API_KEY,
    'X-RapidAPI-host': 'coinranking1.p.rapidapi.com'
};

const baseUrl =  'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({url, headers: cryptoApiHeader})
export const cryptoApi = createApi({
    reducerPath :'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos : builder.query({
            query:(count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptosDetail: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`)
        }),
        getCryptosHistory: builder.query({
            query: ({coinId , timePeriod}) => createRequest(`coin/${coinId}/history?timePeriod=${timePeriod}`)
        }),
        getExchanges: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}/exchanges`),
          }),
    })
})

export const {
    useGetCryptosQuery, useGetExchangesQuery, useGetCryptosDetailQuery, useGetCryptosHistoryQuery,
} = cryptoApi;
