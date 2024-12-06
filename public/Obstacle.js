// Obstacle.js

class Obstacle {
  constructor(scene, movementLimit, playerPositionZ, spawnDistance, offset = 0) {
    let obstacle;
    // Add 'jump' as a new obstacle type
    const obstacleType = Math.random() < 0.33 ? 'cube' : 
                        Math.random() < 0.66 ? 'cone' : 'jump';

    if (obstacleType === 'cube') {
      const obstacleGeometry = new THREE.BoxGeometry(1, 1, 1);
      const obstacleMaterial = new THREE.MeshLambertMaterial({ color: 0x808080 });
      obstacle = new THREE.Mesh(obstacleGeometry, obstacleMaterial);
    } else if (obstacleType === 'cone') {
      const obstacleGeometry = new THREE.ConeGeometry(0.5, 2, 16);
      const obstacleMaterial = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
      obstacle = new THREE.Mesh(obstacleGeometry, obstacleMaterial);
    } else { // jump ramp
      const rampGeometry = new THREE.BoxGeometry(4, 0.5, 2);
      const rampMaterial = new THREE.MeshLambertMaterial({ color: 0xffd700 });
      obstacle = new THREE.Mesh(rampGeometry, rampMaterial);
      // Changed rotation to make ramp point upward in player's direction
      obstacle.rotation.x = Math.PI / 8; // Changed from -Math.PI/8 to Math.PI/8
      // Move the ramp's position slightly forward to align with rotation
      obstacle.position.z += 1;
    }

    obstacle.castShadow = true;
    obstacle.userData.type = obstacleType; // Store the type for collision detection

    obstacle.position.x = (Math.random() - 0.5) * movementLimit * 2;
    obstacle.position.y = obstacleType === 'jump' ? -2 : -1;
    obstacle.position.z = playerPositionZ - spawnDistance + offset;

    scene.add(obstacle);
    this.mesh = obstacle;
  }

  updatePosition(obstacleSpeed) {
    this.mesh.position.z += obstacleSpeed;
  }

  removeFromScene(scene) {
    scene.remove(this.mesh);
  }
}

export { Obstacle };