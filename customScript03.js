function changeReview(reviewNumber, reviewImageID) {
    let dummyObject = {
      review1: {
        reviewText: `Jogn Due The standard chunk of Lorem Ipsum used since the 1500s 
        is reproduced below for those interested. Sections Bonorum et Malorum original.`,
        onlyName: "Maria Sophezzi",
        reviewerInfo: "COO, AMERIMAR ENTERPRISES, INC",
      },
      review2: {
        reviewText: `minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea sed do eiusmod tempor incididunt ut labore et dolore magna
          incididunt ut labore et dolore magna`,
        onlyName: "Adbal Khan",
        reviewerInfo: "CEO, FAST CARS UNITED",
      },
      review3: {
        reviewText: `nisi ut aliquip ex ea sed do eiusmod tempor incididunt ut 
            labore et dolore incididunt ut labore et dolore magna incididunt ut labore et dolore magna
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip`,
        onlyName: "Caritta Seppa",
        reviewerInfo: "CFO, TESPACK",
      },
      review4: {
        reviewText: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab 
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt`,
        onlyName: "Romeo Gonzales",
        reviewerInfo: "CTO, MOKO TECHNOLOGIES",
      },
      review5: {
        reviewText: `aspernatur aut odit aut fugit, sed quia consequuntur magni 
        dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam 
        est, qui dolorem ipsum quia dolor sit amet`,
        onlyName: "Hope Sandoval",
        reviewerInfo: "VOCALIST, MAZZY STAR",
      },
      review6: {
        reviewText: ` consectetur, adipisci velit, sed quia non numquam eius modi 
        tempora incidunt ut labore et dolore magnam aliquam`,
        onlyName: "Justin Blake",
        reviewerInfo: "DEPUTY MANAGER, RENTNOW DOT COM",
      },
      review7: {
        reviewText: `quaerat voluptatem. Ut enim ad minima veniam, quis nostrum 
        exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex 
        ea commodi consequatur`,
        onlyName: "Maliha Rahman",
        reviewerInfo: "CEO, SHOHOZ",
      },
      review8: {
        reviewText: `Quis autem vel eum iure reprehenderit qui in ea voluptate 
        velit esse quam nihil molestiae consequatur, vel illum qui dolorem`,
        onlyName: "Alex Barner",
        reviewerInfo: "CFO, MULTIDOG FINANCE",
      },
    }
    // Remove colorBurst class name from all elements
    let imageClasses = document.getElementsByClassName('reviewer-image');
    for(let i=0; i<imageClasses.length; i++) {
      imageClasses[i].className = "reviewer-image";
    }
    // Add colorBurst class name to the selected image
    document.getElementById(reviewImageID).className += " colorBurst";
    // Change review text, user name, user info
    document.getElementById("review-text").innerHTML = dummyObject[reviewNumber].reviewText;
    document.getElementById("onlyname").innerHTML = dummyObject[reviewNumber].onlyName;
    document.getElementById("reviewer-info").innerHTML = dummyObject[reviewNumber].reviewerInfo;
}