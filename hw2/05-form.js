// Stuart Rimel

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = event.target[0].value;
  const email = event.target[1].value;
  const status = event.target[2].value;
  const programmingLang = event.target[4].checked;
  const operatingSystems = event.target[5].checked;
  const fullStack = event.target[6].checked;
  const textArea = event.target[7].value;
  console.log(`FORM SUBMITTED!
    Details of submission:
        name: ${name}
        email: ${email}
        registration status: ${status}
        previous classes:
            Programming Languages: ${programmingLang}
            Operating Systems: ${operatingSystems}
            Full Stack Web Development: ${fullStack}
    Additional Comments: 
        ${textArea}
  `);
  form.reset();
});
