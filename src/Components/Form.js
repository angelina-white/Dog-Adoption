import {useState} from "react"

function Form()
{
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [submittedData, setSubmittedData] = useState([])
    const [thankYou, setThankYou] = ("")

    function handleFirstNameChange(event)
    {
        setFirstName(event.target.value)
    }

    function handleLastNameChange(event)
    {
        setLastName(event.target.value)
    }

    function handleEmailChange(event)
    {
        setEmail(event.target.value)
    }

    function handleMessageChange(event)
    {
        setMessage(event.target.value)
    }


    function handleSubmit(event)
    {
        event.preventDefault()
        const formData = {firstName: firstName, lastName: lastName, email: email, message: message}
        const dataArray = [formData];
        setSubmittedData(dataArray);
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
    }

    const listOfSubmissions = submittedData.map((element) => 
    {
        return (
            <div class="formThankYou">
                <h3>Thank you for contacting us!</h3>   
                <h3>We will be sending you an email shortly.</h3>
                <h3>The information you submitted:</h3>
                <div class="thankYouResponse">
                    <p>{element.firstName} {element.lastName}</p>
                    <p>{element.email}</p>
                    <p>{element.message}</p>
                </div>
            </div>
        );
    });


    return (
        <div class="formDiv" onSubmit={(handleSubmit)}>
            <h2 id="contactHeader">Contact Us</h2>
            <h3>Enter your information and message below:</h3>
            <form class="form">
                <ul>
                    <li>
                        <input id="inputFirstName" type="text" placeholder="First Name..." onChange={handleFirstNameChange} value={firstName} />
                    </li>
                    <li>
                        <input type="text" placeholder="Last Name..." onChange={handleLastNameChange} value={lastName} />
                    </li>
                    <li>
                        <input type="text" placeholder="Email..." onChange={handleEmailChange} value={email} />
                    </li>
                    <li>
                        <input id="inputMessage" type="textarea" placeholder="Message..." onChange={handleMessageChange} value={message} />
                    </li>
                    <li>
                        <button id="formSubmitButton" type="submit">Submit</button>
                    </li>
                </ul>
            </form>
            {listOfSubmissions}
        </div>
    )
}

export default Form;