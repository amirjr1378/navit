import React from 'react';
import {Input} from '../../components/Form';
import {Button} from '../../components/Button';
import EditNumber from '../../components/EditNumber';
import Timer from '../../components/Timer';
import {Link} from 'react-router-dom';
import {useForm,useTimer} from '../../hooks';
import {ajax} from '../../helpers';
import {withRouter} from 'react-router-dom';


const EnterVerifyCode = function({increase, currentValue}) {
  const initialValue = React.useMemo(() => ({
    phone: currentValue.phone,
    verifyCode: ''
  }), []);

  const {timer} = useTimer(120);


  const increaseStep = async function() {
      await ajax.mock('posts', {phone: form.phone}, {'content-type': 'json'})
      increase(form);
  }
  const validateCallback = function(values) {
    const e = {}
    if(values.verifyCode.trim() === "") e.verifyCode = 'enter verify code'
    return e;
  }
  const {form, submitting, handleSubmit, bind} = useForm(increaseStep, validateCallback, initialValue);
  React.useEffect(() => {
    // we should request for send message to phone number
    if(!form.phone) return;
    ajax.mock('posts', {phone: form.phone}, {'content-type': 'json'})
  }, [form.phone])


  return (
    <form className="auth__card" onSubmit={handleSubmit}>
      <img
        className="auth__icon"
        src="/static/img/register-code.png"
        srcSet="/static/img/register-code.png,
        /static/img/register-code@2x.png 2x,
        /static/img/register-code@3x.png 3x"
        alt="register-code"
        />
      <EditNumber phone={form.phone} label='ارسال کد تایید به شماره' style={{marginBottom: 20}}/>
      <Input
        {...bind("verifyCode")}
        label="کد تاییدیه ارسال را وارد کنید"
        />
      <Button type="submit" loading={submitting} color="primary" style={{marginTop: 30}}>تکمیل ثبت نام در ناویت</Button>

      <span className="display--flex justify-content--center align-items--center" style={{marginTop: 30, flexWrap: 'nowrap'}}>
        <strong>ارسال مجدد کد تاییدیه بعد از</strong>
        <Timer timer={timer} />
      </span>

    </form>
  )
}
export default EnterVerifyCode;
