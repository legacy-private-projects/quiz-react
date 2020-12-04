/* eslint-disable no-undef */
/* eslint-disable max-len */
import React, { useState } from 'react';
import {
  Row, Col, Progress, message,
} from 'antd';
import axios from 'axios';
import Container from '../components/container';
import SEO from '../components/seo';
import Card from '../components/QuestionnaireCard';
import PersonalQuestionCard from '../components/PersonalQuestionCard';

import ThankYou from '../components/ThankYou';

import QuestionConfig from '../QuestionConfig';
import './style.less';
import apiDataFormer from '../services/apiDataFormer';
import LeftBanner from '../components/LeftBanner';

const IndexPage = () => {
  const initialState = {
    currentStep: 0,
    questionaire: [],
  };
  const [state, setState] = useState(initialState);

  const { currentStep } = state;
  const nextStep = (questionaire) => {
    setState((prevState) => ({ ...prevState, currentStep: currentStep + 1, questionaire: [...prevState.questionaire, ...questionaire] }));
  };

  const previousStep = () => {
    setState((prevState) => ({ ...prevState, currentStep: currentStep - 1 }));
  };

  const finalStep = (personalQuestions) => {
    const apiData = apiDataFormer(personalQuestions);

    // ENDPOINT - VOCE DEVE MANTER ESSE ENDPOINT
    const endPoint = 'https://fortodayapi.agencysavage.com/wrike-task';
    console.log(apiData);
    axios.post(endPoint, {
      title: personalQuestions.name,
      description: apiData,
      // FOLDER ID - VOCE DEVE MANTER ESSE FOLDER ID
      folder: 'IEAA6GKGI4RSVONQ',
    }).then(() => {
      message.success('your response has been submitted');
      setState((prevState) => ({ ...prevState, currentStep: currentStep + 1 }));
    });
  };
  return (
    <Container>
      <SEO title="Home" />
      <Row gutter={[100, 40]} justify="center">
        {currentStep !== 3 && (
        <>
          <LeftBanner />
          <Col xs={24} sm={24} md={24} lg={12} className="textCenter minQuestionareWidth">
            <Progress percent={(currentStep + 1) * 33} showInfo status="active" style={{ marginBottom: '2rem' }} />
            { currentStep === 0 && <Card questions={QuestionConfig[0]} nextStep={nextStep} previousHide previousStep={previousStep} stepNumber={currentStep} />}
            { currentStep === 1 && <Card questions={QuestionConfig[1]} nextStep={nextStep} previousStep={previousStep} stepNumber={currentStep} />}
            { currentStep === 2 && <PersonalQuestionCard questions={[]} nextStep={finalStep} previousStep={previousStep} />}
          </Col>
        </>
        )}
        {
          currentStep === 3 && (
            <ThankYou />
          )
        }
      </Row>
    </Container>
  );
};

export default IndexPage;
