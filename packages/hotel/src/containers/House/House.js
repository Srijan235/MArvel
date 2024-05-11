import Logo from 'components/UI/Logo/Logo';
import { useNavigate } from 'react-router-dom';
import styles from './House.module.css';
import Wrapper, {
  Title,
  TitleInfo,
  Text,
  FormWrapper,
  BannerWrapper,
} from '../Auth/Auth.style';
import { FromWrapper } from 'containers/Agent/AccountSettings/AccountSettings.style';
import { bottom } from 'styled-system';

import React, { useState } from 'react';

 const House = () => {

        let navigate = useNavigate();
       const BackHandler = () => {
         navigate('/structure', { replace: true });
       };
    
       const [sharedRoom, setSharedRoom] = useState(false);
    //    const [commonAreaAccess, setCommonAreaAccess] = useState({
    //      room: 'Yes',
    //      sharedRoom: 'Yes',
    //    });

    //    const handleCommonAreaAccessChange = (type, value) => {
    //      setCommonAreaAccess({ ...commonAreaAccess, [type]: value });
    //    };
     
    const [show,setShow] =useState(false);

    const toggleHandler=()=>{
     

      setSharedRoom(!sharedRoom)
    } 

       const NextHandler = () => {
        

           navigate('/location', { replace: true });
         
         //  navigate('/property', { replace: true });
       };
  return (
    <Wrapper>
      <div style={{ width: '43%' }}>
        <div style={{ margin: '18px' }}>
          <Logo
            withLink
            linkTo="/"
            src="/images/logo-alt.svg"
            title="Bid your Stay"
          />{' '}
        </div>

        <div className={styles.container}>
          <h1>What type of place will guests have?</h1>
          <div className={styles.option}>
            <div className={styles.iconText} onClick={NextHandler}>
              <img
                src="./images/home.png"
                alt="An entire place"
                className={styles.icon}
              />
              <div className={styles.text}>
                <h2>An entire place</h2>
                <p>Guests have the whole place to themselves.</p>
              </div>
            </div>
          </div>

          <div className={styles.option} onClick={toggleHandler}>
            <div className={styles.iconText}>
              <img
                src="./images/apartment.png"
                alt="An entire place"
                className={styles.icon}
              />
              <div className={styles.text}>
                <h2>Shared Room</h2>
                <p>
                  Guests have their own room in a home, plus access to shared
                  spaces.
                </p>
              </div>
            </div>
          </div>

          {/* <div className={styles.question} style={{ margin: '10px' }}>
            <label>Do guests have access to a shared room?</label>
            <select
              value={sharedRoom}
              onChange={(e) => setSharedRoom(e.target.value)}
              className={styles.select}
              style={{ margin: '3px' }}
            >
              <option value="">Select an option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div> */}

          {sharedRoom === true && (
            <>
              <div style={{marginLeft:"2opx"}}>
                <div className={styles.options}>
                  <div className={styles.iconText}>
                    <img
                      src="./images/villa.png"
                      alt="A room"
                      className={styles.icon}
                    />
                    <div className={styles.text}>
                      <h2>A room</h2>
                      <p>
                        Guests have their own room in a home, plus access to
                        shared spaces.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.options}>
                  <div className={styles.iconText}>
                    <img
                      src="/images/bed.png"
                      alt="A shared room"
                      className={styles.icon}
                    />
                    <div className={styles.text}>
                      <h2>A shared room</h2>
                      <p>
                        Guests sleep in a room or common area that may be shared
                        with you or others.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
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
        <img src="/images/ban2.jpeg" alt="Auth page banner" />
      </BannerWrapper>
    </Wrapper>
  );
};

export default House;