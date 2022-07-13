//1 render du composant avec un mdp <HidePassword>{mdp}</HidePassword>
//2 test que la valeur de mdp ne se retrouve pas a l'écran
//3 simulation de click sur le libellé 'affiché mdp'
//4 test que la valeur de mdp se retrouve bien a l'écran

//use testing-libraray
import { render, screen, fireEvent } from "@testing-library/react";
import HidePassword from "./HidePassword";

const mdp = 'azerty123';

test('test de la fonctionnalité hidePassword', () => {

    render(<HidePassword>{mdp}</HidePassword>);
    expect(screen.queryByText(mdp)).toBeNull()

    fireEvent.click(screen.getByLabelText('afficher mdp'))

    expect(screen.queryByText(mdp)).toBeInTheDocument()
})