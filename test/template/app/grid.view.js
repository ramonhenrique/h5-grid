import React from 'react';
import HForm from '../../../src/form.js';
import HRow from '../../../src/row.js';
import HInput from 'h5-input';

window.hsession = {
    language: 'pt_br'
};

var mock_store = {
    fields:{___fields___}
};

var ViewGrid = React.createClass({
    render: function () {
        return(
            React.createElement(HForm, {labelText : {pt_br: "grid"}}, [
                React.createElement(HRow,{},[
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [12],
                        className: 'campo1'
                    })
                ]),
                React.createElement(HRow,{},[
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [6],
                        className: 'campo2'
                    }),
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [6],
                        className: 'campo3'
                    })
                ]),
                React.createElement(HRow,{},[
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [3]
                    }),
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [6]
                    }),
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [3]
                    })
                ]),
                React.createElement(HRow,{},[
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [3]
                    }),
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [3]
                    }),
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [3]
                    }),
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [3]
                    })
                ]),
                React.createElement(HRow,{},[
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [4]
                    }),
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [2]
                    }),
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [3]
                    }),
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [1]
                    }),
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [2]
                    })
                ]),
                React.createElement(HRow,{},[
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [2]
                    }),
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [2]
                    }),
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [2]
                    }),
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [2]
                    }),
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [2]
                    }),
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [2]
                    })
                ]),
                React.createElement(HRow,{},[
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [1]
                    }),
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [1]
                    }),
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [1]
                    }),
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [1]
                    }),
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [1]
                    }),
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [1]
                    }),
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [1]
                    }),
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [1]
                    }),
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [1]
                    }),
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [1]
                    }),
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [1]
                    }),
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [1]
                    })
                ])
            ])
        )
    }
});

React.render(<ViewGrid/>, document.getElementById("app"));