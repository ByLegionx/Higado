import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { FirstPage } from '../pages/FirstPage'
import { AboutUs } from '../pages/AboutUs'
import { Article } from '../pages/Article'

export const HigadoRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<FirstPage />} />
      <Route path='/aboutUs' element={<AboutUs />}/>
      <Route path='/article' element={<Article />}/>
      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  )
}
