import React from 'react';
import {Input} from '../../components/Form';
import {Button} from '../../components/Button';
import {Link} from 'react-router-dom';
import {useForm} from '../../hooks';
import {ajax} from '../../helpers';


const initialValue = {
  password: ''
}
export default function({currentValue}) {

  const send = async function({setSubmitting}) {
    await ajax.mock('/', {phone:currentValue.phone});
    setSubmitting(false);
    //redirect to panel
  }

  const validateCallback = function(values) {
    const error = {}
    if(values.password.trim() === '') error.password = 'enter password'
    return error;
  }
  const {form, bind, submitting, handleSubmit} = useForm(send, validateCallback,initialValue)

  return (
    <form className="auth__card" onSubmit={handleSubmit}>
      <img
        className="auth__icon"
        src="/static/img/phone.png"
        srcSet="/static/img/pass.png,
        /static/img/pass@2x.png 2x,
        /static/img/pass@3x.png 3x"
        alt="pass"
        />
      <Input
        {...bind("password")}
        type="password"
        label="کلمه عبور شما"
        />
      <Button type="submit" loading={submitting} color="warning" style={{marginTop: 30}}>بررسی شماره تلفن همراه شما</Button>
      <div style={{marginTop: 30}}>
        <Link style={{fontWeight: 'bold',fontStyle:'normal', letterSpacing:-0.33}} className="text-important" to={"/auth/reset-password/" + currentValue.phone}>آیا کلمه عبور خود را فراموش کردید؟<span className="text-warning">کلیک کنید</span></Link>
      </div>
    </form>
  )
}
