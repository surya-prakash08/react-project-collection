import { useState } from "react";
import MenuList from "./menu-list";




export default function MenuItem({item}){


    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

    return( <li>
        <div>
        <p>{item.label}</p>
        {
            item && item.childern && item.childern.length ? <span>+</span> : null
        }
        </div>
        {
            item && item.childern && item.childern.length >0 ?
            <MenuItem list={item.childern}/>
            :null
        }

    </li>
    )
}