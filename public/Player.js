// Player.js

class Player {
    // constructor- creates the variables for the player
    constructor(scene) {
      // Existing properties
      this.playerSpeed = 0.3;
      this.moveLeft = false;
      this.moveRight = false;
      this.movementLimit = 20;
      this.forwardSpeed = 0.2;
      
      // New jump properties
      this.isJumping = false;
      this.jumpHeight = 0;
      this.jumpVelocity = 0;
      this.gravity = 0.015;
      this.baseY = -1; // Ground level
  
      // Create the player mesh (same as before)
      const playerGeometry = new THREE.BoxGeometry(1, 2, 0.5);
      const playerMaterial = new THREE.MeshLambertMaterial({ color: 0xff0000 });
      this.mesh = new THREE.Mesh(playerGeometry, playerMaterial);
      this.mesh.castShadow = true;
      this.mesh.position.set(0, this.baseY, 0);
      scene.add(this.mesh);
    }
    
    initiateJump() {
      if (!this.isJumping) {
        this.isJumping = true;
        // Random jump velocity between 0.3 and 0.5
        this.jumpVelocity = 0.3 + Math.random() * 0.2;
      }
    }
    
    updatePosition() {
      // Existing movement code
      this.mesh.position.z -= this.forwardSpeed;
      if (this.moveLeft) this.mesh.position.x -= this.playerSpeed;
      if (this.moveRight) this.mesh.position.x += this.playerSpeed;
      
      // Jump physics
      if (this.isJumping) {
        this.jumpVelocity -= this.gravity;
        this.mesh.position.y += this.jumpVelocity;
        
        // Check if landed
        if (this.mesh.position.y <= this.baseY) {
          this.mesh.position.y = this.baseY;
          this.isJumping = false;
          this.jumpVelocity = 0;
        }
      }
  
      // Keep the player within bounds
      this.mesh.position.x = THREE.MathUtils.clamp(
        this.mesh.position.x,
        -this.movementLimit,
        this.movementLimit
      );
    }
    
    resetPosition() {
      this.mesh.position.set(0, this.baseY, 0);
      this.isJumping = false;
      this.jumpVelocity = 0;
    }
  
    // handles the keydown event, triggering movement
    handleKeyDown(event) {
      if (event.code === 'ArrowLeft' || event.code === 'KeyA') {
        this.moveLeft = true;
      }
      if (event.code === 'ArrowRight' || event.code === 'KeyD') {
        this.moveRight = true;
      }
    }
    
    // handles the keyup event, stopping movement
    handleKeyUp(event) {
      if (event.code === 'ArrowLeft' || event.code === 'KeyA') {
        this.moveLeft = false;
      }
      if (event.code === 'ArrowRight' || event.code === 'KeyD') {
        this.moveRight = false;
      }
    }
  }
  
  // Export the Player class
  export { Player };