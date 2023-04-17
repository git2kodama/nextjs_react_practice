import React, { useState,useContext } from 'react';
import { ConfigurationsContext,Configuration } from './ConfigurationsComponent';
import { config } from 'process';

type ConfigurationFormProps = {
  configurations: Configuration[];
};

const ConfigurationForm: React.FC<ConfigurationFormProps> = ({ configurations }) => {

  const [newRenameName, setNewRenameName] = useState('');
  const [newMoveFolder, setNewMoveFolder] = useState('');
  const context = useContext(ConfigurationsContext);
  if (!context) {
    throw new Error('このコンポーネントは ConfigurationsProvider 内で使用する必要があります');
  }
  const { addConfiguration } = context;
  const handleAddConfiguration = () => {
    console.log(configurations.length);
    const newConfiguration:  Configuration = { id: configurations.length+1, renameName: newRenameName, moveFolder: newMoveFolder };
    addConfiguration(newConfiguration);
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