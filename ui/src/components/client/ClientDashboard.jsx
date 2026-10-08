import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBriefcase, FaComments, FaHandshake } from 'react-icons/fa'

const ClientDashboard = () => {
  const [data, setData] = useState('')
    useEffect(() => {
      fetchData()
    }, [])
    const fetchData = async () => {
      const res = await axios.get('http://localhost:9000/client-stats')
      setData(res?.data?.result)
  
    }
  return (
    <div className="container py-5">
        <div className="row">
          <div className="col-12">
            <span className="dash-eyebrow">Zentora for Clients</span>
            <h2 className="dash-heading">Client Dashboard</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="dash-card">
              <div className="row g-3 mb-4">
                <div className="col-12 col-sm-4">
                  <div className="kpi-card kpi-teal">
                    <div className="row align-items-center">
                      <div className="col-3">
                        <span className="kpi-icon"><FaBriefcase /></span>
                      </div>
                      <div className="col-9">
                        <h4 className="kpi-value">{data?.totalProjects}</h4>
                        <p className="kpi-label">Posted Projects</p>
                        <p className="kpi-caption">All your job listings</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-4">
                  <div className="kpi-card kpi-pink">
                    <div className="row align-items-center">
                      <div className="col-3">
                        <span className="kpi-icon"><FaComments /></span>
                      </div>
                      <div className="col-9">
                        <h4 className="kpi-value">{data?.totalBids}</h4>
                        <p className="kpi-label">Bids Received</p>
                        <p className="kpi-caption">6 pending review</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-4">
                  <div className="kpi-card kpi-green">
                    <div className="row align-items-center">
                      <div className="col-3">
                        <span className="kpi-icon"><FaHandshake /></span>
                      </div>
                      <div className="col-9">
                        <h4 className="kpi-value">{data?.totalDeals}</h4>
                        <p className="kpi-label">Deals Finalized</p>
                        <p className="kpi-caption">Freelancers hired</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <h4>Active Hirings</h4>
                  <p className="text-secondary mb-3">
                    Click any project in <strong>Manage Projects</strong> to view full details and select a freelancer bid to finalize the deal.
                  </p>
                  <Link to="/client-post-projects" className="btn postprojectbtn">Post a New Project</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ClientDashboard