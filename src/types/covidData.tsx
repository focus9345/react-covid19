/**
 * Covid information  structure for any datapoint that needs to be rendered
 * @param date Date (in milliseconds) the recording was taken at
 * @param states TODO: josh add this
 * @param positive: 
 */
export interface Covid {
    date: number;
    states: number;
    positive: number;
    negative: number;
    pending: number;
    hospitalizedCurrently: number;
    hospitalizedCumulative: number;
    inIcuCurrently: number;
    inIcuCumulative: number;
    onVentilatorCurrently: number;
    onVentilatorCumulative: number;
    recovered: number;
    dateChecked: Date;
    death: number;
    hospitalized: number;
    totalTestResults: number;
    lastModified: Date;
    total: number;
    posNeg: number;
    deathIncrease: number;
    hospitalizedIncrease: number;
    negativeIncrease: number;
    positiveIncrease: number;
    totalTestResultsIncrease: number;
    hash: string;
}