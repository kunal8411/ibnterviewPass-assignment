import React from 'react'
import './App.css';
import {CardList} from './components/card-list/card-list.component'
class App extends React.Component{
  constructor(){
    super();
    this.state={
      cities:[
        {
          name:"Nashik",
          image:"https://timesofindia.indiatimes.com/thumb/msid-68284080,imgsize-887457,width-400,resizemode-4/68284080.jpg",

        },
        {
          name:"Pune",
          image:"https://i.ytimg.com/vi/pL6WxKefibM/maxresdefault.jpg"
        },
        {
          name:"Mumbai",
          image:"https://upload.wikimedia.org/wikipedia/commons/b/bc/Mumbai_skyline_BWSL.jpg"
        },
        {
          name:"New York",
          image:"https://cdn.getyourguide.com/img/location/5c04f6f20650d.jpeg/148.jpg"
        },
        {
          name:"Dubai",
          image:"https://imagevars.gulfnews.com/2019/09/29/Dubai-skyline_16d7de0fdce_medium.jpg"
        },
        {
          name:"Australia",
          image:"https://image.shutterstock.com/image-photo/major-architecture-landmarks-city-sydney-260nw-1025960785.jpg"
        },
        {
          name:"Chicago",
          image:"https://images.unsplash.com/photo-1524168272322-bf73616d9cb5?ixlib=rb-1.2.1&w=1000&q=80"
        },
        {
          name:"greece",
          image:"https://s27363.pcdn.co/wp-content/uploads/2019/04/Greece-Header-Photo.jpg.optimal.jpg"
        },
        {
          name:"Netherlands",
          image:"https://s30876.pcdn.co/wp-content/uploads/Netherlands3-1170x630.jpg"
        },
        {
          name:"Kerala",
          image:"https://english.mathrubhumi.com/polopoly_fs/1.1333648.1473071288!/image/image.jpg_gen/derivatives/landscape_894_577/image.jpg"
        },
        {
          name:"Ladakh",
          image:"https://static.businessworld.in/article/article_extra_large_image/1500451427_lEfBpj_ladakh-shutterstock.jpg"
        },
        {
          name:"Manali",
          image:"https://cdn1.tripoto.com/media/filter/nxxl/img/2/Image/1555426507_1552566979_manali_ppc.jpg"
        },
        {
          name:"Rajasthan",
          image:"https://static.toiimg.com/thumb/76395036.cms?resizemode=75&width=1200&height=900"
        },
        {
          name:"Assam",
          image:"https://bsmedia.business-standard.com/_media/bs/img/article/2018-06/11/full/1528736202-5717.jpg"
        }
        
      ]
    }
  }
  render(){
    
    return (
      <div className="App">
        <h1>
          list of cities that they have visited
        </h1>
        <CardList cities={this.state.cities} />

        
      </div>
    );
  }
  
}

export default App;
