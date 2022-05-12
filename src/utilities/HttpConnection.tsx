import React, {useState, useEffect} from 'react';
import { FC } from 'react';
const BASE_URL: string  = 'https://api.themoviedb.org/3';
export const useGet = (endPoint:string) =>  {
     const [isLoading, setIsLoading] = useState(false);
     const [apiData, setApiData] = useState(null);
     const [serverError, setServerError] = useState(null);
     useEffect(() => {
          setIsLoading(true);
          const fetchData = async () =>{
              try{
                    fetch(`${BASE_URL}${endPoint}`).then(response =>{return response.json()}).then((data) => {
                         setApiData(data.results);
                    })
                    setIsLoading(false);
              } 
              catch(error:any){
                    setServerError(error);
                    setIsLoading(false);
              }
          }
          
          fetchData();
     }, [endPoint]);
     const refetch = () => {
          setIsLoading(true);
          const fetchData = async () =>{
              try{
                    fetch(`${BASE_URL}${endPoint}`).then(response =>{return response.json()}).then((data) => {
                         setApiData(data.results);
                         console.log(data.results);
                    })
                    setIsLoading(false);
              } 
              catch(error:any){
                    setServerError(error);
                    setIsLoading(false);
              }
          }
          
          fetchData();
     }
     return { isLoading, apiData, serverError, refetch };
}
interface createService{
     serviceType: string;
     serviceDate: string;
     startTime: string;
     endTime:string;
}
interface updateService extends createService{
     facilitator: string;
     designation: string;
     description: string;
     summary: string;
}
interface financialReport{
     serviceType: string;
     totalAmountInCash: number;
     totalAmountInCheque: number;
     totalAmountByTransfer: number;
     totalAmountByOtherMeans: number;
     summary: string;
}
interface manageChurch{
     churchName: string;
     groupName: string;
     churchAddress: string;
     pastorName: string;
     phoneNumber: string;
     membershipStrenght: number;
}
interface inviteAdmin {
     firstName: string;
     lastName: string;
     email: string;
     role: string;
     church: string;
     group: string;

}
interface setAccount extends inviteAdmin{
     password: string;
     confirmPassword: string;
}
interface logaInAdmin{
     email: string;
     password: string;
}
export const usePost = (props: createService | updateService | financialReport | manageChurch |inviteAdmin | setAccount |logaInAdmin) => {
     const [isLoading, setIsLoading] = useState(false);
     const [responsMessage, setResponsMessage] = useState('');
     const [serverError, setServerError] = useState(null);

     useEffect(() => {
       const postData = async () => {
            setIsLoading(true)
            try{
                    fetch('https://disney-clone-99f2f-default-rtdb.firebaseio.com/Users.json',{
                         method : 'post',
                         body : JSON.stringify(props),
                         headers: {
                              'content-Type': 'application/json'
                         }
                    }).then(()=>{
                         setResponsMessage('Successful.');
                         setIsLoading(false);
                         
                    })
            }
            catch(error: any){
               setServerError(error);
               setIsLoading(false);
            }
       }

       postData();
      
     }, [])
     const repost = () =>{
          const postData = async () => {
               setIsLoading(true)
               try{
                       fetch('https://disney-clone-99f2f-default-rtdb.firebaseio.com/Users.json',{
                            method : 'post',
                            body : JSON.stringify(props),
                            headers: {
                                 'content-Type': 'application/json'
                            }
                       }).then(()=>{
                            setResponsMessage('Successful.');
                            setIsLoading(false);
                            
                       })
               }
               catch(error: any){
                  setServerError(error);
                  setIsLoading(false);
               }
          }
   
          postData();
     }
     return {isLoading, responsMessage, serverError, repost};
} 
