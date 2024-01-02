class AppConstants {
  //#region KPI
  static ClientList = 100;
  static ClientDescription = "Happy clients";
  static People = 50; //this will be replaced later with the actual count from DB call
  static PeopleSay = "People say about her";
  static YOE = 5;
  static YOEs = "Years of Experience";
  //#endregion
  static AdvocateName = "Advocate Sangita Chowdhuri";
  //#region  Image slider
  static Slider = [
    {
      location: `${window.location.origin}/Images/criminal-law.jpg`,
      caption: "We provide legal advices for Criminal matters",
    },
    {
      location: `${window.location.origin}/Images/civil-law.jpg`,
      caption: "We provide legal advices for Civil matters",
    },
    {
      location: `${window.location.origin}/Images/family-law.jpg`,
      caption: "We provide legal advices for Family issues like property matters.",
    },
    {
      location: `${window.location.origin}/Images/property-law.jpg`,
      caption: "We provide legal advices for Property matters",
    },
    {
      location: `${window.location.origin}/Images/real-estate-law.jpg`,
      caption: "We provide legal advices for Reat-Estate related matters",
    },
  ];
  //#endregion
}

export default AppConstants;
