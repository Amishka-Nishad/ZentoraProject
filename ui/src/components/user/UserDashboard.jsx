import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaWallet, FaGavel, FaCoins } from 'react-icons/fa'

const UserDashboard = () => {
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
            <span className="dash-eyebrow">Zentora for Freelancers</span>
            <h2 className="dash-heading">Talent Dashboard</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="dash-card">
              <div className="row g-3 mb-4">
                <div className="col-12 col-sm-4">
                  <div className="kpi-card kpi-green">
                    <div className="row align-items-center">
                      <div className="col-3">
                        <span className="kpi-icon"><FaWallet /></span>
                      </div>
                      <div className="col-9">
                        <h4 className="kpi-value">{data?.Earning}</h4>
                        <p className="kpi-label">Total Earnings</p>
                        <p className="kpi-caption">3 won project(s)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-4">
                  <div className="kpi-card kpi-sky">
                    <div className="row align-items-center">
                      <div className="col-3">
                        <span className="kpi-icon"><FaGavel /></span>
                      </div>
                      <div className="col-9">
                        <h4 className="kpi-value">{data?.totalBids}</h4>
                        <p className="kpi-label">Bids Placed</p>
                        <p className="kpi-caption">4 awaiting response</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-4">
                  <div className="kpi-card kpi-purple">
                    <div className="row align-items-center">
                      <div className="col-3">
                        <span className="kpi-icon"><FaCoins /></span>
                      </div>
                      <div className="col-9">
                        <h4 className="kpi-value">{data?.credits}</h4>
                        <p className="kpi-label">Credits Left</p>
                        <p className="kpi-caption">of 50 on Pro plan</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-12">
                  <div className="dash-plan-banner mb-0">
                    <strong>Current Plan:</strong> Pro · 42 credits left · <strong>1 credit = 1 bid</strong>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <h4>Welcome Back, Alex Rivera!</h4>
                  <p className="text-secondary mb-3">
                    Your Zentora dashboard is ready. Use credits to place bids — <strong>1 credit = 1 bid</strong>. Upgrade your plan when you need more credits.
                  </p>
                  <Link to="/user-project" className="btn btn-orange me-2">Browse Projects</Link>
                  <Link to="/user-plans" className="btn btn-outline-orange">View Plans</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default UserDashboard