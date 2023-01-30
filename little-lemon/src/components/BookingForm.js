import { Container } from '@chakra-ui/react';
import { useState } from 'react';
import FormInput from './FormInput';
const BookingForm = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        telephone: '',
        date: '',
        guests: 1
    })

    const inputs = [{
        id: 1,
        name: 'name',
        type: 'text',
        placeholder: 'Name',
        label: 'Name',
        errorMessage: "Please, entry a name",
        pattern: '^[A-Za-z0-9]{3,16$}'
    },
    {
        id: 2,
        name: 'email',
        type: 'email',
        placeholder: 'Email',
        label: 'Email',
        errorMessage: "It should be a valid email address",
        pattern: '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}'
    },
    {
        id: 3,
        name: 'telephone',
        type: 'tel',
        placeholder: 'Telephone',
        label: 'Telephone',
        errorMessage: "It should be a valid telephone",
        pattern: '[0-9]{3}-[0-9]{2}-[0-9]{3}'
    },
    {
        id: 4,
        name: 'date',
        type: 'date',
        placeholder: 'Date',
        label: 'Date'
    },
    {
        id:5,
        name: 'guests',
        type: 'number',
        placeholder: 'Guests',
        label: 'Guests',
        errorMessage: "Please, entry number of guests"
    }]

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        console.log(values);
    }

    return (
        <div className = "form-container">
        <h2>Reserve a table</h2>
        <form onSubmit={handleSubmit} className="min-w-[500px]">
            {
                inputs.map((input) => (
                    <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={handleChange} />
                ))
            }
            <button type="submit" class="group relative flex w-full justify-center rounded-md border border-transparent bg-green-500 py-2 px-4 mt-8 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Sumbit</button>
        </form>
        </div>
    )
}

export default BookingForm;