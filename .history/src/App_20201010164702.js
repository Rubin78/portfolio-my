import { wait } from "@testing-library/react";
import React from "react";

export default class FetchRandomUser extends React.Component {

  // async componentDidMount() {
  //   const url = "https://api.randomuser.me/";
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   this.setState({ person: data.results[0], loading: false });
  // }

  state={
    loading:true,
    person:null,
  }


  
 async componentDidMount() {

  const url = "https://api.randomuser.me/";
  const response = await fetch(url);
  const data = await response.json();
  this.setState({person:data.results[0],loading:false})



 }



  render() {
    // if (this.state.loading) {
    //   return <div>loading...</div>;
    // }

    // if (!this.state.person) {
    //   return <div>didn't get a person</div>;
    // }



if (this.state.loading) {
return <div>loading ...</div>
}


if (!this.state.person) {
  return <div>didnt get anything</div>
}

  
    return (
      

<div>

<div>{this.state.person.name.title}</div>
<div>{this.state.person.name.first}</div>
<div>{this.state.person.name.last}</div>
<div>{this.state.person.name.info}</div>

<img src={this.state.person.picture.large} />


</div>
    );
  }
}