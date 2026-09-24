import { ExportIcon, GearIcon, InfoIcon, LockIcon, QuestionIcon, UploadSimpleIcon, UserIcon } from "@phosphor-icons/react"
import Layout from "../../components/ui/protected/Layout.tsx"
import SettingsCard from "../../components/ui/protected/SettingsPage/SettingsCard.tsx"
function Settings() {
  return (
     <Layout>
            <h1 className="text-xl md:text-xl font-medium leading-wider mb-2">Settings</h1>

            <main className="mt-8 overflow-y-auto max-h-[78dvh] no-scrollbar">
              <div className="mb-8">
                <h2 className="text-md font-medium">Account</h2>
                <div className="rounded-lg [&>:nth-child(1)]:border-x-0 [&>:nth-child(1)]:border-t-0 [&>:last-child]:border-0 my-4 ">
                 <SettingsCard text="Account Information" link="account-info" icon={
                  <UserIcon size={20}/>
                 }
                 />
                 <SettingsCard text="Password & Security" link="password-security" icon={
                    <LockIcon size={20}/>
                 }/>
                 <SettingsCard text="Preferences" link="preferences" icon={
                  <GearIcon size={20}/>
                 }/>
                </div>
                
              </div>
              <div className="mb-8">
                <h2 className="text-md font-medium">Data</h2>
                <div className="rounded-lg [&>:nth-child(1)]:border-x-0 [&>:nth-child(1)]:border-t-0 [&>:last-child]:border-0 my-4 ">
                 <SettingsCard text="Back up data" link="backup-data" icon={
                    <UploadSimpleIcon size={20}/>
                 }/>
                 <SettingsCard text="Import & Export" link="import-export" icon={
                    <ExportIcon size={20}/>
                 }/>
                </div>
              </div>
              <div className="mb-12">
                <h2 className="text-md font-medium">Support</h2>
                <div className="rounded-lg [&>:nth-child(1)]:border-x-0 [&>:nth-child(1)]:border-t-0 [&>:last-child]:border-0 my-4 ">
                 <SettingsCard text="Help & Feedback" link="help" icon={
                    <QuestionIcon size={20}/>
                 }/>
                 <SettingsCard text="About" link="about" icon={
                    <InfoIcon size={20}/>
                 }/>
                </div>
              </div>
            </main>
      </Layout>
  )
}

export default Settings