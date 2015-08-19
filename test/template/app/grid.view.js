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
            React.createElement(HForm, {labelText : {pt_br: "grid"}, className:"form-container"}, [
                React.createElement(HRow,{className:"row-1"},[
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [12],
                        className: 'campo1'
                    })
                ]),
                React.createElement(HRow,{className:"row-2"},[
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
                React.createElement(HRow,{className:"row-3"},[
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [3],
                        className: 'campo4'
                    }),
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [6],
                        className: 'campo5'
                    }),
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [3],
                        className: 'campo6'
                    })
                ]),
                React.createElement(HRow,{className:"row-4"},[
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [4],
                        className: 'campo7'
                    }),
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [2],
                        className: 'campo8'
                    }),
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [3],
                        className: 'campo9'
                    }),
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [1],
                        className: 'campo10'
                    }),
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [2],
                        className: 'campo11'
                    })
                ]),
                React.createElement(HRow,{className:"row-5"},[
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [2],
                        className: 'campo12'
                    }),
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [2],
                        className: 'campo13'
                    }),
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [2],
                        className: 'campo14'
                    }),
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [2],
                        className: 'campo15'
                    }),
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [2],
                        className: 'campo16'
                    }),
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [2],
                        className: 'campo17'
                    })
                ]),
                React.createElement(HRow,{className:"row-6"},[
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [1],
                        className: 'campo18'
                    }),
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [1],
                        className: 'campo19'
                    }),
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [1],
                        className: 'campo20'
                    }),
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [1],
                        className: 'campo21'
                    }),
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [1],
                        className: 'campo22'
                    }),
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [1],
                        className: 'campo23'
                    }),
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [1],
                        className: 'campo24'
                    }),
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [1],
                        className: 'campo25'
                    }),
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [1],
                        className: 'campo26'
                    }),
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [1],
                        className: 'campo27'
                    }),
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [1],
                        className: 'campo28'
                    }),
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [1],
                        className: 'campo29'
                    })
                ]),
                React.createElement(HRow,{className:"row-7"},[
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [3],
                        className: 'campo30'
                    }),
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [3],
                        className: 'campo31'
                    }),
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [3],
                        className: 'campo32'
                    }),
                    React.createElement(HInput, {
                        store: mock_store,
                        field: 'campo',
                        colSpan: [3],
                        className: 'campo33'
                    })
                ])
            ])
        )
    }
});

React.render(<ViewGrid/>, document.getElementById("app"));
