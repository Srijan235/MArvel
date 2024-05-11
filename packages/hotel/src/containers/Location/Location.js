import React, { useRef, useState } from 'react';
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

const Location = () => {
  //  const mapRef = useRef(null);

  const [map, setMap] = useState(null);
  const [address, setAddress] = useState('');

  function location(position) {
    console.log(position);

    const pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    // map.setCenter(pos);
    console.log(pos)
  }
  function failedToGet() {
    console.log('There is an error in your Browser');
  }

  const getLocation = () => {
    window.navigator.geolocation.getCurrentPosition(location, failedToGet);
  };

  return (
    <Wrapper>
      <div style={{ margin: '18px' }}>
        <Logo
          withLink
          linkTo="/"
          src="/images/logo-alt.svg"
          title="Bid your Stay"
        />
      </div>
      <button onClick={getLocation}>Your Location</button>
    </Wrapper>
  );
};

export default Location;
