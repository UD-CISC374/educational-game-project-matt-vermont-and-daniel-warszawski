export default class EndScreen extends Phaser.Scene { 
    private background;
    levelComplete : Phaser.GameObjects.Image;
    currentQuestionIndex : integer;
    numCorrect: integer;
    totalQuestions: integer;  
    gameOverSound;
    yippeeSound;
    badPerfromace: boolean;
    delayTime: integer;
    sampleQuestion : Phaser.GameObjects.Image;

    constructor() {
      super({ key: 'EndScreen' });
    }
    init(data)
    {
        this.currentQuestionIndex = data.currentQuestionIndex; /*Get data passed to this scene */   
        this.numCorrect = data.numCorrect;
        this.totalQuestions = data.totalQuestions;
    }

    create() {    
    this.gameOverSound = this.sound.add('game_over');
    this.yippeeSound = this.sound.add('yippee');
    this.sampleQuestion = this.add.image(0,0 , "sampleQuestion");
    this.sampleQuestion.setOrigin(0, 0);
    if (this.numCorrect / this.totalQuestions <= .5){
      this.badPerfromace = true;
      this.delayTime = 5000;
    }
    else{
      this.badPerfromace = false;
      this.delayTime = 2500;
    }
    this.time.addEvent({
      delay: 500,       
      callback: () => {if (this.badPerfromace){
        this.gameOverSound.play();
      }
      else {
        this.yippeeSound.play();
      }
    },
      loop: false
  })
  if (!this.badPerfromace){
    this.yippeeSound.play();
  }
    this.levelComplete = this.add.image(this.scale.width / 2, this.scale.height / 2 - 110, "levelComplete"); 
    this.levelComplete.setScale(.4); 
    this.add.text(this.scale.width / 100 , this.scale.height / 2 + 110, 
        "You got " + this.numCorrect + " out of " + this.totalQuestions + " correct", {fill : "red" });
    this.time.addEvent({
        delay: this.delayTime ,       
        callback: () => this.scene.start('SelectionScene'),
        loop: true
    })
  }
  
    update() {
    }
  }