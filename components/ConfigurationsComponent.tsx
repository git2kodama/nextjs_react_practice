import React, { createContext, useState, Dispatch, SetStateAction,useContext, use } from 'react';

export type Configuration = {
  id: number;
  renameName: string;
  moveFolder: string;
};

const initialConfigurations: Configuration[] = [
  { id: 0, renameName: 'CX000X-', moveFolder: '/d/Downloads' },
  { id: 1, renameName: 'JAV-TEST', moveFolder: '/d/Downloads' },
];

type ConfigurationsContextType = { 
  configurations: Configuration[];
  idCounter: number;
  bEditMode: boolean;
  nowConfiguration: Configuration;
  setNowConfiguration: (nc: Configuration) => void;
  setEditMode: (nowEditMode: boolean) => void;
  setConfigurations: Dispatch<SetStateAction<Configuration[]>>;
  addConfiguration: (newConfiguration: Configuration) => void;
  deleteConfiguration: (id: number) => void;
  updateConfiguration: (updatedConfiguration: Configuration) => void;
};

const ConfigurationsContext = createContext<ConfigurationsContextType | undefined>(undefined);

const useConfigurationsContext = () => {

  const context = useContext(ConfigurationsContext);
  if (!context) {
    throw new Error("useConfigurationsContext must be used within a ConfigurationsProvider");
  }
  return context;
};

type ConfigurationsProviderProps = {
  children: React.ReactNode;
};

const ConfigurationsProvider: React.FC<ConfigurationsProviderProps> = ({ children }) => {
  const [configurations, setConfigurations] = useState<Configuration[]>(initialConfigurations);
  const [idCounter, setIdCounter] = useState<number>(configurations.length);
  const [bEditMode, setEditMode] = useState<boolean>(false);
  const [nowConfiguration,setNowConfiguration] = useState<Configuration>(initialConfigurations[0]);

  const addConfiguration = (newConfiguration: Configuration) => {
    console.log("id : "+newConfiguration.id);
    setConfigurations([...configurations, newConfiguration]);
    setIdCounter(idCounter +1);
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
    setEditMode(false);
  };

  return (
    <ConfigurationsContext.Provider value={{ configurations, idCounter, bEditMode, nowConfiguration,setNowConfiguration, setEditMode,setConfigurations, addConfiguration, deleteConfiguration, updateConfiguration }}>
      {children}
    </ConfigurationsContext.Provider>
  );
};

export { ConfigurationsProvider, useConfigurationsContext };