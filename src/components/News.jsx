import { Select , Card , Row , Col , Avatar ,Typography } from 'antd'
import moment from 'moment'
import React from 'react'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
const News = ({simplified}) => {
  const {Text ,Title} = Typography;
  const {Option} = Select
 
  const {data:cryptosNewList} = useGetCryptoNewsQuery({newsCategory:'Cryptocurrency', count: simplified?10:100})
  console.log(cryptosNewList)
  return (
    <div>News</div>
  )
}

export default News