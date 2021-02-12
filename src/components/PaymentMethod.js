import { useState } from 'react';
import { SiWebmoney, SiPaypal } from 'react-icons/si';
import { GiBank } from 'react-icons/gi';
import { StyledPaymentMethod } from '../styles/StyledPaymentMethod';

const PaymentMethod = () => {
  const [chooseCard, setChooseCard] = useState(0);
  const cards = [
    { title: 'VISA', description: 'Карта Visa/Mastercard' },
    { title: 'Приват24', description: 'Приват24' },
    { image: GiBank, description: 'Термінали України' },
    { image: SiWebmoney, description: 'WebMoney' },
    { image: SiPaypal, description: 'PayPal' }
  ];

  return (
    <StyledPaymentMethod>
      <p className='payment'>Спосіб оплати</p>
      <div className='cards-wrapper'>
        {cards.map((card, index) => (
          <div
            className={`card-item ${chooseCard === index ? 'active' : ''}`}
            onClick={() => setChooseCard(index)}
            key={`${card.description}-${index}`}
          >
            <h4>{card.title && card.title}</h4>
            {card.image && <card.image className='logo' />}
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </StyledPaymentMethod>
  );
};

export default PaymentMethod;
