import React, { useState } from 'react';
import "./style.css";
import menu from "./menuApi.js";
import MenuCard from "./menuCard.js";
import NavBar from "./navBar.js";


const uniqueList = [...new Set(menu.map((currEle) => {
    return currEle.category
})), "All",
];
console.log(uniqueList)
const Resturant = () => {
    const [menuData, setMenuData] = useState(menu);
    const [menuList, setMenuList] = useState(uniqueList);


    const filterItem = (category) => {
        if( category === "All")
        {
            setMenuData(menu);
            return;
        }
        const updatedList = menu.filter((currEle) => {
            return currEle.category === category;
        });
        setMenuData(updatedList);
    };
    return (

        <>
            <NavBar menuList={menuList} filterItem={filterItem} />
            <MenuCard menuData={menuData} />

        </>
    )
}

export default Resturant;