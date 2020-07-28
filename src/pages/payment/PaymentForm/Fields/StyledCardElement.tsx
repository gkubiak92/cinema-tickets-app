import React, { useMemo } from 'react'
import { CardElement } from '@stripe/react-stripe-js'

const StyledCardElement = () => {
    const options = useMemo(
        () => ({
            style: {
                base: {
                    marginTop: '16px',
                    fontSize: '16px',
                    color: "#424770",
                    letterSpacing: "0.025em",
                    fontFamily: "Lato, monospace",
                    "::placeholder": {
                        color: "#aab7c4"
                    }
                },
                invalid: {
                    color: "#9e2146"
                }
            }
        }),
        []
    );

    return (
        <label>
            <CardElement options={options} />
        </label>
    )
}

export default StyledCardElement;