import {Component} from 'react'
import {Row} from 'react-bootstrap'
class Search extends Component{
    state = {
        movies:[]
    }
    render(){
        return(
           
           <Row>
               
            <h1>Search Functionality</h1>
               
           </Row>   
           
        )
    }


    
    
    componentDidMount = async ()=>{
        const response = await fetch('http://www.omdbapi.com/?apikey=131a9fa6&s='+this.id)
        const data = await response.json() 
        console.log(data)
        
        this.setState({
            movies:data
        })
        
    }
    
}
export default Search