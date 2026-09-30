
export type Memory = {
        id: string,
        name: string,
        url?: string,
        category: "Personal" | "Work" | "School",
        created_at: string,
        fileType?: string,
        file?: {}
        favourite: boolean
    }

export type FolderType = {
    id?:string,
    name: string,
    files: {}[]
}
