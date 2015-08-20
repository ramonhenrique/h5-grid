import React from 'react';
import HForm from '../../../src/form.js';
import HRow from '../../../src/row.js';
import less from '../../../test/template/app/index.less';

window.hsession = {
    language: 'pt_br'
};

var H5Layout = React.createClass({
    render: function () {
        return(
            React.createElement(HForm, {labelText : {pt_br: "grid"}}, [
                React.createElement(HRow,{},[
                    React.createElement("div", {
                        className: 'campo0',
                        rowSpan: 1,
                        colSpan: 6
                    }, 'div0'),
                    React.createElement("div", {
                        className: 'campo1',
                        rowSpan: 8,
                        colSpan: 1
                    }, 'div1')
                ]),
                React.createElement(HRow,{},[
                    React.createElement("div", {
                        className: 'campo2',
                        rowSpan: 2,
                        colSpan: 2
                    }, 'div2'),
                    React.createElement("div", {
                        className: 'campo3',
                        rowSpan: 1,
                        colSpan: 4
                    }, 'div3')
                ]),
                React.createElement(HRow,{},[
                    React.createElement("div", {
                        className: 'campo4',
                        rowSpan: 1,
                        colSpan: 1
                    }, 'div4'),
                    React.createElement("div", {
                        className: 'campo5',
                        rowSpan: 1,
                        colSpan: 2
                    }, 'div5'),
                    React.createElement("div", {
                        className: 'campo6',
                        rowSpan: 1,
                        colSpan: 1
                    }, 'div6')
                ]),
                React.createElement(HRow,{},[
                    React.createElement("div", {
                        className: 'campo7',
                        colSpan: 1
                    }, 'div7'),
                    React.createElement("div", {
                        className: 'campo8',
                        colSpan: 1
                    }, 'div8'),
                    React.createElement("div", {
                        className: 'campo9',
                        colSpan: 1
                    }, 'div9'),
                    React.createElement("div", {
                        className: 'campo10',
                        colSpan: 1
                    }, 'div10'),
                    React.createElement("div", {
                        className: 'campo11',
                        colSpan: 1
                    }, 'div11'),
                    React.createElement("div", {
                        className: 'campo12',
                        colSpan: 1
                    }, 'div12')
                ]),
                 React.createElement(HRow,{},[
                    React.createElement("div", {
                        className: 'campo13',
                        rowSpan: 1,
                        colSpan: 3
                    }, 'div13'),
                    React.createElement("div", {
                        className: 'campo14',
                        rowSpan: 1,
                        colSpan: 3
                    }, 'div14')
                ]),
                 React.createElement(HRow,{},[
                    React.createElement("div", {
                        className: 'campo15',
                        rowSpan: 1,
                        colSpan: 2
                    }, 'div15'),
                    React.createElement("div", {
                        className: 'campo16',
                        rowSpan: 1,
                        colSpan: 2
                    }, 'div16'),
                    React.createElement("div", {
                        className: 'campo17',
                        rowSpan: 1,
                        colSpan: 1
                    }, 'div17'),
                    React.createElement("div", {
                        className: 'campo18',
                        rowSpan: 1,
                        colSpan: 1
                    }, 'div18')
                ]),
                 React.createElement(HRow,{},[
                    React.createElement("div", {
                        className: 'campo19',
                        rowSpan: 1,
                        colSpan: 3
                    }, 'div19'),
                    React.createElement("div", {
                        className: 'campo20',
                        rowSpan: 1,
                        colSpan: 3
                    }, 'div20')
                ]),
                React.createElement(HRow,{},[
                    React.createElement("div", {
                        className: 'campo21',
                        rowSpan: 1,
                        colSpan: 1
                    }, 'div21'),
                    React.createElement("div", {
                        className: 'campo22',
                        rowSpan: 2,
                        colSpan: 3
                    }, 'div22'),
                    React.createElement("div", {
                        className: 'campo23',
                        rowSpan: 1,
                        colSpan: 1
                    }, 'div23'),
                    React.createElement("div", {
                        className: 'campo24',
                        rowSpan: 1,
                        colSpan: 1
                    }, 'div24')
                ]),
                 React.createElement(HRow,{},[
                    React.createElement("div", {
                        className: 'campo25',
                        rowSpan: 1,
                        colSpan: 1
                    }, 'div25'),
                    React.createElement("div", {
                        className: 'campo26',
                        rowSpan: 1,
                        colSpan: 2
                    }, 'div26'),
                    React.createElement("div", {
                        className: 'campo27',
                        rowSpan: 1,
                        colSpan: 1
                    }, 'div27')
                ]),
                 React.createElement(HRow,{},[
                    React.createElement("div", {
                        className: 'campo28',
                        rowSpan: 1,
                        colSpan: 7
                    }, 'div28')
                ]),
                 React.createElement(HRow,{},[
                    React.createElement("div", {
                        className: 'campo29',
                        rowSpan: 1,
                        colSpan: 3
                    }, 'div29'),
                    React.createElement("div", {
                        className: 'campo30',
                        rowSpan: 1,
                        colSpan: 1
                    }, 'div30'),
                    React.createElement("div", {
                        className: 'campo31',
                        rowSpan: 1,
                        colSpan: 3
                    }, 'div31')
                ]),
                 React.createElement(HRow,{},[
                    React.createElement("div", {
                        className: 'campo32',
                        rowSpan: 1,
                        colSpan: 7
                    }, 'div32')
                ])
            ])
        )
    }
});

React.render(<H5Layout/>, document.getElementById("app"));
