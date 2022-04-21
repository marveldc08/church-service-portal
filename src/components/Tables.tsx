import React from 'react'
import styled from 'styled-components'
import './Tables.css';

function Tables() {
  return (
    <Container>
      <div>
        <div className="bg-white">
          <table className="table-responsive table mb-0">
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
              <tr className="tr1">
                <td className="title">1</td>
                <td>Thanks Giving Service</td>
                <td>April 25th</td>
                <td>9:00am</td>
                <td>12:00pm</td>
                <td>
                  <button
                    className="btn btn-primary tableBtn"
                    data-toggle="modal"
                    data-target="#contentModal"
                  >
                    Update
                  </button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>First Fruit Service</td>
                <td>Febuary 21st</td>
                <td>9:00am</td>
                <td> 11:30am</td>
                <td>
                  <button
                    className="btn btn-primary tableBtn"
                    data-toggle="modal"
                    data-target="#contentModal"
                  >
                    Update
                  </button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Impactation Service</td>
                <td>March 3rd</td>
                <td>10:00am</td>
                <td>12:33pm</td>
                <td>
                  <button
                    className="btn btn-primary tableBtn"
                    data-toggle="modal"
                    data-target="#contentModal"
                  >
                    Update
                  </button>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Communion Service</td>
                <td>April 3rd</td>
                <td>9:00am</td>
                <td>12:00pm</td>
                <td>
                  <button
                    className="btn btn-primary tableBtn"
                    data-toggle="modal"
                    data-target="#contentModal"
                  >
                    Update
                  </button>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>Mid-week Service</td>
                <td>April 13th</td>
                <td>6:00pm</td>
                <td>8:00pm</td>
                <td>
                  <button
                    className="btn btn-primary tableBtn"
                    data-toggle="modal"
                    data-target="#contentModal"
                  >
                    Update
                  </button>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>Partnership Service</td>
                <td>June 24th</td>
                <td>8:00am</td>
                <td>11:10am</td>
                <td>
                  <button
                    className="btn btn-primary tableBtn"
                    data-toggle="modal"
                    data-target="#contentModal"
                  >
                    Update
                  </button>
                </td>
              </tr>
              <tr>
                <td>7</td>
                <td>Thanks Giving Sevice</td>
                <td>December 14th</td>
                <td>9:00am</td>
                <td>12:09pm</td>
                <td>
                  <button
                    className="btn btn-primary tableBtn"
                    data-toggle="modal"
                    data-target="#contentModal"
                  >
                    Update
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <Pagination>
            <ul>
              <li className="page-item disabled">
                <a className="page-link" href="javascript:void(0);">
                  Prev
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="javascript:void(0);">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="javascript:void(0);">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="javascript:void(0);">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="javascript:void(0);">
                  Next
                </a>
              </li>
            </ul>
          </Pagination>
        </div>
      </div>
    </Container>
  );
}

export default Tables

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border-radius: 10px;
  margin: 2em 0;
  padding: 2em;
`; 
const Pagination = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  
    ul{
        display: flex;
        justify-content: space-between;
       
    }
`