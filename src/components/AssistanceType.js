import { useState } from 'react';
import { FaHandPaper, FaWallet, FaTshirt, FaRegHeart } from 'react-icons/fa';
import { StyledAssistanceType } from '../styles/StyledAssistanceType';

const AssistanceType = () => {
  const [chooseHelp, setChooseHelp] = useState(1);
  const helps = [
    { title: 'Зробити', image: FaHandPaper },
    { title: 'Фінансова допомога', image: FaWallet },
    { title: 'Матеріальна допомога', image: FaTshirt },
    { title: 'Волонтерство', image: FaRegHeart }
  ];

  return (
    <StyledAssistanceType>
      <h2>Види допомоги</h2>
      <p>Ви можете змінити вид допомоги</p>
      <ul>
        {helps.map((help, index) => (
          <li
            className={`item ${chooseHelp === index ? 'active' : ''}`}
            onClick={() => setChooseHelp(index)}
            key={`${help.title}-${index}`}
          >
            <div className='image'>
              <help.image className='logo' />
            </div>
            <h4 className='title'>{help.title}</h4>
          </li>
        ))}
      </ul>
    </StyledAssistanceType>
  );
};

export default AssistanceType;
