import { useLocalSearchParams } from "expo-router";
import AccountInfo from "../../../components/ui/SettingsScreen/AccountInfo";
import About from "../../../components/ui/SettingsScreen/About";
import Preferences from "@/components/ui/SettingsScreen/Preferences";
import ImportExport from "@/components/ui/SettingsScreen/ImportExport";
// import BackupData from "../../../components/ui/SettingsScreen/BackupData";
import Help from "@/components/ui/SettingsScreen/Help"; 

function SettingsName() {
  const { name } = useLocalSearchParams<{ name: string }>()

  return (
    <>
        {name === "account-info" && <AccountInfo />}
        {name === "password-security" && <div>Password & Security</div>}
        {name === "preferences" && <Preferences/>}
        {/* {name === "backup-data" && <BackupData />} */}
        {name === "import-export" && <ImportExport/>}
        {name === "help" && <Help />}
        {name === "about" && <About />}
    </>
  )
}

export default SettingsName