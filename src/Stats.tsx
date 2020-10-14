import * as React from 'react';
import useCovidService from './services/covid19';
import Item from './components/Item';

export interface Props {
    url: string;
}


const Covid: React.FC<Props> = ({ url }) => {
    const service = useCovidService(url);
    return (
      <div>
        {service.status === 'loading' && <div>Loading...</div>}
        {service.status === 'loaded' && (
            <Item data={service.payload} />
        )}
        {service.status === 'error' && 
          <div>Error, the backend moved to the dark side.</div>
        }
      </div>
    );
  };
  
  export default Covid;