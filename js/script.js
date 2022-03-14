window.onload = function(){
    // ! 1.0 Point to Audio Files and store in array
    let soundEffects = [new Audio('/tamagotchigame/audio/nature_sound.wav'),
    new Audio('/tamagotchigame/audio/neutral.wav'),
    new Audio('/tamagotchigame/audio/laugh.wav'),
    new Audio('/tamagotchigame/audio/sad.wav'),
    new Audio('/tamagotchigame/audio/angry.mp3'),
    new Audio('/tamagotchigame/audio/dead.ogg'),];

    soundEffects[0].play();

    let virtualPet = document.getElementById('virtualPet').contentDocument

    let cheekyMonkey = virtualPet.getElementById('cheekyMonkeyGroup');

    let cloudSmall = virtualPet.getElementById('cloud2');
    let cloudBig = virtualPet.getElementById('cloud1');
    
    let leftEar = virtualPet.getElementById('left-ear');
    let rightEar = virtualPet.getElementById('right-ear');

    let leftDeadEye = virtualPet.getElementById('left-deadEye');
    let rightDeadEye = virtualPet.getElementById('right-deadEye');

    let leftNormalEye = virtualPet.getElementById('left-normaleye');
    let rightNormalEye = virtualPet.getElementById('right-normaleye');

    let leftEyeLid = virtualPet.getElementById('left-eye-lid');
    let rightEyeLid = virtualPet.getElementById('right-eye-lid');

    let leftEyeBrows = virtualPet.getElementById('left-eyeBrows');
    let rightEyeBrows = virtualPet.getElementById('right-eyeBrows');

    let tearsAnimation = virtualPet.getElementById('tears');

    let thermometer = virtualPet.getElementById('thermometer');
    let tempAnimation = virtualPet.getElementById('temp');

    let bendLowerHand = virtualPet.getElementById('bend-lower-hand');
    //let backBody = virtualPet.getElementById('back-body');
    //let body = virtualPet.getElementById('body');
    let face = virtualPet.getElementById('faceGroup');
    //let rightHand = virtualPet.getElementById('right-hand');
    //let rightBackHand = virtualPet.getElementById('back-hand');

    let eatBanana = virtualPet.getElementById('fruit-banana');
    let eatBone = virtualPet.getElementById('yucky-bone');

    let neutralMouth = virtualPet.getElementById('neutral-mouth');
    let happyMouth = virtualPet.getElementById('happy-mouth');
    let sadMouth = virtualPet.getElementById('sad-mouth');
    let angryMouth = virtualPet.getElementById('angry-mouth');
  
    let cheeks = virtualPet.getElementById('cheeks');

    // **************** DISPLAY FEELLINGS ****************
    let neutralFeeling = virtualPet.getElementById('neutral');
    let happyFeeling = virtualPet.getElementById('happy');
    let sadFeeling = virtualPet.getElementById('sad');
    let angryFeeling = virtualPet.getElementById('angry');
    let sickFeeling = virtualPet.getElementById('sick');
    let deadFeeling = virtualPet.getElementById('dead');

    // **************** DISPLAY SENTENCES ****************
    let neutralSentence = virtualPet.getElementById('neutral-sentence');
    let happySentence = virtualPet.getElementById('happy-sentence');
    let sadSentence = virtualPet.getElementById('sad-sentence');
    let angrySentence = virtualPet.getElementById('angry-sentence');
    let sickSentence = virtualPet.getElementById('sick-sentence');
    //let tempWord = virtualPet.getElementById('HIGH');
    let deadSentence = virtualPet.getElementById('dead-sentence');
    let bananaSentence = virtualPet.getElementById('banana-sentence');
    let boneSentence = virtualPet.getElementById('bone-sentence');


    // **************** STORING VARIABLES IN ARRAY****************
    let earsAnimation = [leftEar,rightEar];
    let deadEyes = [leftDeadEye, rightDeadEye];
    let closedEyes = [leftEyeLid, rightEyeLid];
    let normalEyes = [leftNormalEye, rightNormalEye];
    let eyeBrows = [leftEyeBrows, leftEyeBrows];
    let cloudGroup = [cloudBig, cloudSmall];
    //let bodyAnimation = [bendLowerHand,backBody, body,face,rightHand,rightBackHand];
    

    // **************** EMOTION BUTTON TO TRIGGER FUNCTION****************
     let happyBtn = virtualPet.getElementById('happyButton');
     let sadBtn = virtualPet.getElementById('sadButton');
     let angryBtn = virtualPet.getElementById('angryButton');
     let neutralBtn = virtualPet.getElementById('neutralButton');
     let sickBtn = virtualPet.getElementById('sickButton');
     let deadBtn = virtualPet.getElementById('deadButton');

    // **************** FEED BUTTON TO TRIGGER FUNCTION****************
     let feedBananaBtn = virtualPet.getElementById('feedBanana');
     let feedBoneBtn = virtualPet.getElementById('feedBone');

    // **************** RESET BUTTON TO TRIGGER FUNCTION****************
     let resetBtn = virtualPet.getElementById('resetButton');

     var screenSize = screen.width;

   // **************** SET TRANSFORM ORIGIN OF TARGETS FOR ROTATION ****************
   // !Call the transform setup function!
   transformOriginSet(); 

    // **************** INTRO FADE ****************

    gsap.from(cheekyMonkey, {
        duration: 2,
        autoAlpha: 0
    });


    // **************** ANIMATION FUNCTIONS ****************
    function transformOriginSet() {
        gsap.set(leftEar, {
            transformOrigin: "bottom center"
        });
        gsap.set(rightEar, {
            transformOrigin: "bottom center"
        });
        gsap.set(leftEyeBrows, {
            transformOrigin: "bottom center"
        });
        gsap.set(rightEyeBrows, {
            transformOrigin: "bottom center"
        });

        gsap.set(happyMouth, {
            transformOrigin: "center"
        });

        gsap.set(happyBtn, {
            transformOrigin: "center"
        });

        gsap.set(sadBtn, {
            transformOrigin: "center"
        });

        gsap.set(angryBtn, {
            transformOrigin: "center"
        });

        gsap.set(neutralBtn, {
            transformOrigin: "center"
        });

        gsap.set(sickBtn, {
            transformOrigin: "center"
        });

        gsap.set(deadBtn, {
            transformOrigin: "center"
        });

        gsap.set(resetBtn, {
            transformOrigin: "center"
        });

        gsap.set(feedBananaBtn, {
            transformOrigin: "center"
        });

        gsap.set(feedBoneBtn, {
            transformOrigin: "center"
        });

        gsap.set(bendLowerHand, {
            transformOrigin: "center center"
        });

        gsap.set(tempAnimation, {
            transformOrigin: "center bottom"
        });

        gsap.set(face, {
            transformOrigin: "center bottom"
        });
       
    }


    //  * Add event listener and run function when we click
    happyBtn.addEventListener('click', function(){
        console.log("I am Happy");
        happy();
        soundEffects[2].play();
        soundEffects[2].volume = 0.2;
        soundEffects[1].pause(); 
        soundEffects[3].pause();
        soundEffects[4].pause();
        soundEffects[5].pause();
    });
    
    sadBtn.addEventListener('click', function(){
        console.log("I am Sad");
        sad();
        soundEffects[1].pause(); 
        soundEffects[2].pause();
        soundEffects[3].play();
        soundEffects[3].volume = 0.2;
        soundEffects[4].pause();
        soundEffects[5].pause();
    });

    angryBtn.addEventListener('click', function(){
        console.log("I am angry");
        angry(); 
        soundEffects[1].pause();  
        soundEffects[2].pause();
        soundEffects[3].pause();
        soundEffects[4].play();
        soundEffects[4].volume = 0.2;
        soundEffects[5].pause();
    });

    neutralBtn.addEventListener('click', function() {
        console.log("I am Neutral");
        neutral();
        
        soundEffects[1].play();
        soundEffects[1].volume = 0.2;
        soundEffects[2].pause();
        soundEffects[3].pause();
        soundEffects[4].pause();
        soundEffects[5].pause();
    });

    sickBtn.addEventListener('click', function() {
        console.log("I am Sick");
        sick();
        soundEffects[1].pause(); 
        soundEffects[2].pause();
        soundEffects[3].play();
        soundEffects[3].volume = 0.2;
        soundEffects[4].pause();
        soundEffects[5].pause();
    });

    deadBtn.addEventListener('click', function() {
        console.log("I am Dead");
        dead();
        soundEffects[1].pause(); 
        soundEffects[2].pause();
        soundEffects[3].pause();
        soundEffects[4].pause();
        soundEffects[5].play();
        soundEffects[5].volume = 0.2;
    });

    feedBananaBtn.addEventListener('click', function() {
        console.log("I am eating Banana");
        feedBanana();
        soundEffects[2].play();
        soundEffects[2].volume = 0.2;
        soundEffects[1].pause(); 
        soundEffects[3].pause();
        soundEffects[4].pause();
        soundEffects[5].pause();
    });

    feedBoneBtn.addEventListener('click', function() {
        console.log("Why are you giving me bone! Yucky");
        feedBone();
        soundEffects[1].pause(); 
        soundEffects[2].pause();
        soundEffects[3].play();
        soundEffects[3].volume = 0.2;
        soundEffects[4].pause();
        soundEffects[5].pause();
    });

    resetBtn.addEventListener('click', function() {
        console.log("I am in default state");
        reset();
        soundEffects[1].play();
        soundEffects[1].volume = 0.2;
        soundEffects[2].pause();
        soundEffects[3].pause();
        soundEffects[4].pause();
        soundEffects[5].pause();
    });

    //mouse over animation
    happyBtn.addEventListener("mouseenter", function(){
        gsap.to(happyBtn,{
        scaleX:1.2,
        scaleY:1.2
        });
      });

      happyBtn.addEventListener("mouseleave", function(){
        gsap.to(happyBtn,{
        scaleX:1,
        scaleY:1
        });
      });

      sadBtn.addEventListener("mouseenter", function(){
        gsap.to(sadBtn,{
        scaleX:1.2,
        scaleY:1.2
        });
      });

      sadBtn.addEventListener("mouseleave", function(){
        gsap.to(sadBtn,{
        scaleX:1,
        scaleY:1
        });
      });


      angryBtn.addEventListener("mouseenter", function(){
        gsap.to(angryBtn,{
        scaleX:1.2,
        scaleY:1.2
        });
      });

      angryBtn.addEventListener("mouseleave", function(){
        gsap.to(angryBtn,{
        scaleX:1,
        scaleY:1
        });
      });

      neutralBtn.addEventListener("mouseenter", function(){
        gsap.to(neutralBtn,{
        scaleX:1.2,
        scaleY:1.2
        });
      });

      neutralBtn.addEventListener("mouseleave", function(){
        gsap.to(neutralBtn,{
        scaleX:1,
        scaleY:1
        });
      });

      sickBtn.addEventListener("mouseenter", function(){
        gsap.to(sickBtn,{
        scaleX:1.2,
        scaleY:1.2
        });
      });

      sickBtn.addEventListener("mouseleave", function(){
        gsap.to(sickBtn,{
        scaleX:1,
        scaleY:1
        });
      });

      deadBtn.addEventListener("mouseenter", function(){
        gsap.to(deadBtn,{
        scaleX:1.2,
        scaleY:1.2
        });
      });

      deadBtn.addEventListener("mouseleave", function(){
        gsap.to(deadBtn,{
        scaleX:1,
        scaleY:1
        });
      });

      feedBananaBtn.addEventListener("mouseenter", function(){
        gsap.to(feedBananaBtn,{
        scaleX:1.2,
        scaleY:1.2
        });
      });

      feedBananaBtn.addEventListener("mouseleave", function(){
        gsap.to(feedBananaBtn,{
        scaleX:1,
        scaleY:1
        });
      });

      feedBoneBtn.addEventListener("mouseenter", function(){
        gsap.to(feedBoneBtn,{
        scaleX:1.2,
        scaleY:1.2
        });
      });

      feedBoneBtn.addEventListener("mouseleave", function(){
        gsap.to(feedBoneBtn,{
        scaleX:1,
        scaleY:1
        });
      });

      resetBtn.addEventListener("mouseenter", function(){
        gsap.to(resetBtn,{
        scaleX:1.2,
        scaleY:1.2
        });
      });

      resetBtn.addEventListener("mouseleave", function(){
        gsap.to(resetBtn,{
        scaleX:1,
        scaleY:1
        });
      });

    //! cloud animation
    gsap.fromTo(cloudGroup,{
        x:-350,
    },
    {
        x:300,
        repeat:-1,
        duration: 30,
    });

    //function to play the animation
    //!neutral animation
    function neutral(){
        gsap.to(neutralMouth,{
            duration: 0.1,
            opacity: 1,
        });

        gsap.to(cheeks , {
            y:0,         
        });

        //hide other emotional states (sad, happy, angry, sick, dead)
        gsap.to(sadMouth,{
            duration: 0.1,
            opacity: 0
        });
        gsap.to(happyMouth,{
            duration: 0.1,
            opacity: 0
        });
        gsap.to(angryMouth,{
            duration: 0.1,
            opacity: 0
        });

        //eyes animation
        gsap.fromTo(normalEyes,{
            opacity: 1,
            y:10
        }, 
        {
            y:0,
            repeat:2,
            yoyoEase:true,
            duration: 2
        });

        //ears animation
        gsap.fromTo(earsAnimation,{
            opacity: 1,
            y:10
        }, 
        {
            y:0,
            repeat:2,
            yoyoEase:true,
            duration: 2
        });

        //tears animation hide
        gsap.fromTo(tearsAnimation,{
            opacity: 0,
            y:2
        }, 
        {
            y:15,
            opacity: 0,
            repeat:-1,
            duration: 5
        });

        //hide dead eyes & closed eyes
        gsap.to(deadEyes,{
            duration: 0.1,
            opacity: 0
        });
        gsap.to(closedEyes,{
            duration: 0.1,
            opacity: 0
        });

        //normal eyebrows
        gsap.to(leftEyeBrows, {
            duration: 0.1,
            rotate: 0
        });

        gsap.to(rightEyeBrows, {
            duration: 0.1,
            rotate: 0
        });

        gsap.to(bendLowerHand,{
            duration:0.00025,
            rotate: 0,
            y:-0,
            x:0
        });

        //thermometer animation disable
        gsap.to(thermometer,{
            opacity: 0,
            duration:0.01
        });

        gsap.to(eatBanana,{
            opacity:0,
            duration:0.0025
        });
        gsap.to(eatBone,{
            opacity:0,
            duration:0.0025
        });

        //face rotate animation disable
        gsap.fromTo(face,{
            rotate:0,
        }, 
        {
            rotate:0,
            repeat:3,
            duration: 5,
            yoyoEase:true
        });

        //display monkey's feeling in the text area
        gsap.to(neutralFeeling,{
            opacity:1,
        });

        // hide other feeling texts
        gsap.to(happyFeeling,{
            opacity:0
        });
        gsap.to(sadFeeling,{
            opacity:0
        });
        gsap.to(angryFeeling,{
            opacity:0
        });
        gsap.to(sickFeeling,{
            opacity:0
        });
        gsap.to(deadFeeling,{
            opacity:0
        });

        //display monkey's feeling in sentence in the bottom bar
        gsap.to(neutralSentence,{
            opacity:1,
        });
    
        // hide other feeling texts
        gsap.to(happySentence,{
            opacity:0
        });
        gsap.to(sadSentence,{
            opacity:0
        });
        gsap.to(angrySentence,{
            opacity:0
        });
        gsap.to(sickSentence,{
            opacity:0
        });
        gsap.to(deadSentence,{
            opacity:0
        });
        gsap.to(bananaSentence,{
            opacity:0
        });
        gsap.to(boneSentence,{
            opacity:0
        });
    }

    //!happy animation
    function happy(){

        gsap.fromTo(happyMouth , {
            opacity: 1,
            scaleX:0.8
        },{
            duration: 2,
            scaleX:1
        });

        gsap.to(cheeks , {
            y:0,         
        });

        //hide other emotional states (sad, neutral, angry, sick, dead)
        gsap.to(sadMouth,{
            duration: 0.1,
            opacity: 0
        });
        gsap.to(neutralMouth,{
            duration: 0.1,
            opacity: 0
        });
        gsap.to(angryMouth,{
            duration: 0.1,
            opacity: 0
        });
    
        //eyes animation
        gsap.fromTo(normalEyes,{
            opacity: 1,
            y:10
        }, 
        {
            y:0,
            repeat:2,
            yoyoEase:true,
            duration: 2
        });
    
        //ears animation
        gsap.fromTo(earsAnimation,{
            opacity: 1,
            y:10
        },
        {
            y:0,
            repeat:2,
            yoyoEase:true,
            duration: 2
        });

        //tears animation hide
        gsap.fromTo(tearsAnimation,{
            opacity: 0,
            y:2
        }, 
        {
            y:15,
            opacity: 0,
            repeat:-1,
            duration: 5
        });

        //face rotate animation
        gsap.fromTo(face,{
            rotate:0,
        }, 
        {
            rotate:10,
            duration: 2,
            repeat:3,
            yoyoEase:true
        });

        //hide dead eyes & closed eyes
        gsap.to(deadEyes,{
            duration: 0.1,
            opacity: 0
        });
        gsap.to(closedEyes,{
            duration: 0.1,
            opacity: 0
        });
    
        //normal eyebrows
        gsap.to(leftEyeBrows, {
            duration: 0.1,
            rotate: 0
        });
    
        gsap.to(rightEyeBrows, {
            duration: 0.1,
            rotate: 0
        });

        gsap.to(bendLowerHand,{
            duration:0.00025,
            rotate: 0,
            y:-0,
            x:0
        });

        //thermometer animation disable
        gsap.to(thermometer,{
            opacity: 0,
            duration:0.01
        });

        gsap.to(eatBanana,{
            opacity:0,
            duration:0.0025
        });
        gsap.to(eatBone,{
            opacity:0,
            duration:0.0025
        });

        //display monkey's feeling in the text area
        gsap.to(happyFeeling,{
            opacity:1,
        });

        // hide other feeling texts
        gsap.to(neutralFeeling,{
            opacity:0
        });
        gsap.to(sadFeeling,{
            opacity:0
        });
        gsap.to(angryFeeling,{
            opacity:0
        });
        gsap.to(sickFeeling,{
            opacity:0
        });
        gsap.to(deadFeeling,{
            opacity:0
        });

        //display monkey's feeling in sentence in the bottom bar
        gsap.to(happySentence,{
            opacity:1,
        });

        // hide other feeling texts
        gsap.to(neutralSentence,{
            opacity:0
        });
        gsap.to(sadSentence,{
            opacity:0
        });
        gsap.to(angrySentence,{
            opacity:0
        });
        gsap.to(sickSentence,{
            opacity:0
        });
        gsap.to(deadSentence,{
            opacity:0
        });
        gsap.to(bananaSentence,{
            opacity:0
        });
        gsap.to(boneSentence,{
            opacity:0
        });
    }

    //!sad animation
    function sad(){
        gsap.to(sadMouth , {
            duration: 0.1,
            opacity: 1
        });

        gsap.to(cheeks , {
            y:5,
            duration: 2,
            yoyoEase:true           
        });

        // hide happy mouth, neutralmouth and angry mouth
        gsap.to(neutralMouth,{
            duration: 0.1,
            opacity: 0
        });
        gsap.to(happyMouth,{
            duration: 0.1,
            opacity: 0
        });
        gsap.to(angryMouth,{
            duration: 0.1,
            opacity: 0
        });

        gsap.to(deadEyes,{
            duration: 0.1,
            opacity: 0
        });

         //eyes animation
         gsap.fromTo(normalEyes,{
            opacity: 1,
            y:10
        }, 
        {
            y:0,
            repeat:2,
            yoyoEase:true,
            duration: 2
        });

        gsap.to(closedEyes,{
            duration: 0.1,
            opacity: 0
        });

        gsap.to(leftEyeBrows, {
            duration: 0.1,
            rotate: -15
        });
        gsap.to(rightEyeBrows, {
            duration: 0.1,
            rotate: 15
        });

        //ears animation
        gsap.fromTo(earsAnimation,{
            opacity: 1,
            y:10
        }, 
        {
            y:0,
            repeat:4,
            yoyoEase:true,
            duration: 2
        });

         //tears animation
         gsap.fromTo(tearsAnimation,{
            opacity: 1,
            y:2
        }, 
        {
            y:15,
            opacity: 0,
            repeat:-1,
            duration: 5
        });

        //face rotate animation disable
        gsap.fromTo(face,{
            rotate:0,
        }, 
        {
            rotate:0,
            repeat:3,
            duration: 5,
            yoyoEase:true
        });

        gsap.to(bendLowerHand,{
            duration:0.00025,
            rotate: 0,
            y:-0,
            x:0
        });

        //thermometer animation disable
        gsap.to(thermometer,{
            opacity: 0,
            duration:0.01
        });

        gsap.to(eatBanana,{
            opacity:0,
            duration:0.0025
        });
        gsap.to(eatBone,{
            opacity:0,
            duration:0.0025
        });

         //display monkey's feeling in the text area
         gsap.to(sadFeeling,{
            opacity:1,
        });

        // hide other feeling texts
        gsap.to(neutralFeeling,{
            opacity:0
        });
        gsap.to(happyFeeling,{
            opacity:0
        });
        gsap.to(angryFeeling,{
            opacity:0
        });
        gsap.to(sickFeeling,{
            opacity:0
        });
        gsap.to(deadFeeling,{
            opacity:0
        });

        //display monkey's feeling in sentence in the bottom bar
        gsap.to(sadSentence,{
            opacity:1,
        });
    
        // hide other feeling texts
        gsap.to(neutralSentence,{
            opacity:0
        });
        gsap.to(happySentence,{
            opacity:0
        });
        gsap.to(angrySentence,{
            opacity:0
        });
        gsap.to(sickSentence,{
            opacity:0
        });
        gsap.to(deadSentence,{
            opacity:0
        });
        gsap.to(bananaSentence,{
            opacity:0
        });
        gsap.to(boneSentence,{
            opacity:0
        });
    }

    //!angry animation
    function angry(){
        gsap.fromTo(angryMouth , {
            duration: 2,
            opacity: 1,
            scaleY:1.2
        },{
            scaleY:0.8,
            repeat:4,
            yoyoEase:true,
        });

        gsap.to(cheeks , {
            y:0,         
        });

        // hide happy mouth, neutralmouth and sad mouth
        gsap.to(neutralMouth,{
            duration: 0.1,
            opacity: 0
        });
        gsap.to(happyMouth,{
            duration: 0.1,
            opacity: 0
        });
        gsap.to(sadMouth,{
            duration: 0.1,
            opacity: 0
        });
    
        gsap.to(deadEyes,{
            duration: 0.1,
            opacity: 0
        });
    
        //eyes animation
        gsap.fromTo(normalEyes,{
            opacity: 1,
            y:10
        }, 
        {
            y:0,
            repeat:2,
            yoyoEase:true,
            duration: 2
        });

        //tears animation hide
        gsap.fromTo(tearsAnimation,{
            opacity: 0,
            y:2
        }, 
        {
            y:15,
            opacity: 0,
            repeat:-1,
            duration: 5
        });

        //face rotate animation disable
        gsap.fromTo(face,{
            rotate:0,
        }, 
        {
            rotate:0,
            repeat:3,
            duration: 5,
            yoyoEase:true
        });

        gsap.to(closedEyes,{
            duration: 0.1,
            opacity: 0
        });
    
        gsap.to(leftEyeBrows, {
            duration: 0.1,
            rotate: 15
        });
        gsap.to(rightEyeBrows, {
            duration: 0.1,
            rotate: -15
        });
    
        //ears animation
        gsap.fromTo(earsAnimation,{
            opacity: 1,
            y:10
        }, 
        {
            y:0,
            repeat:4,
            yoyoEase:true,
            duration: 2
        });

        gsap.to(bendLowerHand,{
            duration:0.00025,
            rotate: 0,
            y:-0,
            x:0
        });

        //thermometer animation disable
        gsap.to(thermometer,{
            opacity: 0,
            duration:0.01
        });
    
        gsap.to(eatBanana,{
            opacity:0,
            duration:0.0025
        });
        gsap.to(eatBone,{
            opacity:0,
            duration:0.0025
        });

        //display monkey's feeling in the text area
        gsap.to(angryFeeling,{
            opacity:1,
        });

        // hide other feeling texts
        gsap.to(neutralFeeling,{
            opacity:0
        });
        gsap.to(sadFeeling,{
            opacity:0
        });
        gsap.to(happyFeeling,{
            opacity:0
        });
        gsap.to(sickFeeling,{
            opacity:0
        });
        gsap.to(deadFeeling,{
            opacity:0
        });

        //display monkey's feeling in sentence in the bottom bar
        gsap.to(angrySentence,{
            opacity:1,
        });
    
        // hide other feeling texts
        gsap.to(neutralSentence,{
            opacity:0
        });
        gsap.to(sadSentence,{
            opacity:0
        });
        gsap.to(happySentence,{
            opacity:0
        });
        gsap.to(sickSentence,{
            opacity:0
        });
        gsap.to(deadSentence,{
            opacity:0
        });
        gsap.to(bananaSentence,{
            opacity:0
        });
        gsap.to(boneSentence,{
            opacity:0
        });

    }

        
     //!sick animation
     function sick(){
        gsap.to(sadMouth , {
            duration: 0.1,
            opacity: 1
        });

        // hide happy mouth, neutralmouth and sad mouth
        gsap.to(neutralMouth,{
            duration: 0.1,
            opacity: 0
        });
        gsap.to(happyMouth,{
            duration: 0.1,
            opacity: 0
        });
        gsap.to(angryMouth,{
            duration: 0.1,
            opacity: 0
        });

        gsap.to(deadEyes,{
            duration: 0.1,
            opacity: 0
        });

        gsap.to(normalEyes,{
            duration: 0.1,
            opacity: 1
        });

        gsap.to(closedEyes,{
            duration: 0.1,
            opacity: 1
        });

        gsap.to(leftEyeBrows, {
            duration: 0.1,
            rotate: -15
        });
        gsap.to(rightEyeBrows, {
            duration: 0.1,
            rotate: 15
        });

        //ears animation
        gsap.fromTo(earsAnimation,{
            opacity: 1,
            y:10
        }, 
        {
            y:0,
            repeat:4,
            yoyoEase:true,
            duration: 2
        });

        //face rotate animation disable
        gsap.fromTo(face,{
            rotate:0,
        }, 
        {
            rotate:0,
            repeat:3,
            duration: 5,
            yoyoEase:true
        });

        //thermometer animation
        gsap.to(thermometer,{
            opacity: 1,
            duration:0.1
        });

        //thermometer animation
        gsap.fromTo(tempAnimation,{
            scaleY: 0
        }, 
        {
            scaleY:4,
            duration:5
        });

        //tears animation hide
        gsap.fromTo(tearsAnimation,{
            opacity: 0,
            y:2
        }, 
        {
            y:15,
            opacity: 0,
            repeat:-1,
            duration: 5
        });

        gsap.to(bendLowerHand,{
            duration:0.00025,
            rotate: 0,
            y:-0,
            x:0
        });

        gsap.to(eatBanana,{
            opacity:0,
            duration:0.0025
        });
        gsap.to(eatBone,{
            opacity:0,
            duration:0.0025
        });

         //display monkey's feeling in the text area
         gsap.to(sickFeeling,{
            opacity:1,
        });

        // hide other feeling texts
        gsap.to(neutralFeeling,{
            opacity:0
        });
        gsap.to(sadFeeling,{
            opacity:0
        });
        gsap.to(angryFeeling,{
            opacity:0
        });
        gsap.to(happyFeeling,{
            opacity:0
        });
        gsap.to(deadFeeling,{
            opacity:0
        });

        //display monkey's feeling in sentence in the bottom bar
        gsap.to(sickSentence,{
            opacity:1,
        });

        // hide other feeling texts
        gsap.to(happySentence,{
            opacity:0
        });
        gsap.to(sadSentence,{
            opacity:0
        });
        gsap.to(angrySentence,{
            opacity:0
        });
        gsap.to(neutralSentence,{
            opacity:0
        });
        gsap.to(deadSentence,{
            opacity:0
        });
        gsap.to(bananaSentence,{
            opacity:0
        });
        gsap.to(boneSentence,{
            opacity:0
        });
    }

      //!dead animation
    function dead(){
        gsap.to(sadMouth , {
            duration: 0.1,
            opacity: 1
        });

        gsap.to(cheeks , {
            y:0,         
        });
        
        //hide other emotional states (happy, neutral, angry, sick
        gsap.to(happyMouth,{
            duration: 0.1,
            opacity: 0
        });
        gsap.to(neutralMouth,{
            duration: 0.1,
            opacity: 0
        });
        gsap.to(angryMouth,{
            duration: 0.1,
            opacity: 0
        });
    
        //ears animation
        gsap.fromTo(earsAnimation,{
            opacity: 1,
            y:0
        }, 
        {
            y:0,
            repeat:4,
            yoyoEase:true,
            duration: 2
        });

        //tears animation hide
        gsap.fromTo(tearsAnimation,{
            opacity: 0,
            y:2
        }, 
        {
            y:15,
            opacity: 0,
            repeat:-1,
            duration: 5
        });
    
        //hide natural eyes & closed eyes
        gsap.to(deadEyes,{
            duration: 0.1,
            opacity: 1
        });
        gsap.to(normalEyes,{
            duration: 0.1,
            opacity: 0
        });
        gsap.to(closedEyes,{
            duration: 0.1,
            opacity: 0
        });
    
        //normal eyebrows
        gsap.to(leftEyeBrows, {
            duration: 0.1,
            rotate: -15
        });
    
        gsap.to(rightEyeBrows, {
            duration: 0.1,
            rotate: 15
        });
        gsap.to(bendLowerHand,{
            duration:0.00025,
            rotate: 0,
            y:-0,
            x:0
        });

        //face rotate animation disable
        gsap.fromTo(face,{
            rotate:0,
        }, 
        {
            rotate:0,
            repeat:3,
            duration: 5,
            yoyoEase:true
        });

        //thermometer animation disable
        gsap.to(thermometer,{
            opacity: 0,
            duration:0.01
        });

        gsap.to(eatBanana,{
            opacity:0,
            duration:0.0025
        });
        gsap.to(eatBone,{
            opacity:0,
            duration:0.0025
        });

         //display monkey's feeling in the text area
         gsap.to(deadFeeling,{
            opacity:1,
        });

        // hide other feeling texts
        gsap.to(neutralFeeling,{
            opacity:0
        });
        gsap.to(sadFeeling,{
            opacity:0
        });
        gsap.to(angryFeeling,{
            opacity:0
        });
        gsap.to(sickFeeling,{
            opacity:0
        });
        gsap.to(happyFeeling,{
            opacity:0
        });

        //display monkey's feeling in sentence in the bottom bar
        gsap.to(deadSentence,{
            opacity:1,
        });
        
        // hide other feeling texts
        gsap.to(happySentence,{
            opacity:0
        });
        gsap.to(sadSentence,{
            opacity:0
        });
        gsap.to(angrySentence,{
            opacity:0
        });
        gsap.to(sickSentence,{
            opacity:0
        });
        gsap.to(neutralSentence,{
            opacity:0
        });
        gsap.to(bananaSentence,{
            opacity:0
        });
        gsap.to(boneSentence,{
            opacity:0
        });
    }

    //!reset animation
    function reset(){
        gsap.to(neutralMouth,{
            duration: 0.1,
            opacity: 1,
        });

        gsap.to(cheeks , {
            y:0,         
        });

        //hide other emotional states (sad, happy, angry, sick, dead)
        gsap.to(sadMouth,{
            duration: 0.1,
            opacity: 0
        });
        gsap.to(happyMouth,{
            duration: 0.1,
            opacity: 0
        });
        gsap.to(angryMouth,{
            duration: 0.1,
            opacity: 0
        });
    
        //eyes animation
        gsap.fromTo(normalEyes,{
            opacity: 1,
            y:10
        }, 
        {
            y:0,
            repeat:2,
            yoyoEase:true,
            duration: 2
        });
    
        //ears animation
        gsap.fromTo(earsAnimation,{
            opacity: 1,
            y:10
        }, 
        {
            y:0,
            repeat:2,
            yoyoEase:true,
            duration: 2
        });

        //tears animation hide
        gsap.fromTo(tearsAnimation,{
            opacity: 0,
            y:2
        }, 
        {
            y:15,
            opacity: 0,
            repeat:-1,
            duration: 5
        });

        //face rotate animation disable
        gsap.fromTo(face,{
            rotate:0,
        }, 
        {
            rotate:0,
            repeat:3,
            duration: 5,
            yoyoEase:true
        });
    
        //hide dead eyes & closed eyes
        gsap.to(deadEyes,{
            duration: 0.1,
            opacity: 0
        });
        gsap.to(closedEyes,{
            duration: 0.1,
            opacity: 0
        });
    
        //normal eyebrows
        gsap.to(leftEyeBrows, {
            duration: 0.1,
            rotate: 0
        });
    
        gsap.to(rightEyeBrows, {
            duration: 0.1,
            rotate: 0
        });
            
        gsap.to(bendLowerHand,{
            duration:0.00025,
            rotate: 0,
            y:-0,
            x:0
        });

        //thermometer animation disable
        gsap.to(thermometer,{
            opacity: 0,
            duration:0.01
        });
    
        gsap.to(eatBanana,{
            opacity:0,
            duration:0.0025
        });
        gsap.to(eatBone,{
            opacity:0,
            duration:0.0025
        });

        //display monkey's feeling in the text area
        gsap.to(neutralFeeling,{
            opacity:1,
        });

        // hide other feeling texts
        gsap.to(happyFeeling,{
            opacity:0
        });
        gsap.to(sadFeeling,{
            opacity:0
        });
        gsap.to(angryFeeling,{
            opacity:0
        });
        gsap.to(sickFeeling,{
            opacity:0
        });
        gsap.to(deadFeeling,{
            opacity:0
        });

        //display monkey's feeling in sentence in the bottom bar
        gsap.to(neutralSentence,{
            opacity:1,
        });
        
        // hide other feeling texts
        gsap.to(happySentence,{
            opacity:0
        });
        gsap.to(sadSentence,{
            opacity:0
        });
        gsap.to(angrySentence,{
            opacity:0
        });
        gsap.to(sickSentence,{
            opacity:0
        });
        gsap.to(deadSentence,{
            opacity:0
        });
        gsap.to(bananaSentence,{
            opacity:0
        });
        gsap.to(boneSentence,{
            opacity:0
        });
    }

    //!feed banana animation
    function feedBanana(){

        gsap.fromTo(happyMouth , {
            opacity: 1,
            scaleX:0.8
        },{
            duration: 2,
            scaleX:1
        });

        gsap.to(cheeks , {
            y:0,         
        });
    
        //hide other emotional states (sad, neutral, angry, sick, dead)
        gsap.to(sadMouth,{
            duration: 0.1,
            opacity: 0
        });
        gsap.to(neutralMouth,{
            duration: 0.1,
            opacity: 0
        });
        gsap.to(angryMouth,{
            duration: 0.1,
            opacity: 0
        });
        
        //eyes animation
        gsap.fromTo(normalEyes,{
            opacity: 1,
            y:10
        }, 
        {
            y:0,
            repeat:2,
            yoyoEase:true,
            duration: 2
        });
        
        //ears animation
        gsap.fromTo(earsAnimation,{
            opacity: 1,
            y:10
        },
        {
            y:0,
            repeat:2,
            yoyoEase:true,
            duration: 2
        });

        //tears animation hide
        gsap.fromTo(tearsAnimation,{
            opacity: 0,
            y:2
        }, 
        {
            y:15,
            opacity: 0,
            repeat:-1,
            duration: 5
        });

        //face rotate animation disable
        gsap.fromTo(face,{
            rotate:0,
        }, 
        {
            rotate:0,
            repeat:3,
            duration: 5,
            yoyoEase:true
        });

        
        //hide dead eyes & closed eyes
        gsap.to(deadEyes,{
            duration: 0.1,
            opacity: 0
        });
        gsap.to(closedEyes,{
            duration: 0.1,
            opacity: 0
        });
        
        //normal eyebrows
        gsap.to(leftEyeBrows, {
            duration: 0.1,
            rotate: 0
        });
        
        gsap.to(rightEyeBrows, {
            duration: 0.1,
            rotate: 0
        });

        gsap.to(bendLowerHand,{
            duration:0.00025,
            rotate: 250,
            y:-15,
            x:55
        });

        //thermometer animation disable
        gsap.to(thermometer,{
            opacity: 0,
            duration:0.01
        });

        gsap.to(eatBanana,{
            opacity:1,
            duration:1
        });
        gsap.to(eatBone,{
            opacity:0,
            duration:1
        });

        //thermometer animation disable
        gsap.to(thermometer,{
            opacity: 0
        });

        //display monkey's feeling in the text area
        gsap.to(happyFeeling,{
            opacity:1,
        });

        // hide other feeling texts
        gsap.to(neutralFeeling,{
            opacity:0
        });
        gsap.to(sadFeeling,{
            opacity:0
        });
        gsap.to(angryFeeling,{
            opacity:0
        });
        gsap.to(sickFeeling,{
            opacity:0
        });
        gsap.to(deadFeeling,{
            opacity:0
        });

        //display monkey's feeling in sentence in the bottom bar
        gsap.to(bananaSentence,{
            opacity:1,
        });
        
        // hide other feeling texts
        gsap.to(neutralSentence,{
            opacity:0
        });
        gsap.to(sadSentence,{
            opacity:0
        });
        gsap.to(happySentence,{
            opacity:0
        });
        gsap.to(sickSentence,{
            opacity:0
        });
        gsap.to(deadSentence,{
            opacity:0
        });
        gsap.to(angrySentence,{
            opacity:0
        });
        gsap.to(boneSentence,{
            opacity:0
        });
    }

    //!bone feed animation functiomn

    function feedBone(){

        gsap.to(sadMouth,{
            duration: 0.1,
            opacity: 1
        });

        gsap.to(cheeks , {
            y:5,
            duration: 2,
            yoyoEase:true           
        });
    
        //hide other emotional states (sad, neutral, angry, sick, dead)
           
        gsap.fromTo(happyMouth , {
            opacity: 0,
            scaleX:0.8
        },{
            duration: 2,
            scaleX:1
        });

        gsap.to(neutralMouth,{
            duration: 0.1,
            opacity: 0
        });
        gsap.to(angryMouth,{
            duration: 0.1,
            opacity: 0
        });
        
        //eyes animation
        gsap.fromTo(normalEyes,{
            opacity: 1,
            y:10
        }, 
        {
            y:0,
            repeat:2,
            yoyoEase:true,
            duration: 2
        });
        
        //ears animation
        gsap.fromTo(earsAnimation,{
            opacity: 1,
            y:10
        },
        {
            y:0,
            repeat:2,
            yoyoEase:true,
            duration: 2
        });
        
        //hide dead eyes & closed eyes
        gsap.to(deadEyes,{
            duration: 0.1,
            opacity: 0
        });
        gsap.to(closedEyes,{
            duration: 0.1,
            opacity: 0
        });
        
        //normal eyebrows
        gsap.to(leftEyeBrows, {
            duration: 0.1,
            rotate: 0
        });
        
        gsap.to(rightEyeBrows, {
            duration: 0.1,
            rotate: 0
        });

        gsap.to(bendLowerHand,{
            duration:0.00025,
            rotate: 250,
            y:-15,
            x:55
        });

        //face rotate animation disable
        gsap.fromTo(face,{
            rotate:0,
        }, 
        {
            rotate:0,
            repeat:3,
            duration: 5,
            yoyoEase:true
        });


        //thermometer animation disable
        gsap.to(thermometer,{
            opacity: 0,
            duration:0.01
        });

        gsap.to(eatBanana,{
            opacity:0,
            duration:1,
        });
        gsap.to(eatBone,{
            opacity:1,
            duration:1,
        });

        //tears animation hide
        gsap.fromTo(tearsAnimation,{
            opacity: 0,
            y:2
        }, 
        {
            y:15,
            opacity: 0,
            repeat:-1,
            duration: 5
        });

        //display monkey's feeling in the text area
        gsap.to(sadFeeling,{
            opacity:1,
        });

        // hide other feeling texts
        gsap.to(neutralFeeling,{
            opacity:0
        });
        gsap.to(happyFeeling,{
            opacity:0
        });
        gsap.to(angryFeeling,{
            opacity:0
        });
        gsap.to(sickFeeling,{
            opacity:0
        });
        gsap.to(deadFeeling,{
            opacity:0
        });

        //display monkey's feeling in sentence in the bottom bar
        gsap.to(boneSentence,{
            opacity:1,
        });
        
        // hide other feeling texts
        gsap.to(neutralSentence,{
            opacity:0
        });
        gsap.to(sadSentence,{
            opacity:0
        });
        gsap.to(happySentence,{
            opacity:0
        });
        gsap.to(sickSentence,{
            opacity:0
        });
        gsap.to(deadSentence,{
            opacity:0
        });
        gsap.to(bananaSentence,{
            opacity:0
        });
        gsap.to(angrySentence,{
            opacity:0
        });
    }

}