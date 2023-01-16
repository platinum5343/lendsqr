import React from 'react'
import Union from '../../assets/Union.png'
import pablo from '../../assets/pablo-sign-in 1.jpg'
import css from './Register.module.css';

const Register = () => {
  return (
    <section className={css.container}>
      <div className={css.union}>
        <div>
        <img src={Union} alt="" />
        </div>
        <div>
        <h1>lendsqr</h1>
        </div>
</div>

<div className={css.pablo}>
  <img src={pablo} alt="" />
</div>

    </section>
  )
}

export default Register