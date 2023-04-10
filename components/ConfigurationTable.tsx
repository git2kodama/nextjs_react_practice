import React from 'react';
import ConfigurationRow from './ConfigurationRow';

const ConfigurationTable = () => {
  // 設定データを渡す
  const configurations = [
    { id: 1, renameName: 'CX000X-', moveFolder: '/d/Downloads' },
    { id: 2, renameName: 'JAV-TEST', moveFolder: '/d/Downloads' }
  ];

  return (
    <table className="table table-striped table-bordered table-hover my-4">
      <thead>
        <tr>
          <th scope="col">RenameName</th>
          <th scope="col">MoveFolder</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {configurations.map(config => (
          <ConfigurationRow key={config.id} config={config} />
        ))}
      </tbody>
    </table>
  );
};

export default ConfigurationTable;