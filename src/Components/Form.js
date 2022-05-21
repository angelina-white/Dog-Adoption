import {useState} from "react"

function Form({pinkForm, pinkResponse})
{
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [submittedData, setSubmittedData] = useState([])

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
            <div id="contactUs" class={pinkResponse}>
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
        <div class={pinkForm} id="contactUs" onSubmit={(handleSubmit)}>
            <h2 id="contactHeader">Contact Us</h2>
            <h3>Enter your information and message below:</h3>
            <form class="form">
                <ul class="formUl">
                    <li class="formLi">
                        <input id="inputFirstName" type="text" placeholder="First Name..." onChange={handleFirstNameChange} value={firstName} />
                    </li>
                    <li class="formLi">
                        <input type="text" placeholder="Last Name..." onChange={handleLastNameChange} value={lastName} />
                    </li>
                    <li class="formLi">
                        <input type="text" placeholder="Email..." onChange={handleEmailChange} value={email} />
                    </li>
                    <li class="formLi">
                        <input id="inputMessage" type="textarea" placeholder="Message..." onChange={handleMessageChange} value={message} />
                    </li>
                    <li class="formLi">
                        <button id="formSubmitButton" type="submit">Submit</button>
                    </li>
                </ul>
            </form>
            {listOfSubmissions}
            <a href="#home" id="topA">Top</a>
        </div>
    )
}

export default Form;