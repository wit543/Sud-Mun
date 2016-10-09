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
            <br/>
              <Row className="row row-head">
                <Col md={4}>
                  <img src="src/assets/rice_icon.png" className="icon"/>
                </Col>
                <Col md={6} className="col-headtext">
                  <span className="title">Rice ข้าวที่แนะนำ</span>
                </Col>
              </Row>

              <Row className="row">
                <Col md={4}>
                  <span className="type-head head">พันธุ์</span>
                </Col>
                <Col md={6}>
                  <span className="type text">กข45</span>
                </Col>
              </Row>

              <Row className="row">
                <Col md={4}>
                  <span className="age-head head">อายุเก็บเกี่ยว</span>
                </Col>
                <Col md={6}>
                  <span className="age text">ปลายพฤศจิกายน</span>
                </Col>
              </Row>

              <Row className="row">
                <Col md={4}>
                  <span className="area-head head">พื้นที่เพาะปลูก</span>
                </Col>
                <Col md={6}>
                  <span className="area text">ลุ่ม น้ำลึกไม่เกิน50ซม</span>
                </Col>
              </Row>

              <Row className="row">
                <Col md={4}>
                  <span className="season-head head">ฤดูที่เหมาะสม</span>
                </Col>
                <Col md={6}>
                  <span className="season text">นาปี</span>
                </Col>
              </Row>

              <Row className="row">
                <Col md={4}>
                  <span className="resist-head head">ต้านทานโรค</span>
                </Col>
                <Col md={6}>
                  <span className="resist text">ขอบใบแห้ง</span>
                </Col>
              </Row>

              <Row className="row">
                <Col md={4}>
                  <span className="enemy-head head">ศัตรูพืช</span>
                </Col>
                <Col md={6}>
                  <span className="enemy text">หนอนกอ</span>
                </Col>
              </Row>

            </form>
          </div>
        )
      }
    }
