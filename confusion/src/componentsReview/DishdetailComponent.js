import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class Dishdetail extends Component {

    renderComments(comments) {

        if(comments != null) {
            const listComments = comments.map((comment) => {
                return (
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p> -- {comment.author}, {comment.date}</p>
                    </li>
                );
            });

            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {listComments}
                    </ul>
                </div>
            );

        } else {
            return (
                <div></div>
            );
        }
    }


    render() {

        if (this.props.dish != null) {
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                            <CardBody>
                              <CardTitle><strong>{this.props.dish.name}</strong></CardTitle>
                              <CardText>{this.props.dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    {this.renderComments(this.props.dish.comments)}
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }
}

export default Dishdetail;
