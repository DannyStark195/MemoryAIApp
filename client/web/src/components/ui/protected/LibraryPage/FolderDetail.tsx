import { ArrowLeftIcon } from "@phosphor-icons/react";
import Layout from "../Layout.tsx";
import { useParams } from "react-router-dom";

function FolderDetail() {
  const { folderId } = useParams();
  console.log(folderId)
  return (
    <Layout>
      <div className="flex">
        <h1>{folderId}</h1>

        <div>
          <ArrowLeftIcon />
        </div>
      </div>
    </Layout>
  )
}

export default FolderDetail