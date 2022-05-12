import React, {Component, ReactNode} from 'react'
import Error from '../pages/Error'
interface Props{
     children: ReactNode;
}
interface State {
     hasError: boolean;
}
export class ErrorBoundary extends Component<Props, State>{
     constructor(props: Props | Readonly<Props>){
          super(props);
          this.state = {
               hasError: false
          };
     }
     static getDerivedStateFromError(){
          console.log('get derived error fired');
          return {
               hasError: true
          }
     }
     componentDidCatch(error:any ,info:any){
          console.log('component did catch fired')
     }

     render(){
          if(this.state.hasError){
               return <Error/>
          }
          return this.props.children
     }
}
// export class ErrorBoundary extends Component<{children:JSX.Element}, { hasError: boolean }> {
//      constructor(props: { children: JSX.Element; } | Readonly<{ children: JSX.Element; }>) {
//        super(props)
     
//        this.state = {
//           hasError: false
//        };
       
//      }
//      static getDerivedStateFromError(error: any) {
//           return { hasError: true };
//           console.log('error from class component'+error)
//      }
//      componentDidCatch(error: any){
          
//      }
    
//   render() {
//      if(this.state.hasError == true){
//           return <h1>Something went wrong</h1>
//      }else{
//          return this.props.children;
//      }
//   }
// }

// export default ErrorBoundary;