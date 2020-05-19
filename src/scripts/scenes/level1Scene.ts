export default class Level1Scene extends Phaser.Scene { 
  private background;
  workInProgress : Phaser.GameObjects.Image;
  currentQuestionIndex : integer;
  numCorrect: integer;
  data;
  questionList;
  totalQuestions: integer;
  currentQuestion;
  imagePath;
  ninetyDegreeStraightPipe : Phaser.GameObjects.Image;
  zeroDegreeStraightPipe : Phaser.GameObjects.Image;
  currentQuestionImage: Phaser.GameObjects.Image;
  button0Deg : Phaser.GameObjects.Image;
  button90Deg : Phaser.GameObjects.Image;
  button180Deg : Phaser.GameObjects.Image;
  button270Deg : Phaser.GameObjects.Image;
  submitButton : Phaser.GameObjects.Image;
  hint : Phaser.GameObjects.Image;
  back : Phaser.GameObjects.Image;
  close : Phaser.GameObjects.Image;
  text1 : Phaser.GameObjects.Text;
  msgBox : Phaser.GameObjects.Group;
  counter: integer;
  hintCounter : integer;
  answerIndex : integer;
  rotatePipe;
  rotateDegree : integer;
  rotateInterval : integer;
  mario_lose;
  mario_haha;
  constructor() {
    super({ key: 'Level1Scene' });
}

    init(data)
    {
        this.currentQuestionIndex = data.currentQuestionIndex; /*Get data passed to this scene */   
        this.numCorrect = data.numCorrect;
    }
    preload(){
        this.questionList = this.cache.json.get('questions');
        this.totalQuestions = this.questionList.questions.length;
        for(this.counter = 0; this.counter < this.totalQuestions; this.counter++){
          this.currentQuestion = this.questionList.questions[this.counter]; 
          this.imagePath = this.currentQuestion.image;
          this.load.image('question' + this.counter, this.imagePath);
        }
    }

  create() {
    this.mario_lose = this.sound.add('mario_lose');
    this.mario_haha = this.sound.add('mario_haha');     
    this.rotateDegree = 0;
    this.hintCounter = 0;
    this.rotateInterval = 90;
    this.add.text(this.scale.width / 100 , 5, "Rotate Pipe and Submit!", {fill : "blue" });
    console.log("Index:" + this.currentQuestionIndex);
    //console.log(this.numCorrect);
       // console.log(this.currentQuestion.answer == 0 );
        this.currentQuestionImage = this.add.image(0,0 , "question" + this.currentQuestionIndex);
        this.currentQuestionImage.setOrigin(0, 0);
        
        this.hint = this.add.image(10, this.scale.height / 2 - 60, 'hint');
        this.hint.setScale(.40);
        this.hint.setInteractive();
        this.hint.on('pointerdown', () => this.giveHint("Think about the red stripe", this.scale.width * .7, this.scale.height * .5));

        if(this.currentQuestionIndex == 0){
          this.rotatePipe = this.add.image(this.scale.width / 2 + 8, this.scale.height / 2 + 2, "pipeWithRing");
          this.rotatePipe.setScale(.05);
        }
        else if(this.currentQuestionIndex == 1){
          this.rotatePipe = this.add.image(this.scale.width / 2 + 33, this.scale.height / 2 - 55, "pipeWithRing");
          this.rotatePipe.setScale(.08);
        }
        else{
          this.rotatePipe = this.add.image(this.scale.width / 2 + 42, this.scale.height / 2 - 23, "pipeWithRing");
          this.rotatePipe.setScale(.09);
        }
        
          
        
        this.button0Deg = this.add.image(15, this.scale.height / 2 + 110, "zeroDegreeButton");
        this.button0Deg.setScale(.5);
        this.button0Deg.setInteractive();
        this.answerIndex = this.questionList.questions[this.currentQuestionIndex].answer;

        this.button90Deg = this.add.image(75 , this.scale.height / 2 + 110 , "ninetyDegreeButton");
        this.button90Deg.setScale(.48);
        this.button90Deg.setInteractive();

        this.button180Deg = this.add.image(this.scale.width - 105, this.scale.height /2 + 110, 'oneEightyDegreeButton');
        this.button180Deg.setScale(.48);
        this.button180Deg.setInteractive();

        this.button270Deg = this.add.image(this.scale.width - 30, this.scale.height /2 + 110, 'twoSeventyDegreeButton');
        this.button270Deg.setScale(.48);
        this.button270Deg.setInteractive();

        this.button0Deg.on('pointerdown', () => {this.rotatePipe.angle = 0,
                                                 this.rotateDegree = 0; console.log(this.rotateDegree) } );
        this.button90Deg.on('pointerdown', () => {this.rotatePipe.angle = 90,
                                                 this.rotateDegree = 90; console.log(this.rotateDegree) } );
        this.button180Deg.on('pointerdown', () => {this.rotatePipe.angle = 180
                                                 this.rotateDegree = 180; console.log(this.rotateDegree) } );
        this.button270Deg.on('pointerdown', () => {this.rotatePipe.angle = 270,
                                                 this.rotateDegree = 270; console.log(this.rotateDegree) } );
        this.submitButton = this.add.image(this.scale.width/2, this.scale.height /2 + 50, 'submitButton');
        this.submitButton.setScale(.2);
        this.submitButton.setInteractive();

        this.submitButton.on('pointerdown', () => this.buttonPress() );


}

  buttonPress(){
    if ( this.rotateDegree == (this.rotateInterval * this.answerIndex) ){
      //this.mario_haha.play();
       this.scene.start('CorrectScreen', 
      {currentQuestionIndex: ++this.currentQuestionIndex, numCorrect: ++this.numCorrect, totalQuestions: this.totalQuestions}) ;
    }
    else {
      this.mario_lose.play();
      this.scene.start('WrongScreen',
      {currentQuestionIndex: ++this.currentQuestionIndex, numCorrect: this.numCorrect, totalQuestions: this.totalQuestions}); 
    }    
  }

  update() {
    
  }

  giveHint(text, w = 300, h = 300){
    if(this.hintCounter % 2 == 0){

        if (this.msgBox) {
            this.msgBox.destroy();
        }
        this.msgBox = this.add.group();
        this.back = this.add.image(0, 0, "hintBack");
        this.back.setScale(.1);
        this.close = this.add.image(0, 0, "close");
        this.close.setScale(.3);
        this.text1 = this.add.text(0, 0, text, {fill : "green"});
  
        this.back.width = w;
        this.back.height = h;
 
        this.msgBox.add(this.back);
        this.msgBox.add(this.close);
        this.msgBox.add(this.text1);

        this.close.x = this.back.width / 2 - this.close.width / 2;
        this.close.y = this.back.height - this.close.height;
        this.close.setInteractive();
        this.close.on('pointerdown', () => this.hideBox());
 
        this.text1.x = this.button0Deg.x - 10;
        this.text1.y = this.button0Deg.y - 35;
    
    }
    else{
        this.text1.text = "";
    }
    this.hintCounter += 1;        
}

hideBox() {
    this.msgBox.destroy();
}
}







