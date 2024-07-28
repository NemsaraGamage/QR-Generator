import React, { useState } from 'react';
import '../styles.css';
import QRCode from 'react-qr-code';

// npm run deploy

const MainPage = () => {
    const [text, setText] = useState('');

    function handleChange(e) {
        setText(e.target.value);
    }

    return (
        <>

        <h1 className='header1'>QR Generator</h1>

        <div className='sectionCon'> 

            <div className='secCon1'>

                <div className='text-input'>
                    <p>- Enter To Generate QR -</p>
                    <input
                        type='text'
                        value={text}
                        onChange={(e) => { handleChange(e); }}
                    />
                </div>
            </div>

            <div className='secCon2'>
                <div className='qr-code'>
                    <QRCode value={text} />
                </div>
            </div>

        </div>

        </>
    );
};

export default MainPage;
