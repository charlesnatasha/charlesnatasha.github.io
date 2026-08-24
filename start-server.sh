#!/bin/bash
# Quick Start Guide for Setting Up Local Server
# Run this file to start a local development server

# Always serve files from the folder containing this script.
cd "$(dirname "$0")"

# For Python 3.x (recommended)
python -m http.server 8000

# For Python 2.x (if Python 3 not available)
# python -m SimpleHTTPServer 8000

# Then open your browser and go to: http://localhost:8000
# Press Ctrl+C to stop the server

echo "Server starting on http://localhost:8000"
