import React, { Component } from 'react'
import './MapForm.scss'
import { FormGroup ,
  Col,
  Row,
  Form,
  FormControl,} from 'react-bootstrap'

  var RD5 = {
    varity:"กข45 ( RD5 )",
    age:"ปลายพฤศจิกายน",
    area:"ลุ่ม น้ำลึกไม่เกิน50ซม",
    season:"นาปี",
    resist:"ขอบใบแห้ง",
    warnning:"หนอนกอ"

  }

  var P601 = {
    varity:"พิษณุโลก 60-1 (Phitsanulok 60-1)",
    age:"30 พฤศจิกายน -15 ธันวาคม",
    area:"ภาคกลางตอนบน ที่มีระดับน้ำไม่เกิน 75 เซนติเมตร โดยเฉพาะในแหล่งที่มีแมลงบั่วระบาด",
    season:"นาปี",
    resist:"โรคขอบใบแห้ง โรคใบหงิก และโรคกาบใบเน่า ต้านทานแมลงบั่ว",
    warnning:"ไม่ต้านทานโรคไหม้ และโรคใบสีส้ม"

  }

  var RD19 = {
    varity:"กข19 ( RD19 )",
    age:" ประมาณ 15 ธันวาคม",
    area:"ในบริเวณที่ลุ่มน้ำลึกประมาณ 1 เมตร",
    season:"ฤดูนาปีของภาคกลาง",
    resist:"โรคขอบใบแห้ง",
    warnning:"ไม่ต้านทานเพลี้ยกระโดดสีน้ำตาล"
  }

  var TPG161 = {
    varity:"ตะเภาแก้ว 161 (Ta – pow Gaew 161)",
    age:"ประมาณ 9 ธันวาคม",
    area:"พื้นที่ข้าวขึ้นน้ำในภาคกลาง",
    season:" ไม่มีข้อมูล ",
    resist:"โรคใบจุดสีน้ำตาล ขึ้นน้ำได้ดีปานกลาง",
    warnning:"ไม่ต้านทานโรคขอบใบแห้ง โรคไหม้ โรคใบสีส้ม และโรคใบหงิก ไม่ต้านทานเพลี้ยกระโดดสีน้ำตาลและแมลงบั่ว",
  }

  export default class MapForm extends Component {
    constructor(props){
      super(props);
    }

    componentDidMount(){

    }

    renderInformation(){
      return(
        <div>
        {this.renderRice1()}
        <br/><br/>
        {this.renderRice2()}
        </div>
      )

    }

    renderRice1(){
      return(
      <div>
      <Row className="row">
        <Col md={4}>
          <span className="type-head head">พันธุ์</span>
        </Col>
        <Col md={6}>
          <span className="type text" >{RD5.varity}</span>
        </Col>
      </Row>

      <Row className="row">
        <Col md={4}>
          <span className="age-head head">อายุเก็บเกี่ยว</span>
        </Col>
        <Col md={6}>
          <span className="age text">{RD5.age}</span>
        </Col>
      </Row>

      <Row className="row">
        <Col md={4}>
          <span className="area-head head">พื้นที่เพาะปลูก</span>
        </Col>
        <Col md={6}>
          <span className="area text">{RD5.area}</span>
        </Col>
      </Row>

      <Row className="row">
        <Col md={4}>
          <span className="season-head head">ฤดูที่เหมาะสม</span>
        </Col>
        <Col md={6}>
          <span className="season text">{RD5.season}</span>
        </Col>
      </Row>

      <Row className="row">
        <Col md={4}>
          <span className="resist-head head">ต้านทานโรค</span>
        </Col>
        <Col md={6}>
          <span className="resist text">{RD5.resist}</span>
        </Col>
      </Row>

      <Row className="row">
        <Col md={4}>
          <span className="warnning-head head">ข้อควรระวัง</span>
        </Col>
        <Col md={6}>
          <span className="warnning text">{RD5.warnning}</span>
        </Col>
      </Row>
      </div>)
    }

    renderRice2(){
      return(
      <div>
      <Row className="row">
        <Col md={4}>
          <span className="type-head head">พันธุ์</span>
        </Col>
        <Col md={6}>
          <span className="type text" >{P601.varity}</span>
        </Col>
      </Row>

      <Row className="row">
        <Col md={4}>
          <span className="age-head head">อายุเก็บเกี่ยว</span>
        </Col>
        <Col md={6}>
          <span className="age text">{P601.age}</span>
        </Col>
      </Row>

      <Row className="row">
        <Col md={4}>
          <span className="area-head head">พื้นที่เพาะปลูก</span>
        </Col>
        <Col md={6}>
          <span className="area text">{P601.area}</span>
        </Col>
      </Row>

      <Row className="row">
        <Col md={4}>
          <span className="season-head head">ฤดูที่เหมาะสม</span>
        </Col>
        <Col md={6}>
          <span className="season text">{P601.season}</span>
        </Col>
      </Row>

      <Row className="row">
        <Col md={4}>
          <span className="resist-head head">ต้านทานโรค</span>
        </Col>
        <Col md={6}>
          <span className="resist text">{P601.resist}</span>
        </Col>
      </Row>

      <Row className="row">
        <Col md={4}>
          <span className="warnning-head head">ข้อควรระวัง</span>
        </Col>
        <Col md={6}>
          <span className="warnning text">{P601.warnning}</span>
        </Col>
      </Row>
      </div>)
    }

    renderRice3(){
      return(
      <div>
      <Row className="row">
        <Col md={4}>
          <span className="type-head head">พันธุ์</span>
        </Col>
        <Col md={6}>
          <span className="type text" >{RD19.varity}</span>
        </Col>
      </Row>

      <Row className="row">
        <Col md={4}>
          <span className="age-head head">อายุเก็บเกี่ยว</span>
        </Col>
        <Col md={6}>
          <span className="age text">{RD19.age}</span>
        </Col>
      </Row>

      <Row className="row">
        <Col md={4}>
          <span className="area-head head">พื้นที่เพาะปลูก</span>
        </Col>
        <Col md={6}>
          <span className="area text">{RD19.area}</span>
        </Col>
      </Row>

      <Row className="row">
        <Col md={4}>
          <span className="season-head head">ฤดูที่เหมาะสม</span>
        </Col>
        <Col md={6}>
          <span className="season text">{RD19.season}</span>
        </Col>
      </Row>

      <Row className="row">
        <Col md={4}>
          <span className="resist-head head">ต้านทานโรค</span>
        </Col>
        <Col md={6}>
          <span className="resist text">{RD19.resist}</span>
        </Col>
      </Row>

      <Row className="row">
        <Col md={4}>
          <span className="warnning-head head">ข้อควรระวัง</span>
        </Col>
        <Col md={6}>
          <span className="warnning text">{RD19.warnning}</span>
        </Col>
      </Row>
      </div>)
    }

    renderRice4(){
      return(
      <div>
      <Row className="row">
        <Col md={4}>
          <span className="type-head head">พันธุ์</span>
        </Col>
        <Col md={6}>
          <span className="type text" >{TPG161.varity}</span>
        </Col>
      </Row>

      <Row className="row">
        <Col md={4}>
          <span className="age-head head">อายุเก็บเกี่ยว</span>
        </Col>
        <Col md={6}>
          <span className="age text">{TPG161.age}</span>
        </Col>
      </Row>

      <Row className="row">
        <Col md={4}>
          <span className="area-head head">พื้นที่เพาะปลูก</span>
        </Col>
        <Col md={6}>
          <span className="area text">{TPG161.area}</span>
        </Col>
      </Row>

      <Row className="row">
        <Col md={4}>
          <span className="season-head head">ฤดูที่เหมาะสม</span>
        </Col>
        <Col md={6}>
          <span className="season text">{TPG161.season}</span>
        </Col>
      </Row>

      <Row className="row">
        <Col md={4}>
          <span className="resist-head head">ต้านทานโรค</span>
        </Col>
        <Col md={6}>
          <span className="resist text">{TPG161.resist}</span>
        </Col>
      </Row>

      <Row className="row">
        <Col md={4}>
          <span className="warnning-head head">ข้อควรระวัง</span>
        </Col>
        <Col md={6}>
          <span className="warnning text">{TPG161.warnning}</span>
        </Col>
      </Row>
      </div>)
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
              {this.renderInformation()}
            </form>
          </div>
        )
      }
    }
