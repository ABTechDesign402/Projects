

const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotContainer = document.getElementById('chatbot-container');
const chatbotClose = document.getElementById('chatbot-close');
const chatBody = document.getElementById('chat-body');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const typingIndicator = document.getElementById('typing-indicator');

const botAvatar = 'https://royaleducationschool.com/wp-content/uploads/2025/01/images-removebg-preview.png';
const userAvatar = 'https://royaleducationschool.com/wp-content/uploads/2025/01/png-clipart-computer-icons-avatar-user-profile-avatar-heroes-logo-thumbnail-removebg-preview.png';



const messages = {
  "hi": "Hello! Welcome to Royal Education School. How may I assist you today? Feel free to ask any questions about our programs, admissions, or facilities.",
  "greetings": "Hello! Welcome to Royal Education School. How may I assist you today? Feel free to ask any questions about our programs, admissions, or facilities.",
  "hi there": "Hello! Welcome to Royal Education School. How may I assist you today? Feel free to ask any questions about our programs, admissions, or facilities.",
  "hello": "Hi! Thank you for reaching out to Royal Education School. How can I assist you? I'm here to provide information and answer your questions.",
  
  "how are you": "I'm doing great, thank you for asking! How can I assist you today with your queries about Royal Education School?",
  "how are things": "I'm doing great, thank you for asking! How can I assist you today with your queries about Royal Education School?",
  "how do you do": "I'm doing great, thank you for asking! How can I assist you today with your queries about Royal Education School?",
  "how's everything": "I'm doing great, thank you for asking! How can I assist you today with your queries about Royal Education School?",
  "what's up": "I'm doing great, thank you for asking! How can I assist you today with your queries about Royal Education School?",
  "how's life": "I'm doing great, thank you for asking! How can I assist you today with your queries about Royal Education School?",
  "what are you doing": "I'm here to assist you with any information you need about Royal Education School. Feel free to ask me anything!",
  "what's going on": "I'm here to assist you with any information you need about Royal Education School. Feel free to ask me anything!",
  "what's happening": "I'm here to assist you with any information you need about Royal Education School. Feel free to ask me anything!",

  "school details": "Royal Education School is a leading institution committed to excellence in education, fostering holistic development, and preparing students for future challenges. How may I assist you further?",
  "about school": "Royal Education School is a leading institution committed to excellence in education, fostering holistic development, and preparing students for future challenges. How may I assist you further?",
  "school info": "Royal Education School is a leading institution committed to excellence in education, fostering holistic development, and preparing students for future challenges. How may I assist you further?",
  "school introduction": "Royal Education School is a leading institution committed to excellence in education, fostering holistic development, and preparing students for future challenges. How may I assist you further?",
  "describe the school": "Royal Education School is a leading institution committed to excellence in education, fostering holistic development, and preparing students for future challenges. How may I assist you further?",

  "admission": "Thank you for your interest in our school! Our admission process involves obtaining the application form, submitting necessary documents, attending an assessment or interview, and completing the fee payment. For detailed information regarding admissions, please contact us via email at info@royaleducationschool.com or call our office at 0302-4995960. We would be delighted to assist you through the admission process.",
  "enrollment": "Thank you for your interest in our school! Our enrollment process involves obtaining the application form, submitting necessary documents, attending an assessment or interview, and completing the fee payment. For detailed information regarding admissions, please contact us via email at info@royaleducationschool.com or call our office at 0302-4995960. We would be delighted to assist you through the enrollment process.",
  "apply": "Thank you for your interest in our school! Our admission process involves obtaining the application form, submitting necessary documents, attending an assessment or interview, and completing the fee payment. For detailed information regarding admissions, please contact us via email at info@royaleducationschool.com or call our office at 0302-4995960. We would be delighted to assist you through the admission process.",
  "joining process": "Thank you for your interest in our school! Our joining process involves obtaining the application form, submitting necessary documents, attending an assessment or interview, and completing the fee payment. For detailed information regarding joining, please contact us via email at info@royaleducationschool.com or call our office at 0302-4995960. We would be delighted to assist you through the joining process.",
  "admission info": "Thank you for your interest in our school! Our admission process involves obtaining the application form, submitting necessary documents, attending an assessment or interview, and completing the fee payment. For detailed information regarding admissions, please contact us via email at info@royaleducationschool.com or call our office at 0302-4995960. We would be delighted to assist you through the admission process.",
  "how to join": "Thank you for your interest in our school! Our admission process involves obtaining the application form, submitting necessary documents, attending an assessment or interview, and completing the fee payment. For detailed information regarding admissions, please contact us via email at info@royaleducationschool.com or call our office at 0302-4995960. We would be delighted to assist you through the admission process.",

  "fee": "Our fee structure is designed to provide quality education at an affordable cost. To get the complete fee details, please visit our office during working hours or call us at 0302-4995960 for further assistance.",
  "tuition": "Our fee structure is designed to provide quality education at an affordable cost. To get the complete tuition details, please visit our office during working hours or call us at 0302-4995960 for further assistance.",
  "fees": "Our fee structure is designed to provide quality education at an affordable cost. To get the complete fee details, please visit our office during working hours or call us at 0302-4995960 for further assistance.",
  "cost": "Our fee structure is designed to provide quality education at an affordable cost. To get the complete fee details, please visit our office during working hours or call us at 0302-4995960 for further assistance.",
  "expenses": "Our fee structure is designed to provide quality education at an affordable cost. To get the complete fee details, please visit our office during working hours or call us at 0302-4995960 for further assistance.",
  "price": "Our fee structure is designed to provide quality education at an affordable cost. To get the complete fee details, please visit our office during working hours or call us at 0302-4995960 for further assistance.",

  "calendar": "Our academic calendar outlines all important dates, events, and holidays for the year. To request a copy of the calendar, kindly email us at info@royaleducationschool.com, and we’ll be happy to provide it.",
  "schedule": "Our academic schedule outlines all important dates, events, and holidays for the year. To request a copy of the schedule, kindly email us at info@royaleducationschool.com, and we’ll be happy to provide it.",
  "time table": "Our academic calendar outlines all important dates, events, and holidays for the year. To request a copy of the calendar, kindly email us at info@royaleducationschool.com, and we’ll be happy to provide it.",

  "activities": "At Royal Education School, we host a variety of extracurricular activities, events, and celebrations throughout the year. You can visit our gallery page to explore images of our students' achievements and memorable school events.",
  "events": "At Royal Education School, we host a variety of extracurricular activities, events, and celebrations throughout the year. You can visit our gallery page to explore images of our students' achievements and memorable school events.",
  "programs": "At Royal Education School, we host a variety of extracurricular activities, events, and celebrations throughout the year. You can visit our gallery page to explore images of our students' achievements and memorable school events.",
  "extracurricular": "At Royal Education School, we host a variety of extracurricular activities, events, and celebrations throughout the year. You can visit our gallery page to explore images of our students' achievements and memorable school events.",

  "features": "We take pride in offering the following key features: a State-of-the-Art Computer Lab, an internationally recognized Oxford Curriculum, a clean and safe learning environment, well-trained faculty, and a wide range of extracurricular activities.",
  "services": "We take pride in offering the following services: a State-of-the-Art Computer Lab, an internationally recognized Oxford Curriculum, a clean and safe learning environment, well-trained faculty, and a wide range of extracurricular activities.",
  "specialities": "We take pride in offering the following key features: a State-of-the-Art Computer Lab, an internationally recognized Oxford Curriculum, a clean and safe learning environment, well-trained faculty, and a wide range of extracurricular activities.",
  "offerings": "We take pride in offering the following key features: a State-of-the-Art Computer Lab, an internationally recognized Oxford Curriculum, a clean and safe learning environment, well-trained faculty, and a wide range of extracurricular activities.",
  "benefits": "We take pride in offering the following benefits: a State-of-the-Art Computer Lab, an internationally recognized Oxford Curriculum, a clean and safe learning environment, well-trained faculty, and a wide range of extracurricular activities.",

  "contact": "You can reach us at the following contact details: Address: Chak No 478 GB, Tehsil Samundri, District Faisalabad. Phone: 0302-4995960. Email: info@royaleducationschool.com. We look forward to assisting you!",
  "reach out": "You can reach us at the following contact details: Address: Chak No 478 GB, Tehsil Samundri, District Faisalabad. Phone: 0302-4995960. Email: info@royaleducationschool.com. We look forward to assisting you!",
  "contact info": "You can reach us at the following contact details: Address: Chak No 478 GB, Tehsil Samundri, District Faisalabad. Phone: 0302-4995960. Email: info@royaleducationschool.com. We look forward to assisting you!",
  "get in touch": "You can reach us at the following contact details: Address: Chak No 478 GB, Tehsil Samundri, District Faisalabad. Phone: 0302-4995960. Email: info@royaleducationschool.com. We look forward to assisting you!",
  "inquiry": "You can reach us at the following contact details: Address: Chak No 478 GB, Tehsil Samundri, District Faisalabad. Phone: 0302-4995960. Email: info@royaleducationschool.com. We look forward to assisting you!",

  "office": "Our office is open from Monday to Saturday, 8:00 AM to 2:00 PM. Please feel free to visit us during these hours for any inquiries or assistance.",
  "office hours": "Our office is open from Monday to Saturday, 8:00 AM to 2:00 PM. Please feel free to visit us during these hours for any inquiries or assistance.",
  "reception": "Our office is open from Monday to Saturday, 8:00 AM to 2:00 PM. Please feel free to visit us during these hours for any inquiries or assistance.",
  "timing": "Our school is open from Monday to Saturday, 8:00 AM to 2:00 PM. Please feel free to visit us during these hours for any inquiries or assistance.",

  "location": "Royal Education School is located at Chak No 478 GB, Tehsil Samundri, District Faisalabad. The campus is easily accessible and situated in a serene and safe environment.",
  "address": "Royal Education School is located at Chak No 478 GB, Tehsil Samundri, District Faisalabad. The campus is easily accessible and situated in a serene and safe environment.",
  "campus": "Royal Education School is located at Chak No 478 GB, Tehsil Samundri, District Faisalabad. The campus is easily accessible and situated in a serene and safe environment.",

  "transport": "Yes, we provide a reliable and secure transport service to ensure students’ convenience. Our transportation network covers various nearby areas. For more details, feel free to contact us.",
  "bus service": "Yes, we provide a reliable and secure transport service to ensure students’ convenience. Our transportation network covers various nearby areas. For more details, feel free to contact us.",
  "transportation": "Yes, we provide a reliable and secure transport service to ensure students’ convenience. Our transportation network covers various nearby areas. For more details, feel free to contact us.",
  "school bus": "Yes, we provide a reliable and secure transport service to ensure students’ convenience. Our transportation network covers various nearby areas. For more details, feel free to contact us.",
  "travel options": "Yes, we provide a reliable and secure transport service to ensure students’ convenience. Our transportation network covers various nearby areas. For more details, feel free to contact us.",

  "leaders": "Royal Education School is led by a team of dedicated professionals: Muhammad Ashraf (Founder), Bilal Ashraf (Managing Director & Head of IT Department), Nusrat Ashraf (Principal), and Sayam Nasir (Manager). Their vision and leadership drive our mission of academic excellence.",
  "management": "Royal Education School is led by a team of dedicated professionals: Muhammad Ashraf (Founder), Bilal Ashraf (Managing Director & Head of IT Department), Nusrat Ashraf (Principal), and Sayam Nasir (Manager). Their vision and leadership drive our mission of academic excellence.",
  "team": "Royal Education School is led by a team of dedicated professionals: Muhammad Ashraf (Founder), Bilal Ashraf (Managing Director & Head of IT Department), Nusrat Ashraf (Principal), and Sayam Nasir (Manager). Their vision and leadership drive our mission of academic excellence.",
  "administration": "Royal Education School is led by a team of dedicated professionals: Muhammad Ashraf (Founder), Bilal Ashraf (Managing Director & Head of IT Department), Nusrat Ashraf (Principal), and Sayam Nasir (Manager). Their vision and leadership drive our mission of academic excellence.",
  "directors": "Royal Education School is led by a team of dedicated professionals: Muhammad Ashraf (Founder), Bilal Ashraf (Managing Director & Head of IT Department), Nusrat Ashraf (Principal), and Sayam Nasir (Manager). Their vision and leadership drive our mission of academic excellence.",
  "faculty heads": "Royal Education School is led by a team of dedicated professionals: Muhammad Ashraf (Founder), Bilal Ashraf (Managing Director & Head of IT Department), Nusrat Ashraf (Principal), and Sayam Nasir (Manager). Their vision and leadership drive our mission of academic excellence.",

  "principal": "Our leadership team is headed by Principal Nusrat Ashraf, whose extensive experience in education ensures a strong academic foundation for our students. The team also includes Muhammad Ashraf (Founder), Bilal Ashraf (Managing Director & Head of IT Department), and Sayam Nasir (Manager).",
  "head of school": "Our leadership team is headed by Principal Nusrat Ashraf, whose extensive experience in education ensures a strong academic foundation for our students. The team also includes Muhammad Ashraf (Founder), Bilal Ashraf (Managing Director & Head of IT Department), and Sayam Nasir (Manager).",
  "school leader": "Our leadership team is headed by Principal Nusrat Ashraf, whose extensive experience in education ensures a strong academic foundation for our students. The team also includes Muhammad Ashraf (Founder), Bilal Ashraf (Managing Director & Head of IT Department), and Sayam Nasir (Manager).",
  "dean": "Our leadership team is headed by Principal Nusrat Ashraf, whose extensive experience in education ensures a strong academic foundation for our students. The team also includes Muhammad Ashraf (Founder), Bilal Ashraf (Managing Director & Head of IT Department), and Sayam Nasir (Manager).",

  "affordable": "Absolutely! Our school is committed to providing high-quality education at an affordable cost, ensuring accessibility for families while maintaining academic excellence.",
  "vision": "Our vision at Royal Education School is to nurture future leaders who excel academically, socially, and morally, fostering an environment of continuous growth and achievement.",
  "goal": "Our vision at Royal Education School is to nurture future leaders who excel academically, socially, and morally, fostering an environment of continuous growth and achievement.",
  "dream": "Our vision at Royal Education School is to nurture future leaders who excel academically, socially, and morally, fostering an environment of continuous growth and achievement.",
  "ambition": "Our vision at Royal Education School is to nurture future leaders who excel academically, socially, and morally, fostering an environment of continuous growth and achievement.",
  "objective": "Our vision at Royal Education School is to nurture future leaders who excel academically, socially, and morally, fostering an environment of continuous growth and achievement.",
  "future plans": "Our vision at Royal Education School is to nurture future leaders who excel academically, socially, and morally, fostering an environment of continuous growth and achievement.",

  "mission": "Our mission is to provide an inclusive learning environment where students can achieve their fullest potential through quality education, innovative teaching methods, and a supportive community.",
  "purpose": "Our mission is to provide an inclusive learning environment where students can achieve their fullest potential through quality education, innovative teaching methods, and a supportive community.",
  "aim": "Our mission is to provide an inclusive learning environment where students can achieve their fullest potential through quality education, innovative teaching methods, and a supportive community.",
  "agenda": "Our mission is to provide an inclusive learning environment where students can achieve their fullest potential through quality education, innovative teaching methods, and a supportive community.",
  "commitment": "Our mission is to provide an inclusive learning environment where students can achieve their fullest potential through quality education, innovative teaching methods, and a supportive community.",
  "values": "Our mission is to provide an inclusive learning environment where students can achieve their fullest potential through quality education, innovative teaching methods, and a supportive community.",

  "grades": "Royal Education School offers classes from Nursery to Grade 10, ensuring a comprehensive and robust academic foundation.",
  "classes": "Royal Education School offers classes from Nursery to Grade 10, ensuring a comprehensive and robust academic foundation.",
  "year levels": "Royal Education School offers classes from Nursery to Grade 10, ensuring a comprehensive and robust academic foundation.",
  "education levels": "Royal Education School offers classes from Nursery to Grade 10, ensuring a comprehensive and robust academic foundation.",
  "standards": "Royal Education School offers classes from Nursery to Grade 10, ensuring a comprehensive and robust academic foundation.",

  "facilities": "Our school provides state-of-the-art facilities, including a modern computer lab, a well-stocked library, spacious classrooms, a safe environment, and a secure transport system for students.",
  "extracurricular": "We encourage holistic development through a variety of extracurricular activities, such as sports, arts, debates, science fairs, and cultural events. These activities help students explore their interests and talents.",
  "non-academic activities": "We encourage holistic development through a variety of extracurricular activities, such as sports, arts, debates, science fairs, and cultural events. These activities help students explore their interests and talents.",
  "sports and arts": "We encourage holistic development through a variety of extracurricular activities, such as sports, arts, debates, science fairs, and cultural events. These activities help students explore their interests and talents.",

  "safety": "Student safety is our top priority. We ensure a secure campus with monitored entry and exit points, trained staff, and regular maintenance of facilities to provide a safe environment for all students.",
  "security": "Student safety is our top priority. We ensure a secure campus with monitored entry and exit points, trained staff, and regular maintenance of facilities to provide a safe environment for all students.",
  "protection": "Student safety is our top priority. We ensure a secure campus with monitored entry and exit points, trained staff, and regular maintenance of facilities to provide a safe environment for all students.",
  "care": "Student safety is our top priority. We ensure a secure campus with monitored entry and exit points, trained staff, and regular maintenance of facilities to provide a safe environment for all students.",
  "student safety": "Student safety is our top priority. We ensure a secure campus with monitored entry and exit points, trained staff, and regular maintenance of facilities to provide a safe environment for all students.",
  "safe environment": "Student safety is our top priority. We ensure a secure campus with monitored entry and exit points, trained staff, and regular maintenance of facilities to provide a safe environment for all students.",

  "scholarships": "We offer merit-based scholarships and financial aid programs to make quality education accessible to deserving students. For details, please contact us at info@royaleducationschool.com.",
  "financial aid": "We offer merit-based scholarships and financial aid programs to make quality education accessible to deserving students. For details, please contact us at info@royaleducationschool.com.",
  "grants": "We offer merit-based scholarships and financial aid programs to make quality education accessible to deserving students. For details, please contact us at info@royaleducationschool.com.",
  "fee discounts": "We offer merit-based scholarships and financial aid programs to make quality education accessible to deserving students. For details, please contact us at info@royaleducationschool.com.",
  "awards": "We offer merit-based scholarships and financial aid programs to make quality education accessible to deserving students. For details, please contact us at info@royaleducationschool.com.",
  "merit-based aid": "We offer merit-based scholarships and financial aid programs to make quality education accessible to deserving students. For details, please contact us at info@royaleducationschool.com.",

  "curriculum": "We follow the Oxford Curriculum, renowned for its comprehensive approach to learning and global recognition, ensuring our students are well-prepared for future opportunities.",
  "syllabus": "We follow the Oxford Curriculum, renowned for its comprehensive approach to learning and global recognition, ensuring our students are well-prepared for future opportunities.",
  "program": "We follow the Oxford Curriculum, renowned for its comprehensive approach to learning and global recognition, ensuring our students are well-prepared for future opportunities.",
  "course content": "We follow the Oxford Curriculum, renowned for its comprehensive approach to learning and global recognition, ensuring our students are well-prepared for future opportunities.",
  "study plan": "We follow the Oxford Curriculum, renowned for its comprehensive approach to learning and global recognition, ensuring our students are well-prepared for future opportunities.",
  "learning material": "We follow the Oxford Curriculum, renowned for its comprehensive approach to learning and global recognition, ensuring our students are well-prepared for future opportunities.",

  "parent updates": "Parents can stay updated about their child’s progress through parent-teacher meetings, progress reports, and direct communication with teachers. We also share important updates via our official communication channels.",
  "reports": "Parents can stay updated about their child’s progress through parent-teacher meetings, progress reports, and direct communication with teachers. We also share important updates via our official communication channels.",
  "notices": "Parents can stay updated about their child’s progress through parent-teacher meetings, progress reports, and direct communication with teachers. We also share important updates via our official communication channels.",
  "progress updates": "Parents can stay updated about their child’s progress through parent-teacher meetings, progress reports, and direct communication with teachers. We also share important updates via our official communication channels.",

  "schedule visit": "To schedule a visit to our school, please contact us at 0302-4995960 or email info@royaleducationschool.com. Our team will be delighted to arrange a guided tour for you.",
  "book a tour": "To schedule a visit to our school, please contact us at 0302-4995960 or email info@royaleducationschool.com. Our team will be delighted to arrange a guided tour for you.",
  "visit planning": "To schedule a visit to our school, please contact us at 0302-4995960 or email info@royaleducationschool.com. Our team will be delighted to arrange a guided tour for you.",
  "campus tour": "To schedule a visit to our school, please contact us at 0302-4995960 or email info@royaleducationschool.com. Our team will be delighted to arrange a guided tour for you.",
  "school visit": "To schedule a visit to our school, please contact us at 0302-4995960 or email info@royaleducationschool.com. Our team will be delighted to arrange a guided tour for you.",

  "admission process": "Thank you for your interest in our school! Our admission process involves obtaining the application form, submitting necessary documents, attending an assessment or interview, and completing the fee payment. For detailed information regarding admissions, please contact us via email at info@royaleducationschool.com or call our office at 0302-4995960. We would be delighted to assist you through the admission process.",
  "application process": "Thank you for your interest in our school! Our admission process involves obtaining the application form, submitting necessary documents, attending an assessment or interview, and completing the fee payment. For detailed information regarding admissions, please contact us via email at info@royaleducationschool.com or call our office at 0302-4995960. We would be delighted to assist you through the admission process.",

  "default": "I'm sorry, I couldn't understand your query. Could you please rephrase your question or provide more details so I can assist you effectively?"
};




function getResponse(input) {
  input = input.toLowerCase().trim(); // Normalize input (lowercase, no extra spaces)

  console.log("User Input:", input); // Debugging user input

  // Check if the input matches any predefined messages
  if (messages[input]) {
    console.log("Exact Match Found:", input); // Debugging exact match
    return messages[input];
  }

  // If no exact match is found, return default response
  console.log("No Exact Match Found"); // Debugging fallback
  return messages["default"];
}




let isChatbotOpen = false; // To track the chatbot state

function appendMessage(text, sender) {
  const messageContainer = document.createElement('div');
  messageContainer.classList.add('message-container');

  const avatar = document.createElement('img');
  avatar.classList.add('avatar');
  avatar.src = sender === 'bot' ? botAvatar : userAvatar;

  const message = document.createElement('div');
  message.classList.add(sender === 'bot' ? 'bot-message' : 'user-message');
  message.textContent = text;

  messageContainer.appendChild(avatar);
  messageContainer.appendChild(message);

  chatBody.appendChild(messageContainer);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function botReply(userMessage) {
  typingIndicator.style.display = 'block';

  setTimeout(() => {
    typingIndicator.style.display = 'none';
    const reply = Object.keys(messages).find(key =>
      userMessage.toLowerCase().includes(key)
    )
      ? messages[Object.keys(messages).find(key =>
          userMessage.toLowerCase().includes(key)
        )]
      : messages.default;
    appendMessage(reply, 'bot');
  }, 1000);
}

function toggleChatbot() {
  if (isChatbotOpen) {
    chatbotContainer.style.display = 'none';
    chatBody.innerHTML = ''; // Clear previous messages
    userInput.value = ''; // Clear input field
  } else {
    chatbotContainer.style.display = 'flex';
  }
  isChatbotOpen = !isChatbotOpen; // Toggle state
}

sendBtn.addEventListener('click', () => {
  const userMessage = userInput.value.trim();
  if (userMessage) {
    appendMessage(userMessage, 'user');
    userInput.value = '';
    botReply(userMessage);
  }
});

userInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    sendBtn.click();
  }
});

// Toggle chatbot visibility on toggle button click
chatbotToggle.addEventListener('click', toggleChatbot);

// Change close button functionality
chatbotClose.addEventListener('click', toggleChatbot);

// Hover effect for the toggle button
chatbotToggle.addEventListener('mouseover', () => {
  chatbotToggle.style.transform = 'scale(1.1)';
});

chatbotToggle.addEventListener('mouseout', () => {
  chatbotToggle.style.transform = 'scale(1)';
});

