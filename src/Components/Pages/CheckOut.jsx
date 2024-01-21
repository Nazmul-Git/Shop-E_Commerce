/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const CheckOut = ({ isModalOpen, onClose, children }) => {
    if (!isModalOpen) return null;

    return (
        // 1.start code here open modal 2.add database to show all cart
        <div className="modal backdrop-blur-sm bg-green-100 p-20 ">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">This modal works with anchor links</p>
                <div className="modal-action">
                    <button onClick={onClose} className="btn">Close</button>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;