import React from 'react';

function ReviewDetails(props) {
    return (
        <div className="ui segment ReviewDetails">
            <div className="ui header">Review Details</div>
            <p>
                {props.body} <br />
            </p>
            <p>
                <small>rating: {props.rating}</small>
                <small>Reviewer: {props.full_name}</small>
                <small>Create Date: {props.created_at}</small>
            </p>
        </div>
    );
}

export default ReviewDetails;
