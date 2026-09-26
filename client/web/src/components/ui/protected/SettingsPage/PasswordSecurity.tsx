import Layout from "../Layout.tsx"
import BackButton from "../../BackButton.tsx"
import ChangePassword from "../../AuthPage/ChangePassword.tsx"

function PasswordSecurity() {
  return (
   <Layout>
     <div className="flex justify-between mb-8">
            <h1 className="text-xl md:text-xl font-medium leading-wider mb-2">Password & Security</h1>
            <BackButton />
      </div>
      <main>
        <div>
          <h2>Change Password</h2>
          <ChangePassword />
        </div>
      </main>
   </Layout>
  )
}

export default PasswordSecurity