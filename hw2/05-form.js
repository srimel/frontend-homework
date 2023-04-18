// Stuart Rimel

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  const progLang = data.get('programmingLang');
  const opSys = data.get('operatingSystems');
  const fullStack = data.get('fullStack');
  console.log(`FORM SUBMITTED!
    Details of submission:
        Name: ${data.get('name')}
        Email: ${data.get('email')}
        Registration Status: ${data.get('status')}
        Previous Classes:`);
  progLang ? console.log(`\t\tProgramming Languages`) : null;
  opSys ? console.log(`\t\tOperating Systems`) : null;
  fullStack ? console.log(`\t\tFull Stack Web Development`) : null;
  console.log(`\tAdditional Comments: ${data.get('comments')}`);
  form.reset();
});
