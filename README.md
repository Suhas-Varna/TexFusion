# TexFusion – AI-Powered Textile Defect Detection, Pattern Recognition & Design Generation
TexFusion is an AI-powered textile automation platform that integrates fabric defect detection, pattern recognition, and GAN-based design generation. It helps textile industries improve quality control while enabling rapid creation of new fabric patterns. The system provides a unified, intelligent workflow combining computer vision and generative AI.
<h2>Table of Contents</h2>
<ul>
  <li> <a href = "#About"> About </a></li>
  <ul>
   <li><a href="#wa"> What is TexFusion? </a></li> 
   <li><a href="#features"> Features </a></li> 
   <li><a href="#why"> Why TexFusion? </a></li>
  </ul>
  <li> <a href = "#getting_started"> Getting Started </a></li>
  <ul>
   <li><a href="#prerequisites"> Prerequisites </a></li> 
   <li><a href="#installation"> Installation </a></li> 
   <li><a href="#backend_setup"> Backend Setup </a></li>
   <li><a href="#frontend_setup"> Building the App </a></li>
  </ul>
  <li> <a href = "#tech_used"> TechStack Used </a></li>
  <li> <a href = "#architecture"> System Architecture </a></li>
  <li> <a href = "#screenshots"> Screenshots and App Demonstration </a></li>
  <li> <a href = "#conclusion"> Conclusion </a></li>
  <li> <a href = "#team"> Developed By </a></li>
</ul>
<section id = "About">
  <h2> About </h2>
  <h3 id = "wa"> What is TexFusion? </h3>
    TexFusion is a comprehensive deep-learning system built to modernize textile manufacturing. It analyzes fabric images for defects using CNNs, identifies pattern categories using EfficientNetB3, and generates new textile designs using a conditional DCGAN model. The platform provides fast, accurate, and creative support for both quality assurance and textile design teams.
  <h3 id = "features"> Features </h3>
<ul>
    <li><strong>Automated Fabric Defect Detection</strong>
        <ul>
            <li>Detects stains, holes, weave faults, horizontal/vertical line defects using a CNN-based inspection model.</li>
            <li>Provides confidence scores and top-3 predictions for improved quality assessment.</li>
            <li>Ensures consistent and reliable defect detection compared to manual inspection.</li>
        </ul>
    </li>
    <br>
    <li><strong>Pattern Recognition (19 Textile Categories)</strong>
        <ul>
            <li>EfficientNetB3 architecture trained on 19 fabric pattern classes for high-accuracy classification.</li>
            <li>Supports recognition of patterns such as floral, stripes, geometric, checks, abstract, and more.</li>
            <li>Helps designers and manufacturers categorize fabrics for inventory and production workflows.</li>
        </ul>
    </li>
    <br>
    <li><strong>AI Design Generation (Conditional DCGAN)</strong>
        <ul>
            <li>Generates new textile patterns conditioned on selected pattern categories.</li>
            <li>Produces unique, visually coherent, and creative fabric designs using PyTorch-based GAN models.</li>
            <li>Allows rapid prototyping of designs without manual drawing.</li>
        </ul>
    </li>
    <br>
    <li><strong>Color & Style Customization</strong>
        <ul>
            <li>Real-time hue, saturation, and brightness adjustments on generated designs.</li>
            <li>Applies enhancement filters such as sharpen, smooth, and stylize for aesthetic refinement.</li>
            <li>Enables quick experimentation with multiple color variations.</li>
        </ul>
    </li>
    <br>
    <li><strong>Motif Overlay & Tiling</strong>
        <ul>
            <li>Upload custom motifs (PNG) and overlay them on generated backgrounds.</li>
            <li>Supports repeating motifs in tiled or centered formats, ideal for fabric print layouts.</li>
            <li>Creates production-ready textile patterns with both background and motif layers.</li>
        </ul>
    </li>
    <br>
    <li><strong>Interactive Web Interface</strong>
        <ul>
            <li>Simple upload-based workflow for inspection, pattern recognition, and design generation.</li>
            <li>Displays predictions, confidence levels, and design previews in real time.</li>
            <li>Allows users to download final textile designs instantly.</li>
        </ul>
    </li>
    <br>
    <li><strong>Optimized Backend Architecture</strong>
        <ul>
            <li>Flask backend integrating CNN, EfficientNetB3, and DCGAN models through dedicated REST APIs.</li>
            <li>Seamless communication with the frontend for fast inference and design generation.</li>
            <li>Robust processing pipeline with image preprocessing, prediction, post-processing, and rendering.</li>
        </ul>
    </li>
</ul>  
 <h3 id="why"> Why TexFusion? </h3>
<ul>
    <li><strong>Improved Fabric Quality Control</strong>: Automates defect detection using AI, reducing manual errors and ensuring consistent inspection standards across textile batches.</li>
    <li><strong>Fast & Accurate Pattern Identification</strong>: EfficientNetB3-based pattern recognition helps categorize fabrics instantly, supporting designers, manufacturers, and inventory teams.</li>
    <li><strong>AI-Powered Design Innovation</strong>: The conditional DCGAN model enables rapid generation of new textile patterns, helping designers explore creative ideas without manual sketching.</li>
    <li><strong>End-to-End Textile Workflow</strong>: Combines quality inspection, pattern recognition, and design generation into one unified platform for maximum productivity.</li>
    <li><strong>Customization-Focused Tools</strong>: Offers dynamic color tweaking, enhancement filters, and motif overlays, allowing users to create production-ready designs tailored to their needs.</li>
    <li><strong>Fast, Lightweight, and User-Friendly</strong>: The web-based interface provides an intuitive workflow with real-time previews, easy image uploads, and instant design downloads.</li>
</ul>
</section>
<section id="getting_started">
  <h2> Getting Started </h2>

  <h3 id="prerequisites"> Prerequisites </h3>
  <p>Before you begin, ensure that the following software and dependencies are installed in your development environment:</p>

  <h4>For Backend (Flask + AI Models):</h4>
  <ul>
    <li>
      <strong>Python 3.8+</strong>: Required for running the TexFusion backend and all deep-learning models.
      <ul>
        <li><a href="https://www.python.org/downloads/">Download Python</a></li>
      </ul>
    </li>
    <li><strong>pip</strong>: Python package manager used to install project dependencies.</li>
    <li>
      <strong>Required Python Libraries</strong>:
      <ul>
        <li>TensorFlow / Keras (for CNN & EfficientNetB3 models)</li>
        <li>PyTorch (for Conditional DCGAN)</li>
        <li>OpenCV (for image processing & color adjustments)</li>
        <li>NumPy, Pillow, Flask, Flask-CORS</li>
      </ul>
    </li>
    <li>
      <strong>Pretrained Model Files</strong>:
      <ul>
        <li>CNN model for fabric defect detection</li>
        <li>EfficientNetB3 pattern recognition model</li>
        <li>DCGAN generator weights for textile design generation</li>
      </ul>
    </li>
  </ul>

  <h4>For Frontend (Web Interface):</h4>
  <ul>
    <li><strong>Any modern web browser</strong> (Chrome, Edge, Firefox).</li>
    <li><strong>Basic static server</strong> (optional): You can simply open <code>index.html</code> directly or use VS Code Live Server.</li>
    <li>Ensure backend API URLs are updated inside your JavaScript files.</li>
  </ul>

  <h3 id="installation"> Installation </h3>

  <h4>Clone the Repository:</h4>
  <pre><code>git clone https://github.com/your-username/TexFusion.git
cd TexFusion</code></pre>

  <h3 id="backend_setup"> Backend Setup (Flask) </h3>
  <ol>
    <li>
      <p><strong>Create Virtual Environment</strong> (Recommended):</p>
      <pre><code>python -m venv venv</code></pre>
    </li>
    <li>
      <p><strong>Activate Virtual Environment</strong>:</p>
      <pre><code># Windows
venv\Scripts\activate

# Mac / Linux
source venv/bin/activate</code></pre>
    </li>
    <li>
      <p><strong>Install Required Dependencies</strong>:</p>
      <pre><code>pip install -r requirements.txt</code></pre>
    </li>
    <li>
      <p><strong>Start the Flask Backend Server</strong>:</p>
      <pre><code>python app.py</code></pre>
      <p>The backend will run at: <code>http://127.0.0.1:5000/</code></p>
    </li>
    <li>
      <p><strong>Ensure Model Paths Are Correct</strong>:</p>
      <p>Update the paths for: CNN model, EfficientNetB3 model, and DCGAN weights inside <code>app.py</code>.</p>
    </li>
  </ol>
  <h3 id="frontend_setup"> Frontend Setup </h3>
  <ol>
    <li><strong>Navigate to the frontend directory</strong> (if applicable) or simply open the <code>index.html</code> file.</li>
    <li>
      <p><strong>Update API Base URL</strong> inside your JavaScript:</p>
      <pre><code>const BASE_URL = "http://127.0.0.1:5000";</code></pre>
    </li>
    <li>
      <p><strong>Run the frontend</strong>:</p>
      <ul>
        <li>Option 1: Open <code>index.html</code> directly in browser</li>
        <li>Option 2: Use VS Code → Live Server</li>
      </ul>
    </li>
  </ol>
</section>


<section id = "tech_used">
  <h2> TechStack - Built with
    <img src="https://cdn.icon-icons.com/icons2/2530/PNG/512/flutter_button_icon_151957.png" alt="Flutter" height="20" style="vertical-align: middle; filter: none;"/>
   
  <img src="https://cdn.icon-icons.com/icons2/2530/PNG/512/dart_colour_button_icon_151934.png" alt="Dart" height="20" style="vertical-align: middle; filter: none;"/>
  <img src="https://github.com/user-attachments/assets/b4b3e453-bee1-402c-afd2-c02b137704a6" alt="Firebase" height="20" style="vertical-align: middle; filter: none;"/>
 

  </h2>
 
  Flutter: Flutter is Google's UI toolkit for building natively compiled apps for various platforms.

  Dart: Dart is a fast, modern programming language primarily used in Flutter development.
  
  FastAPI: A modern, high-performance Python web framework for building APIs quickly using async support and automatic documentation.

</section>
  
<section id = "architecture">
  <h2> System Architecture </h2>
  
<h3>🏗️ High-Level Architecture:</h3>

<pre>
┌───────────────────────────────────────────────────────────────────────┐
│                            TexFusion LENS APP                              │
│   ┌──────────────┐  ┌───────────────┐  ┌──────────────────────────┐   │
│   │  Home Screen │→ │  Voice Input  │→ │  Intent Classification   │   │
│   └──────────────┘  └───────────────┘  └──────────────────────────┘   │
│                 ↓                 ↓                 ↓                 │
│       ┌────────────────┐  ┌─────────────────┐  ┌──────────────────┐   │
│       │ Scene Module   │  │  OCR Module     │  │ Navigation Module│   │
│       │ (YOLOv5-Nano)  │  │ (Google ML Kit) │  │ (Google Maps API)│   │
│       └────────────────┘  └─────────────────┘  └──────────────────┘   │
│                                   ↓                                   │
│                        ┌────────────────────────┐                     │
│                        │ Emergency SOS Module   │                     │
│                        │ • One-tap Call/Share   │                     │
│                        │ • Live Location        │                     │
│                        └────────────────────────┘                     │
│                                   ↓                                   │
│                         ┌───────────────────────┐                     │
│                         │   HTTP Client (DIO)   │                     │
│                         └───────────────────────┘                     │
└───────────────────────────────│───────────────────────────────────────┘
                                │
                       ═════════╪══════════
                        API CALLS │ JSON RESPONSE
                       ═════════╪══════════
                                │
┌───────────────────────────────▼──────────────────────────────────────┐
│                           FASTAPI BACKEND                            │
│   ┌────────────────────────────────────────────────────────────────┐ │
│   │            Intent Processing & Routing Engine                  │ │
│   │  • Receives speech text                                        │ │
│   │  • Groq-based intent classifier (Scene / OCR / Navigate / SOS) │ │
│   │  • Sends response back to app                                  │ │
│   └────────────────────────────────────────────────────────────────┘ │
│                                │                                     │
│     ┌──────────────────────┐   │   ┌──────────────────────────────┐  │
│     │ /predict-intent      │───┘   │ /vision-processing           │  │
│     └──────────────────────┘       └──────────────────────────────┘  │
└───────────────────────────────│──────────────────────────────────────┘
                                │
                       ═════════╪══════════
                        API CALLS │ AI RESPONSES
                       ═════════╪══════════
                                │
┌───────────────────────────────▼──────────────────────────────────────┐
│                           GROQ AI PLATFORM                           │
│    ┌──────────────────────────────┐  ┌────────────────────────────┐  │
│    │ Whisper-v3-turbo             │  │ Llama 3.1 / 3.3 Models     │  │
│    │ • Speech-to-Text             │  │ • Intent Classification    │  │
│    │ • Multi-language             │  │ • Dialogue Understanding   │  │
│    │ • High Accuracy              │  │ • Fast Inference           │  │
│    └──────────────────────────────┘  └────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────────┘
</pre>

<h3>📊 Data Flow Diagram:</h3>

<pre>
  USER GIVES VOICE COMMAND
        │
        ▼
┌────────────────────────────────────┐
│        Flutter App (TexFusion Lens)     │
│  • Mic long-press listener         │
│  • Speech capture                  │
│  • Pre-processing                  │
└───────────────────┬────────────────┘
                    │  HTTP POST (JSON: transcript)
                    ▼
┌────────────────────────────────────┐
│            FastAPI Backend         │
│  • Receive text command            │
│  • Clean & normalize input         │
└───────────────────┬────────────────┘
                    │
                    ▼
┌────────────────────────────────────┐
│     Intent Classifier (Groq AI)    │
│  • Identify intent:                │
│    scene / object / OCR /          │
│    navigation / SOS                │
└───────────────────┬────────────────┘
                    │
                    ▼
┌────────────────────────────────────────────┐
│         Route to Appropriate Module        │
│  • Scene → YOLOv5-Nano (image description) │
│  • Object Detection → YOLOv5-Nano          │
│  • OCR → Google ML Kit (text reading)      │
│  • Navigation → Google Maps API            │
│  • SOS → Call / Share location             │
└───────────────────┬────────────────────────┘
                    │
                    ▼
┌────────────────────────────────────┐
│         Module Processing          │
│  • ESP32 Camera image capture      │
│  • Vision / OCR inference          │
│  • Walking route computation       │
│  • Emergency operations            │
└───────────────────┬────────────────┘
                    │
                    ▼
┌────────────────────────────────────┐
│           JSON Response            │
│  • Objects detected                │
│  • Scene summary                   │
│  • Extracted text                  │
│  • Navigation instructions         │
│  • SOS confirmation                │
└───────────────────┬────────────────┘
                    │  HTTP JSON Response
                    ▼
┌────────────────────────────────────┐
│      Flutter App (Front-End)       │
│  • Parse JSON                      │
│  • Convert to Text-to-Speech       │
│  • Show navigation steps           │
│  • Display detection results       │
│  • Trigger SOS actions             │
└────────────────────────────────────┘
                    │
                    ▼
            USER RECEIVES OUTPUT
</pre>

<h3>🔄 API Key Rotation Workflow:</h3>
<pre>
INITIAL STATE
┌─────────────────────┐
│ Keys: [K1, K2, K3]  │
│ Current: K1         │
│ Index: 0            │
└──────────┬──────────┘
           │
           ▼
    API REQUEST WITH K1
           │
           ├──── SUCCESS ────► Return Result
           │
           └──── RATE LIMIT ERROR
                      │
                      ▼
           ┌──────────────────┐
           │ Log Error        │
           │ Rotate to K2     │
           │ Index: 1         │
           └─────────┬────────┘
                     │
                     ▼
           RETRY WITH K2
                     │
                     ├──── SUCCESS ────► Return Result
                     │
                     └──── RATE LIMIT ERROR
                                │
                                ▼
                     ┌──────────────────┐
                     │ Rotate to K3     │
                     │ Index: 2         │
                     └─────────┬────────┘
                               │
                               ▼
                     RETRY WITH K3
                               │
                               └──── If all keys exhausted
                                            │
                                            ▼
                                   Return 429 Error
                                   "All keys rate limited"
</pre>

<h3>🗂️ Project Structure:</h3>

<pre>
TexFusion/
│
├── TexFusion/                # Flutter Frontend
│   ├── lib/
│   │   ├── main.dart          # App entry point
│   │   ├── pages              # Features Screens
│   ├── pubspec.yaml           # Flutter dependencies
│   ├── android/               # Android-specific config
│   ├── ios/                   # iOS-specific config
│   └── README.md
│   ├── server/                 # FastAPI Backend
│       ├── server.py           # Main application file
│       ├── requirements.txt    # Python dependencies
│
├── README.md                  # Main project documentation
└── LICENSE
</pre>

<h3>🔐 TexFusion Security Architecture</h3>

<ul>
  <li><strong>API Key Management</strong>:
    <ul>
      <li>Secure storage of API keys in .env (never committed to Git)</li>
      <li>Server-side key rotation for uninterrupted AI processing</li>
      <li>Keys never exposed to frontend or client devices</li>
    </ul>
  </li>
  
  <li><strong>Data Privacy</strong>:
    <ul>
      <li>Audio is processed completely in-memory</li>
      <li>No audio or generated content stored on the server</li>
      <li>Temporary files auto-deleted after processing</li>
      <li>Zero user tracking — TexFusion does not collect or retain personal data</li>
    </ul>
  </li>
  
  <li><strong>API Security</strong>:
    <ul>
      <li>Strict CORS policies for trusted domains</li>
      <li>Request validation, sanitization, and safe error handling</li>
      <li>Protected backend routes to prevent unauthorized usage</li>
    </ul>
  </li>
</ul>

<h3>⚡ TexFusion Performance Optimizations</h3>

<ul>
  <li><strong>Backend</strong>:
    <ul>
      <li>FastAPI backend with highly optimized async processing</li>
      <li>Groq LLM inference speeds up to 330 tokens/sec</li>
      <li>Memory-efficient pipeline for handling long audio files</li>
      <li>Automatic key rotation prevents API rate-limit slowdowns</li>
    </ul>
  </li>
  
  <li><strong>Frontend</strong>:
    <ul>
      <li>Lazy-loaded UI components for faster initial load</li>
      <li>Optimized PDF generation with cached fonts</li>
      <li>Compressed and optimized images</li>
      <li>Smooth and efficient state management for a responsive UI</li>
    </ul>
  </li>
</ul>
</section>

<section id="screenshots">
  <h2 id="screenshots">App Demonstration</h2>
  <button> <a href="https://drive.google.com/file/d/1n1-7fQX8kG-AyN3iRzpJ3jv9V25sCGOn/view?usp=sharing" target="_blank">Clear here to watch</button></a>  
  <h2> Screenshots </h2>   
  <img src="https://github.com/user-attachments/assets/d6bd2d65-d428-42fb-85ec-74c09cb683cf" style="width: 200px;" />
  <img src="https://github.com/user-attachments/assets/8e57886b-b97d-4e0f-a5b2-5b706a504648" style="width: 200px;" />
  <img src="https://github.com/user-attachments/assets/4cc12fba-0970-4075-8817-d9f5fc1175b7" style="width: 200px;" />
  <img src="https://github.com/user-attachments/assets/12ef30fb-c8ef-4002-8895-a6eb8a92c82f" style="width: 200px;" />
  <img src="https://github.com/user-attachments/assets/a5a7a83d-a530-4dac-9f4e-15809d40e187" style="width: 200px;" />
  <img src="https://github.com/user-attachments/assets/69b02efd-b210-4333-83a1-d4d3573adf2c" style="width: 200px;" />
  <img src="https://github.com/user-attachments/assets/c779e588-933b-418c-b02c-43b988e50107" style="width: 200px;" />
  <img src="https://github.com/user-attachments/assets/92a35f92-bd16-4df0-871a-c51502b645d7" style="width: 200px;" />
  <img src="https://github.com/user-attachments/assets/140f5198-8a1d-4201-9961-c4885a6aa90d" style="width: 200px;" />
  <img src="https://github.com/user-attachments/assets/8b9f325c-ff8b-4510-ae0b-c485cac584eb" style="width: 200px;" />
  <img src="https://github.com/user-attachments/assets/af308e05-06b2-4ca0-8291-d7338f82a54f" style="width: 200px;" />
  <img src="https://github.com/user-attachments/assets/cfe636ad-b298-44c7-bf60-4c681b1a532b" style="width: 200px;" />
  <img src="https://github.com/user-attachments/assets/f9c92b41-cf4b-4343-a97b-80551fbb6997" style="width: 200px;" />
</section>


<section id="conclusion">
  <h2>Conclusion</h2>
  <p>
   TexFusion Lens represents a practical, human-centered assistive technology designed to empower visually impaired individuals with enhanced perception, awareness, and independence. By integrating ESP32-CAM based edge processing with an intelligent mobile application, the system provides essential features such as scene description, object recognition, text reading, and situational navigation without heavy dependence on cloud services. Its modular design, low-cost hardware, and real-time audio feedback make it both accessible and scalable for everyday use. Ultimately, TexFusion Lens demonstrates how affordable innovation, thoughtful engineering, and user-centric design can work together to significantly improve the quality of life for people with vision impairments.
  </p>
</section>



<section id = "team">
  <h2> The Team </h2>
  <h3> Pannaga R Bhat </h3>
<p align="left">
  <a href="https://github.com/pannaga-rj" style="text-decoration: none;" target="_blank" rel="nofollow">
    <img src="https://img.shields.io/badge/GitHub-black?style=flat&logo=github" alt="GitHub" style="max-width: 100%;">
  </a>
  <a href="https://www.linkedin.com/in/pannaga-r-bhat-ba8bb6289/" style="text-decoration: none;" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-blue?style=flat&logo=linkedin" alt="LinkedIn" />
  </a>
</p>

<h3> Pradeep P T </h3>
<p align="left">
  <a href="" style="text-decoration: none;" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-black?style=flat&logo=github" alt="GitHub" />
  </a>
  <a href="" style="text-decoration: none;" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-blue?style=flat&logo=linkedin" alt="LinkedIn" />
  </a>
</p>

<h3> Prajwal P </h3>
<p align="left">
  <a href="" style="text-decoration: none;" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-black?style=flat&logo=github" alt="GitHub" />
  </a>
  <a href="" style="text-decoration: none;" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-blue?style=flat&logo=linkedin" alt="LinkedIn" />
  </a>
</p>

<h3> Pranav Anantha Rao </h3>
<p align="left">
  <a href="" style="text-decoration: none;" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-black?style=flat&logo=github" alt="GitHub" />
  </a>
  <a href="" style="text-decoration: none;" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-blue?style=flat&logo=linkedin" alt="LinkedIn" />
  </a>
</p>
</section>
