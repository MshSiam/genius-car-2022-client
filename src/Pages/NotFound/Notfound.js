import React from "react"
import { Link } from "react-router-dom"
import notFound from "../../images/167963-OVWIS6-124.jpg"

const Notfound = () => {
  return (
    <div>
      <h1 className="mt-4 fw-bold text-danger">Page Not Found</h1>
      <img className="img-fluid" src={notFound} alt="" />
      <Link to="/">
        <button className="btn-info my-4">Go Back</button>
      </Link>
    </div>
  )
}

export default Notfound
