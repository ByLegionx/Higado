import React from 'react'
import { Header } from '../components/Header'
import "./styles/styles.css"
import { MainContain } from '../components/MainContain'
import { Footer } from '../components/Footer'

export const FirstPage = () => {
  return (
    <>
      <Header/>
      <MainContain/>
      <Footer/>
    </>
  )
}
