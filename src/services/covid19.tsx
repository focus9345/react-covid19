import { useEffect, useState } from 'react';
import { Service } from '../types/covidService';
import { Covid } from '../types/covidData';


const usePostCovidService = (url: string) => {
    const [result, setResult] = useState<Service<Covid>>({
        status: 'loading'
    });
    useEffect(() => {
        if (url) {
            setResult({ status: 'loading' });
            fetch(url)
            .then(response => response.json())
            .then(response => setResult({ status: 'loaded', payload: response }))
            .catch(error => setResult({ status: 'error', error }));
            }
    }, [url]);
    
    return result;
}

export default usePostCovidService;