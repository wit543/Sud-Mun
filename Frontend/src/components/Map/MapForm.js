import React, { Component } from 'react'
import './MapForm.scss'
import { FormGroup ,
  Col,
  Row,
  Form,
  FormControl,} from 'react-bootstrap'

  export default class MapForm extends Component {
    constructor(props){
      super(props);

    }

      render() {
        return (
          <div className="text-center">
            <form className="MapForm">
              <Row>
                <Col md={5}>
                  <span className="icon"></span>
                </Col>
                <Col md={7}>
                  <span className="title">Rice ข้าวที่แนะนำ</span>
                </Col>
              </Row>

            </form>
          </div>
        )
      }
    }
