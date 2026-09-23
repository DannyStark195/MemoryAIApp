import { ExportIcon, GearIcon, InfoIcon, LockIcon, QuestionIcon, UploadSimpleIcon, UserIcon } from "@phosphor-icons/react"
import Layout from "../../components/ui/protected/Layout.tsx"
import SettingsCard from "../../components/ui/protected/SettingsPage/SettingsCard.tsx"
function Settings() {
  return (
     <Layout>
            <h1 className="text-xl md:text-xl font-medium leading-wider mb-2">Settings</h1>

            <main className="mt-8 overflow-y-auto max-h-[78dvh]">
              <div className="mb-8">
                <h2 className="text-md font-medium">Account</h2>
                <div className="rounded-lg [&>:nth-child(1)]:border-x-0 [&>:nth-child(1)]:border-t-0 [&>:last-child]:border-0 my-4 bg-Surface dark:bg-dark-Surface">
                 <SettingsCard text="Account Information" icon={
                  <UserIcon size={20}/>
                 }/>
                 <SettingsCard text="Password & Security" icon={
                    <LockIcon size={20}/>
                 }/>
                 <SettingsCard text="Preferences" icon={
                  <GearIcon size={20}/>
                 }/>
                </div>
                
              </div>
              <div className="mb-8">
                <h2 className="text-md font-medium">Data</h2>
                <div className="rounded-lg [&>:nth-child(1)]:border-x-0 [&>:nth-child(1)]:border-t-0 [&>:last-child]:border-0 my-4 bg-Surface dark:bg-dark-Surface">
                 <SettingsCard text="Back up data" icon={
                    <UploadSimpleIcon size={20}/>
                 }/>
                 <SettingsCard text="Import & Export" icon={
                    <ExportIcon size={20}/>
                 }/>
                </div>
              </div>
              <div className="mb-12">
                <h2 className="text-md font-medium">Support</h2>
                <div className="rounded-lg [&>:nth-child(1)]:border-x-0 [&>:nth-child(1)]:border-t-0 [&>:last-child]:border-0 my-4 bg-Surface dark:bg-dark-Surface">
                 <SettingsCard text="Help & Feedback" icon={
                    <QuestionIcon size={20}/>
                 }/>
                 <SettingsCard text="About" icon={
                    <InfoIcon size={20}/>
                 }/>
                </div>
              </div>
            </main>
      </Layout>
  )
}

export default Settings