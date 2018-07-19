import React, { Component } from 'react';
import '../styles/Modal.css';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.onClose = this.onClose.bind(this);
    }

    onClose() {
        this.props.hideModal();
    }

    render() {
        return (
            <div className={"modal " + (this.props.vis ? 'show' : 'hidden')}> 
                <div onClick={this.onClose} className="modal__close"></div>
                {this.props.children}
            </div>
        )
    }
}

export default Modal;