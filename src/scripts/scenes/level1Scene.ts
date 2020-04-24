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
  counter: integer;
  answerIndex : integer;
  roatePipe;
  roateDegree : integer;
  rotateInterval : integer;
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
    this.roateDegree = 0;
    this.rotateInterval = 90;
    this.add.text(this.scale.width / 100 , 5, "Rotate Pipe and Submit!", {fill : "blue" });
    console.log("Index:" + this.currentQuestionIndex);
    //console.log(this.numCorrect);
       // console.log(this.currentQuestion.answer == 0 );
        this.currentQuestionImage = this.add.image(0,0 , "question" + this.currentQuestionIndex);
        this.currentQuestionImage.setOrigin(0, 0);
        
        this.roatePipe = this.add.image(this.scale.width / 2 - 18, this.scale.height / 2 + 110, "pipeWithRing");
        this.roatePipe.setScale(.1); 
        
        this.button0Deg = this.add.image(15, this.scale.height / 2 + 110, "zeroDegreeButton");
        this.button0Deg.setScale(.5);
        this.button0Deg.setInteractive();
        this.answerIndex = this.questionList.questions[this.currentQuestionIndex].answer;

        this.button90Deg = this.add.image(60 , this.scale.height / 2 + 110 , "ninetyDegreeButton");
        this.button90Deg.setScale(.48);
        this.button90Deg.setInteractive();

        this.button180Deg = this.add.image(this.scale.width - 90, this.scale.height /2 + 110, 'oneEightyDegreeButton');
        this.button180Deg.setScale(.48);
        this.button180Deg.setInteractive();

        this.button270Deg = this.add.image(this.scale.width - 30, this.scale.height /2 + 110, 'twoSeventyDegreeButton');
        this.button270Deg.setScale(.48);
        this.button270Deg.setInteractive();

        this.button0Deg.on('pointerdown', () => {this.roatePipe.angle = 0,
                                                 this.roateDegree = 0; console.log(this.roateDegree) } );
        this.button90Deg.on('pointerdown', () => {this.roatePipe.angle = 90,
                                                 this.roateDegree = 90; console.log(this.roateDegree) } );
        this.button180Deg.on('pointerdown', () => {this.roatePipe.angle = 180
                                                 this.roateDegree = 180; console.log(this.roateDegree) } );
        this.button270Deg.on('pointerdown', () => {this.roatePipe.angle = 270,
                                                 this.roateDegree = 270; console.log(this.roateDegree) } );
        this.submitButton = this.add.image(this.scale.width/2, this.scale.height /2 + 50, 'submitButton');
        this.submitButton.setScale(.2);
        this.submitButton.setInteractive();

        this.submitButton.on('pointerdown', () => this.buttonPress() );


       

        //do for 270 and 360
        //submit button conditional is rotation angle degree copy from conditioals above for calling the next scene
        //do for 270 and 360
        //submit button conditional is rotation angle degree copy from conditioals above for calling the next scene

/*       
        if (this.answerIndex == 0){
          this.button0Deg.on('pointerdown', () => this.scene.start('CorrectScreen', 
          {currentQuestionIndex: ++this.currentQuestionIndex, numCorrect: ++this.numCorrect, totalQuestions: this.totalQuestions}) );
         }       
        else {
          this.button0Deg.on('pointerdown', () => this.scene.start('WrongScreen',
          {currentQuestionIndex: ++this.currentQuestionIndex, numCorrect: this.numCorrect, totalQuestions: this.totalQuestions}) ); 
        }                                            
        this.button90Deg = this.add.image(this.scale.width / 2 , this.scale.height / 2 + 75 , "ninetyDegreeButton");
        this.button90Deg.setScale(.25);
        this.button90Deg.setInteractive();

        if (this.answerIndex == 1){
          this.button90Deg.on('pointerdown', () => this.scene.start('CorrectScreen', 
          {currentQuestionIndex: ++this.currentQuestionIndex, numCorrect: ++this.numCorrect, totalQuestions: this.totalQuestions}) );
        }
        else {
          this.button90Deg.on('pointerdown', () => this.scene.start('WrongScreen',
          {currentQuestionIndex: ++this.currentQuestionIndex, numCorrect: this.numCorrect, totalQuestions: this.totalQuestions}) );
        }
        */

}
  buttonPress(){
    if ( this.roateDegree == (this.rotateInterval * this.answerIndex) ){
       this.scene.start('CorrectScreen', 
      {currentQuestionIndex: ++this.currentQuestionIndex, numCorrect: ++this.numCorrect, totalQuestions: this.totalQuestions}) ;
    }
    else {
      this.scene.start('WrongScreen',
      {currentQuestionIndex: ++this.currentQuestionIndex, numCorrect: this.numCorrect, totalQuestions: this.totalQuestions}); 
    }    
  }

  update() {
    
  }
}






