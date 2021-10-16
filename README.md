# Binary Manipulation and Simplication Game

## Introduction
* Computer Science teaching is gradually moving towards non-computer based classroom learning, with limited school based equipment availability.
* Resulting in the lack of interactivity in the lesson, utilising technology.
* The intention is to supply a mobile quiz solution for learners on an A-Level/GCSE Computer Science course, focusing on the topic: Binary Manipulation and Simplication.
* The web based application can be accessible via mobile devices or limited mobile device technology accessible to the teacher
* The game element can be utilised as a starter or plenary activity, testing knowledge at the end of the topic delivery
* The game itself will be a full graphical user interface which would benefit with a time-based element to mimic the examination time
* The game would complement working time for the learner to plan their answers, which can also be handed into the teacher, to show workings towards a set of questions


[[INSERT IMAGE OF RESPONSIVE DISPLAY OF GAME]]

* Link to view final game via GitHub. 

## Table of Content

* [Strategic Plane](#strategic-plane)
  + [Purpose](#purpose)
  + [User Stories](#user-stories)
* [Scope Plane](#scope-plane)
* [Structure Plane](#structure-plane)
  + [Opportunities](#opportunities)
* [Skeleton Plane](#skeleton-plane)
  + [Wireframe](#wireframe)
* [Surface Plane](#surface-plane)
  + [Designs](#designs)
    - [Background Content](#background-content)
    - [Colour Strategy](#colour-strategy)
    - [Typography](#typography)
    - [Icons and Characters](#icons-and-characters)
* [Features](#features)
* [Future Enhancements](#future-enhancements)
* [Testing Strategy](#testing-strategy)
* [Deployment Strategy](#deployment-strategy)
* [Credit and References](#credit-and-references)
  + [Credit](#credit)
  + [References](#references)

## Strategic Plane
### Purpose
* To provide students with a fun way of learning content at the end of the topic delivery
* To create a graphical user interface to support their learning with is fully accessible via a mobile device
* Media access controls support ipad and iphone size screens with limited left/right scrolling
* Screen reader technology assistance should be compatiable with the game play
* Up to 20 exam style questions that complement the following topics: 
    + Binary Addition
    + Binary Subtraction
    + Ones Complement
    + Twos Complement
    + Bitwise Manipulation
    + Boolean Simplication
    + Karnaugh Map
 
* A time based element to respond to the exam style question
* An appropriate output that supports the learner in being able to navigate solutions to the question and further revision links to support their learning

### User Stories
* As a user i want an easily accessible game that supports my learning of binary manipulation and simplication
* As a user i want to be able to answer a series of questions and know how successful during my learning journey
* As a user i want to see exam style questions that compliment actual exam style questions
* As a user i want to be able to be able to play the game inside and outside a classroom environment via a mobile device
* As a user i would like the game to accessible via a touchscreen, to reduce keyboard functionality
* As a user i would like to be able to have support with assistive technology to read questions and potential answers
* As a user i would like to minimise the amount of navigation to limited buttons

## Scope Plane

### Planned Features
* Although the target device is predominantly for mobile devices, it should also be accessible on a computer screen (max-width: 2000px)
* All navigational elements within the game should be clear for users to click and access features within the game
* The user interface should be clear with high contrast between the background and foreground elements
* The interface should compliment touchscreen technology (core audience) as well as keyboard functionality (peripheral audience)
* An appropriate time frame for each question (considering 2 minutes per question, forwarding to next question with no interaction)
* Utilise DOM elements to personalise the game to the user, considering naming element and score feature with encouraging messages
* To provide working solutions for the user to see exemplar answers to each question, accessible at the end of the quiz
* A top score feature that motivates the learner to engage a repeat of the revision questions to improve their score
* Simple html elements that limits the number of html pages within the design
* Storing questions and high scores within an external file (for easy recall each time the game is played and recall previous scores)
* Using multiple choice questions, 4 options per question (as per research 4 options seems a popular choice)
## Structure Plane
<table>
<tr><th>User story</th><th>Success Criteria</th><th>Implementation plan</th></tr>
<tr><td>As a user i want an easily accessible game that supports my learning of binary manipulation and simplication</td><td>The user should be able to access a game through with clear labelled navigation and instruction support for advice and guidance on starting the game</td><td>Simple navigational buttons, with limited screen text.  Modals can also assist with message instructions without navigating away from the game itself.</td></tr>
<tr><td>As a user i want to be able to answer a series of questions and know how successful during my learning journey</td><td>User should be able to see attainment as they go through a series of questions to support their learning</td><td>Relevant score increments re-calculated at the end of each question that update according to the question that they are doing. </td></tr>
<tr><td>As a user i want to see exam style questions that compliment actual exam style questions</td><td>Identify suitable exam questions and use 'similar but different' approach to be able to show misconceptions in workings that are common within the actual exam</td><td>Use multiple choice options that are plausible misconceptions with a correct answer expected to increment the total score.</td></tr>
<tr><td>As a user i want to be able to be able to play the game inside and outside a classroom environment via a mobile device</td><td>A simple GUI that allows the user to navigate the main elements of the game</td><td>limit the number of html pages and consider the use of modals and CSS display options to limit the navigation away from the game itself.</td></tr>
<tr><td>As a user i would like the game to accessible via a touchscreen, to reduce keyboard functionality</td><td>Simple clear navigational elements that allow the user to progress through the game and see their result at the end of the game with relevant tools to support how the answers could be achieved.  As the game has a timer the user would be expected to workout their answers which can then be cross referenced with the actual working solution</td><td>The game should be accessible on both computer screens, utilising a key board event listerner as well as relevant touch elements with clear box elements</td></tr>
<tr><td>As a user i would like to be able to have support with assistive technology to read questions and potential answers</td><td>Allow screen reading technology on elements associated with the game and relevant accessibility feature to ensure high contrast functionality</td><td>Apply a setting feature that triggers accessibility features, such as high contrast and utilise relevant aria HTML elements within the actual game itself to allow greater functionality for those users that require assistive technology.</td></tr>
<tr><td>As a user i would like to minimise the amount of navigation to limited buttons</td><td>Reduce the number of user touches/clicks to navigate throughout the game</td><td>Ensure automated features navigate to relevant questions within the user having to click (NEXT) to the appropriate question. </td></tr>
</table>

### Opportunities
* Provide a gaming environment that utilises colour schemes and contrast that are appropriate to the core audience (14 to 18 year olds)
* Elements within the game should be a size that compliment both mobile and computer displays
* Consider animated elements on buttons (mostly mouseover events) that help the user locate their intended options within the multiple choice game
* Use a timer to reduce the amount of time for each question to allow a timely completion of the game itself, to support the teacher to use as a 10 minute starter or plenary activity
* Consider external storage of game questions that are random (to reduce copying their peers) and stores game scores that can easily be retrieved when re-calling the content of the game.
* Supportive material utilising innerHTML elements that allow the learners to see model answers relating to the questions, which they have control to see and utilise.  


## Skeleton Plane

### Wireframe

Initial idea before wireframe intention:

<img src="assets/images/README_img/Initial idea_pre-wireframe.png" width = "550px">

Mobile application wireframe design using [Balsamiq](https://balsamiq.com/) that simplifies the construction and intended route element between each of the quiz elements: 

<img src="assets/images/README_img/mobile_wireframe_map.png" width = "900px">

## Surface Plane

### Designs

#### Background Content

The following images have been sourced as the html background, one requiring attribute permission and the other one created by myself, using pixlr:

<table>
<tr><th>Image requiring attributes</th><th>Own Image idea</th></tr>
<tr><td><img src="assets/images/bg_img_V1.jpg" height = "400px"><br><a href="https://www.vecteezy.com/free-vector/binary-code-background">Binary Code Background Vectors by Vecteezy</a></td><td><img src="assets/images/bg_img_V2.png" height = "400px"><br>Created by myself using <a href = "https://pixlr.com/">Pixlr</a></td></tr>
</table>

I decided to go with the image that i created for the html pages, as this had a higher contrast between both the foreground and background elements, to support accessibiity requirements.  

#### Colour Strategy
* With binary having limited values of 1 or 0, i decided to utilise this within the colour them, focusing on the grayscale approach.  
* To ensure a high contrast and visibility, i will utilise the light on dark approach, to ensure that the user can see the content. 

<img src="assets/images/README_img/colour_contrast_check.png" width="550px">

* I have showcased below what the end result of the colour theory exercise could be visualised as on the landing page test:

<img src="assets/images/README_img/land_page_choice.png" width="550px">

The benefit of this approach is to ascertain how the colour theory can be utilised and i am happy with the contrast element.  Further enhancements will be made to Version 1 designs to ensure that the contrast scores from the previous project exceeded.

#### Typography

For the heading i will use Roboto:

``` font-family: 'Roboto', sans-serif;```

For the body text i will use Noto Sans JP:

``` font-family: 'Noto Sans JP', sans-serif;```

Example text to showcase the heading and body text:

<img src="assets/images/README_img/font_styles.png" width = "450px">

#### Icons and Characters


## Features

## Future Enhancements

## Testing Strategy
* Refer to the following link to see a diarised approach to testing and noterised feedback
  * [Testing Link](TESTING.md)




## Deployment Strategy
The initial web template was cloned from into my GitHub repository: 

```https://github.com/Code-Institute-Org/gitpod-full-template``` 

* An alternative approach to use this template in GitPod is by using the following in the Gitpod terminal: ```git clone https://github.com/Code-Institute-Org/gitpod-full-template.git```
* You can cut ties by typing ```git remote rm origin``` into the terminal either globally or locally.
* However, i chose to clone the template into my GitHub repository and then ported across to GitPod to further develop the code required for the Binary Quiz Game.
* Regular commits from GitPod to GitHub were made in order to access the repository outside of the GitPod Online Application, using the following terminal commands:
  * ```git add .```
  * ```git commit -m "relevant comment to changes to the directories and updates"```
  * ```git push``` which updates the relevant GitHub repository based on the GitPod changes.  
* The landing page to the game was named ```index.html``` for deployment and routing purposes.
* Alot of the testing of code elements were completed locally, using Visual Studio Code and there is an alternative approach to work locally and still update to Github.
  * The following link explains how to clone and work between GitHub and Visual Studio Code on the followings: 
    * [Link1](https://docs.microsoft.com/en-us/azure/developer/javascript/how-to/with-visual-studio-code/clone-github-repository)
    * [Link2](https://code.visualstudio.com/docs/editor/github)
* As my role involves working away with sometimes unpredictable wifi and data roaming, it is viable to utilise local storage for testing purposes and commit to GitHub reguarly.
    

## Credit and References

### References
* [Setting up contents page on README file](https://ecotrust-canada.github.io/markdown-toc/)
* [background image](https://www.vecteezy.com/vector-art/174467-matrix-style-binary-background)
* [bootstrap modal](https://getbootstrap.com/docs/4.0/components/modal/)
* [alternative modal considerations](https://sabe.io/tutorials/how-to-create-modal-popup-box)
* [consideration towards a game timer](https://stackoverflow.com/questions/44314897/javascript-timer-for-a-quiz)
* [carousel idea](https://medium.com/@marcusmichaels/how-to-build-a-carousel-from-scratch-in-vanilla-js-9a096d3b98c9)
* [Further carousel ideas](https://medium.com/@marcusmichaels/how-to-build-a-carousel-from-scratch-in-vanilla-js-9a096d3b98c9)
* [computer science questions inspired by this textbook](https://www.pgonline.co.uk/resources/computer-science/a-level-ocr/ocr-a-level-textbook/)
* [offline editor Visual Studio Code used while working away](https://code.visualstudio.com/)
* Photoshop used to create background image for the quiz game
* Code Institute [GitPod Full Template](https://github.com/Code-Institute-Org/gitpod-full-template)
* Code Institute [ReadMe Guidance](https://github.com/Code-Institute-Solutions/readme-template)
* [GitPod README Assist](https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

### Credit
* Code Institute - Support on links between GitPod and Git Hub and usability requirements
* Code Institute - Relevant Slack Channel advice and guidance from previous students
* Prototype 1 Reviewers: Katie Tuck and Dave Blyth on usability testing (held virtually via Zoom)
* Prototype 2 Reviewer: Paul Kemp for final usability testing (held face to face on 28/10/21 in Bristol)
* Relevant feedback from Brian Macharia - Mentor support in the 1 meting identifying final iterative testing requirements



