import React, { use } from 'react';
import { Configuration,useConfigurationsContext } from './ConfigurationsComponent';

type ConfigurationRowProps = {
  configuration: Configuration;
};

const ConfigurationRow: React.FC<ConfigurationRowProps> = ({ configuration }) => {
  const {deleteConfiguration} = useConfigurationsContext();
  const {bEditMode} = useConfigurationsContext(); 
  const {setEditMode} = useConfigurationsContext();
  const {setNowConfiguration} = useConfigurationsContext();

  const handleDelConfiguration = () => {
    deleteConfiguration(configuration.id);
  }
  const handleEditConfiguration = () => {
    setNowConfiguration(configuration);
    setEditMode(true);
  }
  return ( 
      <tr>
        <td>{configuration.renameName}</td>
        <td>{configuration.moveFolder}</td>
        <td>
          <>
            <button className="btn btn-secondary btn-sm me-2" onClick={handleEditConfiguration} disabled={bEditMode}>Edit</button>
            <button className="btn btn-danger btn-sm" onClick={handleDelConfiguration} disabled={bEditMode}>Delete</button>
          </>
        </td>
      </tr>
   );
};

export default ConfigurationRow;