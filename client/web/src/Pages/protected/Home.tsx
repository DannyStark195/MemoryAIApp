import Navbar from "../../components/ui/protected/Navbar.tsx"
import Layout from "../../components/ui/protected/Layout.tsx"
import Header from "../../components/ui/protected/Header.tsx"
import SearchBar from "../../components/ui/protected/SearchBar.tsx"
import { getHourOfDay } from "../../utils/helpers.ts"
function Home() {
  return (
    <Layout>
      <Header>
        <div>
          <h1 className="text-2xl md:text-3xl font-medium leading-wider mb-2">Good {getHourOfDay()}, Daniel 👋</h1>
          <p className="w-45 md:w-full">Your memories, always within reach.</p>
        </div>
        <SearchBar placeHolder="Search your memories..."/>
      </Header>
      {/* <Navbar /> */}
    </Layout>
  )
}

export default Home