// Vinh Le Van Portfolio - Project Data
// This file contains all project information for easy modification

const projectData = {
    'bluetooth-car': {
        title: 'Bluetooth Controlled Car',
        category: 'arduino',
        image: 'resources/bluetooth-car.jpg',
        badge: 'Featured Project',
        description: 'Custom-built car with Bluetooth control via smartphone app, featuring servo-based steering and DC motor control.',
        tags: ['Arduino Uno', 'Bluetooth HC-05', 'Servo Motor', 'L298N Motor Driver'],
        details: `
            <div class="mb-8">
                <h4 class="orbitron text-xl font-bold mb-4 neon-glow">Project Overview</h4>
                <p class="text-gray-300 mb-6">A Bluetooth-controlled car that can be operated via smartphone app. Features include forward/reverse movement, left/right steering, and speed control. This project demonstrates wireless communication and motor control systems.</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                    <h4 class="orbitron text-lg font-bold mb-3 neon-glow">Technical Components</h4>
                    <ul class="list-disc list-inside space-y-2 text-gray-300">
                        <li>Arduino Uno R3 microcontroller</li>
                        <li>HC-05 Bluetooth module</li>
                        <li>SG90 servo motor for steering</li>
                        <li>L298N motor driver board</li>
                        <li>DC motors with wheels</li>
                        <li>9V battery power supply</li>
                    </ul>
                </div>
                <div>
                    <h4 class="orbitron text-lg font-bold mb-3 neon-glow">Key Features</h4>
                    <ul class="list-disc list-inside space-y-2 text-gray-300">
                        <li>Bluetooth wireless control (10m range)</li>
                        <li>Smartphone app interface</li>
                        <li>Variable speed control</li>
                        <li>Precision steering mechanism</li>
                        <li>LED indicators for status</li>
                        <li>Modular design for upgrades</li>
                    </ul>
                </div>
            </div>
            
            <div class="mb-8">
                <h4 class="orbitron text-lg font-bold mb-3 neon-glow">Control Commands</h4>
                <div class="bg-gray-800 p-4 rounded-lg mb-4">
                    <pre class="text-sm text-gray-300 overflow-x-auto"><code>// Bluetooth command processing
void processBluetoothCommand(char command) {
    switch(command) {
        case 'F': // Forward
            moveForward();
            break;
        case 'B': // Backward
            moveBackward();
            break;
        case 'L': // Left
            turnLeft();
            break;
        case 'R': // Right
            turnRight();
            break;
        case 'S': // Stop
            stopMotors();
            break;
    }
}</code></pre>
                </div>
                <p class="text-gray-300">The car responds to single-character commands sent via Bluetooth, making it easy to control from any Bluetooth-enabled device.</p>
            </div>
        `
    },
    
    'ir-remote-car': {
        title: 'IR Remote Controlled Car',
        category: 'arduino',
        image: 'resources/ir-remote-car.jpg',
        badge: 'Electronics Project',
        description: 'Infrared remote controlled car with obstacle detection and automatic braking system.',
        tags: ['Arduino Nano', 'IR Receiver', 'Ultrasonic Sensor', 'Motor Control'],
        details: `
            <div class="mb-8">
                <h4 class="orbitron text-xl font-bold mb-4 neon-glow">Project Overview</h4>
                <p class="text-gray-300 mb-6">An IR remote controlled car with advanced features including obstacle detection and automatic emergency braking. Combines infrared communication with sensor-based safety systems.</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                    <h4 class="orbitron text-lg font-bold mb-3 neon-glow">System Components</h4>
                    <ul class="list-disc list-inside space-y-2 text-gray-300">
                        <li>Arduino Nano microcontroller</li>
                        <li>VS1838B IR receiver module</li>
                        <li>HC-SR04 ultrasonic sensor</li>
                        <li>L298N dual motor driver</li>
                        <li>DC gear motors with wheels</li>
                        <li>IR remote control (any TV remote)</li>
                    </ul>
                </div>
                <div>
                    <h4 class="orbitron text-lg font-bold mb-3 neon-glow">Safety Features</h4>
                    <ul class="list-disc list-inside space-y-2 text-gray-300">
                        <li>Obstacle detection (2-30cm range)</li>
                        <li>Automatic emergency braking</li>
                        <li>LED warning indicators</li>
                        <li>Speed limitation near obstacles</li>
                        <li>Manual override capability</li>
                        <li>Battery voltage monitoring</li>
                    </ul>
                </div>
            </div>
            
            <div class="mb-8">
                <h4 class="orbitron text-lg font-bold mb-3 neon-glow">IR Protocol Implementation</h4>
                <div class="bg-gray-800 p-4 rounded-lg mb-4">
                    <pre class="text-sm text-gray-300 overflow-x-auto"><code>// IR signal decoding
void decodeIRSignal() {
    if (irrecv.decode(&results)) {
        unsigned long value = results.value;
        
        switch(value) {
            case 0xFF629D: // Forward
                if(!obstacleDetected) moveForward();
                break;
            case 0xFF22DD: // Left
                turnLeft();
                break;
            case 0xFFC23D: // Right
                turnRight();
                break;
            case 0xFFA25D: // Stop
                emergencyStop();
                break;
        }
        irrecv.resume();
    }
}</code></pre>
                </div>
                <p class="text-gray-300">The system uses the popular NEC IR protocol, making it compatible with most standard remote controls.</p>
            </div>
        `
    },
    
    'robotic-arm': {
        title: '4-DOF Robotic Arm Design',
        category: 'cad',
        image: 'resources/robotic-arm.jpg',
        badge: 'CAD Design',
        description: 'Complete 4-DOF robotic arm design with kinematic analysis, built in Fusion 360.',
        tags: ['Fusion 360', 'SolidWorks', 'Kinematics', '3D Printing'],
        details: `
            <div class="mb-8">
                <h4 class="orbitron text-xl font-bold mb-4 neon-glow">Project Overview</h4>
                <p class="text-gray-300 mb-6">A comprehensive 4-DOF robotic arm design project including complete CAD modeling, kinematic analysis, and 3D printing preparation. Demonstrates advanced mechanical design skills.</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                    <h4 class="orbitron text-lg font-bold mb-3 neon-glow">Design Specifications</h4>
                    <ul class="list-disc list-inside space-y-2 text-gray-300">
                        <li>4 Degrees of Freedom (DOF)</li>
                        <li>Maximum reach: 300mm</li>
                        <li>Payload capacity: 500g</li>
                        <li>Positioning accuracy: ±1mm</li>
                        <li>Servo motor actuation</li>
                        <li>Modular joint design</li>
                    </ul>
                </div>
                <div>
                    <h4 class="orbitron text-lg font-bold mb-3 neon-glow">Software Tools</h4>
                    <ul class="list-disc list-inside space-y-2 text-gray-300">
                        <li>Fusion 360 for 3D modeling</li>
                        <li>SolidWorks for assembly design</li>
                        <li>MATLAB for kinematic analysis</li>
                        <li>Cura for slicing</li>
                        <li>ANSYS for stress analysis</li>
                        <li>Python for path planning</li>
                    </ul>
                </div>
            </div>
            
            <div class="mb-8">
                <h4 class="orbitron text-lg font-bold mb-3 neon-glow">Forward Kinematics</h4>
                <div class="bg-gray-800 p-4 rounded-lg mb-4">
                    <pre class="text-sm text-gray-300 overflow-x-auto"><code>// Forward kinematics calculation
void forwardKinematics(float theta1, float theta2, float theta3, float theta4) {
    // Link lengths (mm)
    float L1 = 50, L2 = 80, L3 = 70, L4 = 40;
    
    // Calculate end effector position
    float x = L1*cos(theta1) + L2*cos(theta1+theta2) + 
              L3*cos(theta1+theta2+theta3) + L4*cos(theta1+theta2+theta3+theta4);
    
    float y = L1*sin(theta1) + L2*sin(theta1+theta2) + 
              L3*sin(theta1+theta2+theta3) + L4*sin(theta1+theta2+theta3+theta4);
    
    float z = 0; // 2D analysis for now
    
    endEffectorPos = {x, y, z};
}</code></pre>
                </div>
                <p class="text-gray-300">The kinematic analysis ensures the arm can reach desired positions accurately and efficiently.</p>
            </div>
        `
    },
    
    'web-portfolio': {
        title: 'Personal Portfolio Website',
        category: 'programming',
        image: 'resources/cad-design.jpg',
        badge: 'Web Development',
        description: 'This responsive portfolio website built with HTML, CSS, and JavaScript.',
        tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
        details: `
            <div class="mb-8">
                <h4 class="orbitron text-xl font-bold mb-4 neon-glow">Project Overview</h4>
                <p class="text-gray-300 mb-6">A fully responsive personal portfolio website showcasing engineering projects and skills. Features modern design with neon theme, smooth animations, and interactive elements.</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                    <h4 class="orbitron text-lg font-bold mb-3 neon-glow">Technical Features</h4>
                    <ul class="list-disc list-inside space-y-2 text-gray-300">
                        <li>Responsive design for all devices</li>
                        <li>Smooth animations with Anime.js</li>
                        <li>Interactive project modals</li>
                        <li>Contact form with validation</li>
                        <li>Particle background effects</li>
                        <li>SEO optimized structure</li>
                    </ul>
                </div>
                <div>
                    <h4 class="orbitron text-lg font-bold mb-3 neon-glow">Design Elements</h4>
                    <ul class="list-disc list-inside space-y-2 text-gray-300">
                        <li>Neon blue color scheme</li>
                        <li>Orbitron font for headings</li>
                        <li>Custom CSS animations</li>
                        <li>Hover effects and transitions</li>
                        <li>Professional layout</li>
                        <li>Dark theme throughout</li>
                    </ul>
                </div>
            </div>
            
            <div class="mb-8">
                <h4 class="orbitron text-lg font-bold mb-3 neon-glow">JavaScript Implementation</h4>
                <div class="bg-gray-800 p-4 rounded-lg mb-4">
                    <pre class="text-sm text-gray-300 overflow-x-auto"><code>// Smooth scroll functionality
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Form validation
function validateField(field) {
    const value = field.value.trim();
    const isValid = value.length > 0;
    
    if (isValid) {
        field.classList.add('success');
        field.classList.remove('error');
    } else {
        field.classList.add('error');
        field.classList.remove('success');
    }
    
    return isValid;
}</code></pre>
                </div>
                <p class="text-gray-300">The website demonstrates modern web development practices and creates an engaging user experience.</p>
            </div>
        `
    }
};

// Function to get project data by ID
function getProjectData(projectId) {
    return projectData[projectId] || null;
}

// Function to get all projects
function getAllProjects() {
    return Object.keys(projectData).map(id => ({
        id: id,
        ...projectData[id]
    }));
}

// Function to get projects by category
function getProjectsByCategory(category) {
    return Object.keys(projectData)
        .filter(id => projectData[id].category === category)
        .map(id => ({
            id: id,
            ...projectData[id]
        }));
}