import React, { useEffect, useState } from 'react';
import request from '../../api/Request';
import Input from '../Input/Input';
import {
  FormContainer,
  FormLabel,
  FormButton,
  FormHeader,
  FormWrapper,
  FormSelect,
  FormOption,
  AdditionWrapper,
  FormPriceText,
  FormSpan,
} from './StyledForm';

const Form = () => {
  const [cityDetails, setCityDetails] = useState([]);
  const [values, setValues] = useState({ city: '', squareMeter: '' });
  const [validator, setValidator] = useState(true);
  const [offer, setOffer] = useState(false);
  const [additions, setAdditions] = useState([]);
  const [additionPrice, setAdditionPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [additionPicked, setAdditionPicked] = useState([]);

  useEffect(() => {
    const getCityData = async () => {
      const fetchData = await request({
        method: 'GET',
        uri: '/citydata',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const convertToJson = await fetchData.json();
      setCityDetails(convertToJson);
    };
    getCityData();
  }, [setCityDetails]);

  useEffect(() => {
    if (
      values.city.length > 0 &&
      values.squareMeter.length > 0 &&
      isNaN(values.squareMeter) === false
    ) {
      setValidator(false);
    }
    const city = cityDetails.find((c) => c.name === values.city);
    if (!city) {
      return;
    }
    setAdditions(city.additions);
  }, [
    values.city.length,
    values.squareMeter.length,
    values.squareMeter,
    values.city,
    cityDetails,
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (values.city === 'Stockholm') {
      const squareMeterPrice = values.squareMeter * 65;
      setTotalPrice(squareMeterPrice + additionPrice);
    }
    if (values.city === 'Uppsala') {
      const squareMeterPrice = values.squareMeter * 55;
      setTotalPrice(squareMeterPrice + additionPrice);
    }
    setOffer(true);
  };

  const selectAddition = (e) => {
    const { name, id } = e.target;
    setAdditionPrice(additionPrice + parseInt(name));
    setAdditionPicked((pickedArray) => [...pickedArray, id]);
  };

  const renderOptions = cityDetails.map(({ name, id }) => {
    return (
      <FormOption key={id} value={name}>
        {name}
      </FormOption>
    );
  });

  return (
    <FormContainer>
      {offer ? (
        <>
          <FormHeader>Städfirman Offert</FormHeader>
          <FormSpan>Totalpris: {totalPrice}kr</FormSpan>
          <FormSpan>Kvadratmeter: {values.squareMeter}</FormSpan>
          <FormSpan>Stad: {values.city}</FormSpan>
          <FormSpan>Tillägg: {additionPicked.join(', ')}</FormSpan>
          <FormSpan>OCR: {Math.random().toString().slice(2, 15)}</FormSpan>
        </>
      ) : (
        <>
          <FormHeader>Städfirman Kodtest</FormHeader>
          <FormWrapper>
            <FormLabel>Välj Stad</FormLabel>
            <FormSelect
              name='city'
              onChange={handleChange}
              defaultValue={'Default'}
            >
              <FormOption hidden value='default'>
                Våra Arbetsstäder
              </FormOption>
              {renderOptions}
            </FormSelect>
            {additions.map((items) => {
              return (
                <AdditionWrapper key={items.type}>
                  <FormPriceText>{items.type}</FormPriceText>
                  <FormPriceText>{items.price}kr</FormPriceText>
                  <Input
                    type='checkbox'
                    name={items.price}
                    width='20px'
                    id={items.type}
                    onClick={selectAddition}
                  />
                </AdditionWrapper>
              );
            })}
            <FormLabel>Välj Kvadratmeter</FormLabel>
            <Input width='70%' onChange={handleChange} name='squareMeter' />
            <FormButton onClick={handleSubmit} disabled={validator}>
              Skapa Offert
            </FormButton>
          </FormWrapper>
        </>
      )}
    </FormContainer>
  );
};

export default Form;
