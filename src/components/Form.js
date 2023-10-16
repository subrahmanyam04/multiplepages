import React, { useState } from 'react';

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [error1, setError1] = useState('');
    const [error2, setError2] = useState('');
    const handleChange = (event) => {
        setName(event.target.value);
        // setEmail(event.target.value);
    };
    const handleEmailChange = (event) => {

        setEmail(event.target.value);
    };
    const handleMessageChange = (event) => {

        setMessage(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Check if the name is empty
        if (!name.trim()) {
            setError('Name is required');
        } else {
            // If the name is not empty, you can perform further validation or submit the form
            // For now, let's clear the error message
            setError('');
        }

        // Check if the email is empty
        if (!email.trim()) {
            setError1('Email is required');
        } else {

            setError1('');
        }

        // Check if the name is empty
        if (!message.trim()) {
            setError2('Feedback is not be empty');
        } else {

            setError2('');
        }

        if (name && email && message) {
           
            // document.getElementById('inputEmail4').value = '';
            // document.getElementById('uname').value = '';
            // document.getElementById('inputFeedback').value = '';
            window.location.reload();
            alert('Submited successfully')
        }


    };


    return (

        <div>

            <div className='container text-start mt-3'>
                <h2 className='text-start'>We Are Always Available To You :</h2>
                <p>As you can see the paragraphs gracefully wrap around the floated image. Now imagine how this would look with some actual content in here, rather than just this boring placeholder text that goes on and on, but actually conveys no tangible information at. It simply takes up space and should not really be read.<b>Your Feedback is important to us..........</b>
                </p>

            </div>


            <div className='container'>
                <div className='col-md-8 mx-auto mb-5 mt-5'>
                    <div className='card p-2'>
                        <h3>Feedback</h3>
                        <div className='row text-start '>
                            <form id='myForm'>
                                <div className='col-md-12 '>
                                    <label for="inputEmail4" class="form-label ">UserName :</label>
                                    <input
                                        type="text"
                                        className={`form-control mt-2 ${error ? 'border border-danger' : ''}`}
                                        placeholder="Enter Your Name"
                                        aria-label="Enter Your Name"
                                        id='uname'
                                        value={name}
                                        onChange={handleChange}
                                    />
                                    <div className="error text-danger">{error}</div>
                                </div>
                                <div className='col-md-12 '>
                                    <label for="inputEmail4" class="form-label mt-3 ">Email :</label>
                                    <input type="email" class={`form-control mt-1 ${error1 ? 'border border-danger' : ''}`} value={email} placeholder="Enter Your Email" id="inputEmail4" onChange={handleEmailChange} />
                                    <div className="error text-danger">{error1}</div>
                                </div>
                                <div className='col-md-12'>
                                    <label htmlFor="inputFeedback" className="form-label mt-3">Feedback :</label>
                                    <textarea className={`form-control mt-1 ${error2 ? 'border border-danger' : ''}`} value={message} id="inputFeedback" placeholder="Enter Your message" onChange={handleMessageChange} rows="4"></textarea>
                                    <div className="error text-danger">{error2}</div>
                                </div>
                                <div className='col-md-12 mt-3 '>
                                    <button type='button' className='btn btn-success' onClick={handleSubmit}>Submit</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>


            </div>
            


        </div>

    );
}

export default Form;