let data = [
  {
    id: 1,
    name: 'Alice',
    image: 'placeholder2',
    learn: 'Biology',
    teach: 'Chemistry',
    rating: 4,
    age: 15,
    gender: 'Female',
    grade: '9th',
    bio: 'Hello, my name is Alice! I’m 15 years old and I absolutely love exploring the wonders of biology. In my free time, I enjoy hiking and experimenting with new recipes. Currently, I’m eager to delve deeper into the world of Biology, and I’m excited to share my expertise in Chemistry. Let’s learn and grow together in these amazing fields! Thank you for your time and interest.',
    review: [
      {
        reviewer: 'ScienceEnthusiast',
        description: "Alice’s enthusiasm for biology is infectious! She's highly engaged in discussions and demonstrates a commendable understanding. Her approach to teaching chemistry showcases a promising foundation. A pleasure to learn from!"
      },
      {
        reviewer: 'ChemistryLover',
        description: "Alice's knowledge is incredible. She's a true chemist, sharing her passion for the subject. Her teaching style is engaging and interactive. I highly recommend her for any chemistry-related subjects!"
      }
    ]
  },
  {
    id: 2,
    name: 'Bob',
    image: 'placeholder1',
    learn: 'History',
    teach: 'Physics',
    rating: 5,
    age: 16,
    gender: 'Male',
    grade: '10th',
    bio: 'Greetings! I’m Bob, a history enthusiast and avid traveler at the age of 16. Exploring ancient civilizations and their cultures fascinates me. Currently, I’m seeking to expand my knowledge in History while offering my insights into the captivating world of Physics. Join me on this journey of discovery! Thank you for your curiosity.',
    review: [
      {
        reviewer: 'HistoryExplorer',
        description: 'Bob has a genuine passion for history, evident in his discussions. His grasp of historical events is notable, yet further exploration in physics will enhance his teaching repertoire. A promising learner!'
      },
      {
        reviewer: 'PhysicsEnthusiast',
        description: 'Bob is a true physics enthusiast. His knowledge of the fundamental principles of physics is impressive. He shares his enthusiasm for physics and demonstrates a keen interest in the subject. A pleasure to learn from!'
      },
      {
        reviewer: 'PhysicsLover',
        description: "Bob's knowledge of physics is incredible!! I would recommend him to just about any physics enthusiast. 10/10 learner!"
      }
    ]
  },
  {
    id: 3,
    name: 'Josh',
    image: 'josh',
    learn: 'Literature',
    teach: 'Writing',
    rating: 5,
    age: 18,
    gender: 'Male',
    grade: '12th',
    bio: 'Hey there, I’m Josh! I’m 18 and have a deep passion for literature, especially classic novels. When I’m not reading, I’m often found jotting down stories. Right now, I’m keen on exploring various aspects of Literature and eager to share my expertise in Creative Writing. Let’s embark on a literary adventure together! Thank you for your interest.',
    review: [{
      reviewer: 'BookwormMaster',
      description: "Josh's love for literature shines in his teachings. He presents intricate details with captivating narratives, fostering a deeper understanding. His adeptness in creative writing adds depth to the learning experience. A remarkable mentor!"
    }, {
      reviewer: 'WritingEnthusiast',
      description: 'Josh is an incredible writer. His creativity and writing skills are unmatched. I could not have found a better teacher and learner than Josh!'
    }, {
      reviewer: 'WritingLover',
      description: 'Josh is a true writing enthusiast. His ability to craft captivating narratives is impressive. He shares his love for writing and demonstrates a keen interest in liturature. Thanks Josh!'
    }]
  },
  {
    id: 4,
    name: 'David',
    image: 'placeholder',
    learn: 'History',
    teach: 'Drawing',
    rating: 5,
    age: 17,
    gender: 'Male',
    grade: '11th',
    bio: 'Hi, I’m David, a 17-year-old art enthusiast who finds joy in sketching and exploring art galleries. I’m currently diving into the intriguing world of Art History and I’m ready to teach the basics of Drawing. Let’s sketch out our ideas and discover the beauty of art! Thank you for joining me.',
    review: [{
      reviewer: 'ArtisticMind',
      description: "David's passion for art history is evident in his explanations. His drawing skills complement his teaching, making sessions interactive and insightful. A budding artist and teacher!"
    }]
  },
  {
    id: 5,
    name: 'Emma',
    image: 'placeholder',
    learn: 'Python',
    teach: 'Java',
    rating: 4,
    age: 16,
    gender: 'Female',
    grade: '10th',
    bio: 'Greetings! I’m Emma, a tech enthusiast passionate about coding and web development. I’m currently diving deep into the world of Coding and I’m excited to share my expertise in Web Development. Join me in exploring the wonders of the digital realm! Thank you for your interest.',
    review: [{
      reviewer: 'CodeMaster',
      description: 'Emma’s dedication to coding reflects in her teaching. Her grasp of web development concepts is impressive, and she delivers information with clarity. A mentor who simplifies complex coding!'
    }]
  },
  {
    id: 6,
    name: 'Frank',
    image: 'placeholder',
    learn: 'Music Theory',
    teach: 'Guitar',
    rating: 4,
    age: 14,
    gender: 'Male',
    grade: '9th',
    bio: 'Hey, I’m Frank, a 14-year-old music lover who enjoys exploring different genres. I’m currently learning about Music Theory and I’m happy to share my knowledge of playing the guitar. Let’s create melodious tunes together! Thank you for your curiosity.',
    review: [{
      reviewer: 'MusicMaestro',
      description: "Frank's understanding of music theory is impressive for his age. He demonstrates patience in teaching guitar, encouraging beginners to explore musical instruments. An aspiring musician and teacher!"
    }]
  },
  {
    id: 7,
    name: 'Grace',
    image: 'placeholder',
    learn: 'Psychology',
    teach: 'Mindfulness',
    rating: 5,
    age: 15,
    gender: 'Female',
    grade: '9th',
    bio: 'Hi there! I’m Grace, a psychology enthusiast fascinated by the human mind. I’m delving into the world of Psychology and eager to teach Mindfulness techniques. Let’s explore the depths of our minds together! Thank you for joining me.',
    review: [{
      reviewer: 'MindfulnessSeeker',
      description: 'Grace’s insights into psychology are commendable. Her guidance in mindfulness techniques is practical and effective. A knowledgeable mentor in psychology!'
    }]
  },
  {
    id: 8,
    name: 'Henry',
    image: 'placeholder',
    learn: 'Astrophysics',
    teach: 'Astronomy',
    rating: 5,
    age: 17,
    gender: 'Male',
    grade: '11th',
    bio: 'Greetings, I’m Henry, a 17-year-old stargazer passionate about the cosmos. I’m currently exploring the mysteries of Astrophysics and I’m thrilled to share my insights into Astronomy. Let’s gaze at the stars and unravel the universe! Thank you for your interest.',
    review: [{
      reviewer: 'StarGazer',
      description: 'Henry’s fascination with astrophysics reflects in his teaching. His explanations about astronomy are engaging and insightful, providing a glimpse into the wonders of the universe. An enthusiastic stargazer!'
    }]
  },
  {
    id: 9,
    name: 'Ivy',
    image: 'placeholder',
    learn: 'Foreign Languages',
    teach: 'English',
    rating: 5,
    age: 16,
    gender: 'Female',
    grade: '10th',
    bio: 'Hello, I’m Ivy! I’m 16 and fascinated by learning different languages. I’m currently diving into Foreign Languages and offering my expertise in English. Let’s communicate across borders! Thank you for joining me.',
    review: [{
      reviewer: 'LanguageLover',
      description: 'Ivy’s enthusiasm for languages shines in her teaching. Her proficiency in English enhances the learning experience, making it accessible and enjoyable. A language enthusiast!'
    }]
  },
  {
    id: 10,
    name: 'Jack',
    image: 'placeholder',
    learn: 'Cooking',
    teach: 'Baking',
    rating: 3,
    age: 15,
    gender: 'Male',
    grade: '9th',
    bio: 'Hey, I’m Jack, a food enthusiast who loves experimenting in the kitchen. I’m learning the art of Cooking and I’m ready to share my baking skills. Let’s whip up some delicious treats together! Thank you for your curiosity.',
    review: [{
      reviewer: 'FoodieGuru',
      description: 'Jack’s passion for cooking is evident, yet further exploration will enhance his teaching. His baking skills show promise, but a bit more depth will make the lessons even more enriching. A budding chef!'
    }]
  },
  {
    id: 11,
    name: 'Karen',
    image: 'placeholder',
    learn: 'Finance',
    teach: 'Investing',
    rating: 5,
    age: 15,
    gender: 'Female',
    grade: '10th',
    bio: 'Hello, I’m Karen! I’m 15 and passionate about financial planning. I’m currently learning about Finance and I’m excited to share my insights into Investing. Let’s secure our financial futures together! Thank you for your interest.',
    review: [{
      reviewer: 'FinancialWhiz',
      description: 'Karen’s interest in finance is commendable. Her understanding of investing principles is impressive, making complex financial concepts more understandable. A finance enthusiast!'
    }]
  },
  {
    id: 12,
    name: 'Liam',
    image: 'placeholder',
    learn: 'Photography',
    teach: 'Photo Editing',
    rating: 4,
    age: 17,
    gender: 'Female',
    grade: '11th',
    bio: 'Hi, I’m Liam, a 17-year-old photography enthusiast capturing moments through my lens. I’m exploring the art of Photography and I’m ready to teach Photo Editing techniques. Let’s turn our photos into masterpieces! Thank you for joining me.',
    review: [{
      reviewer: 'Shutterbug',
      description: 'Liam’s passion for photography shines in his teachings. His insights into photo editing are valuable, adding depth to the photography journey. A budding photographer!'
    }]
  },
  {
    id: 13,
    name: 'Mia',
    image: 'placeholder',
    learn: 'Yoga',
    teach: 'Meditation',
    rating: 5,
    age: 17,
    gender: 'Female',
    grade: '11th',
    bio: 'Namaste! I’m Mia, a yoga practitioner passionate about holistic wellness. I’m immersing myself in the practice of Yoga and eager to guide through Meditation. Let’s find peace and balance together! Thank you for your interest.',
    review: [{
      reviewer: 'YogiSpirit',
      description: 'Mia’s dedication to yoga is evident in her teachings. Her guidance through meditation is calming and insightful, making sessions peaceful and rejuvenating. A mindful mentor!'
    }]
  },
  {
    id: 14,
    name: 'Nathan',
    image: 'placeholder',
    learn: 'Geology',
    teach: 'Earth Science',
    rating: 5,
    age: 16,
    gender: 'Male',
    grade: '10th',
    bio: 'Hello, I’m Nathan! I’m 16 and intrigued by the Earth’s formations. I’m currently exploring Geology and willing to share my knowledge of Earth Science. Let’s discover the secrets hidden beneath our feet! Thank you for joining me.',
    review: [{
      reviewer: 'GeologyExplorer',
      description: 'Nathan’s curiosity about the Earth is inspiring. His understanding of Earth science is commendable, making geological concepts fascinating. A budding geologist!'
      }]
    }
  ];

export default data