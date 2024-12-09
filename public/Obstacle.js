class Obstacle {
  constructor(scene, movementLimit, playerPositionZ, spawnDistance, modelsLoader, offset = 0) {
    let obstacle;
    const obstacleType = Math.random() < 0.33 ? 'tree' : 
                        Math.random() < 0.66 ? 'rock' : 'jump';

    if (obstacleType === 'tree' || obstacleType === 'rock') {
      // Get the corresponding model
      const model = modelsLoader.getModel(obstacleType);
      if (model) {
        obstacle = model.clone();
        
        // Increased scale values significantly
        if (obstacleType === 'tree') {
          const scale = 2.0; // Increased from 0.5
          obstacle.scale.set(scale, scale, scale);
        } else { // rock
          const scale = 1.5; // Increased from 0.3
          obstacle.scale.set(scale, scale, scale);
        }
      } else {
        // Fallback to larger geometric shapes
        console.warn(`${obstacleType} model not loaded, using fallback geometry`);
        if (obstacleType === 'tree') {
          const obstacleGeometry = new THREE.ConeGeometry(1.0, 4, 16); // Increased size
          const obstacleMaterial = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
          obstacle = new THREE.Mesh(obstacleGeometry, obstacleMaterial);
        } else {
          const obstacleGeometry = new THREE.BoxGeometry(2, 2, 2); // Increased size
          const obstacleMaterial = new THREE.MeshLambertMaterial({ color: 0x808080 });
          obstacle = new THREE.Mesh(obstacleGeometry, obstacleMaterial);
        }
      }
    } else { // jump ramp
      const rampGeometry = new THREE.BoxGeometry(4, 0.5, 2);
      const rampMaterial = new THREE.MeshLambertMaterial({ color: 0xffd700 });
      obstacle = new THREE.Mesh(rampGeometry, rampMaterial);
      obstacle.rotation.x = Math.PI / 8;
      obstacle.position.z += 1;
    }

    obstacle.castShadow = true;
    obstacle.userData.type = obstacleType;

    obstacle.position.x = (Math.random() - 0.5) * movementLimit * 2;
    obstacle.position.y = obstacleType === 'jump' ? -2 : -1;
    obstacle.position.z = playerPositionZ - spawnDistance + offset;

    // Create collision box
    this.collisionBox = new THREE.Box3().setFromObject(obstacle);
    
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