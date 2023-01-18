import React, {useState, useEffect} from 'react';
import { FC } from 'react';
const BASE_URL: string  = 'https://celz4-api.herokuapp.com';
export const useGet = () =>  {
     const [isLoading, setIsLoading] = useState(false);
     const [apiData, setApiData] = useState([]);
     const [serverError, setServerError] = useState(null);
     // useEffect(() => {
     //      setIsLoading(true);
     //      const fetchData = async () =>{
     //          try{
     //                fetch(`${BASE_URL}${endPoint}`).then(response =>{return response.json()}).then((data) => {
     //                     setApiData(data);
     //                })
     //                setIsLoading(false);
     //          } 
     //          catch(error:any){
     //                setServerError(error);
     //                setIsLoading(false);
     //          }
     //      }
          
     //      fetchData();
     // }, [endPoint]);
     const refetch = (endPoint:string) => {
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


export interface createService{
     serviceType: string;
     serviceDate: string;
     startTime: string;
     endTime:string;
}
export interface updateService extends createService {
     facilitator: string;
     designation: string;
     description: string;
     summary: string;
}
export interface financialReport{
     serviceType: string;
     totalAmountInCash: number;
     totalAmountInCheque: number;
     totalAmountByTransfer: number;
     totalAmountByOtherMeans: number;
     summary: string;
}
export interface manageChurch{
     churchName: string;
     groupName: string;
     churchAddress: string;
     pastorName: string;
     phoneNumber: string;
     membershipStrenght: number;
}
export interface inviteAdmin {
     firstName: string| null | undefined ;
     lastName: string | null | undefined;
     email: string | null | undefined;
     role: string | null | undefined;
     church: string | null | undefined;
     groupChurch: string | null | undefined;

}
export interface setAccount extends inviteAdmin{
     password: string | undefined;
}
export interface logaInAdmin{
     email: string;
     password: string;
}
export const usePost = () => {
     const [isLoading, setIsLoading] = useState(false);
     const [responsMessage, setResponsMessage] = useState('');
     const [serverError, setServerError] = useState(null);

     //props: createService | updateService | financialReport | manageChurch |inviteAdmin | setAccount |logaInAdmin, endpoint:string

     /* useEffect(() => {
       const postData = async () => {
            setIsLoading(true)
            try{
                    fetch(endpoint,{
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

       //postData(); I disabled the "postData()" so as to prevent the usePost from making a post immideately when it is invoked e.g  let post = usePost({}, ''); the postData will be fired immediately
      
     }, []) */
     const makePost = (props: createService | updateService | financialReport | manageChurch |inviteAdmin | setAccount |logaInAdmin, endPoint:string) =>{
          const postData = async () => {
               setIsLoading(true)
               try{
                       fetch(`${BASE_URL}${endPoint}`,{
                            method : 'post',
                            body : JSON.stringify(props),
                            headers: {
                                 'content-Type': 'application/json'
                            }
                       }).then(()=>{
                            setResponsMessage('Successful');
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
     return {isLoading, responsMessage, serverError, makePost};
} 
