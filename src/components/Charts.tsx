import React, { useRef, useState, useEffect } from 'react';
import { select, Selection } from 'd3-selection';
import { time } from 'console';


interface Covid {
    data: any;
}

function dataDatePos(covidData: any) {
    const arrayDatePos = covidData.map( (item: any) => ({
        pos: item.positive,
        date: item.dateChecked
    }));
    console.log(JSON.stringify(arrayDatePos));
    return arrayDatePos;
}

function displayData(covidStats: any) {
    // How many days should we compair
    const smallArray = covidStats.slice(0, 7);
    
    dataDatePos(smallArray);
    return smallArray;
}

const Item: React.FC<Covid> = ({ data }) => {
    
    const refinedData = displayData(data);
    //console.log('List: ', refinedData);

    const ref = useRef<SVGSVGElement | null>(null);
    const [selection, setSelection] = useState<null | Selection<
        SVGSVGElement | null, 
        unknown, 
        null, 
        undefined
    >>(null);
    
    useEffect(() => {
        if(!selection){
            setSelection(select(ref.current))
        } 
    }, [selection])
    return (
        <div className="row justify-content-center"> 
            <div className="col">
                <h2 className="text-primary">US Positive Covid Cases</h2>
                <svg ref={ref} width={800} height={400} />
            </div>
        </div>
    );
};

export default Item;