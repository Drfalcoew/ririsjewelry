import { Snackbar } from "@mui/material";
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './Contact.css';
import React, { useState } from 'react';
import MyForm from "./Form";

export interface MyAlertProps {
    severity?: 'success' | 'info' | 'warning' | 'error' | undefined;
    message?: string;
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
    return <MuiAlert elevation={20} ref={ref} variant="standard" {...props} />;
});

const Contact = () => {
    const [alertProps,] = useState<MyAlertProps>({ severity: 'info' });
    const [showAlert, setShowAlert] = useState(false);

    const handleClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setShowAlert(false);
    };
    
    const handleSubmit = (values: any) => {
        
    }

    return (
        <div className='contact-root-container'>
            <Snackbar open={showAlert} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert onClose={handleClose} severity={alertProps.severity || 'info'}>
                    {alertProps.message}
                </Alert>
            </Snackbar>

            <div className='contact-container'>
                <div className='contact-title'>Contact Us</div>
                <MyForm handleSubmit={handleSubmit} />
            </div>
            <div className='info-container'>
                <div className='info-item'>
                    <img src='/imgs/riri_logo.png' alt='preppy jewelry' className='info-banner' draggable='false' />
                    <div className='info-text'>
                        Send us an email and we will get back to you as soon as possible. Please allow 24-48 hours for a response.
                    </div>
                    <div className="info-text" style={{opacity: '0.8'}}>
                        Follow us on social media for updates and promotions!
                    </div>
                    <div className="social-media-container">
                        <a href="https://www.youtube.com/@Preppyavenue2?si=l9xLYBaNG45eNAeF" target="_blank" rel="noreferrer">
                            <YouTubeIcon sx={{ color: 'red', height: 40, width: 40 }} className="social-media-item" />
                        </a>
                    </div>
                </div>
            </div>
            
    </div>
    )
}

export default Contact;