import { FolderSimpleIcon, DotsThreeOutlineIcon } from "@phosphor-icons/react"
import FolderOptions from "./FolderOptions"
import { useEffect, useId, useState } from "react"
type folderProps = {
    name: string,
    files: {}[]
}

function Folder({name, files}: folderProps) {
    const [folderOptionsOpen, setFolderOptionsOpen] = useState(false);
    const menuId = useId();

    useEffect(() => {
        const closeOtherMenus = (event: Event) => {
            if ((event as CustomEvent<string>).detail !== menuId) {
                setFolderOptionsOpen(false);
            }
        };

        window.addEventListener("folder-options-opened", closeOtherMenus);
        return () => window.removeEventListener("folder-options-opened", closeOtherMenus);
    }, [menuId]);

    function toggleFolderOptionsOpen(){
        if (folderOptionsOpen) {
            setFolderOptionsOpen(false);
            return;
        }

        window.dispatchEvent(new CustomEvent("folder-options-opened", { detail: menuId }));
        setFolderOptionsOpen(true);
    }
  return (
    <div className="relative p-2 rounded-md w-full flex justify-between items-center mb-2 transition-all duration-200 cursor-pointer hover:bg-Surface2 dark:hover:bg-dark-Surface2">
        <div className="flex gap-4">
            <div className="bg-Accent-hover dark:bg-dark-Surface2 py-2 px-2 rounded-md text-Accent">
                <FolderSimpleIcon size={32} weight="fill" />
            </div>
            <div>
                <h4>{name}</h4>
                <span className="text-sm">{files.length}  memories</span>
            </div>
        </div>
        <button
            type="button"
            className="cursor-pointer"
            aria-label={`Open options for ${name}`}
            aria-expanded={folderOptionsOpen}
            onClick={(event) => {
                event.stopPropagation();
                toggleFolderOptionsOpen();
            }}
        >
            <DotsThreeOutlineIcon size={20} weight="fill" />
        </button>

        <FolderOptions folderName={name} style={`${folderOptionsOpen? '':'hidden'}`}/>
    </div>
  )
}

export default Folder
