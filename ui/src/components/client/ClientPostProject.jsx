import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
const schema = yup
  .object()
  .shape({
    title: yup.string().required(),
    budget: yup.string().required(),
    duration: yup.string().required(),
    desc: yup.string().required(),
  })
const ClientPostProject = () => {
  const navigate=useNavigate()
  const { register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const handleAdd = async (data) => {
    const info = JSON.parse(localStorage.getItem('info'))
    const clientId = info?._id;
    const finalData = { ...data, clientId }
    const res = await axios.post(' http://localhost:9000/client-post-project', finalData)
    if (res?.data?.success == true) {
      Swal.fire({
        title: "Post Project",
        text: res?.data?.message,
        icon: "success"
      })
      reset();
      navigate('/client-manage-project')
    } else {
      Swal.fire({
        title: "Post Project",
        text: res?.data?.message,
        icon: "error"
      })
    }
  }
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <span className="dash-eyebrow">Zentora for Clients</span>
          <h2 className="dash-heading">Post a New Freelance Project</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="dash-card">
            <div className="row mb-3">
              <div className="col-12">
                <h4>Post a New Freelance Project</h4>
              </div>
            </div>

            <form onSubmit={handleSubmit(handleAdd)}>
              <div className="row g-3">
                <div className="col-12">
                  <label className="form-label">Project Title</label>
                  <input {...register('title')} type="text" className="form-control" placeholder="e.g. Develop React E-commerce Web App" />
                  {errors.title && <p className="text-danger">{errors.title.message}</p>}

                </div>
                <div className="col-12 col-sm-6">
                  <label className="form-label">Budget (₹)</label>
                  <input {...register('budget')} type="number" className="form-control" placeholder="e.g. 50000" />
                  {errors.budget && <p className="text-danger">{errors.budget.message}</p>}

                </div>
                <div className="col-12 col-sm-6">
                  <label className="form-label">Timeline / Deadline</label>
                  <input {...register('duration')} type="text" className="form-control" placeholder="e.g. 3 weeks" />
                  {errors.duration && <p className="text-danger">{errors.duration.message}</p>}

                </div>
                <div className="col-12">
                  <label className="form-label">Description</label>
                  <textarea
                    {...register('desc')}
                    className="form-control"
                    rows="6"
                    placeholder="Describe the project scope, deliverables, skills needed..."
                  />
                  {errors.desc && <p className="text-danger">{errors.desc.message}</p>}

                </div>
                <div className="col-12">
                  <button type="submit" className="btn  postprojectbtn">Publish Project</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClientPostProject