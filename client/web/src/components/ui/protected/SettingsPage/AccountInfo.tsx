import BackButton from "../../BackButton"
import Layout from "../Layout"
import profilePic from '../../../../assets/profile.png'

function AccountInfo() {
  return (
    <Layout>
        <div className="flex justify-end mb-8">
            <BackButton />
        </div>
        <div className="flex justify-center">
            <div className="flex flex-col items-center">
                <div className="">
                    <img src={profilePic} alt="profile picture" className="w-30 h-30 rounded-4xl object-cover"/>
                </div>
                <h2>Daniel Okafor</h2>
                <p>dannystark195@gmail.com</p>
            </div>
        </div>
    </Layout>
  )
}

export default AccountInfo