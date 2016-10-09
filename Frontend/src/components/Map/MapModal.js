import React,{ Component } from 'react'
import { Modal } from 'react-bootstrap'
import MapForm from './MapForm'
import './MapModal.scss'

export default class MapModal extends Component{

  constructor(props){
    super(props)
    this.state =  { showModal: false }

  }

  componentWillReceiveProps(nextProps){
      //console.log(nextProps);
    if(nextProps.showModal == true){
      this.setState({ showModal: true })
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
          <MapForm  />
          </div>
        <Modal.Body>
        </Modal.Body>
      </Modal>
    </div>
  )
}

}
