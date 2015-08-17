import React from 'react';
import HForm from '../../../src/h5-form';
import HRow from '../../../src/h5-row';
import HInput from '../../../src/h5-input';

window.hsession = {
    language: 'pt_br'
};

var mock_store = {
    fields:{___fields___}
};

var ViewGrid = React.createClass({
    render: function () {
        return (
            React.createElement(HForm, {labelText : {pt_br: "grid"}}, [
                React.createElement(HRow,{},[
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        rowSpan: [1],
                        colSpan: [1]
                    })
                ]),
                React.createElement(HRow,{},[
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        rowSpan: [1],
                        colSpan: [1]
                    }),
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        rowSpan: [1],
                        colSpan: [1]
                    })
                ]),
                React.createElement(HRow,{},[
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        rowSpan: [1],
                        colSpan: [1]
                    }),
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        rowSpan: [1],
                        colSpan: [1]
                    }),
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        rowSpan: [1],
                        colSpan: [1]
                    })
                ]),
                React.createElement(HRow,{},[
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        rowSpan: [1],
                        colSpan: [1]
                    }),
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        rowSpan: [1],
                        colSpan: [1]
                    }),
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        rowSpan: [1],
                        colSpan: [1]
                    }),
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        rowSpan: [1],
                        colSpan: [1]
                    }),
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        rowSpan: [1],
                        colSpan: [1]
                    }),
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        rowSpan: [1],
                        colSpan: [1]
                    })
                ])
            ])
        )
    }
});

React.render(<ViewGrid/>, document.body);
