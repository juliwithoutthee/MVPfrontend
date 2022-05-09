import React from 'react'
import axios from 'axios';

export default function Customer() {

    const addNewCustomer =()=>{};

    return (<>
        <form>
            <fieldset>
                <label>
                    First Name:
                    <input firstName="firstName" />
                </label>
            </fieldset>
            <fieldset>
                <label>
                    Last Name:
                    <input lastName="lastName" />
                </label>
            </fieldset>
            <fieldset>
                <label>
                    Address:
                    <input address="address" />
                </label>
            </fieldset>
            <fieldset>
                <label>
                    City:
                    <input city="city" />
                </label>
            </fieldset>
            <fieldset>
                <label>
                    Postal Code:
                    <input postalCode="postalCode" />
                </label>
            </fieldset>
            <button type="submit" onClick={addNewCustomer}>Submit</button>
        </form>

    </>)
}