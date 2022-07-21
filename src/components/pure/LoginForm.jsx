import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import *as Yup from "yup"

// import { NavLink } from "react-router-dom"

const loginSchema = Yup.object().shape(

    {
        email: Yup.string()
            .email('invalid email format')
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required')
    }
)

const LoginForm = ({ loged, fetching, onLogin }) => {

    const inicialCredential = {
        email: '',
        password: ''
    }


    return (
        <Formik

            //***Data that the form will take */
            initialValues={inicialCredential}
            //****Yup validation Schema ****
            validationSchema={loginSchema}
            /* On submit event */
            onSubmit={async (values) => {
                onLogin(values.email, values.password)

            }}
        >

            {/* We get props from Formik */}

            {
                props => {
                    const {
                        values,
                        touched,
                        errors,
                        isSubmitting,
                        handleChange,
                        handleBlur
                    } = props
                    return (
                        <Form>
                            <label htmlFor="email">email</label>
                            <Field id="email" name="email" placeholder="your email" />

                            {/* Email errors */}
                            {
                                errors.email && touched.email && (
                                    <ErrorMessage style={{ color: 'red' }} name='email' component='div'></ErrorMessage>
                                )
                            }
                            {/* Email password */}
                            {
                                errors.password && touched.password && (
                                    <div>

                                        <ErrorMessage style={{ color: 'red' }} name='password' component='div'></ErrorMessage>

                                    </div>
                                )
                            }


                            <label htmlFor="password">Password</label>
                            <Field
                                id="password"
                                name="password"
                                placeholder="password"
                                type="password"
                            />
                            <button type="submit">Login</button>
                            {fetching ? (<p>LOADING </p>) : null}

                            {isSubmitting ? (<p>Login your credentials... </p>) : null}
                        </Form>

                    )
                }
            }


        </Formik>
    );
};


LoginForm.propTypes = {
    loged: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    onLogin: PropTypes.func.isRequired

};


export default LoginForm;
