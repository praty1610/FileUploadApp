import React from 'react';
import { Link } from 'react-router-dom'

const ListFiles = (props) => {      
    return (
        <div>
            <input type='file' accept='.csv' onChange={(e) => props.handleChangeFile(e)} />            
            <div className='whiteCard'>
                {props && props.dataList && props.dataList.length>0 
                ?
                    <table>
                        <thead>
                            <tr>
                                <th>FileName</th>
                                <th>View</th>
                            </tr>
                        </thead> 
                        {props.dataList.map((data, i) => {                  
                            return (
                                <tbody key={i}>
                                    <tr>
                                        <td>{data.fileName}</td>
                                        <td><span className="glyphicon glyphicon-eye-open" onClick={(e) => props.showChartHandler(data)}></span></td>
                                    </tr>
                                </tbody> 
                            )
                        })}                             
                    </table>                                                 
                
                :
                <div className='noData'>
                    No data 
                </div>
                }
            </div> 
        </div>
    )    
}

export default ListFiles