import * as React from 'react';
import useCovidService from './services/covid19';
import Charts from './components/Charts';
import Item from './components/Item';

interface Props {
    url: string;
}

const Covid: React.FC<Props> = ({ url }) => {
    const service = useCovidService(url);
    return (
      <div className="conatiner">
        {service.status === 'loading' && <div className="text-center">Loading...</div>}
        {service.status === 'loaded' && (
          <div>
            <Charts data={service.payload} />
            <Item data={service.payload} />
          </div>
        )}
        {service.status === 'error' && 
          <div className="text-center">Error, its not your fault, maybe check back in 15 minuites to see if we fixed the problem.</div>
        }
      </div>
    );
  };
  
  export default Covid;