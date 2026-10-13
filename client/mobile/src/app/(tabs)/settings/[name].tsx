import { useLocalSearchParams } from "expo-router";
import AccountInfo from "../../../components/ui/SettingsScreen/AccountInfo";
import About from "../../../components/ui/SettingsScreen/About";

function SettingsName() {
  const { name } = useLocalSearchParams<{ name: string }>()

  return (
    <>
        {name === "account-info" && <AccountInfo />}
        {name === "password-security" && <div>Password & Security</div>}
        {name === "preferences" && <div>Preferences</div>}
        {name === "backup-data" && <div>Back up data</div>}
        {name === "import-export" && <div>Import & Export</div>}
        {name === "help" && <div>Help & Feedback</div>}
        {name === "about" && <About />}
    </>
  )
}

export default SettingsName