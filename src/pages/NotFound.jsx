import React from "react";
import { Link } from "react-router-dom";


const NotFound = () => {
    return (
        <div className="pt-[20vw] pb-[30vw]">
            <h1 className="text-[4vw] font bold">404 Страница не найдена</h1>
<Link to='/'><div className="underline text-blue-800 text-[2vw] mt-[2vw]">Вернуться на главную</div></Link>
        </div>
    )
}
export default NotFound