import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const {name, id, email} = props.friendData;

    const styles = {
        border: '1px solid lightGray',
        padding: "10px",
        margin: "15px"
    };
    const history = useHistory();

    const handleClick = (friendId) => {
        const url = `/userId/${friendId}`;
        history.push(url);
    }
    return (
        <div style={styles}>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            {/* <Link to={`/userId/${id}`}><button>click</button></Link> */}
            <button onClick={()=>handleClick(id)}>Detail</button>
        </div>
    );
};

export default Friend;