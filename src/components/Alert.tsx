import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'



function Alert () {

    const alert = () => {
        toast('E don show')
    }
    return (
        <div>
            <button onClick={alert}>Click</button>
        </div>
    )
}
