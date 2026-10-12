import  {type FolderType } from "@/types/model";

const folders:FolderType[] =  [
     {
      "id":'1',
      "name": "Tech",
      "files":[
        {
          id: '1',
          name: "file1",
          url: "//School", 
          created_at: "Today",
          favourite: false,
          category: "School"
        },
        {
          id: '2',
          name: "file2",
          url: "//School",
          created_at: "Yesterday",
          favourite: true,
          category: "School"
        },
        {
          id: '3',
          name: "file3",
          url: "//School",
          created_at: "Yesterday",
          favourite: true,
          category: "School"
        },
      ],
    },
    {
      "id":'2',
      "name": "School",
      "files":[
        {
          id: '1',
          name: "file1",
          url: "//School", 
          created_at: "Today",
          favourite: false,
          category: "School"
        },
        {
          id: '2',
          name: "file2",
          url: "//School",
          created_at: "Yesterday",
          favourite: true,
          category: "School"
        },
        {
          id: '3',
          name: "file3",
          url: "//School",
          created_at: "Yesterday",
          favourite: true,
          category: "School"
        },
      ],
    },
    {
      "id":'3',
      "name": "Work",
      "files":[
        {
          id: '1',
          name: "file1",
          url: "//Work", 
          created_at: "Today",
          favourite: false,
          category: "Work"
        },
        {
          id: '2',
          name: "file2",
          url: "//Work",
          created_at: "Yesterday",
          favourite: true,
          category: "Work"
        },
        {
          id: '3',
          name: "file3",
          url: "//Work",
          created_at: "Yesterday",
          favourite: true,
          category: "Work"
        },
      ],
    }
  ]

  export async function getFolders(): Promise<FolderType[]> {
    return folders
  }
