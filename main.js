const team = [
    {
      firstName: "Wayne",
      surname: "Barnett",
      role: "Founder & CEO",
      photo: "wayne-barnett-founder-ceo.jpg"
    },

    {
        firstName: "Angela",
        surname: "Carrol",
        role: "Chief Editor",
        photo: "angela-caroll-chief-editor.jpg"
      },

      {
        firstName: "Walter",
        surname: "Gordon",
        role: "Office Manager",
        photo: "walter-gordon-office-manager.jpg"
      },


      {
        firstName: "Angela",
        surname: "Lopez",
        role: "Social Media Manager",
        photo: "angela-lopez-social-media-manager.jpg"
      },

      {
        firstName: "Scott",
        surname: "Estrada",
        role: "Developer",
        photo: "scott-estrada-developer.jpg"
      },

      {
        firstName: "Barbara",
        surname: "Ramos",
        role: "Graphic Designer",
        photo: "barbara-ramos-graphic-designer.jpg"
      },

    ];
    
    for (let i = 0; i < team.length; i++) {
        const element = team[i];
        document.getElementById("team").innerHTML = team[i];
        console.log(team)
    }

















