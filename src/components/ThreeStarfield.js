import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeStarfield = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75, 
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 50;
    
    // Renderer setup with better quality
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 1);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    
    // Mount canvas to DOM
    mountRef.current.innerHTML = '';
    mountRef.current.appendChild(renderer.domElement);
    
    // Store the DOM node to cleanup later
    const container = mountRef.current;
    
    // Mouse tracking variables
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    
    // Create enhanced starfield
    const starCount = 8000;
    const starsGeometry = new THREE.BufferGeometry();
    const starVertices = [];
    const starColors = [];
    
    for (let i = 0; i < starCount; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      starVertices.push(x, y, z);
      
      // Random star colors (white, blue, yellow, red)
      const color = new THREE.Color();
      const colorChoice = Math.random();
      if (colorChoice < 0.7) {
        color.setHSL(0, 0, Math.random() * 0.5 + 0.5); // White stars
      } else if (colorChoice < 0.85) {
        color.setHSL(0.6, 0.8, 0.7); // Blue stars
      } else if (colorChoice < 0.95) {
        color.setHSL(0.1, 0.8, 0.8); // Yellow stars
      } else {
        color.setHSL(0, 0.8, 0.6); // Red stars
      }
      starColors.push(color.r, color.g, color.b);
    }
    
    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    starsGeometry.setAttribute('color', new THREE.Float32BufferAttribute(starColors, 3));
    
    const starsMaterial = new THREE.PointsMaterial({
      size: 2,
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
    });
    
    const starField = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(starField);
    
    // Create mouse-following floating objects
    const floatingObjects = [];
    
    // Geometric shapes that follow mouse
    const createFloatingShape = (geometry, color, size, distance) => {
      const material = new THREE.MeshPhongMaterial({
        color: color,
        transparent: true,
        opacity: 0.6,
        shininess: 100,
        emissive: color,
        emissiveIntensity: 0.2,
      });
      
      const mesh = new THREE.Mesh(geometry, material);
      mesh.scale.setScalar(size);
      mesh.position.z = -distance;
      scene.add(mesh);
      
      return {
        mesh,
        originalDistance: distance,
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.02,
        },
        followSpeed: 0.02 + Math.random() * 0.03,
        amplitude: 5 + Math.random() * 10,
        frequency: 0.01 + Math.random() * 0.02,
        offset: Math.random() * Math.PI * 2,
      };
    };
    
    // Create various geometric shapes
    const dodecahedronGeometry = new THREE.DodecahedronGeometry(1);
    const icosahedronGeometry = new THREE.IcosahedronGeometry(1);
    const octahedronGeometry = new THREE.OctahedronGeometry(1);
    const torusGeometry = new THREE.TorusGeometry(1, 0.4, 8, 16);
    const coneGeometry = new THREE.ConeGeometry(1, 2, 8);
    
    // Add floating shapes with different colors and properties
    floatingObjects.push(createFloatingShape(dodecahedronGeometry, 0xff014f, 2, 100));
    floatingObjects.push(createFloatingShape(icosahedronGeometry, 0x00d4ff, 1.5, 150));
    floatingObjects.push(createFloatingShape(octahedronGeometry, 0xff6b35, 1.8, 120));
    floatingObjects.push(createFloatingShape(torusGeometry, 0x9966ff, 1.2, 180));
    floatingObjects.push(createFloatingShape(coneGeometry, 0x00ff88, 1.4, 160));
    floatingObjects.push(createFloatingShape(dodecahedronGeometry, 0xffff00, 1.1, 200));
    floatingObjects.push(createFloatingShape(icosahedronGeometry, 0xff1493, 1.6, 140));
    
    // Create particle systems that follow mouse
    const particleSystems = [];
    
    const createParticleSystem = (count, color, size, spread) => {
      const geometry = new THREE.BufferGeometry();
      const positions = [];
      const velocities = [];
      const colors = [];
      
      for (let i = 0; i < count; i++) {
        positions.push(
          (Math.random() - 0.5) * spread,
          (Math.random() - 0.5) * spread,
          (Math.random() - 0.5) * spread
        );
        
        velocities.push(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02
        );
        
        const particleColor = new THREE.Color(color);
        colors.push(particleColor.r, particleColor.g, particleColor.b);
      }
      
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
      
      const material = new THREE.PointsMaterial({
        size: size,
        transparent: true,
        opacity: 0.7,
        vertexColors: true,
        blending: THREE.AdditiveBlending,
      });
      
      const particles = new THREE.Points(geometry, material);
      scene.add(particles);
      
      return {
        particles,
        velocities,
        count,
        originalPositions: [...positions],
        mouseInfluence: 0.1 + Math.random() * 0.1,
      };
    };
    
    // Create multiple particle systems
    particleSystems.push(createParticleSystem(500, 0xff014f, 3, 200));
    particleSystems.push(createParticleSystem(300, 0x00d4ff, 2, 150));
    particleSystems.push(createParticleSystem(400, 0x9966ff, 2.5, 180));
    particleSystems.push(createParticleSystem(200, 0x00ff88, 4, 120));
    
    // Enhanced lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.3);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(100, 100, 50);
    directionalLight.castShadow = true;
    scene.add(directionalLight);
    
    // Mouse-following point light
    const mouseLight = new THREE.PointLight(0xff014f, 1, 300);
    scene.add(mouseLight);
    
    // Create trailing effect
    const trailParticles = [];
    const trailGeometry = new THREE.BufferGeometry();
    const trailPositions = new Float32Array(150); // 50 particles * 3 coordinates
    const trailColors = new Float32Array(150);
    
    for (let i = 0; i < 50; i++) {
      trailParticles.push({ x: 0, y: 0, z: -50, life: 1 });
      const alpha = i / 50;
      trailColors[i * 3] = 1; // R
      trailColors[i * 3 + 1] = 0.1; // G
      trailColors[i * 3 + 2] = 0.3; // B
    }
    
    trailGeometry.setAttribute('position', new THREE.BufferAttribute(trailPositions, 3));
    trailGeometry.setAttribute('color', new THREE.BufferAttribute(trailColors, 3));
    
    const trailMaterial = new THREE.PointsMaterial({
      size: 5,
      transparent: true,
      opacity: 0.8,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
    });
    
    const trailSystem = new THREE.Points(trailGeometry, trailMaterial);
    scene.add(trailSystem);
    
    // Handle window resize
    const handleWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    // Handle mouse movement with smooth interpolation
    const handleMouseMove = (event) => {
      targetMouseX = (event.clientX - window.innerWidth / 2) / 100;
      targetMouseY = (event.clientY - window.innerHeight / 2) / 100;
    };
    
    window.addEventListener('resize', handleWindowResize);
    window.addEventListener('mousemove', handleMouseMove);
    
    let time = 0;
    let trailIndex = 0;
    
    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;
      
      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.1;
      mouseY += (targetMouseY - mouseY) * 0.1;
      
      // Rotate star field
      starField.rotation.x += 0.0005;
      starField.rotation.y += 0.0005;
      
      // Update floating objects
      floatingObjects.forEach((obj, index) => {
        const { mesh, rotationSpeed, followSpeed, amplitude, frequency, offset, originalDistance } = obj;
        
        // Rotation
        mesh.rotation.x += rotationSpeed.x;
        mesh.rotation.y += rotationSpeed.y;
        mesh.rotation.z += rotationSpeed.z;
        
        // Mouse following with floating motion
        const targetX = mouseX * followSpeed * originalDistance * 0.01;
        const targetY = mouseY * followSpeed * originalDistance * 0.01;
        
        mesh.position.x += (targetX - mesh.position.x) * 0.05;
        mesh.position.y += (targetY - mesh.position.y) * 0.05;
        
        // Add floating motion
        mesh.position.x += Math.sin(time * frequency + offset) * amplitude;
        mesh.position.y += Math.cos(time * frequency + offset + Math.PI / 4) * amplitude;
        mesh.position.z = -originalDistance + Math.sin(time * frequency * 2 + offset) * 20;
        
        // Pulsing effect
        const scale = 1 + Math.sin(time * 2 + index) * 0.2;
        mesh.scale.setScalar(scale);
      });
      
      // Update particle systems
      particleSystems.forEach((system, systemIndex) => {
        const positions = system.particles.geometry.attributes.position.array;
        const { velocities, mouseInfluence } = system;
        
        for (let i = 0; i < system.count; i++) {
          const i3 = i * 3;
          
          // Mouse attraction
          const mouseForceX = (mouseX * 50 - positions[i3]) * mouseInfluence * 0.01;
          const mouseForceY = (mouseY * 50 - positions[i3 + 1]) * mouseInfluence * 0.01;
          
          velocities[i3] += mouseForceX;
          velocities[i3 + 1] += mouseForceY;
          
          // Apply velocities
          positions[i3] += velocities[i3];
          positions[i3 + 1] += velocities[i3 + 1];
          positions[i3 + 2] += velocities[i3 + 2];
          
          // Add some randomness
          velocities[i3] += (Math.random() - 0.5) * 0.001;
          velocities[i3 + 1] += (Math.random() - 0.5) * 0.001;
          velocities[i3 + 2] += (Math.random() - 0.5) * 0.001;
          
          // Damping
          velocities[i3] *= 0.98;
          velocities[i3 + 1] *= 0.98;
          velocities[i3 + 2] *= 0.98;
          
          // Boundary constraints
          if (Math.abs(positions[i3]) > 100) velocities[i3] *= -0.5;
          if (Math.abs(positions[i3 + 1]) > 100) velocities[i3 + 1] *= -0.5;
          if (Math.abs(positions[i3 + 2]) > 100) velocities[i3 + 2] *= -0.5;
        }
        
        system.particles.geometry.attributes.position.needsUpdate = true;
      });
      
      // Update mouse light position
      mouseLight.position.x = mouseX * 5;
      mouseLight.position.y = mouseY * 5;
      mouseLight.position.z = 20;
      
      // Update trail effect
      if (time % 2 === 0) {
        trailParticles[trailIndex] = {
          x: mouseX * 5,
          y: mouseY * 5,
          z: -50,
          life: 1
        };
        trailIndex = (trailIndex + 1) % trailParticles.length;
      }
      
      const trailPositions = trailSystem.geometry.attributes.position.array;
      trailParticles.forEach((particle, i) => {
        particle.life -= 0.02;
        if (particle.life <= 0) particle.life = 0;
        
        trailPositions[i * 3] = particle.x;
        trailPositions[i * 3 + 1] = particle.y;
        trailPositions[i * 3 + 2] = particle.z + particle.life * 20;
      });
      trailSystem.geometry.attributes.position.needsUpdate = true;
      
      // Camera movement based on mouse
      camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
      camera.position.y += (-mouseY * 0.5 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);
      
      renderer.render(scene, camera);
    };
    
    // Start animation loop
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleWindowResize);
      window.removeEventListener('mousemove', handleMouseMove);
      
      // Dispose of all geometries and materials
      starField.geometry.dispose();
      starField.material.dispose();
      scene.remove(starField);
      
      floatingObjects.forEach(obj => {
        obj.mesh.geometry.dispose();
        obj.mesh.material.dispose();
        scene.remove(obj.mesh);
      });
      
      particleSystems.forEach(system => {
        system.particles.geometry.dispose();
        system.particles.material.dispose();
        scene.remove(system.particles);
      });
      
      trailSystem.geometry.dispose();
      trailSystem.material.dispose();
      scene.remove(trailSystem);
      
      renderer.dispose();
      
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);
  
  return (
    <div 
      ref={mountRef} 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100vw', 
        height: '100vh',
        zIndex: -1,
        backgroundColor: '#000',
        display: 'block',
        pointerEvents: 'none',
      }} 
    />
  );
};

export default ThreeStarfield; 