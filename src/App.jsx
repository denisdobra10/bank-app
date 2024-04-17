import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/home-page"
import Layout from "./website-layout"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
