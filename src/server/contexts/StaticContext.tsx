import { createContext, useContext } from 'react';

const StaticContext = createContext<Record<string, any>>({});

const StaticProvider = ({ children, value }: any) => (
	<StaticContext.Provider value={value}>
		{children}
	</StaticContext.Provider>
);

const useStaticContext = () => useContext(StaticContext);

export { StaticProvider, useStaticContext };
