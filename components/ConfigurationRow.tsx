import React from 'react';

const ConfigurationRow = ({ config }) => {
  return (
    <tr>
      <td>{config.renameName}</td>
      <td>{config.moveFolder}</td>
      <td>
        <button className="btn btn-secondary btn-sm me-2">Edit</button>
        <button className="btn btn-danger btn-sm">Delete</button>
      </td>
    </tr>
  );
};

export default ConfigurationRow;