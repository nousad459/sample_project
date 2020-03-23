import React from 'react';
//import ReactDOM from 'react-dom';
import { Grid } from 'react-bootstrap';
import { MultiSelect } from '@progress/kendo-react-dropdowns';

const sports = [
    { text: 'Basketball', id: 1 },
    { text: 'Football', id: 2 },
    { text: 'Tennis', id: 3 },
    { text: 'Volleyball', id: 4 }
];

export default class Multi_sel extends React.Component {
    state = {
        // Since the items references of the initial value are not from the 'sports' collection,
        // 'dataItemKey' have to be set.
        value: [
            { text: 'Football', id: 2 },
            { text: 'Tennis', id: 3 }
        ]
    };

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        });
    }

    render() {
        return (
            <div>
                <Grid>
                <div className="example-config">
                    Selected Values: {JSON.stringify(this.state.value)}
                </div>
                <MultiSelect
                    data={sports}
                    onChange={this.handleChange}
                    value={this.state.value}
                    textField="text"
                    dataItemKey="id"
                />
                </Grid>
            </div>
        );
    }
}
