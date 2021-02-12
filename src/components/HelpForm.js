import { StyledHelpForm } from '../styles/StyledHelpForm';

const HelpForm = ({ person, setPerson }) => {
  const choosePerson = ['Фіз. особа', 'Юр. особа'];

  return (
    <StyledHelpForm>
      <h2>Заповніть форму</h2>
      <div className='btn-wrapper'>
        {choosePerson.map((per, index) => (
          <button
            className={`btn ${person === index ? 'active' : ''}`}
            onClick={() => setPerson(index)}
            type='button'
            key={`${per}-${index}`}
          >
            {per}
          </button>
        ))}
      </div>
    </StyledHelpForm>
  );
};

export default HelpForm;
