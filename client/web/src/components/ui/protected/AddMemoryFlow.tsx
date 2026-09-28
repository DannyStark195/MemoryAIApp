import { useState } from "react";
import AddMemoryModal from "./AddMemoryModal";
import AddFile from "./HomePage/AddFile";

type AddMemoryFlowProps = {
  style: string;
};

/**
 * Keeps the state that coordinates the file menu and add-memory modal together.
 * Any page can render this component without managing modal state itself.
 */
function AddMemoryFlow({ style }: AddMemoryFlowProps) {
  const [isAddMemoryOpen, setIsAddMemoryOpen] = useState(false);

  return (
    <>
      <AddFile style={style} onAddMemory={() => setIsAddMemoryOpen(true)} />
      {isAddMemoryOpen && (
        <AddMemoryModal onClose={() => setIsAddMemoryOpen(false)} />
      )}
    </>
  );
}

export default AddMemoryFlow;
