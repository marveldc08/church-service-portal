import React, {useState, useRef, useEffect} from 'react'



export const useStorage = () => {
     const [token, setToken] = useState<string>('');
    
    // useEffect(() => {
    //     const store = () => {
    //          setToken(encodedToken);
    //          console.log(token);
    //         const rawData = JSON.stringify(token);
    //         localStorage.setItem("token", rawData);
    //         console.log(localStorage.length);
    //         console.log(localStorage);
    //     }
    //      store();
    // }, [token]);

    const storeData= (encodedToken: string) => {
         const store = () => {
           localStorage.setItem("token", encodedToken);
          //  console.log(localStorage.length);
          //  console.log(localStorage);
         };
         store();
    }
     return { storeData}
 
};

export function useGetStorage() {

    const [token, setToken] = useState({});
    const [allToken, setAllToken] = useState([{}]);


    useEffect(() => {
        const getStore = () => {
            const json = localStorage.getItem("token");
            if (typeof json === "string") {
                const savedToken = JSON.parse(json);
                const decodedToken = decodeURIComponent(savedToken);
                console.log(decodedToken);
                setAllToken(savedToken);
                console.log(allToken);
            }
        };
       getStore();

    }, []);

    const getData = () => {
          const getStore = () => {
            const json = localStorage.getItem("token");
            if (typeof json === "string") {
              const savedToken = JSON.parse(json);
              const decodedToken = decodeURIComponent(savedToken);
              console.log(decodedToken);
              setAllToken(savedToken);
              console.log(allToken);
               console.log(localStorage.length);
            }
          };
          getStore();
    }
    console.log(allToken);
    return { getData };
}
