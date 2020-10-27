import React, { useRef, useState, useEffect } from 'react';
import { select, Selection } from 'd3-selection';
import { scaleLinear, scaleBand } from 'd3-scale';
import { max } from 'd3-array';
import { axisLeft, axisBottom } from 'd3-axis';
import { DEFAULT_MIN_VERSION } from 'tls';


interface Covid {
    data: any;
}

// Chart Dimensions
const dimensions = {
    width: 800,
    height: 500,
    chartWidth: 700,
    chartHeight: 380,
    marginLeft: 100,
    marginTop: 20
}

function formatDate(date:  Date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

function dataDatePos(covidData: any) {
    const arrayDatePos: { name: string; number: number}[] = covidData.map( (item: any) => ({
        name: formatDate(item.dateChecked),
        number: item.positive
    }));
    return arrayDatePos;
}

function displayData(covidStats: any) {
    // How many days should we compair
    const smallArray = covidStats.slice(0, 7);
    // We just want dates and positive cases
    return dataDatePos(smallArray);
}

const Item: React.FC<Covid> = ({ data }) => {
    
    const refinedData = displayData(data);
    console.log('List: ', JSON.stringify(refinedData));


    const ref = useRef<SVGSVGElement | null>(null);
    const [selection, setSelection] = useState< null | Selection<SVGSVGElement | null, unknown, null, undefined>>(null);

    

    const maxValue = max(refinedData, d => {
        const xValue = d.number;
        if(xValue) {
            return xValue;
        }
        return 100;
    });
    const yScale = scaleLinear()
        .domain([0, maxValue!])
        .range([dimensions.chartHeight, 0]);

    const xScale = scaleBand()
        .domain(refinedData.map(d  => d.name))
        .range([0, dimensions.width])
        .paddingInner(0.4);

    const yAxis = axisLeft(yScale).ticks(5);
    const xAxis = axisBottom(xScale);
    
    useEffect(() => {
        if(!selection){
            setSelection(select(ref.current))
        } else {

            // selection
            //     .append('rect')
            //     .attr('width', dimensions.width)
            //     .attr('height', dimensions.height)
            //     .attr('fill', 'blue')
            const xAxisGroup = selection
                .append('g')
                .attr('transform', `translate(${dimensions.marginLeft}, ${dimensions.chartHeight})`)
                .call(xAxis)

            const yAxisGroup = selection
                .append('g')
                .attr('transform', `translate(${dimensions.marginLeft}, 0)`)
                .call(yAxis)

            selection
                .append('g')
                .attr('transform', `translate(${dimensions.marginLeft}, 0)`)
                .selectAll('rect')
                .data(refinedData)
                .enter()
                .append('rect')
                .attr('width', xScale.bandwidth)
                .attr('height', d => dimensions.chartHeight - (yScale(d.number) || 0) )
                .attr('x', d => {
                    const xValue = xScale(d.name);
                    if(xValue) {
                        return xValue;
                    }
                    return null;
                })
                .attr('y', d => yScale(d.number) || 0)
                .attr('fill', '#3898EB');
                
        }
    }, [selection])
    return (
        <div className="row justify-content-center"> 
            <div className="col">
                <h2 className="text-primarytext-center text-center">Total of US Positive Covid-19 Cases</h2>
                <p className="text-secondary text-center">The bar chart shows the number of covid cases in the United States by day.</p>
                <svg ref={ref} width={dimensions.width} height={dimensions.height} className='center-graph' />
            </div>
        </div>
    );
};

export default Item;