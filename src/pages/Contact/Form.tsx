import { Email } from '@mui/icons-material';
import { TextField, Button } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from "formik";
import ReactGA from 'react-ga4';
import * as Yup from "yup";
import './Contact.css';


interface FormProps {
    handleSubmit: (values: any) => void;
  }

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Enter a valid email').required('Email is required'),
    message: Yup.string().required('Message is required'),
});

const MyForm = (props: FormProps) => {

    const textFieldStyle = {
        'width':'100%',
        'margin':'10px 0',
        'backgroundColor':'#F5F5F5',
    }

    const buttonStyle = {
        'width':'100%',
        'color':'white',
        'fontWeight':'bold',
        'padding':'10px',
        'marginTop':'25px',
        'backgroundColor':'#E58BBE'
    }

    const handleSubmit = (values: any, { resetForm }: any) => {
        props.handleSubmit(values);
        resetForm();
    }
    
    return (
        <div className="form-container">
            <Formik
                validationSchema={validationSchema}
                initialValues={{ name: '', email: '', message: '' }}
                onSubmit={handleSubmit}>
            <Form className='form'>
                <div className='form-item'>
                    <Field
                        as={TextField}
                        label="Name"
                        name="name"
                        style={textFieldStyle}
                        placeholder="Enter your name"
                    />
                    <ErrorMessage name="name" component="div" className="error" />
                </div>
                <div className='form-item'>
                    <Field
                        as={TextField}
                        label="Email"
                        name="email"
                        style={textFieldStyle}
                        placeholder="Enter your email"
                    />
                    <ErrorMessage name="email" component="div" className="error" />
                </div>
                <div className='form-item'>
                    <Field
                        as={TextField}
                        label="Message"
                        name="message"
                        style={textFieldStyle}
                        placeholder="Enter your message"
                    />
                    <ErrorMessage name="message" component="div" className="error" />
                </div>
                <div className='form-item'>
                    <Button type="submit" style={buttonStyle} onClick={() => {
                        ReactGA.event({
                            category: 'Contact',
                            action: 'Clicked Send Message'
                        });
                    }}>
                        <Email style={{'marginRight':'10px'}} />
                        Send Message
                    </Button>
                </div>
            </Form>
        </Formik>
    </div>
)
}

export default MyForm;