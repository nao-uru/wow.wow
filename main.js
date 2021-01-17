`use strict`;

// {
//   document.querySelector('form').addEventListener('submit', () => {
//     alert('Thank you!');
//   });

// }

{

  const btn = document.getElementById('n-btn');

  btn.addEventListener('click', () => {
    const countries = ['Tipei','LA','Munich','Vienna','Prague','Barcelona','chefchaouen','KL','Cebu',];
    const n = Math.floor(Math.random() * countries.length);
    // for(i = 0; i < countries.length; i++) {
    //   btn.textContent = countries[i];
    // }
    btn.textContent = countries[n];

    // if(btn.textContent === countries[0]) {
    //   btn.style.backgroundImage = "url(countries.photos/tipei.jpeg)";
    // } else if(btn.textContent === countries[1]) {
    //   btn.style.backgroundImage = "url(countries.photos/usa.jpeg)";
    //   btn.style.backgroundPositionX = '-30px';
    // } 
    switch(countries[n]) {
      case countries[0]:
        btn.style.backgroundImage ="url(countries.photos/tipei.jpeg)";
        btn.style.backgroundPositionX = '-20px';
        break; 
      case countries[1]:
        btn.style.backgroundImage = "url(countries.photos/usa.jpeg)";
        btn.style.backgroundPositionX = '-30px';
        break;
      case countries[2]:
        btn.style.backgroundImage ="url(countries.photos/munich.jpeg)";
        break;  
      case countries[3]:
        btn.style.backgroundImage ="url(countries.photos/vienna.jpeg)";
        break;  
      case countries[4]:
        btn.style.backgroundImage ="url(countries.photos/prague.jpeg)";
        break;  
      case countries[5]:
        btn.style.backgroundImage ="url(countries.photos/barcelona.jpeg)";
        break;  
      case countries[6]:
        btn.style.backgroundImage ="url(countries.photos/chef.jpeg)";
        btn.style.backgroundPositionY = '-60px';
        break;  
      case countries[7]:
        btn.style.backgroundImage ="url(countries.photos/kl.jpeg)";
        break;  
      case countries[8]:
        btn.style.backgroundImage ="url(countries.photos/cebu.jpeg)";
        btn.style.backgroundPositionY = '-100px';
        break;  
    }
  });

}