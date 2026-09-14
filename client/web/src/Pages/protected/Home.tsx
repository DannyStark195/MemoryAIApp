import Navbar from "../../components/Navbar.tsx"
import Layout from "../../components/ui/protected/Layout.tsx"
import Header from "../../components/ui/protected/Header.tsx"
import { getHourOfDay } from "../../utils/helpers.ts"
function Home() {
  return (
    <Layout>
      <Header>
        <div>
          <h1>Good {getHourOfDay()}, Daniel</h1>
          <p>Your memories, always within reach.</p>
        </div>
      </Header>
      <Navbar />
    </Layout>
  )
}

export default Home