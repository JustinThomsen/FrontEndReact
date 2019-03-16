import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap'
import DishDetail from './DishDetailComponent';


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        }
        console.log('menu component constructor invoked')
    }

    componentDidMount() {
        console.log('menu component componentDidMount invoked')
    }

    onDishSelect(dish){
        this.setState({selectedDish: dish})
    }

    render() {

        const menu = this.props.dishes.map((dish) => {
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={()=>this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                        <CardImgOverlay className='ml-5'>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        });
        console.log('menu component render invoked')
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div>
                    <DishDetail dish={this.state.selectedDish}/>
                </div>
            </div>
        );
    }

}

export default Menu;