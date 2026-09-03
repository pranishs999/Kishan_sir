#!/usr/bin/env bash
# ==============================================================================
# Kishan Bastola Executive Portfolio — Network Hosting Script
# ==============================================================================
# Hosts the portfolio website on all network interfaces (0.0.0.0:5173)
# so dignitaries, colleagues, and team members can view it live from any device
# (mobile, tablet, laptop, or smart TV) connected to the same network.
# ==============================================================================

set -e

PORT=5173
HOST="0.0.0.0"

echo ""
echo "=========================================================================="
echo "  KISHAN BASTOLA — EXECUTIVE EDITORIAL PORTFOLIO"
echo "  Educationist · Mathematician · Research & Innovation Ecosystem Builder"
echo "=========================================================================="
echo ""
echo "  Starting local network server on port $PORT..."
echo ""

# Retrieve active local IP addresses
LOCAL_IPS=$(hostname -I 2>/dev/null || ip addr show | grep 'inet ' | grep -v '127.0.0.1' | awk '{print $2}' | cut -d/ -f1)

echo "  ----------------------------------------------------------------------"
echo "  LOCAL COMPUTER URL:   http://localhost:$PORT/"
echo "  ----------------------------------------------------------------------"
echo "  NETWORK DEVICE URLS (Open these on phones, tablets & other laptops):"
for ip in $LOCAL_IPS; do
  echo "    👉 http://$ip:$PORT/"
done
echo "  ----------------------------------------------------------------------"
echo ""
echo "  Press Ctrl+C to stop hosting."
echo "=========================================================================="
echo ""

# Launch Vite listening on all interfaces
exec npx vite --host $HOST --port $PORT
