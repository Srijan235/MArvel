import React from 'react';
import styles from './ListingSteps.module.css';
import Logo from 'components/UI/Logo/Logo';
import { useNavigate } from 'react-router-dom';


import Wrapper, {
  Title,
  TitleInfo,
  Text,
  FormWrapper,
  BannerWrapper,
} from '../Auth/Auth.style';
import { FromWrapper } from 'containers/Agent/AccountSettings/AccountSettings.style';
import { bottom } from 'styled-system';
 


function PropertyDetails() {

   let navigate = useNavigate();
   const NextHandler = () => {
      navigate('/structure', { replace: true });
    };
  return (
    <Wrapper>
      <div style={{ width: '50%', height: '100vh' }}>
        <div style={{ margin: '18px' }}>
          <Logo
            withLink
            linkTo="/"
            src="/images/logo-alt.svg"
            title="Bid your Stay"
          />
        </div>

        <div style={{ textAlign: 'center' }}>
          <Title>It's easy to get started on </Title>
          <h2
            style={{
              margin: '10px',
              fontWeight: 'bolder',
              fontSize: '40px',
            }}
          >
            Bid Your Stay
          </h2>
        </div>

        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.step}>
              <div className={styles.icon}>
                <img src="/images/bed.png" alt="Tell us about your place" />
              </div>
              <div className={styles.content}>
                <h2>1. Tell us about your place</h2>
                <p style={{ marginBottom: '10px' }}>
                  Share some basic info, such as where it is and how many guests
                  can stay.
                </p>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.icon}>
                <img src="/images/stand.png" alt="Make it stand out" />
              </div>
              <div className={styles.content}>
                <h2>2. Make it stand out</h2>
                <p style={{ marginBottom: '10px' }}>
                  Add 5 or more photos plus a title and description &ndash;
                  we&rsquo;ll help you out.
                </p>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.icon}>
                <img src="/images/finish.png" alt="Finish up and publish" />
              </div>
              <div className={styles.content}>
                <h2>3. Finish up and publish</h2>
                <p style={{ marginBottom: '10px' }}>
                  Choose if you&rsquo;d like to start with an experienced guest,
                  set a starting price and publish your listing.
                </p>
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <button
                style={{
                  padding: '15px',
                  width: '30%',
                  color: 'white',
                  backgroundColor: '#008489',
                  transition: 'opacity 0.9s',
                  cursor: 'pointer',
                  borderRadius: '8px',
                  border: '1px solid black',
                  fontWeight: 'bold',

                  //  transition: opacity 1.25s
                }}
                onClick={NextHandler}
              >
                Let's Begin
              </button>
            </div>
          </div>
        </div>
      </div>

      <BannerWrapper>
        <img src="/images/bys.jpg" alt="Auth page banner" />
      </BannerWrapper>
    </Wrapper>
  );
}

export default PropertyDetails;
