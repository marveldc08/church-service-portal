
// import styled from 'styled-components'
import { Content } from '../components/modal.style';
import './Error.css';

function Error() {
  
  return (
    <body>
      <div className="error-page">
         <div className="content">
            <h2 className="header" data-text="404">
               404
            </h2>
            <h4 data-text="Opps! Page not found">
               Opps! Page not found
            </h4>
            <p>
               Sorry, the page you're looking for doesn't exist. If you think something is broken, report a problem.
            </p>
         </div>
      </div>
    </body>
  )
}

export default Error


// const Container= styled.div`` 