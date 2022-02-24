import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

const LayOut = lazy(() => import('pages/layout'))
const Home = lazy(() => import('pages/home'))

const Routers = () => {
  return (
    <Suspense fallback={<div>loading</div>}>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="*" element={<div>not found</div>} />
      </Routes>
    </Suspense>
  )
}

export default Routers
