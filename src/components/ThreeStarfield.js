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
    
    // Mount canvas to DOM
    mountRef.current.innerHTML = '';
    mountRef.current.appendChild(renderer.domElement);
    
    // Store the DOM node to cleanup later
    const container = mountRef.current;
    
    // Create simple star geometry
    const starCount = 5000;
    const starsGeometry = new THREE.BufferGeometry();
    const starVertices = [];
    
    // Create stars in a much closer range to be more visible
    for (let i = 0; i < starCount; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      starVertices.push(x, y, z);
    }
    
    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    
    // Create much more visible stars material
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 3,
      sizeAttenuation: true,
    });
    
    // Create star system
    const starField = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(starField);
    
    // Create very bright nebulae for visibility
    const createNebula = (color, size, position) => {
      const geometry = new THREE.SphereGeometry(size, 32, 32);
      const material = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.7,
      });
      
      const nebula = new THREE.Mesh(geometry, material);
      nebula.position.set(position.x, position.y, position.z);
      scene.add(nebula);
      return nebula;
    };
    
    // Add several highly visible nebulas
    const nebula1 = createNebula(0xff1a75, 50, { x: -100, y: 50, z: -300 }); // Pink
    const nebula2 = createNebula(0x1a75ff, 40, { x: 100, y: -50, z: -250 });  // Blue
    const nebula3 = createNebula(0x9966ff, 60, { x: 0, y: -100, z: -350 });   // Purple
    
    // Animation state
    let mouseX = 0;
    let mouseY = 0;
    
    // Handle window resize
    const handleWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    // Handle mouse movement
    const handleMouseMove = (event) => {
      mouseX = (event.clientX - window.innerWidth/2) / 100;
      mouseY = (event.clientY - window.innerHeight/2) / 100;
    };
    
    window.addEventListener('resize', handleWindowResize);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate star field
      starField.rotation.x += 0.0005;
      starField.rotation.y += 0.0005;
      
      // Rotate nebulae
      nebula1.rotation.y += 0.001;
      nebula2.rotation.x += 0.001;
      nebula3.rotation.z += 0.001;
      
      // Move camera based on mouse
      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (-mouseY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);
      
      renderer.render(scene, camera);
    };
    
    // Start animation loop
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleWindowResize);
      window.removeEventListener('mousemove', handleMouseMove);
      
      scene.remove(starField);
      starsGeometry.dispose();
      starsMaterial.dispose();
      
      scene.remove(nebula1);
      scene.remove(nebula2);
      scene.remove(nebula3);
      
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