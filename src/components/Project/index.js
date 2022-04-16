import React from "react";

function Project ({props}) {
    console.log(props);
    return(
        <div>
            <img alt={props.name}src={require(`../../assets/images/${props.name}.PNG`)}></img>
            <div>
                <a href={props.link}>{props.name}</a>
                <a href={props.repo}>github</a>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

export default Project;