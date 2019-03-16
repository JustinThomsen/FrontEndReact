import React, { Component } from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardImgOverlay} from 'reactstrap'

class DishDetail extends Component{
    constructor(props) {
        super(props);
    }

    renderDish(dish){
        return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
        )
    }

    renderComments(dishComments){
        const comments = dishComments.map((comment) => {
            return(
                <ul key={comment.id} className="list-unstyled">
                    <li>{comment.comment}</li>
                    <li>-- {comment.author}</li>
                </ul>
            )
        });
        if (comments != null) {
            return (
                <React.Fragment>
                    <h4>Comments</h4>
                    <div>{comments}</div>
                </React.Fragment>
            )
        } else {
            return(
                <div></div>
            )
        }

    }
    render() {
        const {dish} = this.props;
        if (dish != null) {
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1 d-inline-block">{this.renderDish(dish)}</div>
                    <div className="col-12 col-md-5 m-1 d-inline-block">{this.renderComments(dish.comments)}</div>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
}

export default DishDetail;
