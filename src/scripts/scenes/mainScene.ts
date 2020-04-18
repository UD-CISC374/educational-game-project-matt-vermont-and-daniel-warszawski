import ExampleObject from '../objects/exampleObject';

export default class MainScene extends Phaser.Scene {
  private exampleObject: ExampleObject;
  
  private background;
  ship1: Phaser.GameObjects.Sprite;
  ship2: Phaser.GameObjects.Sprite;
  ship3: Phaser.GameObjects.Sprite;
  constructor() {
    super({ key: 'MainScene' });
  }

  create() {    
  this.background = this.add.image(0, 0, "background");
  this.background.setOrigin(0, 0);
  this.ship1 = this.add.sprite(this.scale.width/2 - 50, this.scale.height/2, "ship");
  this.ship2 = this.add.sprite(this.scale.width/2,this.scale.height/2, "ship2");
  this.ship3 = this.add.sprite(this.scale.width/2 + 50, this.scale.height/2, "ship3");   this.add.text(20,20, "Enter the correct angle to connect the pipes!", {font: "14px Arial", fill: "yellow"});
    this.exampleObject = new ExampleObject(this, 0, 0);
  }

  update() {
  }
}
