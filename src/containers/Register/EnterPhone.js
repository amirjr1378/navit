import React from 'react';
import {Input} from '../../components/Form';
import {Button} from '../../components/Button';
import {useForm} from '../../hooks';

const initialValue = {
  phone: ''
}

const EnterPhone = function({increase}) {
  const increaseStep = async function() {
    increase(form);
   }

  const validateCallback = function(values) {
    const error = {}
    if(values.phone.trim() === '') error.phone = 'enter phone'
    return error;
  }

  const {form, submitting, handleSubmit, bind} = useForm(increaseStep, validateCallback, initialValue);
  return (
    <form className="auth__card" onSubmit={handleSubmit}>
      <img
        className="auth__icon"
        src="/static/img/register-phone.png"
        srcSet="/static/img/register-phone.png,
        /static/img/register-phone@2x.png 2x,
        /static/img/register-phone@3x.png 3x"
        alt="phone"
        />
      <Input
        {...bind("phone")}
        label="شماره همراه خود را وارد نمایید"
        />
      <Button color="primary" loading={submitting} style={{marginTop: 30}} type="submit">بررسی شماره تلفن همراه شما</Button>
    </form>
  )
}

export default EnterPhone;
