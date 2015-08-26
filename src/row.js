var React = require('react');

var HRow = React.createClass({
    propTypes: {
        children: React.PropTypes.array.isRequired
    },
    render: function () {
        var trProps = {}
        trProps.className=this.props.className ? this.props.className : null;
        return (React.createElement('tr', trProps, [this.createTD()]));
    },
    createTD: function(){
        return this.props.children.map(function(c){
            var tdProps={};
            tdProps.rowSpan = c.props.rowSpan;
            tdProps.colSpan = c.props.colSpan;
            delete c.props.rowSpan;
            delete c.props.colSpan;
            return React.createElement('td', tdProps, [c]);
        });
    }
});

module.exports = HRow;
