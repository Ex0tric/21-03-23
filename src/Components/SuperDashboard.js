import { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../Context/AuthContext'
import './Header.css'

function SuperDashboard() {



  let {access} = useContext(AuthContext)
  let {data, setData} = useState('')

  console.log(`Bearer ${access}`)

  useEffect(()=>{ 
    console.log("req called")
    fetch('http://192.168.0.169:8000/api/superadmin/',{
    headers:{
      "Content-type": "application/json",
      Authorization: `Bearer ${access}`,
    }})
    .then((response)=>{response.json()})
    .then((data)=>{console.log(data)})
    .catch((err)=>console.log(err))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

    return (
      <>
      <h1>Hello</h1>
        {/* <div className="content-wrapper">
          <div className="content-header">
              <div className="card">
                <div className="card-header bg-blue-disabled">
                  <h1 className="card-title">Revenue</h1>
                  <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="collapse">
                      <i className="fas fa-minus"></i>
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-3 col-12">
                      <div className="small-box bg-info">
                        <div className="inner">
                          <h3>{{ no_of_clients }}</h3>
                          <h5>Number of Clients</h5>
                        </div>
                        <div className="icon">
                          <i className="fas fa-file-invoice"></i>
                        </div>
                        <a href="{% url 'all_clients' %}" className="small-box-footer">More info <i
                            className="fas fa-arrow-circle-right"></i></a>
                      </div>
                    </div>
                    <div className="col-lg-3 col-12">
                      <div className="small-box bg-success">
                        <div className="inner">
                          <h3>{{ total_no_of_files }}</h3>
                          <h5>No of Files Generated</h5>
                        </div>
                        <div className="icon">
                          <i className="fas fa-file-invoice"></i>
                        </div>
                        <a href="{% url 'files_created' %}" className="small-box-footer">More info <i
                            className="fas fa-arrow-circle-right"></i></a>
                      </div>
                    </div>
                    <div className="col-lg-3 col-12">
                      <div className="small-box bg-danger">
                        <div className="inner">
                          <h3>{{ total_no_of_users }}</h3>
                          <h5>No of Users</h5>
                        </div>

                        <div className="icon">
                          <i className="fas fa-file-invoice"></i>
                        </div>
                        <a href="{% url 'show_users' %}" className="small-box-footer">More info <i
                            className="fas fa-arrow-circle-right"></i></a>
                      </div>
                    </div>
                    <div className="col-lg-3 col-12">
                      <div className="small-box bg-primary">
                        <div className="inner">
                          <h3>{{ invoices_total }}</h3>
                          <h5>Invoicing Total</h5>
                        </div>
                        <div className="icon">
                          <i className="fas fa-file-invoice"></i>
                        </div>
                        <a href="/" className="small-box-footer">More info <i
                            className="fas fa-arrow-circle-right"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div> */}
      </>
    )

}

export default SuperDashboard;
