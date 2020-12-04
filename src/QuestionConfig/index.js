const QuestionConfig = [
  [
    {
      id: 1,
      question: 'What are your goals?',
      options: [
        'Get more conversions',
        'Get more phone leads',
        'Lower cost per conversion',
        'All of the above',
        'Other...',
      ],
    },
    {
      id: 2,
      question: 'Where do you advertise?',
      options: [
        'Nationally',
        'Locally',
        'Internationally',
        'Other...',
      ],
    },
  ],
  [
    {
      id: 3,
      question: 'Do you want leads or sales?',
      options: [
        'Leads',
        'Sales',
        'Both, I sell a service and a product',
        'Not sure',
      ],
    },
    {
      id: 4,
      question: 'What’s your monthly PPC ad spend?',
      options: [
        '$0 - $1,000',
        '$1,001 - $5,000',
        '$5,001 - $25,00',
        '$25,001 - $100,000',
        '$100,001+',
      ],
    },
  ],
];

const personalQuestionConfig = {
  website: "What's your website?",
  name: 'whats your name?',
  email: "What's your email?",
  phoneNo: "What's your number?",
};

export { personalQuestionConfig };

export default QuestionConfig;
