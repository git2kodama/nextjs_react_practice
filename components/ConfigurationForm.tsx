import React, { useState } from 'react';
import { useConfigurationsContext,Configuration } from './ConfigurationsComponent';
import { config } from 'process';

const ConfigurationForm: React.FC = () => {

  const [newRenameName, setNewRenameName] = useState('');
  const [newMoveFolder, setNewMoveFolder] = useState('');
  
  const context = useConfigurationsContext();
  
  if (!context) {
    throw new Error('このコンポーネントは ConfigurationsProvider 内で使用する必要があります');
  }
  const { configurations } = context;
  const { addConfiguration } = context;
  const { updateConfiguration } = context;
  const { idCounter } = context;
  const { bEditMode } = context;

  const handleAddConfiguration = () => {
    const newConfiguration:  Configuration = { id: idCounter, renameName: newRenameName, moveFolder: newMoveFolder };
    if(bEditMode) {//true  
      //newConfiguration.id = 
      updateConfiguration(newConfiguration);
    } else {
      addConfiguration(newConfiguration);
    }
    // 入力フィールドをクリア
    setNewRenameName('');
    setNewMoveFolder('');    
  };

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="rename-name" className="form-label">RenameName:</label>
        <input type="text" className="form-control" id="rename-name" name="rename-name" value={newRenameName} onChange={(e) => setNewRenameName(e.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="move-folder" className="form-label">MoveFolder:</label>
        <input type="text" className="form-control" id="move-folder" name="move-folder" value={newMoveFolder} onChange={(e) => setNewMoveFolder(e.target.value)} />
      </div>
      <button type="button" className="btn btn-primary" onClick={handleAddConfiguration}>Add</button>
    </div>
  );
};

export default ConfigurationForm;