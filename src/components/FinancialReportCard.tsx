import React from 'react';
import styled from 'styled-components'; 
import './FinancialReportCard.css';
import Select from 'react-select';

function FinancialReportCard() {

    
    
    const serviceType = [
        { label: "ThanksgivingService", value: 1 },
        { label: "Communion Service", value: 2 },
        { label: "Cell Ministry Day", value: 3 },
        { label: "Mid-Week Service", value: 4 },
        { label: "Sunday service", value: 5 },
        { label: "All-Night Service", value: 6 },
      ];
  return (
    <form className='form_wrapper'>

        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <Select options={serviceType} placeholder={'Select Service Type...'} />
                </div>
            </div>
        </div>
        <div className="card_wrapper">
            <HeaderText>
                <h2>FINANCIALS</h2>
            </HeaderText>
            <div className="container">
                <div className="row mt-4">
                    {/* <div className="col-sm-4">Finance Type</div> */}
                    <div className=" col-md-4">
                        <Select options={serviceType} placeholder={'Select Service Type...'} />
                    </div>
                </div>
            </div>

        </div>
    </form>
  )
}

export default FinancialReportCard

const HeaderText = styled.header`
     border-radius: 8px 8px 0 0;
    display: flex;
    justify-content: space-between;
    padding: 0.2rem;
    align-items: center;
    background-color: #003366; 
    width: 100%;
    color: #ffffff;
    padding: 10px 0px 10px 30px ;
`

const H6 = styled.h6`
    flex: 20%;
    color: #000;
    margin: 10px;
`

