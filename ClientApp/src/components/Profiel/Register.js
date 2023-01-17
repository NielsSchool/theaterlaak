import React from "react";
import { useState } from "react";
import AccountService from "../Services/AccountService";
import PasswordChecklist from "react-password-checklist"

export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            UserName: "",
            password: "",
            confirmPassword: "",
            PhoneNumber: "",
            error: "",
        }
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange = (e) => {
        this.setState({ ...this.state, [e.target.name]: e.target.value });
    };

    //aanpassen
    onSubmit = async (e) => {
        e.preventDefault();
        var response = await AccountService.register(this.state.UserName, this.state.password).then(() => {
            this.setState({ succes: "succesvol" });
        });
        console.log(response);
    };

    validateConfirmPassword = e => {
        let { value } = e.target
        if (this.state.password && value !== this.state.password) {
            return "Wachtwoorden komen niet overeen.";
        }
    }

    //aanpassen
    render() {
        return (
            <>
                <div>
                    <h1>Registeren</h1>
                    <form onSubmit={this.onSubmit}>
                        <p alt="invoerveld Voornaam">Voornaam:</p>
                        <input
                            required={true}
                            message="Dit veld is verplicht"
                            type="text"
                            name="firstName"
                            value={this.state.firstName}
                            onChange={this.handleChange}
                        />
                        <p alt="invoerveld Achternaam">Achternaam:</p>
                        <input
                            required={true}
                            message="Dit veld is verplicht"
                            type="text"
                            name="lastName"
                            value={this.state.lastName}
                            onChange={this.handleChange}
                        />
                        <p alt="invoerveld email">Email:</p>
                        <input
                            required={true}
                            message="Dit veld is verplicht"
                            type="email"
                            name="UserName"
                            autoComplete="new-username"
                            value={this.state.UserName}
                            onChange={this.handleChange}
                        />
                        <p alt="invoerveld Wachtwoord">Wachtwoord:</p>
                        <input
                            required={true}
                            message="Dit veld is verplicht"
                            type="password"
                            name="password"
                            autoComplete="new-password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                        <p alt="invoerveld bevestig wachtwoord">bevestig uw wachtwoord:</p>
                        <input
                            required={true}
                            message="Dit veld is verplicht"
                            type="password"
                            name="confirmPassword"
                            autoComplete="confirm-password"
                            value={this.state.confirmPassword}
                            onChange={this.handleChange}
                        />
                        <p alt="invoerveld Telefoonnummer">Telefoonnummer (optioneel):</p>
                        <input
                            required={false}
                            message="Dit veld is optioneel"
                            type="number"
                            name="PhoneNumber"
                            value={this.state.PhoneNumber}
                            onChange={this.handleChange}
                        />
                        <PasswordChecklist
                            rules={["capital", "lowercase", "specialChar", "minLength", "match" ]}
                            minLength={7}
                            value={this.state.password}
                            valueAgain={this.state.confirmPassword}
                            messages={{
                                minLength: "uw wachtwoord moet minimaal 7 karakters lang zijn.",
                                specialChar: "uw wachtwoord moet een speciaal karakter bevatten.",
                                number: "uw wachtwoord moet een nummer bevatten.",
                                capital: "uw wachtwoord moet een hoofdletter bevatten.",
                                match: "uw wachtwoorden komen niet overeen.",
                                lowercase: "uw wachtwoord moet een kleine letter bevatten."
                            }}
                        />
                        
                        <br></br>
                        <button type='submit' alt="Registreer Knop">Registreer</button>
                    </form>
                </div>
            </>
        );
    }
}


