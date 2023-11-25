import React from "react";
import img from "../images/user.png";
import { Link } from "react-router-dom";
const EmployeeDashboard = () => {
  return (
    <>
      <div className=" d-flex" style={{cursor:"pointer"}}>
        <div className="min-vh-100 w-25 border">
          <div className="m-2 p-2">Hello Rushi</div>
          <div className="m-2">
            <input
              type="text"
              className="form-control"
              placeholder="🔍 Search group ..."
            />
          </div>
          <div >
            <div className="card  text-wrap  m-2">
              <div className=" d-flex flex-wrap  align-items-center">
                <img src={img} style={{height:"50px"}} className=" m-1 rounded-5" alt="no" />

                <div>Developers</div>
              </div>
            </div>

            <div className="card m-2">
              <div className=" d-flex flex-wrap align-items-center">
              <img src={img} style={{height:"50px"}} className=" m-1 rounded-5" alt="no" />

                <div>Analysts</div>
              </div>
            </div>
          </div>
        </div>
        <div className="min-vh-100 w-75 border">
          <div className="p-3 bg-success ">
            <div className="dropdown ">
              <span
                className="text-dark float-end text-center"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <svg
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                  preserveAspectRatio="xMidYMid meet"
                  className=""
                  version="1.1"
                  x="0px"
                  y="0px"
                  enable-background="new 0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"
                  ></path>
                </svg>
              </span>

              <ul className="dropdown-menu my-2">
                <li>
                  <Link className="dropdown-item" to={`/edashboard`}>
                    Group info
                  </Link>
                </li>

                <li>
                <Link className="dropdown-item" to={`/edashboard`}>
                  Exit group
                </Link>
              </li>
              </ul>
            </div>
            
            <div className="text-light"><img src={img} style={{height:"30px"}} className=" mx-2 rounded-5" alt="no" />
             Developers</div>
          </div>
          <div className="h-75 my-4 d-flex flex-column">
          <div className="m-2 bg-danger rounded p-1 w-25">
          Hello
          </div>
          <div style={{float:"right"}} className="m-2 bg-success  rounded p-1 w-25">
          Hello
          </div>
          <div className="m-2 bg-danger rounded p-1 w-25">
          Hello
          </div>
          </div>
          <div className="d-flex my-4 border">
          <div className=" m-3">➕</div>
            <input type="text" className="form-control m-2" id="" placeholder="Type a message"/>
            <button className="btn fw-bold m-2 btn-success rounded-5"> {`>`} </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeDashboard;
