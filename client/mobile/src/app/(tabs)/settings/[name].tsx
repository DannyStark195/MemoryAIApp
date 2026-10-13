import { useLocalSearchParams } from "expo-router";
import AccountInfo from "../../../components/ui/SettingsScreen/AccountInfo";

function SettingsName() {
  const { name } = useLocalSearchParams<{ name: string }>()

  return (
    <>
        {name === "account-info" && <AccountInfo />}
    </>
  )
}

export default SettingsName