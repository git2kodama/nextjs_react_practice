import React, { useState,useEffect } from 'react';
import { useConfigurationsContext,Configuration } from './ConfigurationsComponent';

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
  const { setEditMode } = context;
  const { idCounter } = context;
  const { bEditMode } = context;
  const { nowConfiguration } = context;
  
  useEffect(() => {
    if(bEditMode){
      setNewRenameName(nowConfiguration.renameName);
      setNewMoveFolder(nowConfiguration.moveFolder);
    }
  }, [bEditMode]);

  const handleAddConfiguration = () => {
    const newConfiguration:  Configuration = { id: idCounter, renameName: newRenameName, moveFolder: newMoveFolder };
    addConfiguration(newConfiguration);
    setNewRenameName('');
    setNewMoveFolder('');    
  };

  const handleReWriteConfiguration = () => {
    const rewriteConfiguration:  Configuration = { id: nowConfiguration.id, renameName: newRenameName, moveFolder: newMoveFolder };
    updateConfiguration(rewriteConfiguration);
    setNewRenameName('');
    setNewMoveFolder('');    
  };

  const handleCanselConfiguration = () => {
    setNewRenameName('');
    setNewMoveFolder('');    
    setEditMode(false);
  };

  const formContent = bEditMode ? (
    <div className="p-3 mb-2 bg-light text-dark"style={{ padding: "20px", margin: "20px 0" }}>
      <h1>修正モード</h1>
      <div className="mb-3">
        <label htmlFor="rename-name" className="form-label">RenameName:</label>
        <input type="text" className="form-control" id="rename-name" name="rename-name" value={newRenameName} onChange={(e) => setNewRenameName(e.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="move-folder" className="form-label">MoveFolder:</label>
        <input type="text" className="form-control" id="move-folder" name="move-folder" value={newMoveFolder} onChange={(e) => setNewMoveFolder(e.target.value)} />
      </div>
      <button type="button" className="btn btn-primary me-2" onClick={handleReWriteConfiguration}>ReWrite</button>
      <button type="button" className="btn btn-primary" onClick={handleCanselConfiguration}>Cansel</button>
    </div>
  ):(
    <div className="p-3 mb-2 bg-white text-dark"style={{ padding: "20px", margin: "20px 0" }}>
      <h1>新規追加モード</h1>
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

  return formContent;
};

export default ConfigurationForm;