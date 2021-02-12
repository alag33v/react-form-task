import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { HelpForm, AssistanceType, PaymentMethod } from './components';
import GlobalStyle from './styles/GlobalStyle';
import { StyledApp } from './styles/StyledApp';

const App = () => {
  const [person, setPerson] = useState(0);

  const submit = (values, { setSubmitting }) => {
    console.log(values);
    setTimeout(() => {
      alert(
        'Эти данные отправляются на сервер:' +
          '\n' +
          JSON.stringify(values, null, 2)
      );
      setSubmitting(false);
    }, 250);
  };

  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <Formik
          initialValues={{
            person: person === 0 ? 'Фіз.особа' : 'Юр. особа',
            name: '',
            secondName: '',
            company: '',
            email: '',
            tel: '',
            country: '',
            city: '',
            state: '',
            address: '',
            zipCode: '',
            oneFour: '',
            fiveEight: '',
            nineTwelve: '',
            thirteenSixteen: '',
            cardMonth: '',
            cardCVV: ''
          }}
          onSubmit={submit}
        >
          {({ isSubmitting }) => {
            return (
              <Form>
                <HelpForm person={person} setPerson={setPerson} />
                <div className='form-wrapper'>
                  <div className='form-wrapper__left'>
                    <div className='name-wrapper'>
                      <label>
                        <span>Ім'я</span>
                        <Field type='text' name='name' required />
                      </label>
                      <label>
                        <span>Фамілія</span>
                        <Field type='text' name='secondName' required />
                      </label>
                    </div>
                    <label>
                      <span>Назва компанії, організації</span>
                      <Field type='text' name='company' required />
                    </label>
                    <label>
                      <span>Email-адрес</span>
                      <Field type='email' name='email' required />
                    </label>
                    <label>
                      <span>Номер телефону</span>
                      <Field type='tel' name='tel' required />
                    </label>
                  </div>
                  <div className='form-wrapper__right'>
                    <label>
                      <span>Країна</span>
                      <Field type='text' name='country' required />
                    </label>
                    <div className='city-wrapper'>
                      <label>
                        <span>Місто</span>
                        <Field type='text' name='city' required />
                      </label>
                      <label>
                        <span>Штат, район</span>
                        <Field type='text' name='state' required />
                      </label>
                    </div>
                    <label>
                      <span>Адреса</span>
                      <Field type='text' name='address' />
                    </label>
                    <label>
                      <span>Поштовий індекс</span>
                      <Field type='text' name='zipCode' />
                    </label>
                  </div>
                </div>
                <AssistanceType />
                <div className='payment-wrapper'>
                  <PaymentMethod />
                  <div className='card'>
                    <p>Введіть наступні данні</p>
                    <div className='bank-card'>
                      <span className='bank-card__number'>
                        Номер карты
                      </span>
                      <div className='full-number'>
                        <Field
                          type='tel'
                          name='oneFour'
                          minLength='4'
                          maxLength='4'
                          required
                        />
                        <Field
                          type='tel'
                          name='fiveEight'
                          minLength='4'
                          maxLength='4'
                          required
                        />
                        <Field
                          type='tel'
                          name='nineTwelve'
                          minLength='4'
                          maxLength='4'
                          required
                        />
                        <Field
                          type='tel'
                          name='thirteenSixteen'
                          minLength='4'
                          maxLength='4'
                          required
                        />
                      </div>
                      <div className='bank-card__wrapper'>
                        <div className='bank-card__month'>
                          <span>Термін дії</span>
                          <Field type='tel' name='cardMonth' required />
                        </div>
                        <div className='bank-card__password'>
                          <span>CVC/CVV</span>
                          <Field
                            type='password'
                            name='cardCVV'
                            minLength='3'
                            maxLength='3'
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {person === 0 ? (
                  <button
                    className='btn-submit'
                    type='submit'
                    disabled={isSubmitting}
                  >
                    Допомогти
                  </button>
                ) : (
                  <button
                    className='btn-submit'
                    type='button'
                    onClick={() => alert('Ця форма тільки для фіз. особи')}
                  >
                    Допомогти
                  </button>
                )}
              </Form>
            );
          }}
        </Formik>
      </StyledApp>
    </>
  );
};

export default App;
