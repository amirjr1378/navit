import React from 'react';
import {Input} from '../../components/Form';
import {Button} from '../../components/Button';
import {useForm} from '../../hooks';
import {ajax} from '../../helpers';

const initialValue = {
  password: '',
  repeatPassword:''
}
const ChangePass = function({currentValue}) {

  const sendForm = async function() {
      await ajax.mock('posts', {password:form.password, ...currentValue}, {'content-type': 'json'})
  }
  const validateCallback = function(values) {
    const e = {}
    if(values.password.trim() === "") e.password = 'enter password code'
    if(values.repeatPassword.trim() === "") e.repeatPassword = 'enter repeatPassword code'
    if(values.password !== values.repeatPassword) e.repeatPassword = e.password = 'passwords doesnt match'
    return e;
  }
  const {form, submitting, handleSubmit, bind} = useForm(sendForm, validateCallback, initialValue);
  return (
    <form className="auth__card" onSubmit={handleSubmit}>
      <img
        className="auth__icon"
        src="/static/img/key.png"
        srcSet="/static/img/key.png,
        /static/img/key@2x.png 2x,
        /static/img/key@3x.png 3x"
        alt="key password"
        />
      <Input
        {...bind("password")}
        autoComplete="new-password"
        type="password"
        label="کلمه عبور جدید"
        />
      <Input
        {...bind("repeatPassword")}
        autoComplete="new-password"
        type="password"
        label="تکرار کلمه عبور جدید"
        />
      <Button color="warning" type="submit" loading={submitting} style={{marginTop: 30}}>ورود به سامانه ناویا</Button>
    </form>
  )
}

export default ChangePass;
