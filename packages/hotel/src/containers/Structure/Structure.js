import React from 'react';
import styles from './PlaceTypeSelector.module.css';
import Logo from 'components/UI/Logo/Logo';
import { useNavigate } from 'react-router-dom';


import Wrapper, {
  Title,
  TitleInfo,
  Text,
  FormWrapper,
  BannerWrapper,
} from '../Auth/Auth.style';
// import { FromWrapper } from 'containers/Agent/AccountSettings/AccountSettings.style';
// import { bottom } from 'styled-system';


const Structure = () => {
    
   let navigate = useNavigate();
   const BackHandler = () => {
     navigate('/property', { replace: true });
   };
   const NextHandler = (e) => {
    if(e==='House'){
            console.log(e);

           navigate('/house', { replace: true });
    }
    //  navigate('/property', { replace: true });
   };
    const placeTypes = [
      { icon: '/images/home.png', label: 'House' },
      { icon: '/images/apartment.png', label: 'Flat/apartment' },
      { icon: '/images/villa.png', label: 'Villa' },
      { icon: '/images/treehouse.png', label: 'TreeHouse' },
      { icon: '/images/boat.png', label: 'Boat-House' },
      { icon: '/images/builder.png', label: 'Builder-House' },
     
    ];

  return (
    <Wrapper>
      <div style={{ width: '43%'}}>
        <div style={{ margin: '18px' }}>
          <Logo
            withLink
            linkTo="/"
            src="/images/logo-alt.svg"
            title="Bid your Stay"
          />
        </div>
        <div className={styles.container}>
          <h1>Which of these best describes your place?</h1>
          <div className={styles.grid}>
            {placeTypes.map((type, index) => (
              <div
                key={index}
                className={styles.card}
                onClick={() => NextHandler(type.label)}
              >
                <img src={type.icon} alt={type.label} className={styles.icon} />
                <p>{type.label}</p>
              </div>
            ))}
          </div>
          <button
            style={{
              padding: '15px',
              width: '30%',
              // textAlign: 'center',
              color: 'white',
              backgroundColor: '#008489',
              transition: 'opacity 0.9s',
              cursor: 'pointer',
              borderRadius: '8px',
              border: '1px solid black',
              margin: '60px',
              fontWeight: 'bold',

              //  transition: opacity 1.25s
            }}
            onClick={BackHandler}
          >
            Back
          </button>
        </div>
      </div>

      <BannerWrapper>
        <img src="/images/banner8.jpg" alt="Auth page banner" />
      </BannerWrapper>
    </Wrapper>
  );
};

export default Structure;
