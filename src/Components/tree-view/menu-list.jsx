// import { Container } from "postcss";
import MenuItem from "./menu-item";

export default function MenuList({list=[]}){
return (<ul className="menu-list-Container">
{
    list && list.length ? 
    list.map(listItem => <MenuItem item={listItem}/>) : null
}

</ul>
)
}