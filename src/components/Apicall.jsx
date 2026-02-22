import React, { useEffect, useState } from "react";
import Card from "./Cards"; 

const Apicall = () => {
    const [showdata, setshowdata] = useState([]);

    useEffect(() => {
        changedata();
    }, []); 

    const changedata = async () => {
        try {
            let apidata = await fetch('https://jsonfakery.com/movies/paginated');
            let data = await apidata.json();
            setshowdata(data.data.slice(0,8)); 
        } catch (error) {
            console.error("Fetch error:", error);
        }
    };

    return (
        <div>
            <div className="prod">
                {showdata && showdata.map((pro) => (
                     <div key={pro.id}><Card ans={pro}/></div>
                ))}
            </div>
        </div>
    );
}
export default Apicall;