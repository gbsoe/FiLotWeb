#!/bin/bash

# Replace text-text-secondary with text-gray-600
find client/src -name "*.tsx" -type f -exec sed -i 's/text-text-secondary/text-gray-600/g' {} \;

# Replace text-text-muted with text-gray-500
find client/src -name "*.tsx" -type f -exec sed -i 's/text-text-muted/text-gray-500/g' {} \;

echo "Text style classes replaced successfully!"