import React,{ Component } from 'react'
import { Modal } from 'react-bootstrap'
import MapForm from './MapForm'
import './MapModal.scss'

export default class MapModal extends Component{

  constructor(props){
    super(props)
    this.state =  { showModal: false, rice:{RD5: 0, P601: 0, TPG161: 0, RD19: 0} }

  }

  componentWillReceiveProps(nextProps){
      //console.log(nextProps);
    if(nextProps.showModal == true){
      console.log('riceModal',this.props.riceData);
      this.setState({ showModal: true, rice:this.props.riceData })
    }
  }

  onCloseModal() {
    this.setState({ showModal: false })
    const {onClose}  = this.props
    onClose()
    console.log("Map: ",this.state.showModal);
  }

  render(){
  return(
    <div>
      <Modal show={this.state.showModal}
        onHide={this.onCloseModal.bind(this)} >
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">Information</Modal.Title>
        </Modal.Header>
          <div className='text-center'>
          <MapForm riceData={this.state.rice} />
          </div>
        <Modal.Body>
        </Modal.Body>
      </Modal>
    </div>
  )
}

}
