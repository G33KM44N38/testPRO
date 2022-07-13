import React, { useState } from 'react'

function NewComposant({ children }) {

    const [showMessage, setShowMessage] = useState(false)

    return (
        <div>
            <label htmlFor='toggle'> Mon super composant</label>
            <input
                id='toggle'
                type="checkbox"
                defaultChecked={showMessage}
                onClick={e => setShowMessage(e.target.value)}
            />
            {showMessage ? children : null}
        </div>
    )
}

export default NewComposant