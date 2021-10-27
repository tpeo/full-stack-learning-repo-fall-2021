import "./style.css";
import { useEffect, useState } from "react";

export default function ListItem(props) {
    const list = props.tasklist
    const maplist = list.map((listItems) => {
        return (<li key={listItems.toString()}>
            {listItems}
        </li>
        );
    });
    return (
        <ul>{maplist}</ul>
    );
}
