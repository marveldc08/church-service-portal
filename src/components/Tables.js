import React from 'react'
import styled from 'styled-components'
import './Tables.css';
function Tables() {
  return (
    <Container>
          <div >
                    <div class="table-responsive bg-white">
                        <table class="table mb-0">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Service Type</th>
                                    <th>Service Date</th>
                                    <th>Start Time</th>
                                    <th>End Time</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr id="tr1" class="tr1">
                                    <td class="title">1</td>
                                    <td >Thanks Giving Service</td>
                                    <td >April 25th</td>
                                    <td >9:00am</td>
                                    <td >12:00pm</td>
                                    <td>
                                        <button class="btn btn-primary tableBtn"data-toggle="modal" data-target="#contentModal" id="btn1">Update</button>
                                    </td>
                                </tr>
                                <tr id="tr2">
                                    <td id="title2">2</td>
                                    <td id="name2">First Fruit Service</td>
                                    <td id="church2">Febuary 21st</td>
                                    <td id="phone2">9:00am</td>
                                    <td id="content2"> 11:30am</td>
                                    <td>
                                        <button data-toggle="modal" data-target="#contentModal" id="btn2" >Update</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td id="title3">3</td>
                                    <td id="name3">Impactation Service</td>
                                    <td id="church3">March 3rd</td>
                                    <td id="phone3">10:00am</td>
                                    <td id="content3">12:33pm</td>
                                    <td>
                                        <button  data-toggle="modal" data-target="#contentModal"id="btn3">Update</button>
                                    </td>
                                </tr>
                                <tr id="tr4">
                                    <td id="title4">4</td>
                                    <td id="name4">Communion Service</td>
                                    <td id="church4">April 3rd</td>
                                    <td id="phone4">9:00am</td>
                                    <td id="content4">12:00pm</td>
                                    <td>
                                        <button class="btn btn-primary tableBtn" data-toggle="modal" data-target="#contentModal" id="btn4">Update</button>
                                    </td>
                                </tr>
                                <tr id="tr5">
                                    <td id="title5">5</td>
                                    <td id="name5">Mid-week Service</td>
                                    <td id="church5">April 13th</td>
                                    <td id="phone5">6:00pm</td>
                                    <td id="content5">8:00pm</td>
                                    <td>
                                        <button class="btn btn-primary tableBtn" data-toggle="modal" data-target="#contentModal"id="btn5">Update</button>
                                    </td>
                                </tr>
                                <tr id="tr6">
                                    <td id="title6">6</td>
                                    <td id="name6">Partnership Service</td>
                                    <td id="church6">June 24th</td>
                                    <td id="phone6">8:00am</td>
                                    <td id="content6">11:10am</td>
                                    <td>
                                        <button class="btn btn-primary tableBtn" data-toggle="modal" data-target="#contentModal" id="btn6" >Update</button>
                                    </td>
                                </tr>
                                <tr id="tr7">
                                    <td id="title7">7</td>
                                    <td id="name7">Thanks Giving Sevice</td>
                                    <td id="church7">December 14th</td>
                                    <td id="phone7">9:00am</td>
                                    <td id="content7">12:09pm</td>
                                    <td>
                                        <button class="btn btn-primary tableBtn" data-toggle="modal" data-target="#contentModal" id="btn7">Update</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <Pagination>
                            <ul>
                                <li class="page-item disabled"><a class="page-link" href="javascript:void(0);">Prev</a></li>
                                <li class="page-item active"><a class="page-link" href="javascript:void(0);">1</a></li>
                                <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                                <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
                                <li class="page-item"><a class="page-link" href="javascript:void(0);">Next</a></li>
                            </ul>
                        </Pagination>
                    </div>
                </div>
    </Container>
  )
}

export default Tables

const Container = styled.div`
    background: #ffffff;
    border-radius: 10px;
    margin: 2em 0;
    padding: 2em;
` 
const Pagination = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    ul{
        display: flex;
        justify-content: space-between;
       
    }
`