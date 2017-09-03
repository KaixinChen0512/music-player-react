import React from 'react';
require('./listitem.less');
let PubSub = require('pubsub-js');

let ListItem = React.createClass({
	deleteMusic(item, event) {
		event.stopPropagation();
		PubSub.publish('DELETE_MUSIC', item);
	},
	playMusic(item, event) {
		PubSub.publish('PLAY_MUSIC', item);
	},
    render() {
    	let item = this.props.data;
        return (
            <li className={`row components-listitem${this.props.focus ? ' focus' : ''}`} onClick={this.playMusic.bind(this, item)}>
                <p><span className="bold">{item.title}</span>  -  {item.artist}</p>
                <p className="-col-auto delete" onClick={this.deleteMusic.bind(this, item)}></p>
            </li>
        );
    }
});

export default ListItem;
