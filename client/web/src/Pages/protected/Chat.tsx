import Layout from "../../components/ui/protected/Layout.tsx"
import Header from "../../components/ui/protected/Header.tsx"
import { OpenAiLogoIcon } from "@phosphor-icons/react"
import ChatInput from "../../components/ui/protected/ChatPage/ChatInput.tsx"
import ChatBox from "../../components/ui/protected/ChatPage/ChatBox.tsx"

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
            <div className="max-h-80 pb-10 overflow-y-auto w-full flex mt-8 flex-col">
              <ChatBox role="user" text="What is this memory about"/>
              <ChatBox role="ai" text={`Imagine this:
You have an app where you can save screenshots, notes, PDFs, links, images and other useful information.

Instead of everything sitting there forgotten, the app periodically brings selected items back to you — for example, once in the morning and once later in the day.

It could show you something you saved weeks or months ago, give you a short summary of a longer piece of information, or turn useful material into small learning/review cards.

The goal is to help you actually revisit and get value from the things you already chose to save.`}/>
              <div className="fixed bottom-25 right-6 left-6 md:bottom-40 md:right-20 md:left-20 lg:bottom-10 lg:right-30 lg:left-80 xl:right-60 xl:left-110">
                <ChatInput />
              </div>
            </div>
          </div>
        </main>
    </Layout>
  )
}

export default Chat