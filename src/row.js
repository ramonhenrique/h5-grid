var React = require('react');

var HRow = React.createClass({
    propTypes: {
        children: React.PropTypes.array.isRequired
    },
    render: function () {
        return (React.createElement('tr', {}, [this.createTD()]));
    },
    createTD: function(){
        return this.props.children.map(function(c){
            var rowspan = c.props.rowSpan
            var colspan = c.props.colSpan
            delete c.props.rowSpan
            delete c.props.colSpan
            return React.createElement('td', {rowSpan:rowspan, colSpan:colspan}, [c]);
        });
    }
});

module.exports = HRow;
