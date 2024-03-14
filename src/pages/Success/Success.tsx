import React, { useEffect, useState } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import './Success.css';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useUserSettings } from '../../common/UserSettingsContext';

interface SuccessInterface {
    icon: any;
    titleMessage: string;
    descriptionMessage: string;
    buttonMessage?: string;
}

const Success = () => {

    const nav = useNavigate();

    const {dispatch} = useUserSettings();
    const [interfaceState, setInterfaceState] = useState<SuccessInterface>({
        icon: null,
        titleMessage: "",
        descriptionMessage: "",
        buttonMessage: ""
    });

    useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);
        console.log(query);
        if (query.get("success") === 'true') {
            setInterfaceState({
                icon: <CheckCircleIcon sx={{ fontSize: 100, color: '#52C41A' }} />,
                titleMessage: "Thank you for your purchase!",
                descriptionMessage: "Your order has been successfully processed and will be shipped soon. You will receive an email confirmation shortly.",
                buttonMessage: "Back to Home"
            });
            dispatch({type: 'CLEAR_CART'});
        }
        else if (query.get("cancelled")) {
            setInterfaceState({
                icon: <WarningAmberIcon sx={{ fontSize: 100, color: 'orange' }} />,
                titleMessage: "Your order has been cancelled.",
                descriptionMessage: "We're sorry to see you go. If you have any questions, please contact us.",
                buttonMessage: "Continue Shopping"
            });
        }
    }, [dispatch]);

    return (
        <div className="success-container">
            <div className="success-content">
                {interfaceState.icon}
                <div className='success-title'>{interfaceState.titleMessage}</div>
                <div className='success-description'>{interfaceState.descriptionMessage}</div>
                <div className='success-button-container'>
                    <Button variant="contained" onClick={() => nav('/')} className='success-back-btn'
                            style={{fontWeight: 'bold', fontSize: '14px', marginTop: '10px', color: 'white', display: interfaceState.buttonMessage ? 'block' : 'none' }}>
                        {interfaceState.buttonMessage}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Success;