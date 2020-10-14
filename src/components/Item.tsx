import * as React from 'react';

export interface Props {
    data: any;
}

const Item: React.FC<Props> = ({ data }) => {
    const lastFiveDays : number = 5;
    const smallArray = data.slice(0, lastFiveDays);
    return (
        <div className="row"> 
            { smallArray.map((item: any, index: number) => (
                
                <div className="col-md col" key={index}>
                <div className="card" >
                    <div className="card-body" >
                        <h5 className="card-title text-secondary" > {
                            item.date.toString().substring(0, 4) 
                            + "-"
                            + item.date.toString().substring(4, 2) 
                            + "-"
                            + item.date.toString().slice(6, 2)
                            } </h5>
                    </div>
                    <ul className="list-group list-group-flush" >
                        { Object.entries(item).map(([keyCov, valueCov]) => (
                            <li className="list-group-item text-dark" key={keyCov}> {keyCov} : {valueCov} </li>
                        ))}
                    </ul>
                </div>
                </div>
            ))} 
        </div>
    );
};

export default Item;