import React from "react";
import UserClass from "./UserClass";
// const About = () => {
//   return (
//     <div>
//       <h1>this is ramu Ghanta</h1>
//       <h3>this is about us page</h3>
//       <UserClass name={'Ramu Ghanta'} Location={'Hyderbad'}/>
//     </div>
//   );
// };
// export default About;

class About extends React.Component{
  constructor(props){
    super(props);
    console.log('parent class constructor');
  }
  componentDidMount(){
    console.log('parent mount');
  }
  render()
  {
    console.log('parent class render');
    return(
      <div>
          <h1>this is ramu Ghanta</h1>
           <h3>this is about us page</h3>
          <UserClass name={'Ramu Ghanta'} Location={'Hyderbad'}/>
      </div>
    )
  }
}
export default About