

import { Routes, Route } from 'react-router'

import Home from '@/pages/home'
import Goods from '@/pages/goods'
import BaseLayout from '@/layout/baseLayout'

const RoutePage = () => <Routes>
  <Route path="/" element={<BaseLayout />}>
    <Route index element={<Home />} />
    <Route path="home" element={<Home />} />
    <Route path="goods" element={<Goods />} />
  </Route>
</Routes>
export default RoutePage