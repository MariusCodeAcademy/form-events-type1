import { useState } from 'react';

function ContactForm() {
  // create name state and conenct to name input (value, onChange)
  const [name, setName] = useState('');
  const onNameChange = (e) => {
    setName(e.target.value);
  };
  // create age state and conenct to age input (value, onChange)
  const [age, setAge] = useState('');
  const onAgeChange = (e) => {
    setAge(Number(e.target.value));
  };
  // create textarea state and conenct to textarea  (value, onChange)
  const [mainText, setMainText] = useState('');
  const onMainTextChange = (e) => {
    setMainText(e.target.value);
  };
  // create termsConditions state and conenct to termsConditions input (value, onChange)
  const [terms, setTerms] = useState(false);
  const onTermsChange = (e) => {
    // toggle terms false->true->false->.....
    setTerms(!terms);
  };
  // create select state and conenct to select input (value, onChange)

  return (
    <div className='w-50 text-left'>
      <div className='results'>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Subject: {}</p>
        <p>Text: {mainText}</p>
        <p>Terms and Conditions: {terms.toString()}</p>
      </div>
      <form>
        <input
          type='text'
          className='form-control'
          placeholder='Name'
          value={name}
          onChange={onNameChange}
        />
        <input
          type='number'
          className='form-control'
          placeholder='Age'
          value={age}
          onChange={onAgeChange}
        />
        <select className='form-control' name='subject' id=''>
          <option value='bills'>Bills</option>
          <option value='information'>Information</option>
          <option value='payments'>Payments</option>
        </select>
        <textarea
          cols='30'
          rows='3'
          className='form-control'
          placeholder='your text'
          value={mainText}
          onChange={onMainTextChange}
        ></textarea>
        <div className='form-check'>
          <input
            value={terms}
            onChange={onTermsChange}
            className='form-check-input'
            type='checkbox'
            id='terms'
          />
          <label className='form-check-label' htmlFor='terms'>
            Terms and Conditions
          </label>
        </div>
        <button className='btn btn-dark' type='submit'>
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactForm;

// sukurti forma
// inputs,
// name, age,
// select [bills, information, payments]
// body - textarea
// checkbox - agree with terms and conditions
// submit btn

// get all data from inputs in one object
// disable submit btn if checkbox is unchecked
