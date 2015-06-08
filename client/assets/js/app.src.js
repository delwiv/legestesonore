import React from 'react';
import $ from 'jquery';
import cookie from 'react-cookie';
import uuid from 'lib/math';

var LinkBox = React.createClass({displayName: "LinkBox",
    loadLinks: function(name) {
        return $.get('/api/links/' + name);
    },
    sendLink: function(link) {
        return $.post('/api/links', {link: link});
    },
    getInitialState: function() {
        var userId = cookie.load('userId') || '';
        if(!userId.length) {
            userId = uuid(32);
            cookie.save('userId', userId);
        }

        return ({links: [], userId: userId});
    },
    componentWillMount: function() {
        this.loadLinks();
    },
    render: function() {
        return (
            React.createElement("div", {className: "linkBox row"}, 
                React.createElement("div", {className: "large-12 columns"}, 
                    React.createElement(LinkForm, {onLinkSubmit: this.sendLink}), 
                    React.createElement(LinkList, {data: this.state.links})
                )
            )
        );
    }
});

var LinkForm = React.createClass({displayName: "LinkForm",
    onLinkSubmit: function() {
        var link = this.refs.link.getDOMNode().value.trim();
        this.props.onLinkSubmit(link);
        this.refs.name.getDOMNode().value = '';
    },
    render: function() {
        return (
            React.createElement("form", {className: "linkForm row form", onSubmit: this.onLinkSubmit}, 
                React.createElement("input", {ref: "link", type: "text", placeholder: "Paste your link here"})
            )
        );
    }
});

var LinkList = React.createClass({displayName: "LinkList",
    updateStatus: function() {

    },
    render: function() {
        if(!this.props.data.length) {
            return (
                React.createElement("div", {className: "noLinks"}, 
                    "There is no link available"
                )
            );
        }
        var nodes = this.props.data.map(function(link, index) {
            return React.createElement(LinkItem, {key: index, data: link.data, status: link.status})
        });
        return (
            React.createElement("div", {className: "linkList"}, 
                React.createElement("h2", null, "Links"), 
                nodes
            )
        );
    }
});

var LinkItem = React.createClass({displayName: "LinkItem",
    render: function() {
        switch (this.props.status) {
            case 'PENDING':
                return (
                    React.createElement("div", {className: "pendingLink"}, 
                        this.props.data.name
                    )
                );
                break;
            case 'DOWNLOADING':
                return (
                    React.createElement("div", {className: "dowloadingItem"}, 
                        this.props.data.name, " - ", this.props.data.percent, " %"
                    )
                );
                break;

            case 'CONVERTING':
                return (
                    React.createElement("div", {className: "convertingItem"}, 
                        this.props.data.name
                    )
                );
            case 'AVAILABLE':
                return(
                    React.createElement("div", {className: "availableItem"}, 
                        React.createElement("a", {href: this.props.data.link}, this.props.data.name)
                    )
                );
            break;
        }
    }
});

React.render( React.createElement(LinkBox, null) , document.getElementById('content'));
