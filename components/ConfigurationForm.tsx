import React, { useState } from 'react';

const ConfigurationForm = () => {
  const [newRenameName, setNewRenameName] = useState('');
  const [newMoveFolder, setNewMoveFolder] = useState('');

  const handleAddConfiguration = () => {
    
    
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