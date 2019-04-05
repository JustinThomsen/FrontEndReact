import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, BreadcrumbItem, Breadcrumb} from 'reactstrap'
import {Link} from "react-router-dom";


function RenderDish({dish}){
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

    function RenderComments({comments}){
        console.log(comments);
        const comment = comments.map((comment) => {
            return(
                    <ul key={comment.id} className="list-unstyled">
                        <li>{comment.comment}</li>
                        <li>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                    </ul>
            );
        });

        if (comment != null) {
            return (
                <React.Fragment>
                    <h4>Comments</h4>
                    <div>{comment}</div>
                </React.Fragment>
            )
        } else {
            return(
                <div></div>
            )
        }
    }

    const DishDetail = (props) => {
        if (props.dish != null) {
            console.log(props.comments);
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1 d-inline-block"><RenderDish dish={props.dish}/></div>
                        <div className="col-12 col-md-5 m-1 d-inline-block"><RenderComments comments = {props.comments}/></div>
                    </div>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }


export default DishDetail;
