import Layout from "../../components/ui/protected/Layout.tsx"
import Header from "../../components/ui/protected/Header.tsx"
import { OpenAiLogoIcon } from "@phosphor-icons/react"
import ChatInput from "../../components/ui/protected/ChatPage/ChatInput.tsx"

function Chat() {
  return (
    <Layout>
        <Header>
          <h1 className="text-xl md:text-xl font-medium leading-wider mb-2">Chat</h1>
        </Header>
        <main>
          <div className="grid justify-center items-center">
            <div className="">
              <OpenAiLogoIcon size={55}/>
            </div>
            <h2 className="text-lg text-Secondary-text dark:text-dark-Secondary-text">Recall AI</h2>
          </div>
          <div>
            <div>
              
              <div className="fixed bottom-30 right-10 left-10 md:bottom-40 md:right-20 md:left-20 lg:bottom-20 lg:right-30 lg:left-80 xl:right-60 xl:left-110">
                <ChatInput />
              </div>
            </div>
          </div>
        </main>
    </Layout>
  )
}

export default Chat