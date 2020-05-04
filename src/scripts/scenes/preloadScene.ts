export default class PreloadScene extends Phaser.Scene {
  questionList;
  constructor() {
    super({ key: 'PreloadScene' });
  }

  preload(){
    this.load.image("background", "assets/images/background.png");
    this.load.image('ninetyDegreeStraightPipe', 'assets/ninetyDegreeStraightPipe.PNG');
    this.load.image('zeroDegreeStraightPipe', 'assets/zeroDegreeStraightPipe.PNG');
    this.load.image('ninetyDegreeButton', 'assets/ninetyDegreeButton.PNG');
    this.load.image('zeroDegreeButton', 'assets/images/zeroDegButton.PNG');
    this.load.image('buttonLevel1', 'assets/buttonLevel1.PNG');
    this.load.image('buttonLevel2', 'assets/buttonLevel2.PNG');
    this.load.image('buttonLevel3', 'assets/buttonLevel3.PNG');
    this.load.image('tutorialButton', 'assets/tutorialButton.PNG');
    this.load.image('button', 'assets/button.PNG');
    this.load.image('workInProgress', 'assets/WorkInProgress.PNG');
    this.load.image('correctScreen','assets/correctScreen.PNG');
    this.load.image('wrongScreen','assets/wrongScreen.PNG');
    this.load.image('levelComplete', 'assets/levelComplete.PNG');
    this.load.image('pipeWithRing', 'assets/PipeWithRing.PNG');
    this.load.image('oneEightyDegreeButton', 'assets/oneEightyDegreeButton.PNG');
    this.load.image('twoSeventyDegreeButton', 'assets/twoSeventyDegreeButton.PNG');
    this.load.image('submitButton', 'assets/submitButton.png');
    this.load.image('sampleQuestion',"assets/images_questions/Level1Q3.PNG");
    this.load.audio('mario_lose', "assets/sounds/sm64_mario_hurt.wav");
    this.load.audio('mario_haha', "assets/sounds/sm64_mario_haha.wav");
    this.load.audio('game_over', "assets/sounds/sm64_game_over.wav");
    this.load.audio('yippee', "assets/sounds/sm64_mario_yippee.wav");
    this.load.json('questions', 'assets/data/questions.json');  
  }


  create() {
    this.add.text(20, 20, "Welcome to Angle Master");
    this.scene.start('SelectionScene', {hasDoneTutorial: false} )
    //this.scene.start('MainScene');
  }
}

  
