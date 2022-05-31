import React from 'react';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './Alerts.css'



const CustomToast = () => {
    return (
        <div>
            Oooops! Something went wrong
        </div>
    )
}





//toast.configure()
function Alerts() {
    interface alertProp{
        children: JSX.Element,
        status: string
    }

        const customId = "custom-id-yes";
        const notify = () => {
            toast.warning('Sorry, Something happened', {position: toast.POSITION.TOP_LEFT,
            autoClose: 5000,
            toastId: customId
            })
             toast.success('Successfully Done', {position: toast.POSITION.TOP_RIGHT,
             autoClose: 8000,
             toastId: customId
            })
             toast.error(<CustomToast />, {position: toast.POSITION.BOTTOM_RIGHT,
             autoClose: false,
             toastId: customId
             })
             toast.info('Basic Notification', {position: toast.POSITION.BOTTOM_LEFT,
             autoClose: false,
             toastId: customId
             })
        }
        return (
            <div>
                <button className="alert_button" onClick={notify}>Notify</button>
            </div>
        );
 }
export default Alerts;