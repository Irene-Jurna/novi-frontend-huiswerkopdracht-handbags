import React from 'react';

function Button({ buttonText, buttonDisabled }) {
    return (
            <button
                type="button"
                disabled={buttonDisabled}
            >
                {buttonText}
            </button>
    )
}

export default Button;