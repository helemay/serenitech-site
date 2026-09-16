#!/bin/bash
# Static server for the renderer (twin3d.html + node_modules + data) on 127.0.0.1:8766.
cd "$(dirname "$0")" || exit 1
pkill -f "twin3d_static_8766" 2>/dev/null
nohup python3 -c "import http.server,sys; sys.argv=['twin3d_static_8766']; http.server.test(HandlerClass=http.server.SimpleHTTPRequestHandler, port=8766, bind='127.0.0.1')" >/tmp/twin3d_static_8766.log 2>&1 &
disown; sleep 1; curl -s -o /dev/null -w "server %{http_code}\n" http://127.0.0.1:8766/twin3d.html
