import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
        
const columns = [
  { field: 'name', headerName: 'Name', width: 70 },
  { field: 'email', headerName: 'Email', width: 90 },
  { field: 'typeofvisit', headerName: 'Type of visit', width: 130 },
  { field: 'personToVisit', headerName: 'Person to visit', width: 130 },
  { field: 'currDate', headerName: 'Date of entry', width: 130},
  { field: 'timeOfEntry', headerName: 'Time of entry', width: 130},
  { field: 'timeOfExit', headerName: 'Time of entry', width: 130},
];

export default class VisitorList extends React.Component{
    state = {
        visitorData: []
    }
    static getDerivedStateFromProps(props, state){
        const formData = localStorage.getItem('formData');
        let visitorData = [];
        if(formData) {
            visitorData = JSON.parse(formData);
        }
        console.log('vistorData', visitorData);
        return {
            visitorData
        }
    }

    render(){
        return (
          <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={this.state.visitorData} columns={columns} />
          </div>
        );
    }
}
