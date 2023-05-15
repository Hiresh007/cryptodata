import React from 'react'
import { Button , Menu , Typography , Avatar} from 'antd'
import { Link } from 'react-router-dom'
import {HomeOutlined , MoneyCollectOutlined , BulbOutlined , FundOutlined,MenuOutlined } from '@ant-design/icons'
import Logo from '../assets/cryptocurrency.png'
import { useState } from 'react'
import { useEffect } from 'react'
const Navbar = () => {
  const [active , setActive] = useState(true)
  const [size , setSize] = useState(null)
  useEffect(() =>{
    const handle = () => setSize(window.innerWidth)

    window.addEventListener('resize' , handle)

    return () => window.removeEventListener('resize' , handle)
  },[])

  useEffect (() =>{
     if(size < 600){
         setActive(false)
     }
     else{
          setActive(true)
     }
  },[size])
  return (
    <div className='nav-container'>
      <div className='logo-container'>
        <Avatar src = {Logo} size = "large"/>
        <Typography.Title level={2} className = "logo">
            <Link to="/">CryptoVerse</Link>
        </Typography.Title>
        <Button className='menu-control-container' onClick={() => setActive(true)}>
          <MenuOutlined/>
        </Button>
      </div>
      {active && ( <Menu theme='dark'>
          <Menu.Item icon = {<HomeOutlined/>}>
              <Link to = "/">Home</Link>
          </Menu.Item>
          <Menu.Item icon = {<FundOutlined/>}>
              <Link to = "/cryptocurrency">Cryptocurrencies</Link>
          </Menu.Item>
          <Menu.Item icon = {<MoneyCollectOutlined/>}>
              <Link to = "/exchanges">Exchanges</Link>
          </Menu.Item>
          <Menu.Item icon = {<BulbOutlined/>}>
              <Link to = "/news">News</Link>
          </Menu.Item>
      </Menu>) }
     
    </div>
  )
}

export default Navbar
