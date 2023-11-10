//Percorsi delle immagini che voglio inserire
imagesPath = [
     "./img/wayne-barnett-founder-ceo.jpg",
     "./img/angela-caroll-chief-editor.jpg",
     "./img/walter-gordon-office-manager.jpg",
     "./img/angela-lopez-social-media-manager.jpg",
     "./img/scott-estrada-developer.jpg",
     "./img/barbara-ramos-graphic-designer.jpg"
     

];

const team = [
    {
        firstName: "Wayne ",
        surname: "Barnett, ",
        role: "Founder & CEO "
    },

    {
        firstName: "Angela ",
        surname: "Carrol, ",
        role: "Chief Editor " 

    },

    {
        firstName: "Walter ",
        surname: "Gordon, ",
        role: "Office Manager "
    },


    {
        firstName: "Angela ",
        surname: "Lopez, ",
        role: "Social Media Manager ",
    },

    {
        firstName: "Scott ",
        surname: "Estrada, ",
        role: "Developer "
    },

    {
        firstName: "Barbara ",
        surname: "Ramos, ",
        role: "Graphic Designer "
    },

];

for (let i = 0; i < team.length; i++) {

    const element = team[i]

    // Create element:
    const para = document.createElement("p");
    document.getElementById("myDIV").innerHTML += team[i].firstName;
    document.getElementById("myDIV").innerHTML += team[i].surname;
    document.getElementById("myDIV").innerHTML += team[i].role;
    document.getElementById("myDIV").appendChild(para);

}

















