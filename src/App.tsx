import { Suspense, lazy } from "react"
import { BrowserRouter , Route, Routes  } from "react-router-dom"
import Background from "./components/Background/Background.tsx"
import Loader from "./components/Loader/Loader.tsx"
const NFT = lazy(()=>import("./module/NFT.tsx"))
const MainLayout = lazy(()=>import("./layouts/MainLayout.tsx"))

function App() {
  return (
    <Background>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout/>}>
              <Route path="/" element={
                <Suspense fallback={<Loader/>}>
                  <NFT/>
                </Suspense>
              }/>
            </Route>
          </Routes>
        </BrowserRouter>
    </Background>
    
  )
}

export default App
