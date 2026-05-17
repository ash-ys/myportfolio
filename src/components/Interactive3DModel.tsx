// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// interface Interactive3DModelAdvancedProps {
//   modelPath: string;
//   position?: 'header' | 'footer';
//   width?: number;
//   height?: number;
//   modelScale?: number;
//   enableAutoRotate?: boolean;
//   rotationSpeed?: number;
//   smoothness?: number;
// }

// export default function Interactive3DModel({
//   modelPath,
//   position = 'header',
//   width = 300,
//   height = 300,
//   modelScale = 1,
//   enableAutoRotate = false,
//   rotationSpeed = 0.001,
//   smoothness = 0.1,
// }: Interactive3DModelAdvancedProps) {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const sceneRef = useRef<THREE.Scene | null>(null);
//   const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
//   const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
//   const modelRef = useRef<THREE.Group | null>(null);
//   const headBoneRef = useRef<THREE.Bone | null>(null);
//   const targetRotationRef = useRef({ x: 0, y: 0 });
//   const currentRotationRef = useRef({ x: 0, y: 0 });
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [isHovered, setIsHovered] = useState(false);

//   useEffect(() => {
//     if (!containerRef.current) return;

//     // Setup scene
//     const scene = new THREE.Scene();
//     sceneRef.current = scene;

//     // Setup camera
//     const camera = new THREE.PerspectiveCamera(
//       45,
//       width / height,
//       0.1,
//       1000
//     );
//     camera.position.z = 5;
//     cameraRef.current = camera;

//     // Setup renderer
//     const renderer = new THREE.WebGLRenderer({
//       alpha: true,
//       antialias: true,
//     });
//     renderer.setSize(width, height);
//     renderer.setPixelRatio(window.devicePixelRatio);
//     containerRef.current.appendChild(renderer.domElement);
//     rendererRef.current = renderer;

//     // Add lights
//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
//     scene.add(ambientLight);

//     const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
//     directionalLight.position.set(5, 5, 5);
//     scene.add(directionalLight);

//     const backLight = new THREE.DirectionalLight(0xffffff, 0.4);
//     backLight.position.set(-5, 5, -5);
//     scene.add(backLight);

//     const fillLight = new THREE.DirectionalLight(0xffffff, 0.3);
//     fillLight.position.set(-3, 0, -3);
//     scene.add(fillLight);

//     // Load model
//     const loader = new GLTFLoader();
//     loader.load(
//       modelPath,
//       (gltf) => {
//         const model = gltf.scene;
//         model.scale.set(modelScale, modelScale, modelScale);

//         // Center the model
//         const box = new THREE.Box3().setFromObject(model);
//         const center = box.getCenter(new THREE.Vector3());
//         model.position.sub(center);

//         // Find head bone with more comprehensive search
//         model.traverse((child) => {
//           if (child instanceof THREE.Bone) {
//             const boneName = child.name.toLowerCase();
//             if (
//               boneName.includes('head') ||
//               boneName.includes('neck') ||
//               boneName.includes('skull') ||
//               boneName === 'head' ||
//               boneName === 'neck'
//             ) {
//               headBoneRef.current = child;
//             }
//           }
//         });

//         scene.add(model);
//         modelRef.current = model;
//         setIsLoading(false);
//       },
//       (progress) => {
//         const percent = (progress.loaded / progress.total) * 100;
//         console.log(`Loading: ${percent.toFixed(0)}%`);
//       },
//       (error) => {
//         console.error('Error loading model:', error);
//         setError('Failed to load 3D model');
//         setIsLoading(false);
//       }
//     );

//     // Animation loop with lerp for smooth rotation
//     const animate = () => {
//       requestAnimationFrame(animate);

//       if (modelRef.current || headBoneRef.current) {
//         // Smoothly interpolate current rotation toward target
//         currentRotationRef.current.x +=
//           (targetRotationRef.current.x - currentRotationRef.current.x) * smoothness;
//         currentRotationRef.current.y +=
//           (targetRotationRef.current.y - currentRotationRef.current.y) * smoothness;

//         if (headBoneRef.current) {
//           headBoneRef.current.rotation.y = currentRotationRef.current.x;
//           headBoneRef.current.rotation.x = currentRotationRef.current.y;
//         } else if (modelRef.current) {
//           modelRef.current.rotation.y = currentRotationRef.current.x;
//           modelRef.current.rotation.x = currentRotationRef.current.y;
//         }

//         // Auto-rotate when enabled and not hovering
//         if (enableAutoRotate && !isHovered && modelRef.current) {
//           modelRef.current.rotation.y += rotationSpeed;
//         }
//       }

//       renderer.render(scene, camera);
//     };
//     animate();

//     // Cleanup
//     return () => {
//       if (containerRef.current && renderer.domElement) {
//         containerRef.current.removeChild(renderer.domElement);
//       }
//       renderer.dispose();
//     };
//   }, [modelPath, width, height, modelScale, enableAutoRotate, rotationSpeed, smoothness, isHovered]);

//   // Mouse tracking effect with smooth interpolation
//   useEffect(() => {
//     const handleMouseMove = (event: MouseEvent) => {
//       if (!modelRef.current && !headBoneRef.current) return;

//       // Convert mouse position to normalized device coordinates (-1 to +1)
//       const x = (event.clientX / window.innerWidth) * 2 - 1;
//       const y = -(event.clientY / window.innerHeight) * 2 + 1;

//       // Determine rotation limits based on position
//       const rotationMultiplier = position === 'footer' ? 0.3 : 0.5;
      
//       // Set target rotation (will be smoothly interpolated in animate loop)
//       targetRotationRef.current.x = x * rotationMultiplier;
//       targetRotationRef.current.y = y * rotationMultiplier * 0.5;
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, [position]);

//   // Handle resize
//   useEffect(() => {
//     const handleResize = () => {
//       if (!cameraRef.current || !rendererRef.current) return;
      
//       const newWidth = containerRef.current?.clientWidth || width;
//       const newHeight = containerRef.current?.clientHeight || height;
      
//       cameraRef.current.aspect = newWidth / newHeight;
//       cameraRef.current.updateProjectionMatrix();
//       rendererRef.current.setSize(newWidth, newHeight);
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, [width, height]);

//   return (
//     <div
//       className={`interactive-3d-model-advanced ${position}`}
//       style={{ width, height, position: 'relative' }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <div ref={containerRef} />
//       {isLoading && (
//         <div
//           style={{
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             color: '#666',
//             fontSize: '14px',
//             fontWeight: '500',
//           }}
//         >
//           Loading 3D model...
//         </div>
//       )}
//       {error && (
//         <div
//           style={{
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             color: '#ff4444',
//             fontSize: '14px',
//             fontWeight: '500',
//             textAlign: 'center',
//           }}
//         >
//           {error}
//         </div>
//       )}
//     </div>
//   );
// }
