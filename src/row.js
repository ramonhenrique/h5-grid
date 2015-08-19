var React = require('react');

var HRow = React.createClass({
    propTypes: {
        children: React.PropTypes.array.isRequired
    },
    render: function () {
        var rowProps ={};
        rowProps.className = this.props.className;
        return (React.createElement('tr', rowProps, this.props.children));
    }
});

module.exports = HRow;
