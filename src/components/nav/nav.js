import './nav.css';
import {Component} from "react"

class Nav extends Component {
    constructor(props){
        super(props);
        this.state={
          data:[
            {title: 'Новости', link:'/news'},
            {title: 'Экономика', link:'/economy'},
            {title: 'Финансы', link:'/finance'},
            {title: 'Бизнес', link:'/business'},
            {title: 'Государство', link:'/state'}
          ]
        }
      }
    //   Click = () => {
    //   }
      render (){
        return (
            <div className="navig">
                <button type="button" className="btn btn-outline-secondary">{this.state.data[0].title}</button>
                <button type="button" className="btn btn-outline-secondary">{this.state.data[1].title}</button>
                <button type="button" className="btn btn-outline-secondary">{this.state.data[2].title}</button>
                <button type="button" className="btn btn-outline-secondary">{this.state.data[3].title}</button>
                <button type="button" className="btn btn-outline-secondary">{this.state.data[4].title}</button>
            </div>
        )
      }
}

export default Nav;