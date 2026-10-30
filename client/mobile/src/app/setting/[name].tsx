import { useLocalSearchParams } from "expo-router";
import AccountInfo from "../../components/ui/SettingsScreen/AccountInfo";
import About from "../../components/ui/SettingsScreen/About";
import Preferences from "@/components/ui/SettingsScreen/Preferences";
import ImportExport from "@/components/ui/SettingsScreen/ImportExport";
import Help from "@/components/ui/SettingsScreen/Help"; 
import PasswordSecurity from "@/components/ui/SettingsScreen/PasswordSecurity";
import BackUpData from "@/components/ui/SettingsScreen/BackUpData";
import CustomTabBar from "@/components/ui/CustomTabBar";

function SettingsName() {
  const { name } = useLocalSearchParams<{ name: string }>()

  return (
    <>
        {name === "account-info" && <AccountInfo />}
        {name === "password-security" && <PasswordSecurity />}
        {name === "preferences" && <Preferences/>}
        {name === "backup-data" && <BackUpData />}
        {name === "import-export" && <ImportExport/>}
        {name === "help" && <Help />}
        {name === "about" && <About />}
        <CustomTabBar />
    </>
  )
}

export default SettingsName