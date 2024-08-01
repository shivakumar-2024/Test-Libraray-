import React, { useState, useEffect } from "react";
import { mobileApi } from "../../Service/MobileService/MobileService";

function MobileDataComponent() {
  const [mobileData, setMobileData] = useState([]);
  const Add=()=>{

    const add1={
      id:1,index:"shiva",
    }
    setMobileData(add1);


  };


  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await mobileApi();
        if (response.success) {
          setMobileData(response.body); // Update state with the fetched data
        } else {
          console.error("Error fetching mobile data:", response.message);
        }
      } catch (error) {
        console.error("Error fetching mobile data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <div className="card">
      <h2>Mobile Data</h2>
      <table className="table table-hover table-striped table-bordered">
        <thead>
          <tr>
            <th>Sr.no</th>
            <th>Name</th>
            <th>Color</th>
            <th>Capacity</th>
            <th>Price</th>
            <th>Generation</th>
            <th>CPU model</th>
            <th>Hard disk size</th>
            <th>Screen size</th>
            <th>Description</th>
            <th>Strap Colour</th>
          </tr>
        </thead>
        <tbody>
          {mobileData.map((item, index) => (
            <tr key={item.id}>
              {item.data ? (
                <>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.data.color ? item.data.color : "N/A"}</td>
                  <td>{item.data.capacity ? item.data.capacity : "N/A"}</td>
                  <td>{item.data.price ? item.data.price : "N/A"}</td>
                  <td>{item.data.generation ? item.data.generation : "N/A"}</td>
                  <td>{item.data["CPU model"] ? item.data["CPU model"] : "N/A"}</td>
                  <td>{item.data["Hard disk size"] ? item.data["Hard disk size"] : "N/A"}</td>
                  <td>{item.data["Screen size"] ? item.data["Screen size"] : "N/A"}</td>
                  <td>{item.data.Description ? item.data.Description : "N/A"}</td>
                  <td>{item.data["Strap Colour"] ? item.data["Strap Colour"] : "N/A"}</td>
                </>
              ) : (
                <>
                  <td> {index + 1}</td>
                  <td> {item.name}</td>
                  <td colSpan={9}> No Data Found</td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MobileDataComponent;
