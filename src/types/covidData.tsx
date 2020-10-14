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