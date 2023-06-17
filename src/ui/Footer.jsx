import React from "react";


const Footer = () => {
    return (
        <div className="w-full h-[10vw] bg-teal-300 flex justify-between px-[2vw] py-[1vw]">
            <div>
                <p className="text-[2.5vw]">АО «КППД»</p>
                <p>Строительная компания</p>
            </div>
            <div className="w-[30vw] text-left text-[1vw] font-semibold">
                <p className="mb-[0.6vw]">Адрес: г.Ростов-на-Дону ул.Большая Садовая 353/12 </p>
                <p className="mb-[0.6vw]">Телефон: +7 999 000 11 22</p>
                <p className="mb-[0.6vw]">Email: aokppdCompany@gmail.com</p>
            </div>

        </div>
    )
}
export default Footer