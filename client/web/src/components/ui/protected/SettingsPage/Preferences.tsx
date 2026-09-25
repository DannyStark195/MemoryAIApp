import Layout from "../Layout.tsx"
import BackButton from "../../BackButton.tsx"

function Preferences() {
  return (
    <Layout>
         <div className="flex justify-between mb-8">
                <h1 className="text-xl md:text-xl font-medium leading-wider mb-2">Preferences</h1>
                <BackButton />
          </div>
          <main>
            <div>
              <h2>Appearance</h2>
              <div>
                <div className="relative w-full py-2 px-2 pl-10 border border-Surface2 dark:border-dark-Surface2 rounded-md">
                  <RadioButtonIcon size={32} weight="fill" />
                  Light
                </div>
                <div className="relative w-full py-2 px-2 pl-10 border border-Surface2 dark:border-dark-Surface2 rounded-md">
                  <RadioButtonIcon size={32} weight="fill" />
                  Light
                </div>
                <div className="relative w-full py-2 px-2 pl-10 border border-Surface2 dark:border-dark-Surface2 rounded-md">
                  <RadioButtonIcon size={32} weight="fill" />
                  Light
                </div>
              </div>
            </div>
          </main>
       </Layout>
  )
}

export default Preferences