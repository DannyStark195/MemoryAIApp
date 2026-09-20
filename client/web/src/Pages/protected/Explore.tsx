import Header from "../../components/ui/protected/Header"
import Layout from "../../components/ui/protected/Layout.tsx"
import { useState } from "react"

function Explore() {
  const [categories, setCategories]= useState<string[]>(["All", "Favourites", "Notes", "Quotes", "School", "Work", "Books", "Coding"]);
  const [activeCategory, setActiveCategory] = useState("All");
  return (
    <Layout>
        <Header>
          <h1 className="text-xl md:text-xl font-medium leading-wider mb-2">Explore</h1>
        </Header>
        <main>
          <h2 className="font-medium">Categories</h2>
          <div className="">
            <div className="my-4 flex gap-2 text-sm font-semibold flex-wrap ">
              {categories.map((category) =>(
                <div className={`px-5 py-2 rounded-lg border cursor-pointer 
                  ${activeCategory===category?'bg-Accent dark:bg-Accent border-Accent text-dark-Primary-text':'border-Border'}
                  `}
                  onClick={() => setActiveCategory(category)}
                  >
                  {category}
                </div>
              ))}
            </div>
          </div>
        </main>
    </Layout>
  )
}

export default Explore