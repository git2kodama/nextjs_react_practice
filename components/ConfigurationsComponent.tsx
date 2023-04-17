import React, { createContext, useContext, useState, Dispatch, SetStateAction } from 'react';

export type Configuration = {
  id: number;
  renameName: string;
  moveFolder: string;
};

type ConfigurationsContextType = {
  configurations: Configuration[];
  setConfigurations: Dispatch<SetStateAction<Configuration[]>>;
  addConfiguration: (newConfiguration: Configuration) => void;
  deleteConfiguration: (id: number) => void;
  updateConfiguration: (updatedConfiguration: Configuration) => void;
};

const ConfigurationsContext = createContext<ConfigurationsContextType | undefined>(undefined);

type ConfigurationsProviderProps = {
  children: React.ReactNode;
};

const ConfigurationsProvider: React.FC<ConfigurationsProviderProps> = ({ children }) => {
  const [configurations, setConfigurations] = useState<Configuration[]>([]);

  const addConfiguration = (newConfiguration: Configuration) => {
    setConfigurations([...configurations, newConfiguration]);
  };

  const deleteConfiguration = (id: number) => {
    setConfigurations(configurations.filter((configuration) => configuration.id !== id));
  };

  const updateConfiguration = (updatedConfiguration: Configuration) => {
    setConfigurations(
      configurations.map((configuration) =>
        configuration.id === updatedConfiguration.id ? updatedConfiguration : configuration,
      ),
    );
  };

  return (
    <ConfigurationsContext.Provider
      value={{ configurations, setConfigurations, addConfiguration, deleteConfiguration, updateConfiguration }}
    >
      {children}
    </ConfigurationsContext.Provider>
  );
};

export { ConfigurationsProvider, ConfigurationsContext };