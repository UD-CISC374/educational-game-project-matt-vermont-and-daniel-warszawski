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
    this.load.image('zeroDegreeButton', 'assets/zeroDegButton.PNG');
    this.load.image('buttonLevel1', 'assets/buttonLevel1.PNG');
    this.load.image('buttonLevel2', 'assets/buttonLevel2.PNG');
    this.load.image('buttonLevel3', 'assets/buttonLevel3.PNG');
    this.load.image('button', 'assets/button.PNG');
    this.load.image('workInProgress', 'assets/WorkInProgress.PNG');
    this.load.image('correctScreen','assets/correctScreen.PNG');
    this.load.image('wrongScreen','assets/wrongScreen.PNG');
    this.load.image('levelComplete', 'assets/levelComplete.PNG');
    this.load.image('pipeWithRing', 'assets/PipeWithRing.PNG');
    this.load.image('oneEightyDegreeButton', 'assets/oneEightyDegreeButton.PNG');
    this.load.image('twoSeventyDegreeButton', 'assets/twoSeventyDegreeButton.PNG');
    this.load.image('submitButton', 'assets/submitButton.png');
    this.load.json('questions', 'assets/data/questions.json');  
  }


  create() {
    this.add.text(20, 20, "Welcome to Angle Master");
    this.scene.start('SelectionScene');
    //this.scene.start('MainScene');
  }
}

  
