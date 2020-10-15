import * as React from 'react';

export interface Props {
    data: any;
}

const Item: React.FC<Props> = ({ data }) => {
    const lastFiveDays : number = 2;
    const smallArray = data.slice(0, lastFiveDays);
    return (
        <div className="row"> 
            { smallArray.map((item: any, index: number) => (
                <div className="col" key={index}>
                <div className="card" >
                    <div className="card-body" >
                        <h5 className="card-title text-secondary" > 
                            { item.date } 
                         </h5>
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