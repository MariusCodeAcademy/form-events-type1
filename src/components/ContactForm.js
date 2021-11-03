function ContactForm() {
  return (
    <div className='w-50 text-left'>
      <form>
        <input type='text' className='form-control' placeholder='Name' />
        <input type='age' className='form-control' placeholder='Age' />
        <select className='form-control' name='subject' id=''>
          <option value='bills'>Bills</option>
          <option value='information'>Information</option>
          <option value='payments'>Payments</option>
        </select>
        <textarea
          cols='30'
          rows='10'
          className='form-control'
          placeholder='your text'
        ></textarea>
        <div className='form-check'>
          <input className='form-check-input' type='checkbox' id='terms' />
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
