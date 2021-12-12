
import React from 'react'
import Choice from '../../../components/Inscription/choice/Choice';
import FirstStep from '../../../components/Inscription/firstStep/FirstStep';
import InscriSteps from '../../../components/Inscription/inscriSteps/InscriSteps';
import Navbar from '../../../components/Navar/Navbar';
import './Inscription.css';
function Inscription() {
    return (
        <div className="inscri">
            <Navbar/>
            <div className="contentInscri">
                <InscriSteps/>
            </div>
            
        </div>
    )
}

export default Inscription
