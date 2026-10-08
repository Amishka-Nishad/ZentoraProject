import React, { useEffect, useState } from 'react'

const CounterSection = () => {

    // 🔹 reusable counter component (same file ke andar)
    const Counter = ({ end }) => {
        const [count, setCount] = useState(0)

        useEffect(() => {
            let start = 0
            const duration = 2000
            const increment = end / (duration / 50)

            const timer = setInterval(() => {
                start += increment
                if (start >= end) {
                    setCount(end)
                    clearInterval(timer)
                } else {
                    setCount(Math.floor(start))
                }
            }, 50)

            return () => clearInterval(timer)
        }, [end])

        return <span>{count}</span>
    }

    return (
        <section className="counter-section mt-5">
            <div className="container">
                <div className="stats-wrap">

                    <div className="stats-card">
                        <div className="row g-0">

                            <div className="col-6 stats-cell cell-tl">
                                <h3 className="stat-teal">
                                    <Counter end={10} />K
                                </h3>
                                <p>FREELANCERS REGISTERED</p>
                            </div>

                            <div className="col-6 stats-cell cell-tr">
                                <h3 className="stat-pink">
                                    <Counter end={32400} />
                                </h3>
                                <p>PROJECTS COMPLETED</p>
                            </div>

                            <div className="col-6 stats-cell cell-bl">
                                <h3 className="stat-orange">
                                    <Counter end={354} />+
                                </h3>
                                <p>TOP FREELANCERS</p>
                            </div>

                            <div className="col-6 stats-cell cell-br">
                                <h3 className="stat-purple">
                                    <Counter end={100} />%
                                </h3>
                                <p>SATISFACTION RATE</p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default CounterSection

