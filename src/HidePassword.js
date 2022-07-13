import React, { useState } from 'react'

// children qui contient le mot de passe
// state show password
// label html
// input type checkbox
// onchange setShowPassword
// ternaire pour affichage password
function HidePassword({ children }) {

    const [showPassword, setShowPassword] = useState(false)

    return (
        <div>
            <label htmlFor='toggleMdp'>afficher mdp</label>
            <input
                id='toggleMdp'
                type='checkbox'
                defaultChecked={showPassword}
                onClick={() => setShowPassword(!showPassword)}
            />
            {showPassword ? children : null}
        </div>
    )
}

export default HidePassword