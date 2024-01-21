import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import './index.css';

export default function Dropdown({ options = ['blue', 'green', 'red', 'yellow'] }) {
    const [current, setCurrent] = useState(null);
    const [toggle, setToggle] = useState(false);

    return (
        <div className="container">
            <div className='uiselect' onClick={()=>setToggle((prev)=> prev = !prev)}>
                <p className='header'>{current ?? 'Select color'}</p>
                <span className='icon'>
                    {toggle ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </span>
            </div>
            <div className="uioption" style={{ display: (toggle ? 'block' : 'none') }}>
                    {options.map(el => (
                        <p  key={el} onClick={() => { setCurrent(el); setToggle(prev => !prev); }}>
                            {el}
                        </p>
                    ))}
                </div>
        </div>
    );
}
